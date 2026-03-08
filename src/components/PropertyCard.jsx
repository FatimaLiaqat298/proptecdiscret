import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Bed, Bath, Square, MapPin } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

const PropertyCard = ({ item, isShowcase, darkTheme }) => {
    const { toggleWishlist, isWishlisted } = useWishlist();

    const propertyId = item.id || item.title?.toLowerCase().replace(/\s+/g, '-');
    const itemWithId = { ...item, id: propertyId };
    const active = isWishlisted(propertyId);

    const handleToggle = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(itemWithId);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: darkTheme ? -10 : -8, scale: darkTheme ? 1.02 : 1.01 }}
            className={`property-card ${darkTheme ? 'dark-theme' : ''}`}
            style={{
                position: 'relative',
                background: darkTheme ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(16px) saturate(140%)',
                WebkitBackdropFilter: 'blur(16px) saturate(140%)',
                border: darkTheme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                borderRadius: '24px',
                overflow: 'hidden'
            }}
        >
            {/* Wishlist heart button */}
            <button
                className={`wishlist-btn-circle ${active ? 'active' : ''}`}
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    zIndex: 10,
                    width: '36px',
                    height: '36px',
                    backgroundColor: darkTheme ? 'rgba(0,0,0,0.5)' : '#fff',
                    backdropFilter: 'blur(6px)',
                    border: 'none',
                }}
                onClick={handleToggle}
            >
                <Heart
                    size={18}
                    fill={active ? "#b61113" : "none"}
                    color={active ? "#b61113" : darkTheme ? "#fff" : "#100F0F"}
                />
            </button>

            <Link
                to={`/property/${propertyId}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
                {/* Property Image */}
                <div style={{ height: '220px', width: '100%', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                        src={item.img}
                        alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        className="card-image"
                    />
                </div>

                {/* Card Content */}
                <div className="property-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Tags */}
                    <div className="property-tags">
                        {item.type && (
                            <span
                                className="tag"
                                style={{
                                    background: darkTheme ? 'rgba(16,15,15,0.4)' : 'rgba(207,207,207,0.2)',
                                    color: darkTheme ? '#F9F9F9' : '#100F0F',
                                    border: darkTheme ? '1px solid rgba(255,255,255,0.2)' : '1px solid #CFCFCF',
                                    fontWeight: 700
                                }}
                            >
                                {item.type}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3
                        className="property-title"
                        style={{ color: darkTheme ? '#f1f5f9' : 'var(--text-primary)', marginBottom: '8px' }}
                    >
                        {item.title}
                    </h3>

                    {/* Location */}
                    {item.location && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '0.85rem',
                            color: darkTheme ? '#94a3b8' : '#64748b',
                            marginBottom: '14px'
                        }}>
                            <MapPin size={13} /> {item.location}
                        </div>
                    )}

                    {/* Beds / Baths / Area for dark theme showcase layout */}
                    {darkTheme && (Number(item.beds) > 0 || Number(item.baths) > 0) && (
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', color: '#94a3b8', fontSize: '0.85rem' }}>
                            {Number(item.beds) > 0 && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Bed size={14} /> {item.beds}
                                </span>
                            )}
                            {Number(item.baths) > 0 && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Bath size={14} /> {item.baths}
                                </span>
                            )}
                            {item.sqft && (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Square size={14} /> {item.sqft}
                                </span>
                            )}
                        </div>
                    )}

                    {/* Price */}
                    <div
                        className="property-price"
                        style={{ color: '#b61113', marginTop: 'auto', fontWeight: 800, fontSize: '1.2rem' }}
                    >
                        {item.price}
                    </div>

                    {/* View Details button */}
                    {isShowcase && (
                        <div style={{ marginTop: '20px' }}>
                            <motion.span
                                whileHover={{ scale: 1.05, background: '#b61113', color: '#fff' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    width: '100%',
                                    padding: '12px 0',
                                    borderRadius: '100px',
                                    border: `1.5px solid #b61113`,
                                    background: 'transparent',
                                    color: '#b61113',
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                View Details →
                            </motion.span>
                        </div>
                    )}
                </div>
            </Link>
        </motion.div>
    );
};

export default PropertyCard;
