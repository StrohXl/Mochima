<template>
  <div class="md:py-20 py-12 bg-white">
    <div class="page-width relative z-10">
      <div id="about" class="absolute -top-30"></div>

      <div class="grid md:grid-cols-2 gap-8 lg:gap-18">
        <div class="relative md:h-[90%]">
          <img
            class="w-full md:h-full shadow-sm aspect-[1.5] object-top object-cover rounded-3xl rounded-br-3xl"
            src="/packages/15944.jpg"
            alt=""
          />
          <div
            class="absolute -right-2 -bottom-2 md:-bottom-6 md:-right-6 lg:-bottom-10 lg:-right-10 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
          >
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <span class="text-2xl">🏝️</span>
              </div>
              <div>
                <p class="text-2xl font-bold text-teal-600">
                  <span id="myTargetElement">15</span>+
                </p>
                <p class="text-gray-600 text-sm">Playas únicas</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span
            data-aos="fade-left"
            class="inline-block text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2"
            >Sobre Nosotros</span
          >
          <h2 data-aos="fade-left" class="text-5xl text-gray-800 font-bold max-w-[540px]">
            Tu puerta de entrada al <span class="text-teal-600">paraíso de Mochima</span>
          </h2>
          <div class="text-gray-700 font-raleway mt-8">
            <p data-aos="fade-left" class="mb-4">
              Somos tu aliado confiable para descubrir las maravillas del Parque Nacional Mochima en
              el estado Sucre, Venezuela. Con años de experiencia, ofrecemos servicios turísticos de
              primera calidad que combinan aventura, comodidad y autenticidad local.
            </p>
            <p data-aos="fade-left" class="mb-4">
              Desde renta de botes privados hasta alojamiento en la exclusiva Posada Isla Piscina,
              cada detalle está diseñado para que vivas una experiencia inolvidable en uno de los
              destinos más hermosos del Caribe.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <v-icon name="io-boat-sharp" scale="1.4" class="rounded-full text-teal-600" />
              </div>
              <span class="font-semibold text-gray-700">Flota propia</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <v-icon name="gi-wood-cabin" scale="1.4" class="rounded-full text-teal-600" />
              </div>
              <span class="font-semibold text-gray-700">Alojamiento exclusivo</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <v-icon name="io-people-circle" scale="1.6" class="rounded-full text-teal-600" />
              </div>
              <span class="font-semibold text-gray-700">Guías certificados</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <span class="text-lg">⭐</span>
              </div>
              <span class="font-semibold text-gray-700">5 años de experiencia</span>
            </div>
          </div>

          <div class="mt-16 flex justify-center md:justify-start">
            <ButtonPrimary to="/" color="primary" type="contained" size="medium">
              Conoce nuestra historia
              <v-icon name="fa-arrow-right" class="ml-2" />
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CountUp } from 'countup.js'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue'
const options = {
  duration: 3,
  autoAnimate: true,
}
window.onload = function () {
  const demo = new CountUp('myTargetElement', 15, options)
  if (!demo.error) {
    demo.start()
  } else {
    console.error(demo.error)
  }
}
</script>
