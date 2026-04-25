<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ButtonPrimary from './Buttons/ButtonPrimary.vue'

const positionTab: Ref<'services' | 'description'> = ref('description')
withDefaults(
  defineProps<{
    title: string
    description: string
    price: number
    image: string
    icons: string[]
    services: string[]
    popularity?: boolean
  }>(),
  {
    popularity: false,
  },
)
</script>

<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div class="card-media relative">
      <img :src="image" :alt="title" :class="`w-full h-full object-cover duration-300 `" />
      <div
        v-if="popularity"
        class="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-1 rounded-bl-xl font-semibold text-sm z-10"
      >
        ✨ Más Popular
      </div>
    </div>
    <div class="card-body p-6">
      <h4 class="text-gray-800 font-bold text-2xl">{{ title }}</h4>
      <p class="text-lg mt-4 text-gray-700 font-raleway line-clamp-4">{{ description }}</p>
      <div class="flex gap-2 flex-wrap mt-4 overflow-x-hidden">
        <template v-for="(icon, index) in icons" :key="index">
          <v-icon :name="icon" scale="1.4" class="rounded-full text-gray-600" />
        </template>
      </div>
      <div class="mt-6 border-t-1 border-gray-200 pt-4 flex justify-between items-center">
        <span class="text-2xl font-bold text-teal-600">${{ price.toFixed(2) }}</span>
        <button-primary to="/" color="primary" type="contained" size="small">
          Reservar
        </button-primary>
      </div>
    </div>
  </div>
</template>
