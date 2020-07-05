/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const props = await super.getInitialProps(ctx);

        const {
            req: { locale, localeDataScript },
        } = ctx;

        return { ...props, locale, localeDataScript };
    }

    render() {
        return (
            <Html lang = 'ru'>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
