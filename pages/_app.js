import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

class TerapiaFloralApp extends App {
    // static async getInitialProps({ Component, ctx }) {
    //     return {
    //         pageProps: {
    //             ...(Component.getInitialProps
    //                 ? await Component.getInitialProps(ctx)
    //                 : {}),
    //         },
    //     };
    // }

    renderHead() {
        return (
            // prettier-ignore
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
                <meta key="meta-og-url" property="og:url" content="https://terapiaflor.al/" />
                <meta key="meta-og-type" property="og:type" content="website" />
                <title key="title">Terapia Floral</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
        );
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                {this.renderHead()}
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default TerapiaFloralApp;
