export const useLocaleStore = defineStore('locale', () => {
    const { locale } = useLocale();
    const currentLocale = ref<string>('');
    const isLocaleLoaded = ref<boolean>(false);

    watch(locale, (newLocale) => {
        currentLocale.value = newLocale;
        isLocaleLoaded.value = true;
    });

    onMounted(() => {
        currentLocale.value = locale.value;
        isLocaleLoaded.value = true;
    });

    return {
        currentLocale,
        isLocaleLoaded
    };
});
