/* eslint-disable global-require */
// Core
import App, { Container } from 'next/app';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

// Instruments
import getLocale from '../instruments/getLocale';
import getMessages from '../instruments/getMessages';

const cache = createIntlCache();

class AppWrapper extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        const locale = await getLocale(ctx);
        const messages = await getMessages(locale);

        return { pageProps, locale, messages };
    }

    render() {
        const { Component, pageProps, store, locale, messages } = this.props;
        console.log('locale', locale);

        const intl = createIntl(
            {
                locale,
                messages,
            },
            cache,
        );

        return (
            <Container>
                <RawIntlProvider
                    value = { intl }>
                        <Component { ...pageProps } />
                </RawIntlProvider>
            </Container>
        );
    }
}

export default AppWrapper;
