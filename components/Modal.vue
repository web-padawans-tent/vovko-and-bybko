<script lang="ts">
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
    window.addEventListener('keydown', this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
  }
};
</script>

<template>
  <div v-if="modalStore.isModalVisible" class="container--modal" @click="closeModal">
    <div class="modal" @click="onModalClick">
      <div class="modal__close">
        <button class="modal__close--btn" @click="closeModal">
          <svg class="modal__close--icon">
            <use href="#close"></use>
          </svg>
        </button>
      </div>
      <div class="modal__content">
        <Form class="flex flex-col" title="ОСТАВЬТЕ ЗАЯВКУ"/>
      </div>
    </div>
  </div>
</template>
