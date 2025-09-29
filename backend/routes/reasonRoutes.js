import express from "express";
import {
  getAllReasons,
  createReason,
  updateReason,
  deleteReason
} from "../controllers/reasonController.js";

const router = express.Router();

router.get("/", getAllReasons);
router.post("/", createReason);
router.put("/:id", updateReason);
router.delete("/:id", deleteReason);

export default router;
