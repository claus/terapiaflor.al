import React from 'react';

import styles from './Header.scss';

const Header = () => (
    <header>
        <h1>
            <img className={styles.logo} src="/static/logo.svg" />
        </h1>
    </header>
);

export default Header;
