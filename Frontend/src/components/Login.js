import React, { useState } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        if (!email || !password) {
            return handleError('All fields are required');
        }

        try {
            const url = "http://localhost:5000/api/auth/login";
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await res.json();
            if (!res.ok) {
                throw new Error(result.message || "Login failed");
            }

            const { success, message, token, name } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem("token", token);
                localStorage.setItem("name", name);
                if (rememberMe) {
                    localStorage.setItem("rememberMe", "true");
                    localStorage.setItem("userEmail", email);
                }
                
                setTimeout(() => {
                    window.location.href = "/profile";
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            handleError(error.message);
        }
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        handleError("Forgot password functionality is not implemented yet.");
    };

    return (
        <div className="container">
            <div className="login-container">
                <div className="logo">
                    <img src="leaf-icon.png" alt="Logo" />
                </div>
                <h1>Welcome back!</h1>
                <p>Please login to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email address"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group password-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter your password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="options">
                        <label>
                            <input 
                                type="checkbox" 
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                            /> Remember me
                        </label>
                        <button 
                            onClick={handleForgotPassword}
                            className="forgot-password"
                            type="button"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <button type="submit" className="sign-in-btn">Sign in</button>
                </form>
                <div className="divider">
                    <span>Or continue with</span>
                </div>
                <div className="social-login">
                    <button type="button" className="google-btn">Google</button>
                    <button type="button" className="facebook-btn">Facebook</button>
                </div>
                <p className="signup-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
                <p className="terms-text">
                    By signing in, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    );
}