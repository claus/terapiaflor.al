import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { connect } from 'react-redux';
import { fetchLanding } from 'store';

import Header from 'components/header';

import styles from './index.scss';

const Landing = ({ landing }) => (
    <main className={styles.main}>
        <Header />
        <section>
            <Link href="/about">
                <a className={styles.link}>Go to About Me</a>
            </Link>
            <pre>{JSON.stringify(landing, null, 2)}</pre>
        </section>
    </main>
);

Landing.getInitialProps = ({ store }) => {
    return store.dispatch(fetchLanding()).then(() => {
        const state = store.getState();
        return {
            landing: state.landing,
        };
    });
};

Landing.propTypes = {
    landing: PropTypes.object.isRequired,
    fetchLanding: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    landing: state.landing,
});

export default connect(
    mapStateToProps,
    { fetchLanding }
)(Landing);
