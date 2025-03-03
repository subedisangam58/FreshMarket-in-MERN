import React from 'react'
import '../css/Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
    return (
        <>
            <h2>Shopping Cart (3 items)</h2>
            <div class="container">
                <div class="cart">
                    <div class="cart-items">
                        <div class="cart-item">
                            <img src="tomatoes.jpg" alt="Organic Tomatoes" />
                            <div class="item-details">
                                <h3>Organic Tomatoes</h3>
                                <p>Farm Fresh, 1kg</p>
                                <div class="quantity">
                                    <button class="decrease">-</button>
                                    <span class="quantity-number">2</span>
                                    <button class="increase">+</button>
                                </div>
                            </div>
                            <span class="price">$4.99</span>
                            <button class="remove">✖</button>
                        </div>

                        <div class="cart-item">
                            <img src="carrots.jpg" alt="Fresh Carrots" />
                            <div class="item-details">
                                <h3>Fresh Carrots</h3>
                                <p>Organic Bunch, 500g</p>
                                <div class="quantity">
                                    <button class="decrease">-</button>
                                    <span class="quantity-number">1</span>
                                    <button class="increase">+</button>
                                </div>
                            </div>
                            <span class="price">$3.49</span>
                            <button class="remove">✖</button>
                        </div>
                    </div>
                    <h3>Saved for Later</h3>
                    <div class="saved-items">
                        <div class="saved-item">
                            <img src="apples.jpg" alt="Organic Apples" />
                            <div class="item-details">
                                <h3>Organic Apples</h3>
                                <p>Red Delicious, 1kg</p>
                                <Link class="move-to-cart">Move to Cart</Link>
                            </div>
                            <span class="price">$5.99</span>
                            <button class="remove">✖</button>
                        </div>
                    </div>
                </div>
                <div class="order-summary">
                    <h3>Order Summary</h3>
                    <div class="summary-item"><span>Subtotal</span><span>$8.48</span></div>
                    <div class="summary-item"><span>Tax (10%)</span><span>$0.85</span></div>
                    <div class="summary-item"><span>Shipping</span><span>Free</span></div>
                    <hr />
                    <div class="summary-total"><span>Total</span><span>$9.33</span></div>

                    <input type="text" placeholder="Enter coupon code" />
                    <button class="apply-btn">Apply</button>

                    <button class="checkout-btn">Proceed to Checkout</button>
                    <p class="delivery-info">🚚 Estimated delivery: 2-3 business days</p>
                </div>
            </div>
        </>
    )
}
