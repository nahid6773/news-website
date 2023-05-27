<template>
  <section>
    <div class="max-w-[150px] mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <div class="carousel1 swiper-container max-w-sm mx-auto sm:max-w-none ">
          <div class="swiper-wrapper">
            <!-- Carousel items -->
            <div v-for="i in 10" :key="i" class="swiper-slide h-auto flex flex-col">
              <!-- Image -->
              <img class="w-full aspect-[7/4] object-cover" src="http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/57886920.jpg" width="259" height="148" alt="Carousel 01" />
              <!-- White box -->
              <div class="grow bg-white px-4 pb-6">
                <!-- Title -->
                <a class="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">Digital Art</a>
                <div class="text-sm text-gray-500 italic">34 collections</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Arrows -->
        <div class="flex mt-12 space-x-4 justify-end">
          <button class="carousel1-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
            <span class="sr-only">Previous</span>
            <svg class="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button class="carousel1-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
            <span class="sr-only">Next</span>
            <svg class="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  name: 'Carousel1',
  mounted() {
    const carousel1 = new Swiper('.carousel1', {
      slidesPerView: 1,
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.carousel1-next',
        prevEl: '.carousel1-prev',
      },
    })
  },
}
</script>