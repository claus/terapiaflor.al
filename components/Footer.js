import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <dl className={styles.contact}>
            <div className={styles.item}>
                <dt>Email</dt>
                <dd>
                    <a href="mailto:contato@terapiaflor.al">
                        contato@terapiaflor.al
                    </a>
                </dd>
            </div>
            <div className={styles.item}>
                <dt>WhatsApp</dt>
                <dd>
                    <a
                        href="https://wa.me/5511950508428"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        (11) 95050-8428
                    </a>
                </dd>
            </div>
        </dl>
        <div className={styles.hearts}>
            <img src="/images/heart1.svg" />
            <img src="/images/heart2.svg" />
            <img src="/images/heart3.svg" />
        </div>
    </footer>
);

Footer.propTypes = {
    subtitle: PropTypes.string.isRequired,
};

export default Footer;
