<script setup lang="ts">
import { defineProps } from "vue";
import {useModalStore} from "~/stores/modalStore";

const props = defineProps<{
  items: { link: string; text: string; svg?: string }[];
}>();

const modalStore = useModalStore();
function closeModal() {
    modalStore.closeModal()
}

function clearTimeOut() {
    modalStore.clearTimeOut()
}
</script>

<template>
  <div @mouseleave="closeModal" @mouseover="clearTimeOut" v-if="modalStore.activeModal === 'subMenu'" class="menu-list__container rounded-xl ">
    <ul class="menu-list">
      <li class="menu-list__item" v-for="(item, index) in props.items" :key="index">
        <a class="menu-list__link flex items-center gap-2 justify-between" :href="`/services/${item.slug}`">
          {{ item.priceCard.title }}
          <!-- <svg v-if="item.svg" class="w-5 h-5 svg-ico svg-ico_no-fill">
            <use :xlink:href="`#${item.svg}`"></use>
          </svg> -->
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
.menu-list__container
  position: absolute
  top: 50px
  left: -125px
  right: -125px
  padding: 5px 0
  border: 1px solid rgb(255, 255, 255, 0.3)
  background: #000
  .menu-list__item
    padding: 8px 10px
    &:not(:last-child)
      border-bottom: 1px solid rgb(255, 255, 255, 0.3)
</style>
