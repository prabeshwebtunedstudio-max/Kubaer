// routes/authRoutes.js
import express from "express";
import { signup, verifyEmail, login } from "../controllers/userController.js";

const router = express.Router();

// POST /api/auth/signup
router.post("/signup", signup);

// GET /api/auth/verify/:token
router.get("/verify/:token", verifyEmail);

// POST /api/auth/login
router.post("/login", login);

export default router;
