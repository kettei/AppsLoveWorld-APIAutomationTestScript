const request = require("supertest")("http://restapi.adequateshop.com");
const expect = require("chai").expect;

describe("POST /api/users", function () {
    it("create new user", async function () {
      const response = await request
        .post("/api/users").set({ Authorization: "Bearer 6acb09f1-5a47-4024-8210-dccac9d8714d" })
        .send({
          "name":"Irfan",
          // still don't know the reasons yet, but email needs to be changed frequently every single run
          "email":"irfanDSD@gmail.com",
          "location":"ID"
        });
      console.log(response.body);
      // can reach 201 status
      expect(response.status).to.eql(201);
      expect(response.body.name).to.eql("Irfan");
      // still don't know the reasons yet, but email needs to be changed frequently every single run
      expect(response.body.email).to.eql("irfanDSD@gmail.com");
    });
  });