import express from "express";
import upload from "../middlewares/upload.js";
import {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", getAllTestimonials);
router.post("/", upload.single("image"), createTestimonial);
router.put("/:id", upload.single("image"), updateTestimonial);
router.delete("/:id", deleteTestimonial);

export default router;
