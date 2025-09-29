// routes/adminRoutes.js
import express from "express";
import { signup, verifyEmail, login } from "../controllers/adminController.js";

const router = express.Router();

// POST /api/admin/signup
router.post("/signup", signup);

// GET /api/admin/verify/:token
router.get("/verify/:token", verifyEmail);

// POST /api/admin/login
router.post("/login", login);

export default router;
