<template>
  <section>
    <BaseTitle label="دیدگاه های اخیر" />
    <swiper
      class="m-0"
      :slides-per-view="1"
      :centeredSlides="false"
      :grabCursor="true"
      :keyboard="{
        enabled: true,
      }"
      :autoplay="{
        delay: 4000,
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
      <swiper-slide>
        <div class="flex flex-wrap">
          <div v-for="(item, index) in data" :key="index">
            <BaseHorizontalCard :info="item" avatar inverse isHeightComment />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="flex flex-wrap">
          <div v-for="(item, index) in data" :key="index">
            <BaseHorizontalCard :info="item" avatar inverse isHeightComment/>
          </div>
        </div>
      </swiper-slide>
      <div
        class="  absolute flex flex-col top-[3%]  left-0.5 gap-y-1 justify-center "
        style="z-index: 999"
      >
        <button
          class="carousel1-next-single-card border-2 hover:border-gray-200 text-gray-500 hover:bg-yellow-600 bg-white w-6 h-6 flex items-center justify-center mx-1 px-1"
        >
          <IconArrowLeft class="rotate-180" />
        </button>
        <button
          class="carousel1-prev-single-card border-2 hover:border-gray-200 text-gray-500 hover:bg-yellow-600 bg-white w-6 h-6 flex items-center justify-center mx-1 px-1"
        >
          <IconArrowLeft />
        </button>
      </div>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Keyboard, Scrollbar, Navigation } from "swiper";
SwiperCore.use([Navigation]);

const modules = [Autoplay, Keyboard, Scrollbar];
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
});
</script>
