<template>
  <div :class="customClasses">
    <a href="/" class="logo flex gap-3 items-center whitespace-nowrap">
      <img class="logo__img max-w-10" src="/assets/images/Logo.png" alt="logo"/>
      <span class="logo__text text-white text-xl">
        Vovko & Bybko Studio
      </span>
    </a>
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
