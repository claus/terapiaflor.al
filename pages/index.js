import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { fetchLanding } from 'services';

import PageMetadata from 'components/ui/PageMetadata';
import BannerModule from 'components/ui/modules/BannerModule';
import TextModule from 'components/ui/modules/TextModule';

import styles from './index.scss';

const Landing = ({ landing }) => {
    const { title, description, image } = landing.metadata;
    return (
        <>
            <PageMetadata
                title={title}
                description={description}
                image={image}
            />
            {landing.modules.map(({ _contentTypeId, _id, ...props }) => {
                switch (_contentTypeId) {
                    case 'bannerModule':
                        return <BannerModule {...props} key={_id} />;
                    case 'textModule':
                        return <TextModule {...props} key={_id} />;
                }
                return null;
            })}
            <Link href="/about">
                <a className={styles.link}>Go to About Me</a>
            </Link>
        </>
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
