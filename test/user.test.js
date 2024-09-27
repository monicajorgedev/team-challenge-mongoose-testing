const request = require("supertest");
const app = require("../index.js");
const Post = require("../models/Post.js")


describe("testing/posts", () => {
    const post = {
      title: "title",
      body: "text of post"
    };
    
      afterAll(() => {
          return Post.deleteMany();
        });
    it("Create a user", async () => {
      let post = await Post.countDocuments({});
      expect(post).toBe(0);
      resPost = await request(app).post("/create").send(post).expect(201); 
      post = await Post.countDocuments({});
      expect(post).toBe(1)
      
      expect(resPost.body._id).toBeDefined();
      expect(resPost.body.createdAt).toBeDefined();
      expect(resPost.body.updatedAt).toBeDefined();
    })
})


