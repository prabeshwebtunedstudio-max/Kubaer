
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String },
    intro: { type: String },
    content: { type: String },  // <- just string
    author: { type: String, default: "Admin" },
    tags: [{ type: String }],
    image: { type: String }
  },
  { timestamps: true }
);


const Blog = mongoose.model("Blog", blogSchema);

export default Blog;

