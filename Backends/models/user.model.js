import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]
    },
    lastLogin:{
        type: Date,
        default: Date.now(),
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, { timestamp: true });

export const User = mongoose.model('user', userSchema);