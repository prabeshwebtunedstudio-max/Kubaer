import express from "express";
import upload from "../middlewares/upload.js";
import {
  getAllAwards,
  createAward,
  updateAward,
  deleteAward
} from "../controllers/awardController.js";

const router = express.Router();

router.get("/", getAllAwards);
router.post("/", upload.single("image"), createAward);
router.put("/:id", upload.single("image"), updateAward);
router.delete("/:id", deleteAward);

export default router;
