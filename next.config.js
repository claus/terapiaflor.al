const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = withPlugins(
    [
        // Deploy source maps in production
        [withSourceMaps],
    ],
    {
        target: 'serverless',
        env: {
            SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
            ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
    }
);
