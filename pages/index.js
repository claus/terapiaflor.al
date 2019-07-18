import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { fetchLanding } from 'services';

import BannerModule from 'components/ui/modules/BannerModule';
import TextModule from 'components/ui/modules/TextModule';

import styles from './index.scss';

const Landing = ({ landing }) => {
    return (
        <section className={styles.index}>
            <Link href="/about">
                <a className={styles.link}>Go to About Me</a>
            </Link>
            {landing.modules.map(({ _contentTypeId, _id, ...props }) => {
                switch (_contentTypeId) {
                    case 'bannerModule':
                        return <BannerModule {...props} key={_id} />;
                    case 'textModule':
                        return <TextModule {...props} key={_id} />;
                }
                return null;
            })}
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
