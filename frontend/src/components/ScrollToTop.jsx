import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Automatically scrolls to the top on every route/page change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
