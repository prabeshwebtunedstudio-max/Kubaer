import express from "express";
import upload from "../middlewares/upload.js";
import {
  getAllAbout,
  createAbout,
  updateAbout,
  deleteAbout
} from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", getAllAbout);
router.post("/", upload.single("image"), createAbout);
router.put("/:id", upload.single("image"), updateAbout);
router.delete("/:id", deleteAbout);

export default router;
