
//messageController.js
import ContactMessage from "../models/ContactMessage.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    const message = new ContactMessage(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const updated = await ContactMessage.findByIdAndUpdate(
      req.params.id,
      req.body,   // ✅ now it uses all fields from body
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const deleteMessage = async (req, res) => {
  try {
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
