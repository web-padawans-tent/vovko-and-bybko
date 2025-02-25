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
        try {
            const response = await useApi('menu-tops') as StrapiResponse<Menu>;
            menuTops.value = response.data || [];
        } catch (error) {
            console.error('Error fetching menu-top:', error);
        }
    };

    const fetchMenuBottom = async () => {
        try {
            const response = await useApi('menu-bottoms', { populate: '*' }) as StrapiResponse<Menu>;
            menuBottoms.value = response.data || [];
        } catch (error) {
            console.error('Error fetching menu-bottom:', error);
        }
    };

    onMounted(async () => {
        await fetchMenuTop();
        await fetchMenuBottom();
    });

    return {
        menuTops, menuBottoms,
        fetchMenuTop, fetchMenuBottom
    }
});
