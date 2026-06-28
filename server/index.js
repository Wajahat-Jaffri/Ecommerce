
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ================= IMPORT ROUTES =================

import authRoutes from "./routes/auth/auth.routes.js";

import adminProductRoutes from "./routes/admin/product.routes.js";
import adminOrderRoutes from "./routes/admin/order.routes.js";

import shopProductRoutes from "./routes/shop/product.routes.js";
import shopOrderRoutes from "./routes/shop/order.routes.js";

import sliderRoutes from "./routes/slider/slider.routes.js";
import cartRoutes from "./routes/shop/cart.routes.js";

// ✅ CONTACT ROUTE (FIXED PATH)
import contactRoutes from "./routes/shop/contacts.routes.js";

// ================= MIDDLEWARE =================

app.use(express.json());

cors({
  origin: [
    "http://localhost:5173",
    "https://YOUR-FRONTEND.vercel.app",
  ],
  credentials: true,
});

app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

// ================= ROUTES =================

// AUTH
app.use("/api/auth", authRoutes);

// ADMIN
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

// SHOP
app.use("/api/shop/products", shopProductRoutes);
app.use("/api/shop/orders", shopOrderRoutes);
app.use("/api/shop/cart", cartRoutes);

// SLIDER
app.use("/api/slider", sliderRoutes);

// ✅ CONTACT API
app.use("/api/contact", contactRoutes);

// ================= DB =================

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});