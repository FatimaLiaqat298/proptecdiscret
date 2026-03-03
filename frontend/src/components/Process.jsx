import React from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, MessageCircle, CheckCircle2 } from 'lucide-react';

const STEPS = [
    {
        num: "01",
        icon: Search,
        iconColor: '#100F0F',
        iconBg: 'rgba(16,15,15,0.1)',
        title: "Discover",
        desc: "Browse verified opportunities based on your location, budget, and property goals.",
        accent: '#100F0F'
    },
    {
        num: "02",
        icon: SlidersHorizontal,
        iconColor: '#717171',
        iconBg: 'rgba(113,113,113,0.1)',
        title: "Compare",
        desc: "Understand the value, potential, and fit of each option with clear data.",
        accent: '#717171'
    },
    {
        num: "03",
        icon: MessageCircle,
        iconColor: '#100F0F',
        iconBg: 'rgba(16,15,15,0.1)',
        title: "Connect",
        desc: "Speak with our team for guided, pressure-free support at every step.",
        accent: '#100F0F'
    },
    {
        num: "04",
        icon: CheckCircle2,
        iconColor: '#717171',
        iconBg: 'rgba(113,113,113,0.1)',
        title: "Move Forward",
        desc: "Shortlist confidently and take decisive action toward your property goal.",
        accent: '#717171'
    },
];

// Connecting arrow between steps
const Arrow = () => (
    <div style={{
        display: 'flex', alignItems: 'center',
        color: '#cbd5e1', flexShrink: 0, marginTop: -20
    }}>
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H36M36 8L29 2M36 8L29 14" stroke="#717171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);

const Process = () => (
    <section style={{ background: '#F0F0F0', padding: '100px 0' }}>
        <div className="container">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: 70 }}
            >
                <span style={{
                    display: 'inline-block', padding: '6px 18px', borderRadius: 100,
                    background: '#F9F9F9', color: '#100F0F',
                    fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', marginBottom: 16, border: '1px solid #CFCFCF'
                }}>
                    Simple Process
                </span>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                    fontWeight: 800, color: '#100F0F',
                    lineHeight: 1.15, marginBottom: 18
                }}>
                    How It Works
                </h2>
                <p style={{
                    color: '#64748b', fontSize: '1.05rem', maxWidth: 580,
                    margin: '0 auto', lineHeight: 1.7
                }}>
                    Four simple steps to finding, verifying, and securing your next property — with expert guidance at every stage.
                </p>
            </motion.div>

            {/* Steps Row */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 0,
                overflowX: 'auto',
                paddingBottom: 8
            }}>
                {STEPS.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <React.Fragment key={i}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.3, duration: 0.5 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                                style={{
                                    flex: '1 1 220px',
                                    background: '#fff',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: 24,
                                    padding: '36px 28px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'default',
                                    transition: 'all 0.35s ease',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
                                }}
                            >
                                {/* Large step number — watermark */}
                                <div style={{
                                    position: 'absolute', top: 16, right: 20,
                                    fontSize: '4.5rem', fontWeight: 900,
                                    color: '#000', opacity: 0.15,
                                    lineHeight: 1, userSelect: 'none',
                                    fontVariantNumeric: 'tabular-nums'
                                }}>
                                    {step.num}
                                </div>

                                {/* Colored top accent line */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: 4, background: step.accent, borderRadius: '24px 24px 0 0'
                                }} />

                                {/* Icon circle */}
                                <div style={{
                                    width: 52, height: 52, borderRadius: '50%',
                                    background: step.iconBg,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: 22
                                }}>
                                    <Icon size={24} color={step.iconColor} strokeWidth={2} />
                                </div>

                                {/* Step number pill */}
                                <span style={{
                                    display: 'inline-block', padding: '2px 10px',
                                    borderRadius: 100, fontSize: '0.72rem',
                                    fontWeight: 700, letterSpacing: '0.08em',
                                    background: step.iconBg, color: step.accent,
                                    marginBottom: 12
                                }}>
                                    STEP {step.num}
                                </span>

                                <h4 style={{
                                    fontWeight: 800, fontSize: '1.2rem',
                                    color: '#0f172a', marginBottom: 12
                                }}>
                                    {step.title}
                                </h4>

                                <p style={{
                                    color: '#475569', fontSize: '0.92rem',
                                    lineHeight: 1.7, fontWeight: 500
                                }}>
                                    {step.desc}
                                </p>
                            </motion.div>

                            {/* Arrow connector (not after last) */}
                            {i < STEPS.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, x: -10 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.3 + 0.2, duration: 0.4 }}
                                    style={{ padding: '0 8px', paddingTop: 60 }}
                                >
                                    <Arrow />
                                </motion.div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

        </div>
    </section>
);

export default Process;
