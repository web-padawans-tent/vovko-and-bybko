<script lang="ts">

</script>

<template>
  <div class="hidden">
    <SvgSprite/>
  </div>
  <div class="wrapper">
    <Header/>
    <main>
      <nuxt-page/>
    </main>
    <Footer/>
    <Modal />
  </div>
</template>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
