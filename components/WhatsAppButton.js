import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './WhatsAppButton.scss';

const WhatsAppButton = ({ label, className }) => {
    return (
        <a
            href="https://wa.me/5511950508428"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(styles.whatsAppButton, className)}
        >
            {label}
            <span className={styles.arrow}>→</span>
        </a>
    );
};

WhatsAppButton.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default WhatsAppButton;
