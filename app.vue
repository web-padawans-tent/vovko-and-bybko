<script lang="ts">

</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="hidden">
      <SvgSprite />
    </div>
    <main>
      <nuxt-page/>
    </main>
    <Footer/>
    <Modal />
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "V&B Studio",
  })
</script>
