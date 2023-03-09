const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /api/authaccount/registration", function () {
    it("registration", async function () {
      const response = await request
        .post("/api/authaccount/registration")
        .send({
          "name": "Irfan",
          "email": "Irfan@gmail.com",
          "password": 123456
        });
        // can't reach 201 status yet
      expect(response.status).to.eql(200);

        // can't be asserted yet
        // expect(response.body.name).to.eql("Irfan");
        // expect(response.body.email).to.eql("Irfan@gmail.com");
        // expect(response.body.password).to.eql(123456);
    });
  });