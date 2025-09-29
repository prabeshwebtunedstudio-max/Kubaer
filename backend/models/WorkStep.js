import mongoose from "mongoose";

const howItWorksSchema = new mongoose.Schema({
  stepNumber: Number,
  title: String,
  description: String,
  icon: String
}, { timestamps: true });

export default mongoose.model("HowItWorksStep", howItWorksSchema);
