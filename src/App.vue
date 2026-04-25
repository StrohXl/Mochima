<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/Header/HeaderNav.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  duration: 1000,
  mirror: false,
  offset: 100,
})
</script>

<template>
  <HeaderNav />

  <main>
    <RouterView />
  </main>
</template>
