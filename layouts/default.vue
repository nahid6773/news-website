<template>
  <div>
    <header class="bg-white">
      <nav>
        <div class="relative flex justify-between items-center">
          <div class="flex flex-1 items-center">
            <a href="/"
              ><img src="~/assets/images/logo.png" alt="تاپ نیوز" class="h-24 mt-1"
            /></a>
          </div>

          <div class="relative mx-auto text-gray-600 lg:block hidden">
            <input
              class="border-2 border-gray-300 bg-white h-10 ml-2 pr-8 rounded-lg text-sm focus:outline-none text-sm focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72"
              type="search"
              name="search"
              placeholder="جستجو..."
            />
            <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
              <base-icon name="search" />
            </button>
          </div>
        </div>

        <div class="hidden md:block bg-primary shadow-md text-center">
          <div class="text-md font-bold text-white lg:flex-grow">
            <nuxt-link
              v-for="(item, index) in menu"
              :key="index"
              :to="item.link"
              class="block mt-4 lg:inline-block lg:mt-0 px-4 py-2"
              :class="index && 'border-r'"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
      </nav>
    </header>

    <nuxt-page></nuxt-page>

    <footer class="bg-white">
      <div class="bg-gray-200 font-shabnam">
        <div class="flex flex-wrap sizeScreen py-5 px-4">
          <div class="flex flex-col justify-around w-full lg:w-1/3 pl-4">
            <div class="flex items-center">
              <img src="~/assets/images/logo.png" alt="لوگو" class="w-80" />
            </div>
          </div>
          <div class="w-full lg:w-1/3 px-4 flex sm:flex-row flex-col justify-around py-3">
            <div class="sm:w-1/2 w-full flex flex-col">
              <nuxt-link
                v-for="(item, index) in footer_first_menu"
                :key="index"
                :to="item.link"
                class="text-center font-bold text-sm p-3 pl-3"
                :class="index && 'border-r'"
              >
                {{ item.title }}
              </nuxt-link>
            </div>
            <div class="sm:w-1/2 w-full flex flex-col">
              <nuxt-link
                v-for="(item, index) in footer_second_menu"
                :key="index"
                :to="item.link"
                class="text-center font-bold text-sm p-3 pl-3"
                :class="index && 'border-r'"
              >
                {{ item.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-between py-1 sizeScreen px-4">
        <a
          target="_blank"
          class="flex items-center text-sm text-customBlue text-justify pl-5"
          href="#"
          >© کپی رایت تمامی حقوق مادی و معنوی این سرویس متعلق به تاپ نیوز است</a
        >
        <div class="flex flex-wrap items-center justify-center py-3 w-full lg:w-auto">
          <a target="_blank" class="flex items-center px-3 mt-1" href="#">
            <base-icon name="instagram" /> </a
          ><a target="_blank" class="flex items-center px-3 mt-1" href="#">
            <base-icon name="linkdin" /> </a
          ><a target="_blank" class="flex items-center px-3 mt-1" href="#">
            <base-icon name="facebook" /> </a
          ><a target="_blank" class="flex items-center px-3 mt-1" href="#">
            <base-icon name="telegram" /> </a
          ><a target="_blank" class="flex items-center px-3 mt-1" href="#">
            <base-icon name="aparat" /> </a
          ><a target="_blank" class="flex items-center px-3 mt-1" href="#">
            <base-icon name="youtube" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openMenu = ref(false);

const menu = ref([
  {
    title: "جامعه",
    link: "#",
  },
  {
    title: "اقتصاد",
    link: "#",
  },
  {
    title: "بین الملل",
    link: "#",
  },
  {
    title: "سیاست",
    link: "#",
  },
  {
    title: "علم و پیشرفت",
    link: "#",
  },
  {
    title: "دانشگاه",
    link: "#",
  },
  {
    title: "فرهنگ",
    link: "#",
  },
  {
    title: "هنر و رسانه",
    link: "#",
  },
  {
    title: "استانها",
    link: "#",
  },
  {
    title: "عکس",
    link: "#",
  },
  {
    title: "فیلم",
    link: "#",
  },
]);

const footer_first_menu = ref([
  {
    title: "تماس با ما",
    link: "#",
  },
  {
    title: "قوانین و مقررات",
    link: "#",
  },
  {
    title: "سوالات متداول",
    link: "#",
  },
  {
    title: "درباره ما",
    link: "#",
  },
]);

const footer_second_menu = ref([
  {
    title: "جامعه",
    link: "#",
  },
  {
    title: "اقتصاد",
    link: "#",
  },
  {
    title: "بین الملل",
    link: "#",
  },
  {
    title: "سیاست",
    link: "#",
  },
]);
</script>
