import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

import styles from './BannerModule.scss';

function useResizeObserver() {
    const observer = useRef(null);
    return useCallback(node => {
        if (observer.current) {
            observer.current.disconnect();
            observer.current = null;
        }
        if (node !== null) {
            observer.current = new ResizeObserver(
                ([{ target, contentRect }]) => {
                    const height = Math.round(contentRect.height);
                    target.style.setProperty('--top', target.offsetTop);
                    target.style.setProperty('--height', height);
                    target.style.setProperty('visibility', 'visible');
                }
            );
            observer.current.observe(node);
        }
    }, []);
}

const BannerModule = ({ title, image, imageMobile }) => {
    const { file: fileDesktop, title: alt } = image;
    const { file: fileMobile } = imageMobile;
    const rootRef = useResizeObserver();
    const src = (file, media, size) => (
        <>
            <source
                type="image/webp"
                media={media}
                srcSet={`${file.url}?w=${size}&fm=webp`}
            />
            <source
                type="image/jpeg"
                media={media}
                srcSet={`${file.url}?w=${size}`}
            />
        </>
    );
    return (
        <figure className={styles.bannerModule} ref={rootRef}>
            <picture>
                {src(fileMobile, '(max-width: 512px)', 512)}
                {src(fileMobile, '(max-width: 719px)', 1024)}
                {src(fileDesktop, '(max-width: 1499px)', 1500)}
                {src(fileDesktop, '(min-width: 1500px)', 2500)}
                <img
                    src={fileDesktop.url}
                    alt={alt}
                    className={styles.image}
                    loading="lazy"
                />
            </picture>
            <figcaption className={styles.caption}>{title}</figcaption>
        </figure>
    );
};

BannerModule.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    imageMobile: PropTypes.object.isRequired,
};

export default BannerModule;
