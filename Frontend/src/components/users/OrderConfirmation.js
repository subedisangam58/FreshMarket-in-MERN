import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderConfirmation() {
  return (
    <div className="container">
        <div className="box">
            <div className="header">
                <h1>Thank You for Your Order!</h1>
                <p>Your order has been received and is being processed. We'll send you updates about your delivery.</p>
            </div>

            <div className="content-container">
                <div className="order-info">
                    <div>
                        <strong>Order Number:</strong><br/>#FM25789
                    </div>
                    <div>
                        <strong>Order Date:</strong><br/>March 15, 2025
                    </div>
                    <div>
                        <strong>Total Amount:</strong><br/>$89.50
                    </div>
                </div>

                <div className="items">
                    <div className="item">
                        <div>
                            <img src="https://via.placeholder.com/50" alt="Organic Tomatoes"/>
                        </div>
                        <div>Organic Tomatoes (2 kg)</div>
                        <div>$12.00</div>
                    </div>
                    <div className="item">
                        <div>
                            <img src="https://via.placeholder.com/50" alt="Fresh Lettuce"/>
                        </div>
                        <div>Fresh Lettuce (3 pieces)</div>
                        <div>$7.50</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="box track-order-container">
            <h3>Track Your Order</h3>
            <div className="track-status">
                <div>Processing</div>
                <div className="progress-bar">
                    <span></span>
                </div>
                <div>Out for Delivery</div>
            </div>
        </div>

        <div className="footer">
            <div className="footer-box">
                <h4>Need Help?</h4>
                <p>Contact us at:</p>
                <p><strong>support@farmersmarket.com</strong></p>
                <p><strong>1-800-FARMERS</strong></p>
            </div>
            <div className="footer-box">
                <h4>Special Offer!</h4>
                <p>Use this code on your next purchase:</p>
                <div className="code-box">THANKYOU10</div>
                <p>10% off your next order</p>
            </div>
        </div>
        <div className="button">
            <Link to="#">Continue Shopping</Link>
            <Link to="#">View Order History</Link>
        </div>
    </div>
  )
}
