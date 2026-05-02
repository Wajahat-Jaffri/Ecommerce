import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  image: { type: String, required: true },
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Slider = mongoose.model("Slider", sliderSchema);
export default Slider;