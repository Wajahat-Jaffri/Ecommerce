import express from "express";
const router = express.Router();
import Slider from "../../model/Slider.js";
import multer from "multer";
import path from "path";
import fs from "fs";

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

// File Filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter,
});

// GET all sliders
router.get("/", async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.json(sliders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single slider
router.get("/:id", async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.json(slider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Use fields for multiple file uploads
const uploadMultiple = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "icon", maxCount: 1 },
]);

// CREATE slider
router.post("/", uploadMultiple, async (req, res) => {
  try {
    const slider = new Slider({
      title: req.body.title,
      description: req.body.description,
      image: req.files.image ? req.files.image[0].filename : null,
      icon: req.files.icon ? req.files.icon[0].filename : null,
    });

    const savedSlider = await slider.save();
    res.status(201).json(savedSlider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE slider
router.put("/:id", uploadMultiple, async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    // Update image
    if (req.files.image && slider.image) {
      fs.unlink(`uploads/${slider.image}`, () => {});
      slider.image = req.files.image[0].filename;
    }

    // Update icon
    if (req.files.icon && slider.icon) {
      fs.unlink(`uploads/${slider.icon}`, () => {});
      slider.icon = req.files.icon[0].filename;
    }

    slider.title = req.body.title || slider.title;
    slider.description = req.body.description || slider.description;

    const updatedSlider = await slider.save();
    res.json(updatedSlider);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE slider
router.delete("/:id", async (req, res) => {
  try {
    const slider = await Slider.findByIdAndDelete(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    if (slider.image) {
      fs.unlink(`uploads/${slider.image}`, () => {});
    }

    res.json({ message: "Slider deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
