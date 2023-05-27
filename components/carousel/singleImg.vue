<template>
  <section>
    <div class="max-w-[150px] mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <div class="carousel swiper-container max-w-sm mx-auto sm:max-w-none">
          <div class="swiper-wrapper">
            <!-- Carousel items -->
            <div
              v-for="(item, i) in data"
              :key="i"
              class="swiper-slide h-auto flex flex-col w-[500px]"
            >
              <!-- Image -->
              <BaseImage :info="item" />
            </div>
          </div>
        </div>

        <!-- Arrows -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="flex items-center justify-between mt-12 md:mt-16">
            <button
              class="carousel-prev relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button
              class="carousel-next relative z-20 w-12 h-12 p-1 box-content flex items-center justify-center group bg-teal-500 hover:bg-teal-400 dark:bg-gray-800 dark:hover:bg-teal-500 dark:hover:bg-opacity-25 shadow-xl transition duration-150 ease-in-out"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-4 h-4 fill-current text-white dark:text-gray-400 group-hover:text-white dark:group-hover:text-teal-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

import Swiper, { Navigation } from "swiper";
import "swiper/css";
Swiper.use([Navigation]);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  const carousel = new Swiper(".carousel", {
    slidesPerView: 1,
    grabCursor: true,
    loop: false,
    centeredSlides: false,
    initialSlide: 0,
    spaceBetween: 24,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".carousel-next",
      prevEl: ".carousel-prev",
    },
  });
});
</script>
