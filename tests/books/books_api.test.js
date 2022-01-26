const { sequelize } = require("../../models");
const helper = require("./helper");
const request = require("supertest");
const app = require("../../app");

beforeAll(async () => {
  // clear db
  await helper.clearDB();
  // Insert books, authors, categories data from helper.js
  await helper.loadDataToDb();
});

describe("GET /v1/api/books", () => {
  test("should return all books", async () => {
    const response = await request(app).get("/v1/api/books").expect(200);
    expect(response.body.rows.length).toBe(1);
  });

  describe("GET /v1/api/books?limit=0page=0", () => {
    test("should return zero element", async () => {
      const response = await request(app)
        .get("/v1/api/books?limit=0&page=10")
        .expect(200);
      expect(response.body.rows).toHaveLength(0);
    });
  });
});

describe("POST /v1/api/books", () => {
  test("should add valid book", async () => {
    const response = await request(app)
      .post("/v1/api/books")
      .send(helper.validBook)
      .expect(201);
    expect(response.body.title).toEqual(helper.validBook.title);
  });
  test("should throw an error when adding book without authors", async () => {
    const response = await request(app)
      .post("/v1/api/books")
      .send(helper.nonValidBook)
      .expect(400);
    expect(response.body.message).toEqual("Book must contain an author");
  });
});

describe("GET /v1/api/books/:id", () => {
  test("should return a valid book", async () => {
    const book = await request(app)
      .post("/v1/api/books")
      .send(helper.validBook);
    const response = await request(app)
      .get(`/v1/api/books/${book.body.id}`)
      .expect(200);
    expect(response.body.id).toBe(book.body.id);
  });
  test("should throw an error when accessing unkonwn Book", async () => {
    const response = await request(app).get("/v1/api/books/9").expect(400);
    expect(response.body.message).toEqual("Book not found!");
  });
});

describe("DELETE /v1/api/books/:id", () => {
  // TODO:
  test("should succesfully delete a book", async () => {});
  test("should return error when deleting unkonwn book", async () => {});
});

afterAll(async () => {
  await sequelize.close();
});
