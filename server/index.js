import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/auth/auth.routes.js";
import adminProductRoutes from "./routes/auth/product.routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/admin/product", adminProductRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log("Custom Error:", err));

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));