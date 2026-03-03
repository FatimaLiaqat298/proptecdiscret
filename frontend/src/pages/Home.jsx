import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedListings from '../components/FeaturedListings';
import Categories from '../components/Categories';
import LocationDiscovery from '../components/LocationDiscovery';
import WhyChoose from '../components/WhyChoose';
import SpacesSection from '../components/SpacesSection';
import Overseas from '../components/Overseas';
import Process from '../components/Process';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
    <div className="home-page">
        <Navbar />
        <Hero />
        <FeaturedListings />
        <Categories />
        <LocationDiscovery />
        <WhyChoose />
        <SpacesSection />
        <Overseas />
        <Process />
        <CTA />
        <Contact />
        <Footer />
    </div>
);

export default Home;
