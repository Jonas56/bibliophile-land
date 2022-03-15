const app = require("../../app");
const request = require("supertest");
const { sequelize } = require("../../models");
const helper = require("./helper");

jest.setTimeout(10000);

beforeAll(async () => {
  // Clear database
  await helper.clearDB();

  // Load user data to database
  await helper.loadDataToDb();
});

describe("POST /v1/api/login", () => {
  const credentials = {
    email: "jonas@laous.com",
    password: "Jonas@123",
  };
  const wrongCredentials = {
    email: "jonas@tesla.com",
    password: "Jonas@123",
  };
  test("should succesfully login user", async () => {
    const response = await request(app)
      .post("/v1/api/login")
      .send(credentials)
      .expect(200);
    expect(response.body.token).toBeDefined();
  });
  test("should return an error when sending wrong credentials", async () => {
    const response = await request(app)
      .post("/v1/api/login")
      .send(wrongCredentials)
      .expect(401);

    expect(response.body.error).toEqual("Invalid username or password");
  });
});

afterAll(() => {
  sequelize.close();
});
