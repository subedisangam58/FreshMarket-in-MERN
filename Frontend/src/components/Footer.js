import './css/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Fresh<span className="footer-name">Market</span></h3>
                    <p>Your trusted source for fresh and organic products.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <ul>
                        <li><Link to="#">Shipping Info</Link></li>
                        <li><Link to="#">Returns</Link></li>
                        <li><Link to="#">Help Center</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <Link to="/"><i className="fab fa-facebook"></i></Link>
                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                        <Link to="/"><i className="fab fa-twitter"></i></Link>
                    </div>
                </div>
            </div>
            <p className="copyright">© 2025 FreshMarket. All rights reserved.</p>
        </footer>
    );
}
