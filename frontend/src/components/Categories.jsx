import React, { useState } from 'react';
import { Building2, Home, MapPin, Banknote, Store, ChevronLeft, ChevronRight, Heart, Bed, Bath, Square } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';

// ─── Category Data ─────────────────────────────────────────────────────────
const CATEGORY_DATA = {
    Apartments: {
        icon: Building2,
        color: '#100F0F',
        listings: [
            {
                id: 'cat-apt-1',
                title: "Modern Family Apartment",
                location: "DHA Phase 6, Lahore",
                price: "PKR 2.5 Crore",
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900",
                beds: 3, baths: 2, sqft: "1,850 sq ft"
            },
            {
                id: 'cat-apt-2',
                title: "Contemporary Living Space",
                location: "Bahria Town, Karachi",
                price: "PKR 1.8 Crore",
                img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900",
                beds: 2, baths: 2, sqft: "1,450 sq ft"
            },
            {
                id: 'cat-apt-3',
                title: "Sea View Penthouse",
                location: "Clifton, Karachi",
                price: "PKR 8.9 Crore",
                img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=900",
                beds: 4, baths: 3, sqft: "3,200 sq ft"
            },
            {
                id: 'cat-apt-4',
                title: "Affordable Studio Apartment",
                location: "Johar Town, Lahore",
                price: "PKR 75 Lac",
                img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900",
                beds: 1, baths: 1, sqft: "600 sq ft"
            },
            {
                id: 'cat-apt-5',
                title: "Executive Apartment",
                location: "F-10, Islamabad",
                price: "PKR 3.1 Crore",
                img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900",
                beds: 3, baths: 2, sqft: "1,650 sq ft"
            },
        ]
    },
    "Family Homes": {
        icon: Home,
        color: '#717171',
        listings: [
            {
                id: 'cat-home-1',
                title: "Luxury Urban Residence",
                location: "F-7, Islamabad",
                price: "PKR 4.2 Crore",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900",
                beds: 4, baths: 3, sqft: "2,400 sq ft"
            },
            {
                id: 'cat-home-2',
                title: "Premium Villa",
                location: "E-11, Islamabad",
                price: "PKR 6.5 Crore",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900",
                beds: 5, baths: 4, sqft: "3,500 sq ft"
            },
            {
                id: 'cat-home-3',
                title: "Corner Twin House",
                location: "G-13, Islamabad",
                price: "PKR 2.8 Crore",
                img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=900",
                beds: 4, baths: 3, sqft: "2,000 sq ft"
            },
            {
                id: 'cat-home-4',
                title: "Elegant Family Bungalow",
                location: "Model Town, Lahore",
                price: "PKR 5.8 Crore",
                img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=900",
                beds: 5, baths: 4, sqft: "4,200 sq ft"
            },
        ]
    },
    Plots: {
        icon: MapPin,
        color: '#CFCFCF',
        listings: [
            {
                id: 'cat-plot-1',
                title: "Residential Plot - 10 Marla",
                location: "DHA Phase 9, Lahore",
                price: "PKR 1.6 Crore",
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=900",
                beds: 0, baths: 0, sqft: "2,722 sq ft"
            },
            {
                id: 'cat-plot-2',
                title: "Prime Corner Plot",
                location: "B-17, Islamabad",
                price: "PKR 95 Lac",
                img: "https://images.unsplash.com/photo-1615473967657-f33b40e7e936?q=80&w=900",
                beds: 0, baths: 0, sqft: "1,800 sq ft"
            },
            {
                id: 'cat-plot-3',
                title: "Commercial Plot - Main Road",
                location: "Gulberg, Lahore",
                price: "PKR 4.5 Crore",
                img: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=900",
                beds: 0, baths: 0, sqft: "5,445 sq ft"
            },
        ]
    },
    Commercial: {
        icon: Store,
        color: '#9F9F9F',
        listings: [
            {
                id: 'cat-com-1',
                title: "Commercial Plaza",
                location: "Main Boulevard, Lahore",
                price: "PKR 12 Crore",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900",
                beds: 0, baths: 4, sqft: "8,000 sq ft"
            },
            {
                id: 'cat-com-2',
                title: "IT Tower Office Space",
                location: "Gulberg II, Lahore",
                price: "PKR 4.8 Crore",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900",
                beds: 0, baths: 2, sqft: "2,800 sq ft"
            },
            {
                id: 'cat-com-3',
                title: "Retail Shop - Ground Floor",
                location: "Blue Area, Islamabad",
                price: "PKR 2.2 Crore",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900",
                beds: 0, baths: 1, sqft: "800 sq ft"
            },
        ]
    },
    Rental: {
        icon: Banknote,
        color: '#100F0F',
        listings: [
            {
                id: 'cat-rent-1',
                title: "Furnished Apartment for Rent",
                location: "E-7, Islamabad",
                price: "PKR 95,000 / month",
                img: "https://images.unsplash.com/photo-1536376074432-bc62fa998a4d?q=80&w=900",
                beds: 2, baths: 2, sqft: "1,200 sq ft"
            },
            {
                id: 'cat-rent-2',
                title: "Office Suite - For Rent",
                location: "DHA Phase 5, Lahore",
                price: "PKR 180,000 / month",
                img: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=900",
                beds: 0, baths: 2, sqft: "2,500 sq ft"
            },
            {
                id: 'cat-rent-3',
                title: "Studio Flat for Rent",
                location: "G-9, Islamabad",
                price: "PKR 35,000 / month",
                img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=900",
                beds: 1, baths: 1, sqft: "550 sq ft"
            },
            {
                id: 'cat-rent-4',
                title: "3-Bed House for Rent",
                location: "Gulberg III, Lahore",
                price: "PKR 120,000 / month",
                img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=900",
                beds: 3, baths: 2, sqft: "1,800 sq ft"
            },
        ]
    }
};

