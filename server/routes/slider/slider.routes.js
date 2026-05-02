import express from "express";
const router = express.Router();
import Slider from "../../model/Slider.js";

// GET all sliders
router.get("/get", async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json({ success: true, data: sliders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// CREATE slider
router.post("/add", async (req, res) => {
  try {
    const { title, description, image, icon } = req.body;
    const newSlider = new Slider({ title, description, image, icon });
    await newSlider.save();
    res.status(201).json({ success: true, message: "Slider added", data: newSlider });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// UPDATE slider
router.put("/update/:id", async (req, res) => {
  try {
    const { title, description, image, icon } = req.body;
    const updatedSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      { title, description, image, icon },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedSlider });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE slider
router.delete("/delete/:id", async (req, res) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;