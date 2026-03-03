import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import WishlistPage from './pages/Wishlist';
import { WishlistProvider } from './context/WishlistContext';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <WishlistProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/listings" element={<Home />} />
            <Route path="/locations" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
          <BackToTop />
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;
