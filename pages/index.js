import React from 'react';
import Link from 'next/link';

import Header from 'components/header';

import styles from './index.scss';

export default () => (
    <main className={styles.main}>
        <Header />
        <section>
            <Link href="/about">
                <a className={styles.link}>Go to About Me</a>
            </Link>
        </section>
    </main>
);
