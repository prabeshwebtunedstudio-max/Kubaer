import FounderMessage from "../models/FounderMessage.js";
import {uploadToCloudinary }from "../utils/cloudinary.js";

export const getAllFounderMessages = async (req, res) => {
  try {
    const messages = await FounderMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export const createFounderMessage = async (req, res) => {
//   try {
//     let imageUrl = "";
//     if (req.file) {
//       const result = await cloudinary.uploader.upload_stream(
//         { resource_type: "image" },
//         (error, result) => {
//           if (error) throw error;
//           imageUrl = result.secure_url;
//         }
//       ).end(req.file.buffer);
//     }

//     const message = new FounderMessage({
//       name: req.body.name,
//       content: req.body.content,
//       image: imageUrl
//     });

//     await message.save();
//     res.status(201).json(message);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// Create founderMessage
export const createFounderMessage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Image is required" });

    const imageUrl = await uploadToCloudinary(req.file.buffer);

    const founder = new FounderMessage({
      name: req.body.name,
      content: req.body.content,
      image: imageUrl
    });

    await founder.save();
    res.status(201).json(founder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// export const updateFounderMessage = async (req, res) => {
//   try {
//     const updated = await FounderMessage.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

export const updateFounderMessage = async (req, res) => {
  try {
    let updateData = { ...req.body };

    // 🔥 If a new image is uploaded, update it on Cloudinary
    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file.buffer);
      updateData.image = imageUrl;
    }

    const updated = await FoundMessage.findByIdAndUpdate(
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

export const deleteFounderMessage = async (req, res) => {
  try {
    await FounderMessage.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
