import express from "express";
const router = express.Router();

import { getFilterProduct } from "../../controller/shop/product.controller.js";
import { getProductDetails } from "../../controller/shop/product.controller.js";

router.get("/filter", getFilterProduct);
router.get("/details/:id", getProductDetails)


export default router;