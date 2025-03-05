import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import './css/Cart.css';

function Cart({ cart = [], updateCart }) {
    const [cartItems, setCartItems] = useState(cart || []);

    useEffect(() => {
        setCartItems(cart || []);
    }, [cart]);

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item._id !== productId);
        setCartItems(updatedCart);
        updateCart(updatedCart);
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        const updatedCart = cartItems.map(item => 
            item._id === productId 
                ? {...item, quantity: newQuantity} 
                : item
        );
        setCartItems(updatedCart);
        updateCart(updatedCart);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {!cartItems || cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div key={item._id} className="cart-item">
                            <img 
                                src={item.imageUrl || '/placeholder-product.jpg'} 
                                alt={item.name} 
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)} each</p>
                                <div className="quantity-control">
                                    <button 
                                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                        className="quantity-btn"
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                        className="quantity-btn"
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item._id)}
                                    className="remove-btn"
                                >
                                    <FaTrash /> Remove
                                </button>
                            </div>
                            <div className="cart-item-total">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h3>Total: ${calculateTotal()}</h3>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;