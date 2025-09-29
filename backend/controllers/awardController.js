
//awardController.js
import Award from "../models/Award.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

export const getAllAwards = async (req, res) => {
  try {
    const awards = await Award.find();
    res.json(awards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAward = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Image is required" });

    const imageUrl = await uploadToCloudinary(req.file.buffer);

    const award = new Award({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      image: imageUrl
    });

    await award.save();
    res.status(201).json(award);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAward = async (req, res) => {
  try {
    let updateData = { ...req.body };

    // 🔥 If a new image is uploaded, update it on Cloudinary
    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file.buffer);
      updateData.image = imageUrl;
    }

    const updated = await Award.findByIdAndUpdate(
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

export const deleteAward = async (req, res) => {
  try {
    await Award.findByIdAndDelete(req.params.id);
    res.json({ message: "Award deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
