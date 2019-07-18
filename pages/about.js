import React from 'react';
import Link from 'next/link';

import styles from './about.scss';

const AboutPage = () => {
    return (
        <section className={styles.about}>
            <Link href="/">
                <a>Go to Home</a>
            </Link>
        </section>
    );
};

AboutPage.getInitialProps = () => {
    return {};
};

export default AboutPage;
