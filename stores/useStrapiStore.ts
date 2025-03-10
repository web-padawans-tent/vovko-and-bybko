import {defineStore, type StoreDefinition} from 'pinia';
import { ref, watch, onMounted } from 'vue';
import type {Strapi5ResponseData} from "@nuxtjs/strapi";

export const useStrapiStore : StoreDefinition = defineStore('strapi', () : any => {
    const menuTops : Ref = ref([]);
    const menuBottoms : Ref = ref([]);
    const localeStore  = useLocaleStore();
    const { fetchData } = useApi();

    const fetchMenuTop : () => Promise<void> = async () : Promise<void> => {
        try {
            while (!localeStore.isLocaleLoaded) {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            const response = await fetchData('menu-tops');
            menuTops.value = response.data || [];
        } catch (error) {
            console.error('Error fetching menu-top:', error);
        }
    };

    const fetchMenuBottom : () => Promise<void> = async () : Promise<void> => {
        try {
            while (!localeStore.isLocaleLoaded) {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            const response : Strapi5ResponseData<any> = await fetchData('menu-bottoms', { populate: '*' });
            menuBottoms.value = response.data || [];
        } catch (error) {
            console.error('Error fetching menu-bottom:', error);
        }
    };

    onMounted(async () : Promise<void> => {
        await fetchMenuTop();
        await fetchMenuBottom();
    });

    watch((): any => localeStore.currentLocale, async (newLocale : string) : Promise<void> => {
        if (newLocale) {
            await fetchMenuTop();
            await fetchMenuBottom();
        }
    });

    return {
        menuTops, menuBottoms,
        fetchMenuTop, fetchMenuBottom
    };
});
