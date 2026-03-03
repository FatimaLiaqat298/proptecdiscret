import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const Navbar = () => {
    const location = useLocation();
    const { wishlist } = useWishlist();

    // Always show full nav on home, simplified elsewhere? 
    // User wants "phly ki trah" (full links) and visible text.
    const isHome = location.pathname === '/';

    return (
        <header className="main-header header-white">
            <div className="container">
                <nav className="navbar">
                    <Link to="/" className="logo-group">
                        <img
                            src="/Discret Logo Colored.png"
                            alt="Discret Logo"
                            className="nav-logo-icon"
                        />
                        <span className="nav-logo-text">Discret</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/" className={`nav-item-anim ${isHome ? 'active' : ''}`}>Home</Link>

                        {isHome && (
                            <>
                                <a href="#listings" className="nav-item-anim">Listings</a>
                                <a href="#locations" className="nav-item-anim">Locations</a>
                                <a href="#about" className="nav-item-anim">About</a>
                            </>
                        )}

                        <Link to="/wishlist" className={`nav-item-anim wishlist-nav ${location.pathname === '/wishlist' ? 'active' : ''}`}>
                            <Heart
                                size={18}
                                className="heart-icon"
                                fill={wishlist.length > 0 ? "var(--primary-color)" : "none"}
                                color={wishlist.length > 0 ? "var(--primary-color)" : "currentColor"}
                            />
                            <span>Wishlist {wishlist.length > 0 ? `(${wishlist.length})` : ''}</span>
                        </Link>

                        <a href="#contact" className="btn btn-primary nav-contact-btn">Contact Us</a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
