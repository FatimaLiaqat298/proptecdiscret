import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useState({
        location: 'Lahore',
        type: 'Apartment',
        budget: 'Any budget',
        purpose: 'Invest'
    });

    const handleSearch = () => {
        // Construct the search query string
        const query = new URLSearchParams(searchParams).toString();
        // Redirect to new search results page
        navigate(`/search?${query}`);
    };

    return (
        <section className="hero-full" id="home">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="hero-wrapper-full"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop')`,
                }}
            >
                <div className="container hero-inner">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Find Property With Clarity,<br /> Not Confusion.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            Discret Proptech helps you discover verified real estate opportunities with a modern, transparent, and guided buying experience.
                        </motion.p>
                    </div>

                    {/* Search Module Moved Inside Container */}
                    <motion.div
                        className="search-module"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="search-field">
                            <label>Location</label>
                            <select value={searchParams.location} onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}>
                                <option>Lahore</option><option>Islamabad</option><option>Karachi</option>
                            </select>
                        </div>
                        <div className="search-field">
                            <label>Property Type</label>
                            <select value={searchParams.type} onChange={(e) => setSearchParams({ ...searchParams, type: e.target.value })}>
                                <option>Apartment</option><option>Family Home</option><option>Commercial</option>
                            </select>
                        </div>
                        <div className="search-field">
                            <label>Budget</label>
                            <select value={searchParams.budget} onChange={(e) => setSearchParams({ ...searchParams, budget: e.target.value })}>
                                <option>Any budget</option><option>PKR 1M - 5M</option><option>PKR 5M - 20M</option>
                            </select>
                        </div>
                        <div className="search-field">
                            <label>Purpose</label>
                            <select value={searchParams.purpose} onChange={(e) => setSearchParams({ ...searchParams, purpose: e.target.value })}>
                                <option>Buy</option><option>Invest</option><option>Rent</option>
                            </select>
                        </div>
                        <button className="search-btn" onClick={handleSearch}>
                            <Search size={22} />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="container">
                <div className="trust-strip">Verified listings. Real guidance. Smarter decisions.</div>
            </div>
        </section>
    );
};

export default Hero;
