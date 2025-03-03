import React, { useState } from 'react';
import '../css/Shop.css';

export default function Shop() {
    const [page, setPage] = useState(1);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <>
            <section className="filters">
                <select>
                    <option>All Categories</option>
                    <option>Vegetables</option>
                    <option>Fruits</option>
                    <option>Dairy</option>
                    <option>Organic</option>
                </select>

                <select>
                    <option>Sort by</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Best Sellers</option>
                </select>

                <p>Showing 1-12 of 48 products</p>
            </section>
            <section className="product-list">
                <div className="product-card">
                    <img src="images/tomatoes.jpg" alt="Fresh Tomatoes" />
                    <p className="tag">Organic</p>
                    <h3>Fresh Tomatoes</h3>
                    <div className="rating">
                        <span>⭐⭐⭐⭐☆</span>
                        <span>(24)</span>
                    </div>
                    <p className="price">$4.99</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            </section>
            <div className="pagination">
                <button
                    className="prev-page"
                    onClick={handlePrevPage}
                    disabled={page <= 1}
                >
                    Prev
                </button>
                <span>Page {page}</span>
                <button className="next-page" onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </>
    );
}
