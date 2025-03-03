import React from 'react'

export default function Wishlist() {
  return (
    <main>
        <div class="wishlist-container">
            <div class="wishlist-header">
                <h1>Your Wishlist</h1>
                <p>Save your favorite items and get notified about special offers.</p>
            </div>
            <div class="wishlist-actions">
                <button class="move-to-cart-btn">Move All to Cart</button>
                <div class="sort-container">
                    <select>
                        <option>Sort by</option>
                    </select>
                    <button class="share-btn">Share List</button>
                </div>
            </div>
            <div class="wishlist-items">
                <div class="wishlist-item">
                    <img src="images/apple.jpg" alt="Organic Vegetable Bundle"/>
                    <div class="item-info">
                        <h3>Organic Vegetable Bundle</h3>
                        <p class="price">$24.99</p>
                        <p class="stock in-stock">✔ In Stock</p>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
                <div class="wishlist-item">
                    <img src="images/apple.jpg" alt="Fresh Fruit Basket"/>
                    <div class="item-info">
                        <h3>Fresh Fruit Basket</h3>
                        <p class="price">$19.99</p>
                        <p class="stock out-of-stock">✖ Out of Stock</p>
                        <button class="out-of-stock-btn" disabled>Out of Stock</button>
                    </div>
                </div>
                <div class="wishlist-item">
                    <img src="images/apple.jpg" alt="Local Honey Jar"/>
                    <div class="item-info">
                        <h3>Local Honey Jar</h3>
                        <p class="price">$12.99</p>
                        <p class="stock in-stock">✔ In Stock</p>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
            <h2>You Might Also Like</h2>
            <div class="suggested-items">
                <div class="suggested-item">
                    <img src="images/apple.jpg" alt="Farm Fresh Eggs"/>
                    <p>Farm Fresh Eggs</p>
                    <p class="price">$6.99</p>
                </div>
                <div class="suggested-item">
                    <img src="images/apple.jpg" alt="Artisan Bread"/>
                    <p>Artisan Bread</p>
                    <p class="price">$4.99</p>
                </div>
                <div class="suggested-item">
                    <img src="images/apple.jpg" alt="Organic Cheese"/>
                    <p>Organic Cheese</p>
                    <p class="price">$8.99</p>
                </div>
                <div class="suggested-item">
                    <img src="images/apple.jpg" alt="Fresh Herbs"/>
                    <p>Fresh Herbs</p>
                    <p class="price">$3.99</p>
                </div>
            </div>
            <div class="footer-actions">
                <button class="continue-shopping-btn">Continue Shopping</button>
                <button class="proceed-checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    </main>
  )
}
