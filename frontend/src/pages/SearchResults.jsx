import React, { useState, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, ChevronLeft, ArrowUpDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ─── Master dummy listings ───────────────────────────────────────────────────
const ALL_LISTINGS = [
    {
        id: 'modern-family-apartment-dha',
        title: "Modern Family Apartment",
        location: "DHA Phase 6, Lahore",
        price: "PKR 2.5 Crore",
        priceValue: 25000000,
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
        type: "Apartment",
        beds: 3, baths: 2, sqft: "1,850 sq ft"
    },
    {
        id: 'luxury-urban-residence-f7',
        title: "Luxury Urban Residence",
        location: "F-7, Islamabad",
        price: "PKR 4.2 Crore",
        priceValue: 42000000,
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
        type: "Family Home",
        beds: 4, baths: 3, sqft: "2,400 sq ft"
    },
    {
        id: 'contemporary-living-space-bahria',
        title: "Contemporary Living Space",
        location: "Bahria Town, Karachi",
        price: "PKR 1.8 Crore",
        priceValue: 18000000,
        img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800",
        type: "Apartment",
        beds: 2, baths: 2, sqft: "1,450 sq ft"
    },
    {
        id: 'smart-investment-unit-gulberg',
        title: "Smart Investment Unit",
        location: "Gulberg III, Lahore",
        price: "PKR 3.5 Crore",
        priceValue: 35000000,
        img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800",
        type: "Investment",
        beds: 3, baths: 3, sqft: "2,100 sq ft"
    },
    {
        id: 'premium-villa-e11',
        title: "Premium Villa",
        location: "E-11, Islamabad",
        price: "PKR 6.5 Crore",
        priceValue: 65000000,
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
        type: "Family Home",
        beds: 5, baths: 4, sqft: "3,500 sq ft"
    },
    {
        id: 'commercial-plaza-boulevard',
        title: "Commercial Plaza",
        location: "Main Boulevard, Lahore",
        price: "PKR 12 Crore",
        priceValue: 120000000,
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
        type: "Commercial",
        beds: 0, baths: 4, sqft: "8,000 sq ft"
    },
    {
        id: 'sea-view-penthouse-clifton',
        title: "Sea View Penthouse",
        location: "Clifton, Karachi",
        price: "PKR 8.9 Crore",
        priceValue: 89000000,
        img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800",
        type: "Apartment",
        beds: 4, baths: 3, sqft: "3,200 sq ft"
    },
    {
        id: 'affordable-studio-johar',
        title: "Affordable Studio Apartment",
        location: "Johar Town, Lahore",
        price: "PKR 75 Lac",
        priceValue: 7500000,
        img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
        type: "Apartment",
        beds: 1, baths: 1, sqft: "600 sq ft"
    },
    {
        id: 'farmhouse-bedian',
        title: "Luxury Farmhouse",
        location: "Bedian Road, Lahore",
        price: "PKR 5.2 Crore",
        priceValue: 52000000,
        img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=800",
        type: "Farmhouse",
        beds: 5, baths: 5, sqft: "5,000 sq ft"
    },
    {
        id: 'it-tower-office-gulberg',
        title: "IT Tower Office Space",
        location: "Gulberg II, Lahore",
        price: "PKR 4.8 Crore",
        priceValue: 48000000,
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
        type: "Commercial",
        beds: 0, baths: 2, sqft: "2,800 sq ft"
    },
    {
        id: 'twin-house-g13',
        title: "Corner Twin House",
        location: "G-13, Islamabad",
        price: "PKR 2.8 Crore",
        priceValue: 28000000,
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
        type: "Family Home",
        beds: 4, baths: 3, sqft: "2,000 sq ft"
    },
    {
        id: 'plot-investment-dha',
        title: "Residential Plot - 10 Marla",
        location: "DHA Phase 9, Lahore",
        price: "PKR 1.6 Crore",
        priceValue: 16000000,
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800",
        type: "Investment",
        beds: 0, baths: 0, sqft: "2,722 sq ft"
    }
];

// ─── Component ────────────────────────────────────────────────────────────────
const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    const city = query.get('location') || '';
    const type = query.get('type') || '';
    const budget = query.get('budget') || '';

    const [sortBy, setSortBy] = useState('default');

    const results = useMemo(() => {
        let filtered = [...ALL_LISTINGS];

        // Filter by city
        if (city && city !== 'Anywhere') {
            const cityFiltered = filtered.filter(p =>
                p.location.toLowerCase().includes(city.toLowerCase())
            );
            if (cityFiltered.length > 0) filtered = cityFiltered;
        }

        // Filter by type
        if (type && type !== 'Any Property') {
            const typeFiltered = filtered.filter(p =>
                p.type.toLowerCase().includes(type.toLowerCase())
            );
            if (typeFiltered.length > 0) filtered = typeFiltered;
        }

        // Sort using numeric priceValue — no string parsing needed
        if (sortBy === 'price-asc') {
            filtered = [...filtered].sort((a, b) => a.priceValue - b.priceValue);
        } else if (sortBy === 'price-desc') {
            filtered = [...filtered].sort((a, b) => b.priceValue - a.priceValue);
        }

        return filtered;
    }, [city, type, sortBy]);

    const sortBtnStyle = (val) => ({
        padding: '10px 22px',
        borderRadius: '50px',
        border: sortBy === val ? '2px solid #100F0F' : '1.5px solid #e2e8f0',
        background: sortBy === val ? '#F0F0F0' : '#fff',
        color: sortBy === val ? '#100F0F' : '#374151',
        fontWeight: 600,
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
    });

    return (
        <div className="search-results-page">
            <Navbar />
            <section className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>

                {/* Back link */}
                <Link to="/" className="back-link">
                    <ChevronLeft size={18} /> Back to Home
                </Link>

                {/* Page Header */}
                <div className="search-header-box" style={{ marginTop: '16px', marginBottom: '10px' }}>
                    <div className="search-icon-circle">
                        <Search size={22} color="var(--primary-color)" />
                    </div>
                    <div>
                        <h2 className="h3">Search Results</h2>
                        <p className="text-secondary">
                            Showing <strong>{results.length}</strong> verified {results.length === 1 ? 'match' : 'matches'}
                            {city && city !== 'Anywhere' ? <> in <strong>{city}</strong></> : ''}
                            {type && type !== 'Any Property' ? <> for <strong>{type}</strong></> : ''}
                            {budget && budget !== 'Any budget' ? <> within <strong>{budget}</strong></> : ''}
                        </p>
                    </div>
                </div>

                {/* Sort Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '24px 0 36px', flexWrap: 'wrap' }}>
                    <ArrowUpDown size={16} color="#64748b" />
                    <span style={{ fontWeight: 600, color: '#64748b', fontSize: '0.9rem', marginRight: '4px' }}>Sort by:</span>
                    <button style={sortBtnStyle('default')} onClick={() => setSortBy('default')}>Default</button>
                    <button style={sortBtnStyle('price-asc')} onClick={() => setSortBy('price-asc')}>Price: Low to High</button>
                    <button style={sortBtnStyle('price-desc')} onClick={() => setSortBy('price-desc')}>Price: High to Low</button>
                </div>

                {/* Listings Grid */}
                <div className="listings-grid">
                    {results.map((item) => (
                        <PropertyCard item={item} key={item.id} />
                    ))}
                </div>

                {results.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '80px 0' }}>
                        <p style={{ fontSize: '1.2rem', color: '#64748b' }}>No properties found. Try adjusting your search.</p>
                        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
                            Back to Home
                        </Link>
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
};

export default SearchResults;
