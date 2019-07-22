import './styles/normalize.scss';
import './styles/theme.scss';

import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Header from 'components/ui/Header';

class TerapiaFloralApp extends App {
    renderHead() {
        return (
            // prettier-ignore
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="robots" content="index, follow" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://terapiaflor.al" />
                <link rel="canonical" href="https://terapiaflor.al" />
                <link rel="icon" href="/static/favicon-32.png" sizes="32x32" />
                <link rel="icon" href="/static/favicon-64.png" sizes="64x64" />
                <link rel="icon" href="/static/favicon-128.png" sizes="128x128" />
            </Head>
        );
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                {this.renderHead()}
                <main>
                    <Header />
                    <Component {...pageProps} />
                </main>
            </Container>
        );
    }
}

export default TerapiaFloralApp;
