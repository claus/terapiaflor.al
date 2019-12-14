import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const __html =
            'var docEl = document.documentElement;' +
            'var scrollEl = document.scrollingElement;' +
            "docEl.style.setProperty('--winheight', window.innerHeight);" +
            "docEl.style.setProperty('--scrolltop', scrollEl.scrollTop);";
        return (
            <Html lang="pt-BR">
                <Head />
                <body>
                    <script dangerouslySetInnerHTML={{ __html }}></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
