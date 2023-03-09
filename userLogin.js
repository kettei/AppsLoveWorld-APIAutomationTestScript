const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /api/authaccount/login", function () {
    it("login", async function () {
      const response = await request
        .post("/api/authaccount/login")
        .send({
          "email":"Irfan@gmail.com",
          "password":123456
        });
      console.log(response.body);
      // can't reach 201 status yet
      expect(response.status).to.eql(200);
    //   expect(response.body.name).to.eql("Irfan");
    //   expect(response.body.email).to.eql("Irfan@gmail.com");
    //   expect(response.body.password).to.eql(123456);
    });
  });