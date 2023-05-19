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
              <svg
                class="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="hidden md:block bg-primary shadow-md text-center">
          <div class="text-md font-bold text-white lg:flex-grow">
          <router-link v-for="(item, index) in menu" :key="index" :to="item.link" class="block mt-4 lg:inline-block lg:mt-0 px-4 py-2" :class="index && 'border-r'">
              {{ item.title }}
          </router-link>
        </div>
        </div>
      </nav>
    </header>

    <nuxt-page></nuxt-page>
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
</script>
