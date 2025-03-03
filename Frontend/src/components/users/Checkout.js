import React from 'react'

export default function Checkout() {
  return (
    <div class="container">
        <div class="left-section">
            <div class="step-indicator">
                <div class="active">1. Address</div>
                <div class="inactive">2. Payment</div>
                <div class="inactive">3. Review</div>
            </div>

            <div>
                <h2>Delivery Address</h2>
                <div class="address-box">
                    <label>
                        <input type="radio" name="address" checked/>
                        <b>Home</b><br/>
                        John Doe<br/>
                        123 Market Street, Apt 4B<br/>
                        New York, NY 10001<br/>
                        Phone: (555) 123-4567
                    </label>
                </div>
                <div class="add-address">
                    + Add New Address
                </div>
            </div>

            <div class="payment-method">
                <h2>Payment Method</h2>
                <div>
                    <label>
                        <input type="radio" name="payment" checked/>
                        Credit/Debit Card
                    </label>
                    <div>
                        <input type="text" placeholder="Card Number"/>
                        <input type="text" placeholder="MM/YY"/>
                        <input type="text" placeholder="CVV"/>
                    </div>
                </div>

                <div>
                    <label>
                        <input type="radio" name="payment"/>
                        Digital Wallet
                    </label>
                </div>

                <div>
                    <label>
                        <input type="radio" name="payment"/>
                        Cash on Delivery
                    </label>
                </div>
            </div>
        </div>

        <div class="right-section">
            <h2>Order Summary</h2>
            <div class="order-summary">
                <p>Subtotal: $45.90</p>
                <p>Delivery Fee: $5.00</p>
                <p>Tax: $4.10</p>
                <p class="total">Total: $55.00</p>

                <div class="promo">
                    <input type="text" placeholder="Enter promo code"/>
                    <button>Apply</button>
                </div>

                <div>Estimated Delivery: Tomorrow, Jan 15</div>
                <div>You have 100 loyalty points available</div>

                <div class="place-order">
                    <button>Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}
