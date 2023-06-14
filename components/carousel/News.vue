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
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <swiper-slide>
        <ElementsSlide />
      </swiper-slide>
      <div
        class="absolute flex -mt-16 space-x-4 justify-between w-full items-center"
        style="z-index: 999"
      >
        <button
          class="carousel1-next-single-card border-2 border-gray-200 text-gray-400 hover:border-gray-400 hover:text-white hover:bg-greenlight w-7 h-7 flex items-center justify-center mx-1 px-1"
        >
          <IconArrowLeft class="rotate-180" />
        </button>
        <button
          class="carousel1-prev-single-card border-2 border-gray-200 text-gray-400 hover:border-gray-400 hover:text-white hover:bg-greenlight w-7 h-7 flex items-center justify-center mx-1 px-1"
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
import SwiperCore, { Keyboard, Scrollbar, Navigation } from "swiper";

defineProps({
  items: Object,
});

SwiperCore.use([Navigation]);

const modules = [Keyboard, Scrollbar];
</script>

<style scoped>

</style>
