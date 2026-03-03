import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const saved = localStorage.getItem('discret_wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('discret_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (item) => {
        if (!wishlist.find(i => i.id === item.id)) {
            setWishlist([...wishlist, item]);
        }
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    const isWishlisted = (id) => wishlist.some(item => item.id === id);

    const toggleWishlist = (item) => {
        if (isWishlisted(item.id)) {
            removeFromWishlist(item.id);
        } else {
            addToWishlist(item);
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => useContext(WishlistContext);
