import React from 'react';

import styles from './Header.scss';

const Header = () => (
    <header className={styles.header}>
        <h1>
            <img
                className={styles.logo}
                src="/images/logo.svg"
                role="img"
                alt="Daniela Wahlers - Terapeuta Floral"
            />
        </h1>
    </header>
);

export default Header;
