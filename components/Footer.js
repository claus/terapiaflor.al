import React from 'react';

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
            <img src="/images/heart1.svg" role="img" alt="LGBTQ" />
            <img src="/images/heart2.svg" role="img" alt="Transgender" />
            <img src="/images/heart3.svg" role="img" alt="Nonbinary" />
        </div>
        <div className={styles.hidden}>
            <a rel="me" href="https://mastodon.social/@DaniWahlers">
                mastodon.social
            </a>
            <a rel="me" href="https://mastodon.com.br/@dani">
                mastodon.com.br
            </a>
        </div>
    </footer>
);

export default Footer;
