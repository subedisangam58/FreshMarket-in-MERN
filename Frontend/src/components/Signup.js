import React, { useState } from 'react';
import './css/Signup.css';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        cPassword: ''
    });
    const [termsAccepted, setTermsAccepted] = useState(false);

    const { name, email, password, address, phone, cPassword } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !cPassword || !phone || !address) {
            return handleError('All fields are required');
        }
        if (!termsAccepted) {
            return handleError("You must accept the Terms & Conditions.");
        }
        if (password !== cPassword) {
            return handleError("Passwords don't match");
        }

        try {
            const validationUrl = "http://localhost:5000/api/auth/signup";
            const validationRes = await fetch(validationUrl, {
                method: "POST",
                body: JSON.stringify({ 
                    name, 
                    email, 
                    password, 
                    phone, 
                    address 
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const validationResult = await validationRes.json();

            if (!validationRes.ok) {
                throw new Error(validationResult.message || "Validation failed");
            }
            handleSuccess("Account validated! Please verify your email.");
            navigate("/verify-email", { state: { formData } });

        } catch (err) {
            console.error("Error:", err);
            handleError(err.message || "Something went wrong. Please try again.");
        }
    }

    return (
        <main>
            <section className="form-section">
                <h2>Create Your Account</h2>
                <p>Join our community of local farmers and food enthusiasts</p>
                <form onSubmit={handleSignup}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Full Name"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="cPassword"
                            name="cPassword"
                            placeholder="Confirm Password"
                            value={cPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Street Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={address}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="terms">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                        <label htmlFor="terms">
                            I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
                        </label>
                    </div>
                    <button type="submit" className="submit-btn">Create Account</button>
                    <p className="login-link">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
                <ToastContainer />
            </section>
        </main>
    );
}