import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

const Footer = () => <footer className={styles.footer}>Hello</footer>;

Footer.propTypes = {
    subtitle: PropTypes.string.isRequired,
};

export default Footer;
