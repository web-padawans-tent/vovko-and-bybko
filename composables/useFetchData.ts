import { ref, computed, watch } from 'vue';
import { useLocaleStore } from '@/stores/localeStore';

export interface Endpoint {
  key: string;
  path: string;
  options?: Record<string, any>;
  method?: 'find' | 'findOne';
}

export function useFetchData(endpoints: Endpoint[]) {
  const data = ref<Record<string, any>>({});
  const localeStore = useLocaleStore();
  const { findOne, find } = useStrapi();

  const fetchData = async () => {
    const locale = localeStore.currentLocale;

    const results = await Promise.all(
      endpoints.map(async ({ path, options, method = 'find' }) => {
        try {
          const finalOptions = { ...options, locale };

          return method === 'findOne' ? await findOne(path, finalOptions) : await find(path, finalOptions);
        } catch (error) {
          console.error(`Ошибка при запросе к ${path}:`, error);
          return { data: null };
        }
      })
    );

    data.value = endpoints.reduce((acc, { key, method }, index) => {
      const responseData = results[index]?.data || null;

      acc[key] = method === 'findOne' && Array.isArray(responseData) && responseData.length === 1 
        ? responseData[0] 
        : responseData;

      return acc; 
    }, {} as Record<string, any>);    
  };

  watch(
    () => localeStore.isLocaleLoaded,
    (loaded) => {
      if (loaded) {
        fetchData();
      }
    },
    { immediate: true }
  );

  const computedData = Object.fromEntries(
    endpoints.map(({ key }) => [key, computed(() => data.value[key])])
  )

  return { computedData };
}
