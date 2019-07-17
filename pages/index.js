import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { fetchLanding } from 'services';

import Header from 'components/header';

import styles from './index.scss';

const Landing = ({ landing, etag }) => (
    <main className={styles.main}>
        <Header />
        <section>
            <Link href="/about">
                <a className={styles.link}>Go to About Me</a>
            </Link>
            <pre>{etag}</pre>
            <pre>{JSON.stringify(landing, null, 2)}</pre>
        </section>
    </main>
);

Landing.getInitialProps = async ({ res }) => {
    const landing = await fetchLanding();
    const etag = require('crypto')
        .createHash('md5')
        .update(JSON.stringify(landing))
        .digest('hex');
    if (res) {
        res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
        res.setHeader('X-version', etag);
    }
    return { landing, etag };
};

Landing.propTypes = {
    landing: PropTypes.object.isRequired,
    etag: PropTypes.string.isRequired,
};

export default Landing;
