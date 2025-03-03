export const useLocale = () => {
    const getLocaleFromSubdomain = (): string => {
        const subdomain = window.location.hostname.split('.')[0];
        const locales: { [key: string]: string } = { en: 'en', de: 'de', ru: '' };
        return locales[subdomain] || '';
    };

    const locale = ref<string>('');

    onMounted(() => {
        locale.value = getLocaleFromSubdomain();
    });

    return { locale };
};
