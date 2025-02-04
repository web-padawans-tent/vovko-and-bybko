<template>
  <div :class="['logo flex gap-3 items-center', customClasses]">
    <router-link to="/">
      <img class="logo__img max-w-10" src="/assets/images/Logo.png" alt="logo"/>
    </router-link>

    <router-link to="/">
      <span class="logo__text text-white text-xl">
        Vovko & Bybko Studio
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      customClasses: {
        type: [String, Array, Object],
        default: "",
      },
    },
  }
</script>