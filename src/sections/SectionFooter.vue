<script setup lang="ts">
import { networks } from '@/data/networks'
</script>
<template>
  <footer class="bg-white page-width text-white pb-8">
    <div class="px-4 sm:px-6 lg:px-8 pt-16 border-t-1 text-center md:text-start border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-2 mb-12 md:gap-4">
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-3xl font-bold mb-4 text-teal-700" data-aos="fade-right">🏝️ Mochima</h3>
          <p class="text-gray-700 mb-6 max-w-md">
            Tu aventura comienza aquí. Descubre las maravillas del Parque Nacional Mochima con los
            mejores servicios turísticos del estado Sucre.
          </p>
          <div class="flex gap-4 justify-center md:justify-start">
            <a
              target="_blank"
              v-bind:href="network.url"
              v-for="network in networks"
              :key="network.name"
              :class="`duration-200 bg-teal-600 p-2 rounded-full`"
            >
              <v-icon :name="network.name" :scale="network.scale" />
            </a>
          </div>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-700 hover:text-teal-400 transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#services" class="text-gray-700 hover:text-teal-400 transition-colors"
                >Servicios</a
              >
            </li>
            <li>
              <a href="#packages" class="text-gray-700 hover:text-teal-400 transition-colors"
                >Paquetes</a
              >
            </li>
            <li>
              <a href="#about" class="text-gray-700 hover:text-teal-400 transition-colors"
                >Sobre Nosotros</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contacto</h4>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-center justify-center md:justify-start gap-2">
              <span><v-icon name="fa-map-marker-alt" class="text-teal-700" scale="1.2" /></span
              ><span>Mochima, Sucre, Venezuela</span>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-2">
              <span> <v-icon name="fa-phone-alt" class="text-teal-700" scale="1.2" /> </span
              ><span>+58 412 694 7694</span>
            </li>
            <li class="flex items-center justify-center md:justify-start gap-2">
              <span> <v-icon name="fa-regular-envelope" class="text-teal-700" scale="1.2" /> </span
              ><span>xaviermayora20@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500 text-sm">© 2026 Mochima Tours. Todos los derechos reservados.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-500 hover:text-teal-600 text-sm duration-200">Términos</a
          ><a href="#" class="text-gray-500 hover:text-teal-600 text-sm duration-200">Privacidad</a>
        </div>
      </div>
    </div>
  </footer>
</template>
