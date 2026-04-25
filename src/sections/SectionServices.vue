<script setup lang="ts">
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue'
import SwiperFather from '@/components/Swiper/SwiperFather.vue'
import { services } from '@/data/services/services'
import WeddingIcon from '@/icons/weddingIcon.vue'
import { SwiperSlide } from 'swiper/vue'
const scale = 2.5
</script>

<template>
  <div
    class="page-width relative md:shadow-[0px_5px_10px_3px_#77777785] lg:max-w-[900px]! md:max-w-[750px]! py-10 md:rounded-3xl mb-12! bg-white"
  >
    <div id="services" class="absolute -top-30"></div>
    <h2 class="text-4xl text-center font-bold mb-10 text-gray-800">Nuestros Servicios</h2>
    <div class="md:max-w-[700px] mx-auto">
      <SwiperFather
        :swiper-config="{
          spaceBetween: 20,
          autoplay: {
            delay: 3000,
          },
          loop: true,
          breakpoints: {
            300: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          },
        }"
      >
        <swiper-slide v-for="(service, index) in services" :key="index">
          <div class="flex flex-col items-center text-center">
            <div
              class="container-icon border-[1px] border-gray-300 bg-white mb-4 p-6 rounded-full text-teal-600"
            >
              <v-icon v-if="service.id !== 5" :name="service.icon" :scale="scale" />
              <div
                :style="`height: ${19.2 * scale}px; width: ${19.2 * scale}px;`"
                v-if="service.id === 5"
              >
                <WeddingIcon />
              </div>
            </div>
            <h3 class="text-xl font-medium font-raleway mb-2 text-gray-700">
              {{ service.title }}
            </h3>
          </div>
        </swiper-slide>
      </SwiperFather>
    </div>

    <div class="flex justify-center mt-6">
      <ButtonPrimary to="/" color="gray" type="outlined">
        Ver todos los servicios <v-icon name="fa-plus" class="ml-2"
      /></ButtonPrimary>
    </div>
  </div>
</template>
