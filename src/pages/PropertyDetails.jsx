import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'framer-motion';

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { toggleWishlist, isWishlisted } = useWishlist();

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Back handler
    const handleBack = () => {
        navigate(-1);
    };

    const property = {
        id: id,
        title: "Modern Family Apartment",
        price: "PKR 2.5 Crore",
        location: "DHA Phase 6, Lahore",
        beds: 3,
        baths: 2,
        sqft: 1850,
        desc: "A well-located home built for practical living, comfort, and everyday convenience. This modern apartment features spacious rooms, contemporary finishes, and access to premium amenities. Perfect for families looking for a quality lifestyle in one of Lahore's most sought-after locations.",
        features: ["Parking", "Garden", "Gym", "Security", "Swimming Pool"],
        images: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1536376074432-bc62fa998a4d?q=80&w=800",
            "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800"
        ],
        img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2000&auto=format&fit=crop" // for wishlist thumbnail
    };

    const active = isWishlisted(id);

    return (
        <div className="property-details-page">
            <Navbar />

            {/* Sticky/Fixed Back Button */}
            <div className="sticky-back-container" style={{ zIndex: 9999999 }}>
                <motion.button 
                    className="sticky-back-btn"
                    whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleBack}
                    title="Go Back"
                >
                    <ArrowLeft size={24} />
                </motion.button>
            </div>

            <section className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>


                <div className="details-layout">
                    {/* Left Side - Large Image + Gallery */}
                    <div className="details-visuals">
                        <div className="main-image-wrapper" style={{ borderRadius: '24px', overflow: 'hidden', height: '550px' }}>
                            <img src={property.images[0]} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="gallery-grid">
                            {property.images.slice(1).map((img, i) => (
                                <img key={i} src={img} alt="Gallery" className="sub-image" />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Info Column */}
                    <div className="details-info-side">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h1 className="h2" style={{ fontWeight: '700', marginBottom: '8px' }}>{property.title}</h1>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{property.location}</p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`wishlist-btn-circle ${active ? 'active' : ''}`}
                                onClick={() => toggleWishlist(property)}
                            >
                                <Heart size={22} className="heart-icon" fill={active ? "#ff4d4d" : "none"} color={active ? "#ff4d4d" : "currentColor"} />
                            </motion.button>
                        </div>

                        <div className="details-price">{property.price}</div>

                        <div className="stats-grid">
                            <div className="stat-box">
                                <span className="value">{property.beds}</span>
                                <span className="label">Bedrooms</span>
                            </div>
                            <div className="stat-box">
                                <span className="value">{property.baths}</span>
                                <span className="label">Bathrooms</span>
                            </div>
                            <div className="stat-box">
                                <span className="value">{property.sqft.toLocaleString()}</span>
                                <span className="label">Sq Ft</span>
                            </div>
                        </div>

                        <div className="details-desc-box">
                            <h3 className="h3" style={{ marginBottom: '15px', fontSize: '1.5rem' }}>Description</h3>
                            <p className="text-lg" style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1.1rem' }}>
                                {property.desc}
                            </p>
                        </div>

                        <h3 className="h3" style={{ marginTop: '30px', marginBottom: '15px', fontSize: '1.5rem' }}>Features</h3>
                        <div className="features-pills">
                            {property.features.map(f => (
                                <span key={f} className="feature-pill">{f}</span>
                            ))}
                        </div>

                        <div className="action-buttons">
                            <motion.button 
                                whileHover={{ scale: 1.02, backgroundColor: '#000', color: '#fff' }}
                                whileTap={{ scale: 0.98, backgroundColor: '#000', color: '#fff' }}
                                className="btn-schedule"
                            >
                                Schedule a Tour
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.02, backgroundColor: '#000', color: '#fff' }}
                                whileTap={{ scale: 0.98, backgroundColor: '#000', color: '#fff' }}
                                className="btn-contact-agent"
                            >
                                Contact Agent
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PropertyDetails;
