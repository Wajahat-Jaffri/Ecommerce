import express from "express";
const router = express.Router();

import { handleImageUpload } from "../../controller/product.controller.js";
import { upload } from "../../helper/cloudnary.js";

router.post("/upload", upload.single("image"), handleImageUpload);

export default router;