const CATS = [
    { key: 'Apartments', label: 'Apartments', icon: Building2 },
    { key: 'Family Homes', label: 'Family Homes', icon: Home },
    { key: 'Plots', label: 'Plots', icon: MapPin },
    { key: 'Commercial', label: 'Commercial', icon: Store },
    { key: 'Rental', label: 'Rental', icon: Banknote },
];

// ─── Mini property card inside Categories ─────────────────────────────────────
const CatCard = ({ item, accent }) => {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const active = isWishlisted(item.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35 }}
            style={{
                background: '#fff',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                border: '1px solid #CFCFCF',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
            }}
            whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.13)' }}
        >
            {/* Wishlist btn */}
            <button
                onClick={(e) => { e.preventDefault(); toggleWishlist(item); }}
                style={{
                    position: 'absolute', top: 12, right: 12, zIndex: 10,
                    width: 34, height: 34, borderRadius: '50%', border: 'none',
                    background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                }}
            >
                <Heart size={16} fill={active ? '#ef4444' : 'none'} color={active ? '#ef4444' : '#64748b'} />
            </button>

            <Link to={`/property/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* Image */}
                <div style={{ height: 200, overflow: 'hidden' }}>
                    <img src={item.img} alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                </div>

                {/* Info */}
                <div style={{ padding: '18px 20px 20px' }}>
                    <h4 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: 6, color: '#0f172a' }}>
                        {item.title}
                    </h4>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 4 }}>
                        <MapPin size={12} /> {item.location}
                    </p>

                    {(item.beds > 0 || item.baths > 0) && (
                        <div style={{ display: 'flex', gap: 14, fontSize: '0.8rem', color: '#94a3b8', marginBottom: 12 }}>
                            {item.beds > 0 && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Bed size={13} /> {item.beds}</span>}
                            {item.baths > 0 && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Bath size={13} /> {item.baths}</span>}
                            {item.sqft && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Square size={13} /> {item.sqft}</span>}
                        </div>
                    )}

                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: accent || '#100F0F' }}>
                        {item.price}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

// ─── Main Categories Component ────────────────────────────────────────────────
const CARDS_PER_PAGE = 3;

const Categories = () => {
    const [activeKey, setActiveKey] = useState(null);
    const [page, setPage] = useState(0);

    const handleSelect = (key) => {
        if (activeKey === key) {
            setActiveKey(null);
            setPage(0);
        } else {
            setActiveKey(key);
            setPage(0);
        }
    };

    const catData = activeKey ? CATEGORY_DATA[activeKey] : null;
    const listings = catData?.listings || [];
    const totalPages = Math.ceil(listings.length / CARDS_PER_PAGE);
    const visible = listings.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);
    const accent = catData?.color;

    return (
        <section className="categories" style={{ padding: '80px 0', background: '#F9F9F9' }}>
            <div className="container">
                {/* Heading */}
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 className="h2">Choose the Property That Fits Your Goal</h2>
                    <p className="text-secondary" style={{ marginTop: 8 }}>
                        Select a category below to explore matching properties instantly.
                    </p>
                </div>

                {/* Category Pills */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 40 }}>
                    {CATS.map(({ key, label, icon: Icon }) => {
                        const isActive = activeKey === key;
                        const catAccent = CATEGORY_DATA[key]?.color || '#100F0F';
                        return (
                            <motion.button
                                key={key}
                                onClick={() => handleSelect(key)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    padding: '14px 28px',
                                    borderRadius: 100,
                                    border: isActive ? `2px solid ${catAccent}` : '2px solid #e2e8f0',
                                    background: isActive ? catAccent : '#fff',
                                    color: isActive ? '#fff' : '#374151',
                                    fontWeight: 700, fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    boxShadow: isActive ? `0 6px 20px ${catAccent}20` : '0 2px 8px rgba(0,0,0,0.06)',
                                    transition: 'all 0.25s ease'
                                }}
                            >
                                <Icon size={18} />
                                {label}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Listings Panel */}
                <AnimatePresence mode="wait">
                    {activeKey && (
                        <motion.div
                            key={activeKey}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 24 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Results header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                                <p style={{ fontWeight: 600, color: '#64748b', fontSize: '0.95rem' }}>
                                    <span style={{ color: accent, fontWeight: 800, fontSize: '1.1rem' }}>{listings.length}</span> &nbsp;properties found for&nbsp;
                                    <strong style={{ color: '#0f172a' }}>{activeKey}</strong>
                                </p>

                                {/* Arrow controls */}
                                {totalPages > 1 && (
                                    <div style={{ display: 'flex', gap: 10 }}>
                                        <button
                                            onClick={() => setPage(p => Math.max(0, p - 1))}
                                            disabled={page === 0}
                                            style={{
                                                width: 42, height: 42, borderRadius: '50%', border: '2px solid #e2e8f0',
                                                background: page === 0 ? '#f8fafc' : '#fff',
                                                color: page === 0 ? '#cbd5e1' : '#0f172a',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: page === 0 ? 'not-allowed' : 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 4px' }}>
                                            {Array.from({ length: totalPages }).map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setPage(i)}
                                                    style={{
                                                        width: i === page ? 22 : 8, height: 8, borderRadius: 100,
                                                        border: '1px solid #CFCFCF', background: i === page ? accent : '#cbd5e1',
                                                        cursor: 'pointer', transition: 'all 0.3s ease', padding: 0
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                                            disabled={page === totalPages - 1}
                                            style={{
                                                width: 42, height: 42, borderRadius: '50%', border: '2px solid #e2e8f0',
                                                background: page === totalPages - 1 ? '#f8fafc' : '#fff',
                                                color: page === totalPages - 1 ? '#cbd5e1' : '#0f172a',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                cursor: page === totalPages - 1 ? 'not-allowed' : 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Cards grid — 3 per page */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={page}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                        gap: 28
                                    }}
                                >
                                    {visible.map(item => (
                                        <CatCard key={item.id} item={item} accent={accent} />
                                    ))}
                                </motion.div>
                            </AnimatePresence>

                            {/* View all link */}
                            <div style={{ textAlign: 'center', marginTop: 40 }}>
                                <Link
                                    to={`/search?type=${encodeURIComponent(activeKey)}`}
                                    style={{
                                        display: 'inline-block', padding: '14px 40px',
                                        borderRadius: 100, background: accent, color: '#fff',
                                        fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
                                        boxShadow: `0 6px 24px rgba(16,15,15,0.2)`
                                    }}
                                >
                                    View All {activeKey} →
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Categories;
