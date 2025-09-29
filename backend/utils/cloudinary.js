import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    if (!buffer) return reject(new Error("No file buffer provided"));

    const stream = cloudinary.uploader.upload_stream(
      { folder: "collection", use_filename: true, unique_filename: true },
      (err, result) => {
        if (err) {
          console.error("❌ Cloudinary error:", err);
          return reject(err);
        }
        console.log("☁️ Cloudinary upload success:", result.secure_url);
        resolve(result.secure_url);
      }
    );

    stream.end(buffer);
  });
};

export default cloudinary;
