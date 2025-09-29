import express from "express";
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", upload.single("image"), createBlog);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

export default router;
