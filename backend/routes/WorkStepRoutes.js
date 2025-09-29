import express from "express";
import {
  getAllSteps,
  createStep,
  updateStep,
  deleteStep
} from "../controllers/WorkStepController.js";

const router = express.Router();

router.get("/", getAllSteps);
router.post("/", createStep);
router.put("/:id", updateStep);
router.delete("/:id", deleteStep);

export default router;
