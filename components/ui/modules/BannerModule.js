import React from 'react';
import PropTypes from 'prop-types';

import styles from './BannerModule.scss';

const BannerModule = ({ title }) => {
    return (
        <section className={styles.bannerModule}>
            <figure>
                <figcaption>{title}</figcaption>
            </figure>
        </section>
    );
};

BannerModule.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BannerModule;
