import express from "express";

import {
  getAllOrders,
  updateOrderStatus,
} from "../../controller/admin-order.controller.js";

const router = express.Router();

// GET ALL ORDERS
router.get("/get", getAllOrders);

// UPDATE ORDER STATUS
router.put("/status/:id", updateOrderStatus);

export default router;