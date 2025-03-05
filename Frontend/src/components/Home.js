import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Home.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = [
        { name: 'Vegetables', slug: 'vegetables', icon: 'fas fa-carrot', bgColor: '#DAFBEA', textColor: 'green' },
        { name: 'Fruits', slug: 'fruits', icon: 'fas fa-apple-alt', bgColor: '#FEECEC', textColor: 'crimson' },
        { name: 'Bakery', slug: 'bakery', icon: 'fas fa-bread-slice', bgColor: '#FFF9DF', textColor: '#D97706' },
        { name: 'Dairy', slug: 'dairy', icon: 'fas fa-cheese', bgColor: '#F0F8FF', textColor: '#92400E' }
    ];
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/api/products/get-product');
            setProducts(response.data.products);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    // Add to cart handler
    const handleAddToCart = (product) => {
        console.log('Added to cart:', product);
    };

    return (
        <div>
            <div className="banner-section">
                <div className="banner-overlay"></div>
                <div class="banner-content">
                    <h1>Fresh & Organic Products Delivered to Your Door</h1>
                </div>
            </div>

            {/* Category Section */}
            <section className="category-section">
                <h2 className="section-title">Shop by Category</h2>
                <div className="category-grid">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            to={`/category/${category.slug}`}
                            className="category-card"
                            style={{
                                backgroundColor: category.bgColor,
                                color: category.textColor
                            }}
                        >
                            <i
                                className={`category-icon ${category.icon}`}
                                style={{ color: category.textColor }}
                                aria-hidden="true"
                            ></i>
                            <div className="category-title">{category.name}</div>
                        </Link>
                    ))};
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <h2 className="section-title">Our Products</h2>

                {loading ? (
                    <div className="loading">
                        <div className="loading-spinner"></div>
                    </div>
                ) : products.length === 0 ? (
                    <div className="empty-state">
                        No products found
                    </div>
                ) : (
                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product._id} className="product-card">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <div className="product-details">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-footer">
                                        <span className="product-price">
                                            Rs. {product.price.toFixed(2)}
                                        </span>
                                        <button
                                            className="add-to-cart-btn"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default HomePage;