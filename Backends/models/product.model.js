import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price cannot be negative"]
    },
    imageUrl: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
        trim: true
    },
    quantity: {
        type: Number,
        default: 0,
        min: [0, "Stock cannot be negative"]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
productSchema.index({ name: 'text', description: 'text' });

export const Product = mongoose.model("Product", productSchema);