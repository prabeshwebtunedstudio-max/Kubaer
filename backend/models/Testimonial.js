import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: String,
  designation: String,
  content: String,
  image: String
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);
