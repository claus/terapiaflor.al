import React from 'react';
import PropTypes from 'prop-types';
import { fetchLanding } from 'services';

import PageMetadata from 'components/PageMetadata';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LandingModule from 'components/modules/LandingModule';

const Landing = ({ landing }) => {
    const { title, subtitle, description, image } = landing.metadata;
    return (
        <>
            <PageMetadata
                title={title}
                description={description}
                image={image}
            />
            <Header subtitle={subtitle} />
            {landing.modules.map(({ _contentTypeId, _id, ...props }) => {
                switch (_contentTypeId) {
                    case 'landingModule':
                        return <LandingModule {...props} key={_id} />;
                }
                return null;
            })}
            <Footer />
        </>
    );
};

Landing.propTypes = {
    landing: PropTypes.object.isRequired,
};

export async function getStaticProps() {
    return {
        props: {
            landing: await fetchLanding(),
        },
    };
}

export default Landing;
