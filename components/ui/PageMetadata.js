import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const PageMetadata = ({ title, description, image }) => (
    // prettier-ignore
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && image.file && (
            <>
                <meta property="og:image" content={image.file.url} />
                <meta property="og:image:width" content={image.file.details.image.width} />
                <meta property="og:image:height" content={image.file.details.image.height} />
                <meta property="og:image:type" content={image.file.contentType} />
            </>
        )}
    </Head>
);

PageMetadata.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object,
};

export default PageMetadata;
