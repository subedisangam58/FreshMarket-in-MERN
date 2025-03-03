import { Product } from "../models/product.model.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import fs from "fs";

export const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, quantity } = req.body;
        if (!name || !price || !category) {
            return res.status(400).json({ 
                success: false, 
                message: "Name, price, and category are required" 
            });
        }

        let imageUrl = null;
        
        if (req.file) {
            try {
                const result = await uploadToCloudinary(req.file.path);
                imageUrl = result.secure_url;
                fs.unlink(req.file.path, (err) => {
                    if (err) console.error("Error removing temp file:", err);
                });
            } catch (uploadError) {
                return res.status(400).json({ 
                    success: false, 
                    message: `Image upload failed: ${uploadError.message}` 
                });
            }
        }
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            imageUrl,
            quantity: quantity || 0,
            createdBy: req.userId,
        });
        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product: newProduct
        });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to add product" 
        });
    }
};

export const getProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, search, page = 1, limit = 10 } = req.query;
        const query = {};
        
        if (category) query.category = category;
        if (quantity) query.quantity = quantity;
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ];
        }
        const skip = (page - 1) * limit;
        const products = await Product.find(query)
            .skip(skip)
            .limit(Number(limit))
            .sort({ createdAt: -1 });
        const total = await Product.countDocuments(query);
        
        res.status(200).json({
            success: true,
            products,
            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),
                pages: Math.ceil(total / limit)
            }
        });
        
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to fetch products" 
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await Product.findById(id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        res.status(200).json({
            success: true,
            product
        });
        
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to fetch product" 
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        if (req.file) {
            try {
                const result = await uploadToCloudinary(req.file.path);
                updates.imageUrl = result.secure_url;
                fs.unlink(req.file.path, (err) => {
                    if (err) console.error("Error removing temp file:", err);
                });
            } catch (uploadError) {
                return res.status(400).json({ 
                    success: false, 
                    message: `Image upload failed: ${uploadError.message}` 
                });
            }
        }
        
        const product = await Product.findByIdAndUpdate(
            id, 
            updates,
            { new: true, runValidators: true }
        );
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product
        });
        
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to update product" 
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await Product.findByIdAndDelete(id);
        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
        
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message || "Failed to delete product" 
        });
    }
};