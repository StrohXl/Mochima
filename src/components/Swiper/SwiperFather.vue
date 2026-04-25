<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper } from 'swiper/vue'
import type { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const modules = [Navigation, Pagination, Autoplay]

defineProps<{
  swiperConfig?: SwiperOptions
}>()
</script>

<template>
  <swiper :modules="modules" v-bind="swiperConfig as any">
    <slot />
  </swiper>
</template>
