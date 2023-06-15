<template>
  <section>
    <div class="relative py-4">
      <swiper
        class=""
        :slides-per-view="1"
        :centeredSlides="false"
        :grabCursor="true"
        :keyboard="{
          enabled: true,
        }"
          :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
        :breakpoints="{}"
        :scrollbar="true"
        :navigation="{
          nextEl: '.carousel1-next-single-card',
          prevEl: '.carousel1-prev-single-card',
        }"
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :modules="modules"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <BaseHorizontalCard :info="item" isHeight isWidthImg />
        </swiper-slide>
        <div
          class="absolute left-0 flex -mt-16 space-x-4 justify-end"
          style="z-index: 999"
        >
          <button
            class="carousel1-next-single-card border-2 border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 w-7 h-7 flex items-center justify-center mx-1 px-1"
          >
            <IconArrowLeft class="rotate-180" />
          </button>
          <button
            class="carousel1-prev-single-card border-2 border-gray-200 text-gray-400 hover:border-gray-400 hover:text-gray-700 w-7 h-7 flex items-center justify-center mx-1 px-1"
          >
            <IconArrowLeft />
          </button>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, {Autoplay, Keyboard, Scrollbar, Navigation } from "swiper";

defineProps({
  items: Object,
});

SwiperCore.use([Navigation]);

const modules = [Autoplay,Keyboard, Scrollbar];
</script>
