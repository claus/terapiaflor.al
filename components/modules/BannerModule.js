import React from 'react';
import PropTypes from 'prop-types';

import styles from './BannerModule.scss';

const BannerModule = ({ title }) => {
    return (
        <figure className={styles.bannerModule}>
            <figcaption>{title}</figcaption>
        </figure>
    );
};

BannerModule.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BannerModule;
