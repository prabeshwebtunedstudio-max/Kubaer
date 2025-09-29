import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  features: [String],
  image: { type: String },
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);
