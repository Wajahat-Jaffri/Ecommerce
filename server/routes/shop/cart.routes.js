import express from "express";
const router = express.Router();

import {
  addToCart,
  fetchCartItems,
  updateCartItemQty,
  deleteCartItem,
} from "../../controller/shop/cart.controller.js";

//  Add item to cart
router.post("/add", addToCart);

// 🔹Get cart items
router.get("/get/:userId", fetchCartItems);

//  Update quantity
router.put("/update", updateCartItemQty);

//  Delete item from cart
router.delete("/remove", deleteCartItem);

export default router;