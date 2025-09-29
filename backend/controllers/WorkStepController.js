import HowItWorksStep from "../models/WorkStep.js";

export const getAllSteps = async (req, res) => {
  try {
    const steps = await HowItWorksStep.find().sort("stepNumber");
    res.json(steps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createStep = async (req, res) => {
  try {
    const step = new HowItWorksStep(req.body);
    await step.save();
    res.status(201).json(step);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateStep = async (req, res) => {
  try {
    const updated = await HowItWorksStep.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteStep = async (req, res) => {
  try {
    await HowItWorksStep.findByIdAndDelete(req.params.id);
    res.json({ message: "Step deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
