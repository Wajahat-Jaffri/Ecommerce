import express from "express";
const router = express.Router();

import { filterProduct } from "../../controller/shop/product.controller.js";

router.get("/filter", filterProduct);

export default router;