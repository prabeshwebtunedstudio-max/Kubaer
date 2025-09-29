
import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  date: Date
}, { timestamps: true });

export default mongoose.model("Award", awardSchema);
