<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "header"
})
</script>

<template>
  <header class="header">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-4">
      <!-- Логотип -->
      <router-link to="/">
        <img src="/public/images/Logo.png" alt="logo"/>
      </router-link>

      <router-link to="/">
        <span class="header__title">
          Vovko & Bybko Studio
        </span>
      </router-link>

      <!-- Меню навигации -->
      <nav>
        <ul class="flex space-x-6">

        </ul>
      </nav>

      <!-- Бургер-меню для мобильных устройств -->
      <div @click="toggleMenu" class="md:hidden cursor-pointer">
        <span class="block w-6 h-0.5 bg-white mb-2"></span>
        <span class="block w-6 h-0.5 bg-white mb-2"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="menuOpen" class="md:hidden bg-blue-600 py-4">
      <ul class="flex flex-col items-center space-y-4">
        <li>
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-300">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-gray-300">Contact</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>

</style>
