import mongoose from "mongoose";

const reasonSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String
}, { timestamps: true });

export default mongoose.model("Reason", reasonSchema);
