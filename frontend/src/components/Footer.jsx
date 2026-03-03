import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-grid">
                <div>
                    <div className="footer-logo">Discret Proptech</div>
                    <p className="footer-desc">Discret Proptech — modern real estate, built on clarity, trust, and better systems.</p>
                </div>
                <div className="footer-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#listings">Listings</a></li>
                        <li><a href="#locations">Locations</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Ready to start?</h5>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn footer-cta-btn"
                        style={{
                            marginTop: '16px',
                            backgroundColor: '#fff',
                            color: 'var(--primary-color)',
                            boxShadow: '0 10px 30px rgba(255,255,255,0.1)',
                            width: 'fit-content'
                        }}
                    >
                        Explore Better Real Estate Opportunities Today
                    </motion.button>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Discret Proptech. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;
