import { useEffect } from 'react';
import { supportsPassive } from 'utils';

const ScrollTop = () => {
    useEffect(() => {
        const passive = supportsPassive() ? { passive: true } : false;
        const docEl = document.documentElement;
        const scrollEl = document.scrollingElement;
        const handleResize = () => {
            docEl.style.setProperty('--winheight', window.innerHeight);
        };
        const handleScroll = () => {
            docEl.style.setProperty('--scrolltop', scrollEl.scrollTop);
        };
        handleResize();
        handleScroll();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, passive);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll, passive);
        };
    }, []);
    return null;
};

export default ScrollTop;
