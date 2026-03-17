import express from "express";
const router = express.Router();

import { addProduct, handleImageUpload, fetchAllProducts, editProduct, deleteProduct } from "../../controller/product.controller.js";
import { upload } from "../../helper/cloudnary.js";

router.post("/upload", upload.single("image"), handleImageUpload);
router.post("/add",addProduct)
router.get("/get", fetchAllProducts)
router.put("/edit/:id", editProduct)
router.delete("/delete/:id", deleteProduct)


export default router;