import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ─── Properties shown in the alternating layout ────────────────────────────────
const SHOWCASE_ITEMS = [
    {
        id: 'modern-family-apartment',
        title: "Modern Family Apartment",
        desc: "A well-located home built for practical living, comfort, and everyday convenience.",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900",
        imageLeft: true,
    },
    {
        id: 'luxury-urban-residence',
        title: "Luxury Urban Residence",
        desc: "A premium option for buyers who value design, access, and lifestyle.",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900",
        imageLeft: false,
    },
    {
        id: 'smart-investment-unit-gulberg',
        title: "Smart Investment Unit",
        desc: "A high-potential property for buyers focused on rental income and future appreciation.",
        img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=900",
        imageLeft: true,
    },
];

// ─── Single alternating row ────────────────────────────────────────────────────
const ShowcaseRow = ({ item, index }) => {
    const { id, title, desc, img, imageLeft } = item;

    const imageBlock = (
        <motion.div
            initial={{ opacity: 0, x: imageLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ flex: '0 0 48%', borderRadius: 24, overflow: 'hidden', maxHeight: 380 }}
        >
            <img
                src={img}
                alt={title}
                style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    borderRadius: 24, transition: 'transform 0.6s ease',
                    display: 'block'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
        </motion.div>
    );

    const textBlock = (
        <motion.div
            initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{
                flex: '0 0 44%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: imageLeft ? '0 0 0 20px' : '0 20px 0 0'
            }}
        >
            {/* Blue accent line */}
            <div style={{
                width: 48, height: 3,
                background: 'linear-gradient(90deg, #100F0F, #CFCFCF)',
                borderRadius: 2,
                marginBottom: 24
            }} />

            <h3 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 300,
                color: '#f8fafc',
                lineHeight: 1.2,
                marginBottom: 20,
                letterSpacing: '-0.02em',
                fontFamily: 'Georgia, "Times New Roman", serif'
            }}>
                {title}
            </h3>

            <p style={{
                color: '#94a3b8',
                fontSize: '1.05rem',
                lineHeight: 1.75,
                marginBottom: 28,
                maxWidth: 420
            }}>
                {desc}
            </p>

            <Link
                to={`/property/${id}`}
                style={{
                    color: '#CFCFCF',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    transition: 'gap 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '12px'}
                onMouseLeave={e => e.currentTarget.style.gap = '6px'}
            >
                See Property Details →
            </Link>
        </motion.div>
    );

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 60,
            justifyContent: 'space-between',
            padding: '60px 0',
            borderBottom: index < SHOWCASE_ITEMS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            flexWrap: 'wrap'
        }}>
            {imageLeft ? imageBlock : textBlock}
            {imageLeft ? textBlock : imageBlock}
        </div>
    );
};

// ─── Main Section ──────────────────────────────────────────────────────────────
const SpacesSection = () => (
    <section style={{ background: '#000', padding: '100px 0' }}>
        <div className="container">

            {/* Hero heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                style={{ textAlign: 'center', marginBottom: 20 }}
            >
                <h2 style={{
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    fontWeight: 300,
                    color: '#f8fafc',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    marginBottom: 0
                }}>
                    Spaces That Match<br />
                    The Way You Want to <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Live and Invest</em>
                </h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        color: '#CFCFCF',
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        maxWidth: 620,
                        margin: '24px auto 0'
                    }}
                >
                    From modern apartments to premium family homes, discover properties designed for comfort,
                    convenience, and stronger long-term value.
                </motion.p>
            </motion.div>

            {/* Alternating rows */}
            <div style={{ marginTop: 60 }}>
                {SHOWCASE_ITEMS.map((item, i) => (
                    <ShowcaseRow key={item.id} item={item} index={i} />
                ))}
            </div>

        </div>
    </section>
);

export default SpacesSection;
