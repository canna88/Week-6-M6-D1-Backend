import { model, Schema } from "mongoose";

const BlogPostSchema = new Schema({
  category: { type: String },
  title: { type: String },
  cover: { type: String },
  readTime: {
    value: { type: Number },
    unit: { type: String, default: "min" },
  },
  author: {
    name: { type: String },
    avatar: { type: String },
  },
  content: { type: String },
});

export const BlogPost = model("BlogPost", BlogPostSchema,"blogposts");
