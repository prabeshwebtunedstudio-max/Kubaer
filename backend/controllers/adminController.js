// controllers/adminController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Admin from "../models/Admin.js";

// Fake email sender (replace with nodemailer/sendgrid)
const sendVerificationEmail = async (email, token) => {
  console.log(`✅ Admin Email sent to ${email}: http://localhost:8000/api/admin/verify/${token}`);
};

// Admin Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const admin = new Admin({
      name,
      email,
      password: hashedPassword,
      verificationToken,
    });
    await admin.save();

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: "Admin signup successful. Please verify your email." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Verify Admin Email
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const admin = await Admin.findOne({ verificationToken: token });

    if (!admin) return res.status(400).json({ message: "Invalid or expired token" });

    admin.isVerified = true;
    admin.verificationToken = undefined;
    await admin.save();

    res.json({ message: "Admin email verified successfully. You can login now." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    if (!admin.isVerified) {
      return res.status(403).json({ message: "Please verify your email first" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1d" }
    );

    res.json({ message: "Admin login successful", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
