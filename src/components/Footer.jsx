import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="red-touch-bg" style={{ opacity: 0.08 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                        whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            backgroundColor: '#000',
                            color: '#fff',
                            boxShadow: '0 15px 35px rgba(255,255,255,0.15)'
                        }}
                        whileTap={{ 
                            scale: 0.98,
                            backgroundColor: '#000',
                            color: '#fff'
                        }}
                        className="btn footer-cta-btn"
                        style={{
                            marginTop: '16px',
                            backgroundColor: '#fff',
                            color: '#000',
                            width: 'fit-content',
                            border: 'none',
                            padding: '14px 28px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
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
