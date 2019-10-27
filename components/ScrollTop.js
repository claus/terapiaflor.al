import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { testIfSupportsPassive } from 'utils';

const ScrollTop = ({ varName = '--scroll-top' }) => {
    useEffect(() => {
        const supportsPassive = testIfSupportsPassive();
        const handleScroll = () => {
            document.documentElement.style.setProperty(
                varName,
                `${document.scrollingElement.scrollTop}px`
            );
        };
        window.addEventListener(
            'scroll',
            handleScroll,
            supportsPassive ? { passive: true } : false
        );
        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll,
                supportsPassive ? { passive: true } : false
            );
        };
    }, [varName]);
    return null;
};

ScrollTop.propTypes = {
    varName: PropTypes.string,
};

export default ScrollTop;
