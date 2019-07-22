import React from 'react';
import PropTypes from 'prop-types';

import styles from './WhatsAppButton.scss';

const WhatsAppButton = ({ label }) => {
    return (
        <a
            href="https://wa.me/5511950508428"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsAppButton}
        >
            {label}
        </a>
    );
};

WhatsAppButton.propTypes = {
    label: PropTypes.string.isRequired,
};

export default WhatsAppButton;
