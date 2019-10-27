import React from 'react';
import PropTypes from 'prop-types';

import styles from './BannerModule.scss';

const BannerModule = ({ title, image }) => {
    console.log(image)
    const { title: alt, file } = image;
    // const { url, details } = file;
    // const { width, height } = details.image;
    return (
        <figure className={styles.bannerModule}>
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
