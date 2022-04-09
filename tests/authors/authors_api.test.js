const app = require("../../app");
const request = require("supertest");
const { sequelize } = require("../../models");
const helper = require("./helper");

beforeAll(async () => {
  // clear db
  await helper.clearDB();
  // Insert authors data from helper.js
  await helper.loadDataToDb();
});

describe("GET /v1/api/authors", () => {
  // TODO: check also pagination
  test("should return all authors", async () => {
    const response = await request(app).get("/v1/api/authors").expect(200);
    expect(response.body.rows.length).toBe(10);
  });

  describe("GET /v1/api/authors with limit&page query", () => {
    test("should return specified number of authors", async () => {
      const response = await request(app)
        .get("/v1/api/authors?limit=5&page=2")
        .expect(200);

      expect(response.body.rows).toHaveLength(5);
      expect(response.body.count).toBeDefined();
    });
    test("should return zero element if offset exceded", async () => {
      const response = await request(app)
        .get("/v1/api/authors?limit=5&page=20")
        .expect(200);
      expect(response.body.rows).toHaveLength(0);
    });
  });
});

afterAll(async () => {
  await sequelize.close();
});
