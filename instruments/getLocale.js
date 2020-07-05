/* eslint-disable no-console */
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';

const acceptLanguages = [ 'ru', 'uk' ];
const defaultLocale = acceptLanguages[ 0 ];

const getLocale = async (ctx) => {
    try {
        const cookieLocale = nextCookie(ctx).locale;

        console.log('cookieLocale', cookieLocale);

        let locale = defaultLocale;
        if (cookieLocale) {
            locale = acceptLanguages.includes(cookieLocale) ? cookieLocale : defaultLocale;
        } else {
            const systemLocale = ctx.req.headers[ 'accept-language' ] || navigator.language || defaultLocale;
            locale = acceptLanguages.includes(systemLocale) ? systemLocale : defaultLocale;
            console.log('cookie 1');
            cookie.set('locale', locale, { expires: 365 });
            console.log('cookie 2');
        }

        return locale;
    } catch (error) {
        console.error(error);

        return defaultLocale;
    }
};

export default getLocale;
