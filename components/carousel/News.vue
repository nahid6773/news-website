<template>
  <div>
    <swiper
      class=""
      :slides-per-view="4"
      :centeredSlides="false"
      :grabCursor="true"
      :keyboard="{
        enabled: true,
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
      <swiper-slide v-for="(item, index) in data" :key="index">
        <div class="border-4 border-success w-72 h-40 relative">
          <img
            class="w-full h-full"
            src="https://picsum.photos/300/300"
            alt=""
          />
          <div class="absolute top-[10%] flex flex-col gap-y-4 pl-5 pr-2">
            <span
              class="bg-success text-white font-bold text-xs px-3 py-1 text-center w-14"
              >6دی</span
            >
            <h3 class="font-bold text-sm text-white">
              <NuxtLink to="/">{{ item.title }}</NuxtLink>
            </h3>
          </div>
        </div>
      </swiper-slide>

      <div
        class="absolute flex -mt-16 justify-between w-full items-center"
        style="z-index: 999"
      >
        <button
          class="carousel1-next-single-card border-2 hover:border-gray-200 text-white hover:bg-yellow-600 bg-success w-7 h-7 flex items-center justify-center mx-1 px-1"
        >
          <IconArrowLeft class="rotate-180" />
        </button>
        <button
          class="carousel1-prev-single-card border-2 hover:border-gray-200 text-white hover:bg-yellow-600 bg-success w-7 h-7 flex items-center justify-center mx-1 px-1"
        >
          <IconArrowLeft />
        </button>
      </div>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Keyboard, Scrollbar, Navigation } from "swiper";

defineProps({
  data: {
    type: Array,
    required: true,
  },
});

SwiperCore.use([Navigation]);

const modules = [Autoplay, Keyboard, Scrollbar];
</script>

<style scoped></style>
