import Testimonial from "../models/Testimonial.js";
import cloudinary from "../utils/cloudinary.js";

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) throw error;
          imageUrl = result.secure_url;
        }
      ).end(req.file.buffer);
    }

    const testimonial = new Testimonial({
      name: req.body.name,
      designation: req.body.designation,
      content: req.body.content,
      image: imageUrl
    });

    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// export const updateTestimonial = async (req, res) => {
//   try {
//     const updated = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updated);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

export const updateTestimonial = async (req, res) => {
  try {
    let updateData = { ...req.body };

    // 🔥 If a new image is uploaded, update it on Cloudinary
    if (req.file) {
      const imageUrl = await uploadToCloudinary(req.file.buffer);
      updateData.image = imageUrl;
    }

    const updated = await Testimonial.findByIdAndUpdate(
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

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Testimonial deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
