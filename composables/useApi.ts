export const useApi = () => {
    const localeStore = useLocaleStore();
    const { find, findOne } = useStrapi();

    const fetchData = async (endpoint: string, options: any = {}) => {
        try {
            while (!localeStore.isLocaleLoaded) {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            const localeOption = localeStore.currentLocale ? { locale: localeStore.currentLocale } : {};
            return endpoint.includes('/')
                ? await findOne(endpoint, { ...localeOption, ...options })
                : await find(endpoint, { ...localeOption, ...options });
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    return {
        fetchData,
    };
};
