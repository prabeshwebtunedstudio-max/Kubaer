import mongoose from "mongoose";

const founderSchema = new mongoose.Schema({
  name: String,
  content: String,
  image: String
}, { timestamps: true });

export default mongoose.model("FounderMessage", founderSchema);
