<script setup lang="ts">
import { networks } from '@/data/networks'
import { routes } from '@/data/routes'
import { onMounted, ref } from 'vue'
import ButtonPrimary from '../Buttons/ButtonPrimary.vue'

const mobileMenuOpen = ref<boolean>(false)
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
    <div class="page-width py-5">
      <div class="flex items-center justify-between">
        <h2 :class="`text-3xl font-bold ${headerActive ? 'text-teal-700' : 'text-white'}`">
          <a href="#">🏝️ Mochima</a>
        </h2>
        <div class="hidden lg:flex gap-6 xl:gap-12 items-center">
          <nav class="flex gap-7 text-lg">
            <template v-for="item in routes" :key="item.name">
              <a
                :href="item.link"
                :class="` font-medium duration-200   ${headerActive ? 'text-gray-700 hover:text-teal-700' : 'text-white hover:text-teal-400'}`"
                >{{ item.name }}</a
              >
            </template>
          </nav>
          <div class="block">
            <a
              @click="mobileMenuOpen = false"
              target="_blank"
              href="https://www.linkedin.com/in/xm-stroh/"
              class="bg-teal-500 hover:bg-teal-600 text-white py-2 pb-[10px] px-6 rounded-full text-center duration-200 font-medium"
            >
              Reservar Ahora
            </a>
          </div>
          <div class="flex gap-2">
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
        <div class="lg:hidden">
          <button
            :class="headerActive ? 'text-gray-700' : 'text-white'"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <v-icon v-if="!mobileMenuOpen" name="hi-menu" scale="1.4" />
            <v-icon v-else name="io-close" scale="1.4" />
          </button>
        </div>
      </div>
      <template v-if="mobileMenuOpen">
        <div
          :className="`lg:hidden bg-white rounded-lg shadow-xl my-4 overflow-hidden ${headerActive && 'shadow-none!'}`"
        >
          <nav className="flex flex-col p-4">
            <template v-for="item in routes" :key="item.name" key="{item.href}">
              <a
                @click="mobileMenuOpen = false"
                :href="item.link"
                className="text-gray-700 font-medium py-3 border-b border-gray-100 hover:text-teal-600 duration-200"
              >
                {{ item.name }}
              </a>
            </template>
            <div class="mt-6">
              <a
                @click="mobileMenuOpen = false"
                target="_blank"
                href="https://www.linkedin.com/in/xm-stroh/"
                class="bg-teal-500 hover:bg-teal-600 text-white py-2 pb-[10px] px-6 rounded-full text-center duration-200 font-medium"
              >
                Reservar Ahora
              </a>
            </div>
          </nav>
        </div>
      </template>
    </div>
  </header>
</template>
