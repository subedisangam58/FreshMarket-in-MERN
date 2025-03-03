import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { ToastContainer } from 'react-toastify';

export default function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className='Navbar'>
            <div className="logo">Fresh<span>Market</span></div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <nav className={menuOpen ? "active" : ""}>
                <ul>
                    <li><Link to="/" data-translate>Home</Link></li>
                    <li><Link to="/shop" data-translate>Shop</Link></li>
                    <li><Link to="/categories" data-translate>Categories</Link></li>
                    <li><Link to="/about" data-translate>About</Link></li>
                    <li><Link to="/orders" data-translate>Orders</Link></li>
                    <li><Link to="/todayprice" data-translate>Today Market</Link></li>
                </ul>
            </nav>

            {/* Search Bar */}
            <div className="search-container">
                <input type="text" placeholder="Search products..." data-translate />
                <i className="fas fa-search"></i>
            </div>

            {/* Icons */}
            <div className="icons">
                <Link to="/favorites"><i className="fas fa-heart"></i></Link>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                <Link to="/login"><i className="fas fa-user"></i></Link>
                <Link to="/logout" onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i></Link>
            </div>
            <ToastContainer />
        </header>
    );
}
