import { defineStore } from 'pinia'

interface StrapiResponse<T> {
    data: T[];
}

interface Menu {
    id: number;
    title: string;
    link: string;
}

export const useStrapiStore = defineStore('strapi', () => {
    const menuTops = ref<Menu[]>([]);
    const menuBottoms = ref<Menu[]>([]);

    const fetchMenuTop = async () => {
        const response = await useApi('menu-tops') as StrapiResponse<Menu>;
        menuTops.value = response.data || [];
    };

    const fetchMenuBottom = async () => {
        const response = await useApi('menu-bottoms', { populate: '*' }) as StrapiResponse<Menu>;
        menuBottoms.value = response.data || [];
    };

    onMounted(fetchMenuTop);

    return {
        menuTops, menuBottoms,
        fetchMenuTop, fetchMenuBottom
    }
})
