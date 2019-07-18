import React from 'react';
import PropTypes from 'prop-types';

import styles from './BannerModule.scss';

const BannerModule = ({ title }) => {
    return (
        <div className={styles.bannerModule}>
            <h2>{title}</h2>
        </div>
    );
};

BannerModule.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BannerModule;
