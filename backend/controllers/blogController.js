
import BlogPost from "../models/BlogPost.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

// GET all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE blog


export const createBlog = async (req, res) => {
  try {
    let { title, intro, content, author, tags, image } = req.body;
     if (!req.file) return res.status(400).json({ message: "Image is required" });
    
        const imageUrl = await uploadToCloudinary(req.file.buffer);

    // ✅ Handle tags as string or array
    if (typeof tags === "string") {
      tags = tags.split(",").map(tag => tag.trim());
    }

    const blog = new BlogPost({
      title,
      intro,
      content,
      author,
      tags,
      image
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE blog
export const updateBlog = async (req, res) => {
  try {
    const updated = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE blog
export const deleteBlog = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
