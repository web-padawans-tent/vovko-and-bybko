export const useApi = async (endpoint: string, options: any = {}) => {
    const { find, findOne } = useStrapi()
    const route = useRoute()
    const locale = route.params.locale || 'ru-RU' // Определяем язык из маршрута

    const params = { locale, ...options } // Авто-добавление локали

    return endpoint.includes('/') ? findOne(endpoint, params) : find(endpoint, params)
}
