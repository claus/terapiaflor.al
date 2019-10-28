import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

import styles from './BannerModule.scss';

function useResizeObserver() {
    const ref = useRef(null);
    const refFn = useCallback(node => {
        if (ref.current) {
            ref.current.disconnect();
            ref.current = null;
        }
        if (node !== null) {
            ref.current = new ResizeObserver(entries => {
                if (entries && entries.length && entries[0].target) {
                    const { target, contentRect } = entries[0];
                    target.style.setProperty('--top', target.offsetTop);
                    target.style.setProperty('--height', contentRect.height);
                }
            });
            ref.current.observe(node);
        }
    }, []);
    return refFn;
}

const BannerModule = ({ title, image }) => {
    const { file, title: alt } = image;
    const rootRef = useResizeObserver();
    return (
        <figure className={styles.bannerModule} ref={rootRef}>
            <img className={styles.image} src={file.url} alt={alt} />
            <figcaption className={styles.caption}>{title}</figcaption>
        </figure>
    );
};

BannerModule.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};

export default BannerModule;
