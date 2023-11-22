import { model, Schema } from "mongoose";

const AuthorSchema = new Schema({
  author: { type: String },
  title: { type: String },
  genre: { type: String },
  year: { type: Number }
});

export const Author = model("Author", AuthorSchema);
