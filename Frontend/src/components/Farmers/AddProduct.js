import React, { useState } from "react";
import "../css/AddProduct.css";

const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        category: "",
        status: "",
        description: "",
        price: 0,
        quantity: 0,
        organic: false,
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
        }));
    };

    return (
        <div className="container">
            <div className="form-groups">
                <h2>Product Details</h2>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" name="name" placeholder="e.g., Organic Tomatoes" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Category</label>
                    <select name="category" onChange={handleChange}>
                        <option>Vegetable</option>
                        <option>Vegetable</option>
                        <option>Dairy</option>
                        <option>Bakery</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Product Status</label>
                    <select name="status" onChange={handleChange}>
                        <option>Select Status</option>
                        <option>Available</option>
                        <option>Unavailable</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Product Description</label>
                    <textarea name="description" placeholder="Product description will appear here..." onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" placeholder="0.00" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Quantity Available</label>
                    <input type="number" name="quantity" placeholder="0" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Product Image</label>
                    <input type="file" name="image" onChange={handleChange} />
                </div>
                <div className="checkbox">
                    <input type="checkbox" name="organic" onChange={handleChange} />
                    <label>Organic Certified</label>
                </div>
                <div className="buttons">
                    <button className="cancel">Cancel</button>
                    <button className="add">Add Product</button>
                </div>
            </div>
            <div className="preview-container">
                <h3>Preview</h3>
                <div className="preview-card">
                    {product.image ? <img src={URL.createObjectURL(product.image)} alt="Product" /> : <div className="placeholder">Product Image</div>}
                    <h4>{product.name || "Product Name"}</h4>
                    <p>{product.category || "Category"}</p>
                    <p>{product.description || "Product description will appear here..."}</p>
                    <h3>Rs. {product.price || "0.00"}</h3>
                    <p>{product.quantity || "0"}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;
