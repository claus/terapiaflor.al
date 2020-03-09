import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ subtitle }) => (
    <header className={styles.header}>
        <h1>
            <img
                className={styles.logo}
                src="/images/logo.svg"
                role="img"
                alt="Daniela Wahlers - Terapeuta Floral"
            />
            <span className={styles.subtitle}>{subtitle}</span>
        </h1>
    </header>
);

Header.propTypes = {
    subtitle: PropTypes.string.isRequired,
};

export default Header;
