// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";

// dotenv.config();

// import authRoutes from "./routes/auth/auth.routes.js";
// import adminProductRoutes from "./routes/admin/product.routes.js";
// import shopProductRoutes from "./routes/shop/product.routes.js";
// import sliderRoutes from "./routes/slider/slider.routes.js";
// import cartRoutes from "./routes/shop/cart.routes.js";
// import adminOrderRoutes from "./routes/admin/order.routes.js";
// import shopOrderRoutes from "./routes/shop/order.routes.js";
// const app = express();

// // middleware
// app.use(express.json());
// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
// app.use(cookieParser());
// app.use("/uploads", express.static("uploads"));

// // routes
// app.use("/api/auth", authRoutes);
// app.use("/api/admin/products", adminProductRoutes);
// app.use("/api/shop/products", shopProductRoutes);
// app.use("/api/slider", sliderRoutes);
// app.use("/api/shop/cart", cartRoutes);
// app.use("/api/admin/orders", adminOrderRouter);
// app.use("/api/shop/orders", shopOrderRouter);


// // MongoDB connection
// mongoose.connect(process.env.MONGODB_URL)
//     .then(() => console.log("MongoDB Connected..."))
//     .catch(err => console.log("Custom Error:", err));

// // server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ROUTES
import authRoutes from "./routes/auth/auth.routes.js";

import adminProductRoutes from "./routes/admin/product.routes.js";
import adminOrderRoutes from "./routes/admin/order.routes.js";

import shopProductRoutes from "./routes/shop/product.routes.js";
import shopOrderRoutes from "./routes/shop/order.routes.js";

import sliderRoutes from "./routes/slider/slider.routes.js";
import cartRoutes from "./routes/shop/cart.routes.js";

// MIDDLEWARE
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/auth", authRoutes);

app.use("/api/admin/products", adminProductRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

app.use("/api/shop/products", shopProductRoutes);
app.use("/api/shop/orders", shopOrderRoutes);

app.use("/api/shop/cart", cartRoutes);

app.use("/api/slider", sliderRoutes);

// DATABASE
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});