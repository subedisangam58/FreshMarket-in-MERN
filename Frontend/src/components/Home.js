import React from 'react'
import './css/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <header>
                <section className="hero">
                    <h1 className="hero-text">Fresh & Organic Products<br/>Delivered to Your Door</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Search for fresh products..."/>
                            <button>Search</button>
                    </div>
                </section>
            </header>

            <section className="categories">
                <h2>Shop by Category</h2>
                <div className="category-container">
                    <div className="category-box vegetables">
                        <i className="fas fa-carrot"></i>
                        <span>Vegetables</span>
                    </div>
                    <div className="category-box fruits">
                        <i className="fas fa-apple-alt"></i>
                        <span>Fruits</span>
                    </div>
                    <div className="category-box dairy">
                        <i className="fas fa-egg"></i>
                        <span>Dairy & Eggs</span>
                    </div>
                    <div className="category-box bakery">
                        <i className="fas fa-bread-slice"></i>
                        <span>Bakery</span>
                    </div>
                </div>
            </section>


            <section className="featured">
                <h2>Featured Products</h2>
                <div className="product-container">
                    <div className="product-card">
                        <img src="" alt="Apples"/>
                            <h3>Organic Red Apples</h3>
                            <p>1kg Package</p>
                            <div className="groups">
                                <span className="price">$4.99</span>
                                <button className="add-btn"><i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}
