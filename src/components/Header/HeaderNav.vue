<script setup lang="ts">
import { networks } from '@/data/networks'
import { routes } from '@/data/routes'
import { onMounted, ref } from 'vue'
import ButtonPrimary from '../Buttons/ButtonPrimary.vue'

const headerActive = ref<boolean>(false)

onMounted(() => {
  document.addEventListener('scroll', () => {
    const positionScroll = window.scrollY
    positionScroll > 0 ? (headerActive.value = true) : (headerActive.value = false)
  })
})
</script>

<template>
  <header
    :class="`fixed top-0 left-0 w-full z-100 bg-transparent ${headerActive ? 'shadow-md bg-white!' : ''}`"
  >
    <div>
      <div :class="`page-width flex items-center justify-between py-5 text-w`">
        <h2 :class="`text-3xl font-bold ${headerActive ? 'text-teal-700' : 'text-white'}`">
          <a href="#">🏝️ Mochima</a>
        </h2>
        <div class="flex gap-12 items-center">
          <nav class="hidden lg:flex gap-7 text-lg">
            <template v-for="item in routes" :key="item.name">
              <a
                :href="item.link"
                :class="` font-medium duration-200   ${headerActive ? 'text-gray-700 hover:text-teal-700' : 'text-white hover:text-teal-400'}`"
                >{{ item.name }}</a
              >
            </template>
          </nav>
          <div class="lg:block">
            <ButtonPrimary size="small" to="#" color="primary" type="contained">
              Reservar Ahora
            </ButtonPrimary>
          </div>

          <div class="hidden lg:flex gap-2">
            <a
              target="_blank"
              v-bind:href="network.url"
              v-for="network in networks"
              :key="network.name"
              :class="`duration-200  ${headerActive ? 'text-gray-700 hover:text-teal-700' : 'text-white hover:text-teal-400'}`"
            >
              <v-icon :name="network.name" :scale="network.scale" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
