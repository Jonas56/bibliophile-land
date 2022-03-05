const { sequelize } = require("../../models");
const helper = require("./helper");
const request = require("supertest");
const app = require("../../app");

beforeAll(async () => {
  // clear database
  await helper.clearDB();
  // Insert books, authors, categories, user data from helper.js
  await helper.loadDataToDb();
});

jest.setTimeout(10000);

describe("GET /v1/api/user/books", () => {
  test("should return all user books", async () => {
    const response = await request(app).get("/v1/api/user/books").expect(200);
    expect(response.body.books[0].id).toBe(1);
  });
});

describe("POST /v1/api/user/books/:id", () => {
  test("should add valid book to the collection", async () => {
    const response = await request(app)
      .post("/v1/api/user/books/2")
      .expect(200);
    expect(response.body.message).toEqual("Book added succesfully!");
  });
  test("should return an error message when adding unkonown book", async () => {
    const response = await request(app)
      .post("/v1/api/user/books/3")
      .expect(400);
    expect(response.body.message).toEqual("Cannot find the provided book!");
  });
});

describe("DELETE /v1/api/user/books/:id", () => {
  // TODO: delete book from collection
  test("should succesfully delete a book", async () => {});
  test("should return error when deleting unkonwn book", async () => {});
});

afterAll(async () => {
  await sequelize.close();
});
