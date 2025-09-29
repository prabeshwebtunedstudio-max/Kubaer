
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  message: String,
  status: { type: String, enum: ['new','read','replied'], default: 'new' }
}, { timestamps: true });

export default mongoose.model("ContactMessage", contactSchema);
