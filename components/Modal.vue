<script setup lang="ts">
import Form from "~/components/Form.vue";
import { useModalStore } from '~/stores/modalStore';

const modalStore = useModalStore();

const closeModal = () => {
  modalStore.closeModal();
}
</script>


<template>
  <div v-if="modalStore.isModalVisible" class="container-modal">
    <div class="modal">
      <div class="modal__close">
        <button class="modal__close--btn" @click="closeModal">
          Закрыть
        </button>
      </div>
      <div class="modal__content">
        <Form title="ОСТАВЬТЕ ЗАЯВКУ" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    min-width: 300px;
    min-height: 300px;
    background: #19161C;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13px );
    -webkit-backdrop-filter: blur( 13px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 80px 125px;
    display: flex;
    flex-direction: column;
    &__close {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      &--btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;
      }
      &--icon {
        color: #6c757d;
        font-size: 20px;
      }
    }
  }
}
</style>
