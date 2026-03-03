import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

// ─── City listings data ────────────────────────────────────────────────────────
const CITY_LISTINGS = {
    Lahore: [
        {
            id: 'loc-lhr-1', title: "Modern Family Apartment",
            category: "Apartment", price: "PKR 2.5 Crore",
            img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=700",
            beds: 3, baths: 2, sqft: "1,850 sq ft"
        },
        {
            id: 'loc-lhr-2', title: "Smart Investment Unit",
            category: "Investment", price: "PKR 3.5 Crore",
            img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=700",
            beds: 3, baths: 3, sqft: "2,100 sq ft"
        },
        {
            id: 'loc-lhr-3', title: "Affordable Studio Apartment",
            category: "Rental", price: "PKR 75 Lac",
            img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=700",
            beds: 1, baths: 1, sqft: "600 sq ft"
        },
        {
            id: 'loc-lhr-4', title: "Commercial Plaza",
            category: "Commercial", price: "PKR 12 Crore",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=700",
            beds: 0, baths: 4, sqft: "8,000 sq ft"
        },
        {
            id: 'loc-lhr-5', title: "Luxury Farmhouse",
            category: "Farmhouse", price: "PKR 5.2 Crore",
            img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=700",
            beds: 5, baths: 5, sqft: "5,000 sq ft"
        },
    ],
    Islamabad: [
        {
            id: 'loc-isb-1', title: "Luxury Urban Residence",
            category: "Family Home", price: "PKR 4.2 Crore",
            img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=700",
            beds: 4, baths: 3, sqft: "2,400 sq ft"
        },
        {
            id: 'loc-isb-2', title: "Premium Villa",
            category: "Family Home", price: "PKR 6.5 Crore",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=700",
            beds: 5, baths: 4, sqft: "3,500 sq ft"
        },
        {
            id: 'loc-isb-3', title: "Corner Twin House",
            category: "Family Home", price: "PKR 2.8 Crore",
            img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=700",
            beds: 4, baths: 3, sqft: "2,000 sq ft"
        },
        {
            id: 'loc-isb-4', title: "Furnished Apartment for Rent",
            category: "Rental", price: "PKR 95,000/mo",
            img: "https://images.unsplash.com/photo-1536376074432-bc62fa998a4d?q=80&w=700",
            beds: 2, baths: 2, sqft: "1,200 sq ft"
        },
    ],
    Rawalpindi: [
        {
            id: 'loc-rwp-1', title: "Contemporary Family Home",
            category: "Family Home", price: "PKR 1.9 Crore",
            img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=700",
            beds: 3, baths: 2, sqft: "1,600 sq ft"
        },
        {
            id: 'loc-rwp-2', title: "Budget Apartment",
            category: "Apartment", price: "PKR 65 Lac",
            img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=700",
            beds: 2, baths: 1, sqft: "900 sq ft"
        },
        {
            id: 'loc-rwp-3', title: "Residential Plot",
            category: "Plot", price: "PKR 80 Lac",
            img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=700",
            beds: 0, baths: 0, sqft: "1,800 sq ft"
        },
    ],
    Karachi: [
        {
            id: 'loc-khi-1', title: "Sea View Penthouse",
            category: "Apartment", price: "PKR 8.9 Crore",
            img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=700",
            beds: 4, baths: 3, sqft: "3,200 sq ft"
        },
        {
            id: 'loc-khi-2', title: "DHA Phase Apartment",
            category: "Apartment", price: "PKR 2.2 Crore",
            img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=700",
            beds: 2, baths: 2, sqft: "1,100 sq ft"
        },
        {
            id: 'loc-khi-3', title: "Studio Flat for Rent",
            category: "Rental", price: "PKR 35,000/mo",
            img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=700",
            beds: 1, baths: 1, sqft: "550 sq ft"
        },
        {
            id: 'loc-khi-4', title: "Retail Shop - Ground Floor",
            category: "Commercial", price: "PKR 2.2 Crore",
            img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=700",
            beds: 0, baths: 1, sqft: "800 sq ft"
        },
    ],
    Faisalabad: [
        {
            id: 'loc-fsd-1', title: "City Center Apartment",
            category: "Apartment", price: "PKR 1.1 Crore",
            img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=700",
            beds: 2, baths: 2, sqft: "1,200 sq ft"
        },
        {
            id: 'loc-fsd-2', title: "Industrial Warehouse",
            category: "Commercial", price: "PKR 7.5 Crore",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=700",
            beds: 0, baths: 2, sqft: "12,000 sq ft"
        },
        {
            id: 'loc-fsd-3', title: "Suburban Family Home",
            category: "Family Home", price: "PKR 1.6 Crore",
            img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=700",
            beds: 3, baths: 2, sqft: "1,800 sq ft"
        },
    ],
    "Investment Zones": [
        {
            id: 'loc-inv-1', title: "Residential Plot - 10 Marla",
            category: "Investment", price: "PKR 1.6 Crore",
            img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=700",
            beds: 0, baths: 0, sqft: "2,722 sq ft"
        },
        {
            id: 'loc-inv-2', title: "High-Rise Commercial Unit",
            category: "Commercial", price: "PKR 9 Crore",
            img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=700",
            beds: 0, baths: 2, sqft: "3,500 sq ft"
        },
        {
            id: 'loc-inv-3', title: "Prime Corner Plot",
            category: "Investment", price: "PKR 95 Lac",
            img: "https://images.unsplash.com/photo-1615473967657-f33b40e7e936?q=80&w=700",
            beds: 0, baths: 0, sqft: "1,800 sq ft"
        },
    ]
};

