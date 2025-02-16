<script setup lang="ts">

import Footer from "~/components/Footer.vue";
import SvgSprite from "~/components/SvgSprite.vue";
</script>

<template>
  <div class="hidden">
    <SvgSprite/>
  </div>
  <div class="wrapper">
    <Header/>
    <main>
      <img src="/assets/images/black hole.gif" class="img_bg z-10" alt="404">
      <div class="container-main relative z-20">
        <span class="title title--h1"> 404: </span>
        <span class="title title--h2">Упс, страница исчезла <br> в черной дыре интернета.</span>
        <div class="button-container">
          <a href="/" class="btn">
            <span>Вернуться на землю</span>
            <img src="/assets/images/earth.gif" class="img absolute" alt="home link">
          </a>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<style scoped lang="sass">
footer,
header
  z-index: 50
main
  padding: 150px 0 150px 0
  font-family: 'Oswald', sans-serif
  font-weight: 400
  .button-container
    padding-top: 90px
    display: flex
    .btn
      text-transform: uppercase
      border: 1px solid #fff
      border-radius: 18px
      padding: 15px 65px 15px 20px
      position: relative
      margin-left: auto
      .img
        top: 76%
        right: -30px
        transform: translateY(-50%)
        width: 139px
        height: 130px
  .img_bg
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    max-width: 40rem
    max-height: 40rem
  .title
    &.title--h1
      text-transform: none
      font-size: 6rem
    &.title--h2
      text-transform: none
      font-size: 5rem
</style>
