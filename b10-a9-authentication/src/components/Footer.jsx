import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import '../styles/Footer.css';

const Footer = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <footer className={`footer-container ${isHomePage ? 'home-footer' : 'other-footer'}`}>
            <div className="footer-content">
                <div className="footer-section footer-logo">
                    <h2>Career Inspire</h2>
                    <p>Empowering you to achieve your career goals.</p>
                </div>
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="footer-section footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Career Inspire. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
