import express from "express";
import upload from "../middlewares/upload.js";
import {
  getAllServices,
  createService,
  updateService,
  deleteService
} from "../controllers/serviceController.js";

const router = express.Router();

router.get("/", getAllServices);
router.post("/", upload.single("image"), createService);
router.put("/:id", upload.single("image"), updateService);
router.delete("/:id", deleteService);

export default router;
