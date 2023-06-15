<template>
  <section>
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
      <swiper-slide v-for="n in info" :key="n">
        <div class="pb-2">
          <div class="relative overflow-hidden rounded-lg">
            <nuxt-link to="/" class="cursor-pointer block">
              <figure>
                <img
                  class="w-full"
                  :src="n.image"
                  :alt="n.alt ? n.alt : n.text"
                />
              </figure>
            </nuxt-link>
            <h3 class="text-lg">
              <nuxt-link to="/" class="cursor-pointer block">
                <div
                  class="absolute w-full text-white bottom-0 p-3"
                  style="
                    background: linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.6) 30%,
                      rgba(0, 0, 0, 0.8) 80%,
                      rgba(0, 0, 0, 1) 100%
                    );
                  "
                  v-text="n.text"
                />
              </nuxt-link>
            </h3>
          </div>
        </div>
      </swiper-slide>
      <div
        class="absolute  top-[50%] flex  space-x-4 justify-end flex items-center justify-between w-full"
        style="z-index: 999"
      >
        <button
          class="carousel1-next-single-card hover:border-2 bg-primary text-white hover:bg-yellow-600 hover:border-gray-200 w-7 h-7 flex items-center justify-center mx-1 px-1"
        >
          <IconArrowLeft class="rotate-180" />
        </button>
        <button
          class="carousel1-prev-single-card hover:border-2 bg-primary text-white hover:bg-yellow-600 hover:border-gray-200 w-7 h-7 flex items-center justify-center mx-1 px-1"
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
import SwiperCore, { Autoplay,Keyboard, Scrollbar, Navigation } from "swiper";

defineProps({
  items: Object,
  info: {
    type: Array,
    required: true,
  },
});

SwiperCore.use([Navigation]);

const modules = [Keyboard, Scrollbar,Autoplay];
</script>
