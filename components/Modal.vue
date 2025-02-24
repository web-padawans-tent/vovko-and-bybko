<script>
import Form from "~/components/Form.vue";
import { useModalStore } from '~/stores/modalStore';

export default {
  name: 'Modal',
  components: {
    Form
  },
  data() {
    return {
      modalStore: useModalStore()
    };
  },
  methods: {
    closeModal() {
      this.modalStore.closeModal();
      document.body.style.overflow = '';
    },
    onModalClick(e) {
      e.stopPropagation();
    },
    onKeydown(e) {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    }
  },
  mounted() {
    if (this.modalStore.isModalVisible) {
      document.body.style.overflow = 'hidden';
    }

    window.addEventListener('keydown', this.onKeydown);
  },
  beforeUnmount() {
    if (this.modalStore.isModalVisible) {
      document.body.style.overflow = 'hidden';
    }

    window.removeEventListener('keydown', this.onKeydown);
  },
  watch: {
    'modalStore.isModalVisible'(newVal) {
      document.body.style.overflow = newVal ? 'hidden' : '';
    }
  }
};
</script>

<template>
  <div v-if="modalStore.activeModal === 'form-contact'" class="modal" @click="closeModal">
    <div class="modal__main" @click="onModalClick">
      <button class="modal__close-btn" @click="closeModal">
        <svg class="modal__close-icon">
          <use href="#close"></use>
        </svg>
      </button>
      <div class="modal__content">
        <Heading level="h3" customClasses="mb-3">ОСТАВЬТЕ ЗАЯВКУ</Heading>
        <Form customClasses="modal__form"  title=""/>
      </div>
    </div>
  </div>
</template>
