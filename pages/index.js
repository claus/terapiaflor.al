import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { fetchLanding } from 'services';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

import styles from './index.scss';

const Landing = ({ landing, etag }) => {
    const handleKeyPress = event => {
        event.preventDefault();
        fetch(window.location, {
            method: 'HEAD',
            headers: { pragma: 'no-cache' },
        }).then(res => {
            if (res.ok) {
                const etagNew = res.headers.get('x-version');
                if (etag !== etagNew) {
                    window.location.reload();
                }
            }
        });
    };
    return (
        <section className={styles.index}>
            <Link href="/about">
                <a className={styles.link}>Go to About Me</a>
            </Link>
            <pre>{etag}</pre>
            <pre>{JSON.stringify(landing, null, 2)}</pre>
            <KeyHandler
                keyValue="r"
                keyEventName={KEYPRESS}
                onKeyHandle={handleKeyPress}
            />
        </section>
    );
};

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
