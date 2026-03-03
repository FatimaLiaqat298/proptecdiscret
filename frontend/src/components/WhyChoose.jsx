import React from 'react';
import { motion } from 'framer-motion';

// ─── Feature data ──────────────────────────────────────────────────────────────
const FEATURES = [
    {
        // Black circle
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
        iconBg: '#100F0F',
        iconColor: '#F9F9F9',
        title: "Verified Opportunities",
        desc: "We focus on quality listings and clearer information, so you spend less time filtering and more time deciding."
    },
    {
        // Silver circle
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        iconBg: '#CFCFCF',
        iconColor: '#100F0F',
        title: "Guided Decision-Making",
        desc: "From discovery to discussion, we help you understand the value behind the property — not just the pitch."
    },
    {
        // Gray circle
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
            </svg>
        ),
        iconBg: '#F0F0F0',
        iconColor: '#100F0F',
        title: "Modern Buying Experience",
        desc: "A cleaner, faster, and more transparent way to search, compare, and move forward."
    },
];

const STATS = [
    { value: "500+", label: "buyers guided" },
    { value: "50+", label: "verified opportunities" },
    { value: "Growing", label: "trust across modern real estate buyers" },
];

// ─── Component ─────────────────────────────────────────────────────────────────
const WhyChoose = () => (
    <section id="about" style={{ padding: '100px 0 80px' }}>
        <div className="container">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: 16 }}
            >
                <p style={{ color: '#100F0F', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Our Promise
                </p>
                <h2 className="h2" style={{ marginBottom: 18 }}>Why Buyers Choose Discret</h2>
                <p style={{ color: '#64748b', maxWidth: 680, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    Real estate should feel structured, secure, and understandable. Discret Proptech combines smart
                    systems, verified options, and human guidance to help you move with confidence.
                </p>
            </motion.div>

            {/* Feature Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 40,
                margin: '60px 0 0'
            }}>
                {FEATURES.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                        style={{ textAlign: 'center', padding: '0 16px' }}
                    >
                        {/* Colored circular icon */}
                        <div style={{
                            width: 88, height: 88, borderRadius: '50%',
                            background: f.iconBg,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 24px',
                            color: f.iconColor,
                            boxShadow: `0 8px 24px ${f.iconBg}`
                        }}>
                            {f.icon}
                        </div>
                        <h4 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 14, color: '#100F0F' }}>
                            {f.title}
                        </h4>
                        <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.75, maxWidth: 300, margin: '0 auto' }}>
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Stats Banner */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    background: '#100F0F',
                    borderRadius: 24,
                    marginTop: 80,
                    overflow: 'hidden'
                }}
            >
                {STATS.map((s, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '52px 40px',
                            textAlign: 'center',
                            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none'
                        }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            fontWeight: 900,
                            color: '#fff',
                            marginBottom: 10,
                            lineHeight: 1
                        }}>{s.value}</h3>
                        <p style={{ color: '#64748b', fontSize: '1rem', fontWeight: 500 }}>{s.label}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default WhyChoose;
