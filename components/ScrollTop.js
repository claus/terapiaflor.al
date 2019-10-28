import { useEffect } from 'react';
import { testIfSupportsPassive } from 'utils';

const ScrollTop = () => {
    useEffect(() => {
        const supportsPassive = testIfSupportsPassive();
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
        window.addEventListener(
            'scroll',
            handleScroll,
            supportsPassive ? { passive: true } : false
        );
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener(
                'scroll',
                handleScroll,
                supportsPassive ? { passive: true } : false
            );
        };
    }, []);
    return null;
};

export default ScrollTop;
