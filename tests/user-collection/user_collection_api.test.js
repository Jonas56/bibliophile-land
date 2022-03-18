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

describe("GET /v1/api/collection", () => {
  test("should return all user collection", async () => {
    const response = await request(app).get("/v1/api/collection").expect(200);
    expect(response.body.collection[0].id).toBe(1);
  });
});

describe("POST /v1/api/collection/:id", () => {
  test("should add valid book to the collection", async () => {
    const response = await request(app)
      .post("/v1/api/collection/2")
      .expect(200);
    expect(response.body.message).toEqual("Book added succesfully!");
  });
  test("should return an error message when adding an unkonown book", async () => {
    const response = await request(app)
      .post("/v1/api/collection/3")
      .expect(400);
    expect(response.body.message).toEqual("Cannot find this book!");
  });
});

describe("DELETE /v1/api/collection/:id", () => {
  // TODO: delete book from collection
  test("should succesfully delete a book", async () => {});
  test("should return error when deleting unkonwn book", async () => {});
});

afterAll(async () => {
  await sequelize.close();
});
