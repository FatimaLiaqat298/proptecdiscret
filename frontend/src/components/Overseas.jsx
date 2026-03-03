import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, Zap, ArrowRight, TrendingUp } from 'lucide-react';

const CardFeature = ({ icon: Icon, title, desc }) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{
            width: 42, height: 42, borderRadius: 12, background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
        }}>
            <Icon size={20} color="#CFCFCF" />
        </div>
        <div>
            <div style={{ color: '#F9F9F9', fontWeight: 600, fontSize: '0.95rem', marginBottom: 4 }}>{title}</div>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5 }}>{desc}</div>
        </div>
    </div>
);

const Overseas = () => {
    return (
        <section style={{ padding: '120px 0', background: '#F9F9F9' }}>
            <div className="container">
                <div style={{ position: 'relative' }}>

                    {/* Main Container Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="overseas-card"
                    >
                        {/* Abstract Background Element */}
                        <div className="overseas-bg-abstract" />

                        {/* Left Side: Content */}
                        <div style={{ flex: '1 1 400px', zIndex: 5 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span style={{
                                    display: 'inline-block', padding: '6px 16px', borderRadius: 100,
                                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                                    color: '#CFCFCF', fontSize: '0.75rem', fontWeight: 700,
                                    letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 24
                                }}>
                                    Borderless Investing
                                </span>

                                <h2 style={{
                                    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                                    fontWeight: 800, color: '#f8fafc',
                                    lineHeight: 1.1, marginBottom: 24,
                                    letterSpacing: '-0.03em'
                                }}>
                                    Invest in Pakistan<br />
                                    <span style={{ color: '#717171' }}>Without Boundaries</span>
                                </h2>

                                <p style={{
                                    color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8,
                                    maxWidth: 480, marginBottom: 48
                                }}>
                                    Bridge the gap between your location and the best opportunities.
                                    Verified listings, secure documentation, and global support designed for the overseas community.
                                </p>

                                <div className="overseas-features-grid">
                                    <CardFeature icon={Globe} title="Remote Access" desc="Manage documentation from anywhere." />
                                    <CardFeature icon={ShieldCheck} title="Verified Only" desc="100% physically inspected properties." />
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Link to="/contact" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: 12,
                                        padding: '20px 48px', borderRadius: 100,
                                        background: '#F9F9F9', color: '#100F0F',
                                        fontWeight: 800, fontSize: '1.05rem', textDecoration: 'none',
                                        boxShadow: '0 10px 40px rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease',
                                        width: 'fit-content'
                                    }}>
                                        Start Your Journey
                                        <ArrowRight size={20} />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Side: Visual Stack */}
                        <div className="overseas-visual-stack">
                            {/* Main Image Layer */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="overseas-main-img-box"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1560515636-474c10004b79?q=80&w=800"
                                    alt="Global Banking"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))' }} />
                            </motion.div>

                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="overseas-floating-badge-top"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#F9F9F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <TrendingUp size={20} color="#100F0F" />
                                    </div>
                                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>92%</div>
                                </div>
                                <div style={{ color: '#CFCFCF', fontSize: '0.85rem', fontWeight: 500 }}>Customer Confidence Score</div>
                            </motion.div>

                            {/* Bottom Secondary Card */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="overseas-floating-badge-bottom"
                            >
                                <Zap size={18} color="#CFCFCF" />
                                <div style={{ color: '#F9F9F9', fontSize: '0.9rem', fontWeight: 600 }}>Real-time ROI Tracking</div>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Background Subtle Numbers */}
                    <div style={{
                        position: 'absolute', bottom: -40, right: 100, fontSize: '12rem',
                        fontWeight: 900, color: '#000', opacity: 0.03, pointerEvents: 'none'
                    }}>
                        PK
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overseas;
