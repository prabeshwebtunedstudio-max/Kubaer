import About from "../models/About.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

// GET all about entries
export const getAllAbout = async (req, res) => {
  try {
    const aboutEntries = await About.find();
    res.json(aboutEntries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE about entry

export const createAbout = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Image is required" });

    const imageUrl = await uploadToCloudinary(req.file.buffer);

    const about = new About({
      title: req.body.title,
      content: req.body.content,
      image: imageUrl
    });

    await about.save();
    res.status(201).json(about);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE about entry
// export const updateAbout = async (req, res) => {
//   try {
//     const updated = await About.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

export const updateAbout = async (req, res) => {
  try {
    let updateData = { ...req.body };

    // 🔥 If a new image is uploaded, update it on Cloudinary
    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file.buffer);
      updateData.image = imageUrl;
    }

    const updated = await About.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Award not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE about entry
export const deleteAbout = async (req, res) => {
  try {
    await About.findByIdAndDelete(req.params.id);
    res.json({ message: "About entry deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