const CITIES = ['Lahore', 'Islamabad', 'Rawalpindi', 'Karachi', 'Faisalabad', 'Investment Zones'];
const SHOW_LIMIT = 3; // max cards shown before "View All"

// ─── Small property card ───────────────────────────────────────────────────────
const SmallCard = ({ item }) => {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const active = isWishlisted(item.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -6, boxShadow: '0 14px 40px rgba(0,0,0,0.2)' }}
            style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 18,
                overflow: 'hidden',
                position: 'relative',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
        >
            {/* Wishlist */}
            <button
                onClick={(e) => { e.preventDefault(); toggleWishlist(item); }}
                style={{
                    position: 'absolute', top: 10, right: 10, zIndex: 10,
                    width: 32, height: 32, borderRadius: '50%', border: 'none',
                    background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                }}
            >
                <Heart size={15} fill={active ? '#ef4444' : 'none'} color={active ? '#ef4444' : '#fff'} />
            </button>

            <Link to={`/property/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* Image */}
                <div style={{ height: 160, overflow: 'hidden' }}>
                    <img src={item.img} alt={item.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </div>
                {/* Info */}
                <div style={{ padding: '14px 16px' }}>
                    <span style={{
                        display: 'inline-block', padding: '3px 10px', borderRadius: 50,
                        background: 'rgba(207,207,207,0.15)', color: '#CFCFCF',
                        fontSize: '0.72rem', fontWeight: 700, marginBottom: 8
                    }}>{item.category}</span>
                    <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', marginBottom: 6 }}>
                        {item.title}
                    </h4>
                    {(item.beds > 0 || item.baths > 0) && (
                        <div style={{ display: 'flex', gap: 12, fontSize: '0.76rem', color: '#94a3b8', marginBottom: 10 }}>
                            {item.beds > 0 && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Bed size={12} /> {item.beds}</span>}
                            {item.baths > 0 && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Bath size={12} /> {item.baths}</span>}
                            {item.sqft && <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Square size={12} /> {item.sqft}</span>}
                        </div>
                    )}
                    <div style={{ fontWeight: 800, fontSize: '1rem', color: '#CFCFCF' }}>{item.price}</div>
                </div>
            </Link>
        </motion.div>
    );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const LocationDiscovery = () => {
    const [selected, setSelected] = useState(null);

    const listings = selected ? CITY_LISTINGS[selected] || [] : [];
    const shown = listings.slice(0, SHOW_LIMIT);
    const hasMore = listings.length > SHOW_LIMIT;

    return (
        <section className="location-section" id="locations" style={{ minHeight: 'auto', padding: '80px 0' }}>
            <div className="container">

                {/* ── Layout splits when a city is selected ── */}
                <div style={{
                    display: 'flex',
                    gap: 60,
                    alignItems: 'flex-start',
                    transition: 'all 0.5s ease',
                    flexWrap: 'wrap'
                }}>

                    {/* LEFT — always visible, shrinks when city is selected */}
                    <motion.div
                        layout
                        style={{
                            flex: selected ? '0 0 220px' : '1 1 100%',
                            transition: 'flex 0.5s ease',
                            minWidth: selected ? 220 : 'unset',
                            marginBottom: selected ? 0 : 40
                        }}
                    >
                        {/* Heading */}
                        <AnimatePresence mode="wait">
                            {!selected ? (
                                <motion.div
                                    key="full-header"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                >
                                    <h2 className="h2" style={{ color: '#f8fafc' }}>
                                        Cities Where Smart Real Estate Moves Faster
                                    </h2>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12, fontSize: '1.05rem' }}>
                                        Explore high-potential locations with better access, stronger demand, and future growth.
                                    </p>
                                    <div style={{
                                        width: 48, height: 3,
                                        background: 'linear-gradient(90deg, #100F0F, #CFCFCF)',
                                        borderRadius: 2,
                                        marginBottom: 24
                                    }} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="mini-header"
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                                >
                                    <p style={{ color: '#CFCFCF', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
                                        Exploring
                                    </p>
                                    <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: 24 }}>
                                        {selected}
                                    </h3>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* City Pills */}
                        <div style={{
                            display: 'flex',
                            gap: 12,
                            flexWrap: selected ? 'nowrap' : 'wrap',
                            flexDirection: selected ? 'column' : 'row',
                            justifyContent: selected ? 'flex-start' : 'center',
                            marginTop: selected ? 0 : 32,
                            marginBottom: selected ? 0 : 60
                        }}>
                            {CITIES.map(city => {
                                const isActive = selected === city;
                                return (
                                    <motion.button
                                        key={city}
                                        layout
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setSelected(isActive ? null : city)}
                                        style={{
                                            padding: selected ? '10px 18px' : '14px 30px',
                                            borderRadius: 100,
                                            border: isActive ? '1.5px solid #F9F9F9' : '1px solid rgba(255,255,255,0.15)',
                                            background: isActive ? '#f9f9f9' : 'rgba(255,255,255,0.12)',
                                            color: isActive ? '#000' : 'rgba(255,255,255,0.85)',
                                            fontWeight: isActive ? 700 : 500,
                                            fontSize: selected ? '0.85rem' : '1rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            backdropFilter: 'blur(6px)',
                                            textAlign: 'left',
                                            boxShadow: isActive ? '0 4px 20px rgba(255,255,255,0.2)' : 'none',
                                            display: 'flex', alignItems: 'center', gap: 6
                                        }}
                                    >
                                        {isActive && <ChevronRight size={14} />}
                                        {city}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Explore button — only when nothing selected */}
                        {!selected && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                style={{ textAlign: 'center', marginTop: 16 }}
                            >
                                <Link to="/search"
                                    style={{
                                        display: 'inline-block', padding: '14px 36px', borderRadius: 100,
                                        border: '1.5px solid rgba(255,255,255,0.25)', color: '#fff',
                                        fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
                                        transition: 'all 0.3s', backdropFilter: 'blur(6px)',
                                        background: 'rgba(255,255,255,0.06)'
                                    }}
                                >
                                    Explore Locations
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* RIGHT — City listings, slides in from the right */}
                    <AnimatePresence mode="wait">
                        {selected && (
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 120 }}
                                style={{ flex: '1 1 0', minWidth: 0 }}
                            >
                                {/* Count + View All */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                                        <strong style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>{listings.length}</strong> &nbsp;properties in{' '}
                                        <strong style={{ color: '#fff' }}>{selected}</strong>
                                    </p>
                                    <Link
                                        to={`/search?location=${encodeURIComponent(selected)}`}
                                        style={{
                                            color: '#CFCFCF', fontWeight: 700, fontSize: '0.875rem',
                                            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4
                                        }}
                                    >
                                        View All <ChevronRight size={16} />
                                    </Link>
                                </div>

                                {/* Cards grid */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                    gap: 20
                                }}>
                                    <AnimatePresence>
                                        {shown.map((item, i) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.08 }}
                                            >
                                                <SmallCard item={item} />
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* View All button if more listings exist */}
                                {hasMore && (
                                    <motion.div
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        transition={{ delay: 0.25 }}
                                        style={{ marginTop: 24 }}
                                    >
                                        <Link
                                            to={`/search?location=${encodeURIComponent(selected)}`}
                                            style={{
                                                display: 'inline-flex', alignItems: 'center', gap: 8,
                                                padding: '12px 28px', borderRadius: 100,
                                                background: '#f9f9f9', color: '#000',
                                                fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
                                                boxShadow: '0 4px 20px rgba(255,255,255,0.2)'
                                            }}
                                        >
                                            View all {listings.length} properties in {selected} <ChevronRight size={16} />
                                        </Link>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default LocationDiscovery;
