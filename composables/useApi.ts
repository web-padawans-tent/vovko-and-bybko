const getLocaleFromSubdomain = (): string => {
    if (typeof window !== 'undefined') {
        const subdomain = window.location.hostname.split('.')[0];
        const locales: { [key: string]: string } = { en: 'en', de: 'de', ru: 'ru-RU' };

        if (subdomain && locales[subdomain]) {
            return locales[subdomain];
        }
    }

    return 'ru-RU';
}

export const useApi = async (endpoint: string, options: any = {}) => {
    const { find, findOne } = useStrapi();
    const locale = getLocaleFromSubdomain();

    const params = { locale, ...options };

    try {
        return endpoint.includes('/')
            ? await findOne(endpoint, params)
            : await find(endpoint, params);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
