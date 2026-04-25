<script setup lang="ts">
import SectionAbout from '@/sections/SectionAbout.vue'
import SectionFooter from '@/sections/SectionFooter.vue'
import SectionHero from '@/sections/SectionHero.vue'
import SectionPackages from '@/sections/SectionPackages.vue'
import SectionServices from '@/sections/SectionServices.vue'
</script>
<template>
  <SectionHero />
  <div class="-mt-48 pt-48">
    <SectionServices />
    <SectionPackages />
  </div>
  <SectionAbout />
  <SectionFooter />
</template>
