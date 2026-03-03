import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const PropertyShowcase = () => {
    const listings = [
        {
            id: 'modern-family-apartment',
            title: "Modern Family Apartment",
            location: "DHA Phase 6, Lahore",
            price: "PKR 2.5 Crore",
            img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
            type: "Apartment",
            beds: 3, baths: 2, sqft: "1,850 sq ft"
        },
        {
            id: 'luxury-urban-residence',
            title: "Luxury Urban Residence",
            location: "F-7, Islamabad",
            price: "PKR 4.2 Crore",
            img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
            type: "Family Home",
            beds: 4, baths: 3, sqft: "2,400 sq ft"
        },
        {
            id: 'contemporary-living-space',
            title: "Contemporary Living Space",
            location: "Bahria Town, Karachi",
            price: "PKR 1.8 Crore",
            img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800",
            type: "Apartment",
            beds: 2, baths: 2, sqft: "1,450 sq ft"
        },
        {
            id: 'smart-investment-unit',
            title: "Smart Investment Unit",
            location: "Gulberg III, Lahore",
            price: "PKR 3.5 Crore",
            img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=800",
            type: "Investment",
            beds: 3, baths: 3, sqft: "2,100 sq ft"
        },
        {
            id: 'premium-villa',
            title: "Premium Villa",
            location: "E-11, Islamabad",
            price: "PKR 6.5 Crore",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
            type: "Family Home",
            beds: 5, baths: 4, sqft: "3,500 sq ft"
        },
        {
            id: 'commercial-plaza',
            title: "Commercial Plaza",
            location: "Main Boulevard, Lahore",
            price: "PKR 12 Crore",
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
            type: "Commercial",
            beds: 0, baths: 4, sqft: "8,000 sq ft"
        },
        {
            id: 'sea-view-penthouse',
            title: "Sea View Penthouse",
            location: "Clifton, Karachi",
            price: "PKR 8.9 Crore",
            img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800",
            type: "Apartment",
            beds: 4, baths: 3, sqft: "3,200 sq ft"
        },
        {
            id: 'luxury-farmhouse',
            title: "Luxury Farmhouse",
            location: "Bedian Road, Lahore",
            price: "PKR 5.2 Crore",
            img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800",
            type: "Farmhouse",
            beds: 5, baths: 5, sqft: "5,000 sq ft"
        },
        {
            id: 'corner-twin-house',
            title: "Corner Twin House",
            location: "G-13, Islamabad",
            price: "PKR 2.8 Crore",
            img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
            type: "Family Home",
            beds: 4, baths: 3, sqft: "2,000 sq ft"
        }
    ];

    return (
        <section style={{ backgroundColor: '#0a0f1a', padding: '100px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <motion.span
                        style={{ color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    >
                        Curated For You
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ color: '#f8fafc', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginTop: '10px', lineHeight: 1.1 }}
                    >
                        Best Opportunities Right Now
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: '#94a3b8', maxWidth: '680px', margin: '18px auto 0', fontSize: '1.05rem', lineHeight: 1.7 }}
                    >
                        Handpicked properties based on demand, location potential, lifestyle value, and long-term upside.
                        No clutter — just the opportunities worth your attention.
                    </motion.p>
                </div>

                <div className="listings-grid">
                    {listings.map((item, index) => (
                        <PropertyCard
                            key={item.id}
                            item={item}
                            isShowcase={true}
                            darkTheme={true}
                        />
                    ))}
                </div>

                <motion.div
                    style={{ textAlign: 'center', marginTop: '60px' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Link
                        to="/search"
                        style={{
                            display: 'inline-block',
                            padding: '18px 52px',
                            borderRadius: '100px',
                            background: '#fff',
                            color: '#0f172a',
                            fontWeight: 700,
                            fontSize: '1rem',
                            textDecoration: 'none',
                            border: '2px solid #fff',
                            letterSpacing: '0.02em',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        View All Listings
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default PropertyShowcase;
