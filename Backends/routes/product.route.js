import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/verifyToken.js";
import { 
    addProduct, 
    getProducts,
    getProductById, 
    updateProduct, 
    deleteProduct 
} from "../controllers/product.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"), false);
    }
};

const upload = multer({ 
    storage, 
    limits: {
        fileSize: 1024 * 1024 * 5 // 5MB
    },
    fileFilter
});

router.post("/add-product", verifyToken, upload.single("image"), addProduct);
router.get("/get-product", getProducts);
router.get("/get-product/:id", getProductById);
router.post("/update-product/:id", verifyToken, upload.single("image"), updateProduct);
router.delete("/delete-product/:id", verifyToken, deleteProduct);

export default router;