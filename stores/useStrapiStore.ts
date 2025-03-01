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
    const homeData = ref(null);
    const benefitsData = ref(null);
    const faqData = ref(null);
    const allPortfolioData = ref([]);
    const portfolioData = ref([]);
    const formData = ref(null);
    const contactData = ref(null);
    const allServiceData = ref(null);

    const fetchMenuTop = async () => {
        try {
            const response = await useApi({endpoint: 'menu-tops'}) as StrapiResponse<Menu>;
            menuTops.value = response.data || [];
        } catch (error) {
            console.error('Error fetching menu-top:', error);
        }
    };

    const fetchMenuBottom = async () => {
        try {
            const response = await useApi({endpoint: 'menu-bottoms', options: { populate: '*' }}) as StrapiResponse<Menu>;
            menuBottoms.value = response.data || [];
        } catch (error) {
            console.error('Error fetching menu-bottom:', error);
        }
    };

    const fetchHomeData = async () => {
        try {
            const response = await useApi({ endpoint: 'home', options: { populate: '*' } });
            homeData.value = response.data || null;
        } catch (error) {
            console.error('Error fetching home:', error);
        }
    };

    const fetchBenefitsData = async () => {
        try {
            const response = await useApi({ endpoint: 'home', options: { populate: 'benefits.list' } });
            benefitsData.value = response.data || null;
        } catch (error) {
            console.error('Error fetching benefits:', error);
        }
    };

    const fetchFaqData = async () => {
        try {
            const response = await useApi({ endpoint: 'home', options: { populate: 'faq.list' } });
            faqData.value = response.data || null;
        } catch (error) {
            console.error('Error fetching FAQ:', error);
        }
    };

    const fetchPortfolioData = async () => {
        try {
            const response = await useApi({ endpoint: 'portfolios', options: { populate: '*' } });
            allPortfolioData.value = response.data || [];
        } catch (error) {
            console.error('Error fetching portfolio:', error);
        }
    };

    const fetchPortfolioBySlug = async (slug: string) => {
        try {
            const response = await useApi({
                endpoint: 'portfolios',
                options: { filters: { slug }, populate: "*" },
                isSingle: true
             });
            portfolioData.value = response.data[0] || [];
        } catch (error) {
            console.error('Error fetching portfolio:', error);
        }
    };

    const fetchFormData = async () => {
        try {
            const response = await useApi({ endpoint: 'contact-form', isSingle: true });
            formData.value = response.data || null;
        } catch (error) {
            console.error('Error fetching form:', error);
        }
    };

    const fetchContactData = async () => {
        try {
            const response = await useApi({ endpoint: 'contact' });
            contactData.value = response.data || null;
        } catch (error) {
            console.error('Error fetching contact data:', error);
        }
    };

    const fetchAllServiceData = async () => {
        try {
            const response = await useApi({ endpoint: 'services', options: { populate: '*', sort: 'id:asc' } });
            allServiceData.value = response.data || null;
        } catch (error) {
            console.error('Error fetching contact data:', error);
        }
    };

    return {
        menuTops,
        menuBottoms,
        homeData,
        benefitsData,
        faqData,
        allPortfolioData,
        portfolioData,
        formData,
        contactData,
        allServiceData,
        fetchMenuTop,
        fetchMenuBottom,
        fetchHomeData,
        fetchBenefitsData,
        fetchFaqData,
        fetchPortfolioData,
        fetchFormData,
        fetchContactData,
        fetchPortfolioBySlug,
        fetchAllServiceData
    }
});
