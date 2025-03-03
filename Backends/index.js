import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";


// Setup for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

import fs from "fs";
if (!fs.existsSync("./uploads")) {
    fs.mkdirSync("./uploads");
}

// Static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}).catch(error => {
    console.error("Database connection failed", error);
});
