

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// import authRoutes from "./routes/auth/auth.routes.js";
// import adminProductRoutes from "./routes/admin/product.routes.js";
// import adminOrderRoutes from "./routes/admin/order.routes.js";
// import shopProductRoutes from "./routes/shop/product.routes.js";
// import shopOrderRoutes from "./routes/shop/order.routes.js";
// import sliderRoutes from "./routes/slider/slider.routes.js";
// import cartRoutes from "./routes/shop/cart.routes.js";
// import contactRoutes from "./routes/shop/contacts.routes.js";



// app.use(express.json());

// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// app.use("/uploads", express.static("uploads"));

// app.use("/api/auth", authRoutes);
// app.use("/api/admin/products", adminProductRoutes);
// app.use("/api/admin/orders", adminOrderRoutes);
// app.use("/api/shop/products", shopProductRoutes);
// app.use("/api/shop/orders", shopOrderRoutes);
// app.use("/api/shop/cart", cartRoutes);
// app.use("/api/slider", sliderRoutes);
// app.use("/api/contact", contactRoutes);

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

import authRoutes from "./routes/auth/auth.routes.js";
import adminProductRoutes from "./routes/admin/product.routes.js";
import adminOrderRoutes from "./routes/admin/order.routes.js";
import shopProductRoutes from "./routes/shop/product.routes.js";
import shopOrderRoutes from "./routes/shop/order.routes.js";
import sliderRoutes from "./routes/slider/slider.routes.js";
import cartRoutes from "./routes/shop/cart.routes.js";
import contactRoutes from "./routes/shop/contacts.routes.js";

// Global variable database connection state track karne ke liye
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("=> Using existing MongoDB connection");
    return;
  }

  console.log("=> Creating new MongoDB connection");
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 5000, // 5 seconds timeout agar network issue ho
      socketTimeoutMS: 45000,        // Connection ko drop hone se bachane ke liye
    });
    
    isConnected = db.connections[0].readyState;
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err;
  }
};

// Middleware: Har incoming request par database connection state verify karega
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    res.status(500).json({ 
      error: "Database connection handler failed", 
      details: err.message 
    });
  }
});

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/shop/products", shopProductRoutes);
app.use("/api/shop/orders", shopOrderRoutes);
app.use("/api/shop/cart", cartRoutes);
app.use("/api/slider", sliderRoutes);
app.use("/api/contact", contactRoutes);

// Root route (Vercel deployment verify karne ke liye)
app.get("/", (req, res) => {
  res.send("Ecommerce Backend API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});