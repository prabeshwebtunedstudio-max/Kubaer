import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import serviceRoutes from "./routes/serviceRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import howItWorksRoutes from "./routes/WorkStepRoutes.js";
import awardRoutes from "./routes/awardRoutes.js";
import reasonRoutes from "./routes/reasonRoutes.js";
import founderRoutes from "./routes/founderRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/how-it-works", howItWorksRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/reasons", reasonRoutes);
app.use("/api/founder", founderRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Loan Website API is running...");
});

export default app;
