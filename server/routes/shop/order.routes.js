import express from "express";

import { createOrder } from "../../controller/shop/order.controller.js";

const router = express.Router();

// CREATE ORDER
router.post("/create", createOrder);

export default router;