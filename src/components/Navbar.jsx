import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
    const location = useLocation();
    const { wishlist } = useWishlist();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isHome = location.pathname === '/';

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`main-header header-white ${isMenuOpen ? 'mobile-menu-active' : ''}`}>
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="logo-group" onClick={closeMenu}>
                        <img
                            src="/Discret Logo Colored.png"
                            alt="Discret Logo"
                            className="nav-logo-icon"
                        />
                        <span className="nav-logo-text">Discret</span>
                    </Link>

                    {/* Hamburger Button */}
                    <button className="mobile-menu-toggle" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className={`nav-item-anim ${isHome ? 'active' : ''}`} onClick={closeMenu}>Home</Link>

                        {isHome && (
                            <>
                                <a href="#listings" className="nav-item-anim" onClick={closeMenu}>Listings</a>
                                <a href="#locations" className="nav-item-anim" onClick={closeMenu}>Locations</a>
                                <a href="#about" className="nav-item-anim" onClick={closeMenu}>About</a>
                            </>
                        )}

                        <Link to="/wishlist" className={`nav-item-anim wishlist-nav ${location.pathname === '/wishlist' ? 'active' : ''}`} onClick={closeMenu}>
                            <Heart
                                size={18}
                                className="heart-icon"
                                fill={wishlist.length > 0 ? "var(--primary-color)" : "none"}
                                color={wishlist.length > 0 ? "var(--primary-color)" : "currentColor"}
                            />
                            <span>Wishlist {wishlist.length > 0 ? `(${wishlist.length})` : ''}</span>
                        </Link>

                        <a href="#contact" className="btn btn-primary nav-contact-btn" onClick={closeMenu}>Contact Us</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

