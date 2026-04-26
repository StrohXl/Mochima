<script setup lang="ts">
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue'
</script>

<template>
  <div id="hero" class="relative 2xl:pt-52 py-32 pt-42 flex">
    <div class="page-width text-white">
      <h1
        class="text-4xl md:text-5xl mx-auto text-center lg:text-6xl max-w-[800px] font-bold mb-14!"
      >
        Descubre el Paraíso en <span class="text-teal-400">Mochima</span>
      </h1>
      <p class="text-lg mx-auto text-center md:text-xl text-gray-200 max-w-[900px]">
        Vive una experiencia inolvidable en las playas más hermosa de Venezuela. Botes, alojamiento,
        gastronomía y aventura te esperan en el corazón del Caribe venezolano.
      </p>
      <div class="flex justify-center mt-14">
        <button-primary to="/" color="primary" type="contained">
          Reserva tu aventura ahora
          <v-icon name="fa-arrow-right" fill="#fff" class="ml-2" />
        </button-primary>
      </div>
    </div>
    <div style="height: calc(100% + 195px)" class="absolute w-full left-0 -z-1 top-0 bg-gray-700">
      <video
        fetchpriority="high"
        poster="/capture-mochima.webp"
        src="/olas.mp4"
        class="object-cover w-full h-full opacity-60"
        autoplay
        muted
        loop
      ></video>
    </div>
  </div>
</template>
