import type {Strapi5RequestParams, StrapiLocale} from "@nuxtjs/strapi";

interface IParams extends Strapi5RequestParams {}

interface IUseApiParams {
    endpoint: string;
    options?: IParams;
    isSingle?: boolean;
}

interface ILocale {
    [key: string]: StrapiLocale;
}

const getLocaleFromSubdomain = (): StrapiLocale => {
    if (typeof window !== 'undefined') {
        const subdomain = window.location.hostname.split('.')[0];
        const locales: ILocale = { en: 'en', de: 'de', ru: 'ru-RU' };

        if (subdomain && locales[subdomain]) {
            return locales[subdomain];
        }
    }

    return 'ru-RU';
}

export const useApi = async ({endpoint, options = {}, isSingle = false}: IUseApiParams) => {
    const { find, findOne } = useStrapi();
    const locale = getLocaleFromSubdomain();

    const params: IParams = { locale, ...options };

    try {
        return isSingle ? await findOne(endpoint, params) : await find(endpoint, params);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
