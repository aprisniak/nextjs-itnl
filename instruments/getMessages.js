/* eslint-disable no-console */
/* eslint-disable global-require */
const getMessages = async (locale) => {
    try {
        return require(`../lang/${locale}.json`);
    } catch (error) {
        console.error(error);

        return require('../lang/ru.json');
    }
};

export default getMessages;
