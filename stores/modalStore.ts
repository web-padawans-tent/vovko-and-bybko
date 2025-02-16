import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
    state: () => ({
        activeModal: null as string | null,
        timeOut: null as ReturnType<typeof setTimeout> | null,
    }),
    actions: {
        openModal(modalName: string) {
            this.activeModal = modalName;
        },
        closeModal() {
            if (this.activeModal === 'subMenu') {
               this.timeOut = setTimeout(() => {
                   this.activeModal = null;
               }, 200)
            } else {
                this.activeModal = null;
            }
        },
        clearTimeOut() {
            if (this.timeOut) {
                clearTimeout(this.timeOut)
            }
        }
    },
});

