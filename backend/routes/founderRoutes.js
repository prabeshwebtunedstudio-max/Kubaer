import express from "express";
import upload from "../middlewares/upload.js";
import {
  getAllFounderMessages,
  createFounderMessage,
  updateFounderMessage,
  deleteFounderMessage
} from "../controllers/FounderMessageController.js";

const router = express.Router();

router.get("/", getAllFounderMessages);
router.post("/", upload.single("image"), createFounderMessage);
router.put("/:id", upload.single("image"), updateFounderMessage);
router.delete("/:id", deleteFounderMessage);

export default router;
