<script setup lang="ts">
import ButtonPrimary from '@/components/Buttons/ButtonPrimary.vue'
import CardPackage from '@/components/CardPackage.vue'
import SwiperFather from '@/components/Swiper/SwiperFather.vue'
import { SwiperSlide } from 'swiper/vue'
import { packages } from '@/data/packages/packages'
</script>

<template>
  <div class="image-huellas relative">
    <div id="packages" class="absolute -top-30"></div>
    <div class="page-width pt-6 pb-12">
      <h2 class="text-4xl text-gray-800 text-center font-bold mb-4">
        Paquetes <span class="text-teal-700">Turísticos</span>
      </h2>
      <p class="text-lg text-gray-700 font-raleway text-center max-w-[540px] mx-auto mb-12">
        Descubre el paraíso caribeño con nuestros exclusivos paquetes de viaje al Parque Nacional
        Mochima.
      </p>
      <div class="container-packages" data-aos="fade-up" data-aos-offset="0">
        <SwiperFather
          :swiper-config="{
            spaceBetween: 20,
            pagination: {
              clickable: true,
            },
            breakpoints: {
              300: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3,
              },
            },
          }"
        >
          <swiper-slide class="pb-12" v-for="(packageItem, index) in packages" :key="index">
            <CardPackage
              :popularity="packageItem.popularity"
              :title="packageItem.title"
              :description="packageItem.description"
              :price="packageItem.price"
              :image="packageItem.urlImageHorizontal"
              :icons="packageItem.icons"
              :services="packageItem.services"
            />
          </swiper-slide>
        </SwiperFather>
      </div>
      <div class="flex mt-6 justify-center">
        <ButtonPrimary to="/" color="primary" type="contained"> Ver más paquetes </ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<style>
.image-huellas {
  background: linear-gradient(to bottom, #ffffff, #d09125d5, #d09125 96%), url(/huellas.jpg);
  background-repeat: repeat;
  background-size: 391px;
}
.container-packages .swiper-pagination {
  align-items: center;
  display: flex;
  justify-content: center;
  bottom: 0px !important;

  .swiper-pagination-bullet {
    height: 8px;
    width: 8px;
  }
  .swiper-pagination-bullet-active {
    background: #fff;
    height: 15px;
    width: 15px;
  }
}
</style>
