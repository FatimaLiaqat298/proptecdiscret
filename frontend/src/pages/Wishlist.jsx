import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Heart } from 'lucide-react';

const WishlistPage = () => {
    const { wishlist } = useWishlist();

    return (
        <div className="wishlist-page">
            <Navbar />
            <section className="container" style={{ paddingTop: '140px', minHeight: '80vh' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
                    <Heart size={32} className="heart-icon" fill="var(--primary-color)" color="var(--primary-color)" />
                    <h1 className="h1">My Wishlist</h1>
                </div>

                {wishlist.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '100px 0' }}>
                        <p className="text-lg">Your wishlist is empty.</p>
                        <a href="/search" className="btn btn-primary" style={{ marginTop: '20px' }}>Explore Properties</a>
                    </div>
                ) : (
                    <div className="listings-grid">
                        {wishlist.map((item) => (
                            <PropertyCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default WishlistPage;
