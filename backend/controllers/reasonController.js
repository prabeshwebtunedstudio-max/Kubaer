import Reason from "../models/Reason.js";

export const getAllReasons = async (req, res) => {
  try {
    const reasons = await Reason.find();
    res.json(reasons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createReason = async (req, res) => {
  try {
    const reason = new Reason(req.body);
    await reason.save();
    res.status(201).json(reason);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateReason = async (req, res) => {
  try {
    const updated = await Reason.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteReason = async (req, res) => {
  try {
    await Reason.findByIdAndDelete(req.params.id);
    res.json({ message: "Reason deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
