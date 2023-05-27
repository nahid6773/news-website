<template>
  <footer class="bg-white">
    <div class="bg-gray-200 font-shabnam">
      <div class="flex flex-wrap sizeScreen py-5 px-4">
        <div class="flex flex-col justify-around w-full lg:w-1/3 pl-4">
          <div class="flex items-center">
            <img src="~/assets/images/logo.png" alt="لوگو" class="w-80" />
          </div>
        </div>
        <div
          class="w-full lg:w-1/3 px-4 flex sm:flex-row flex-col justify-around py-3"
        >
          <div class="sm:w-1/2 w-full flex flex-col">
            <nuxt-link
              v-for="(item, index) in listFooter"
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
              v-for="(item, index) in listFooter"
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
      <div
        class="flex flex-wrap items-center justify-center py-3 w-full lg:w-auto"
      >
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
</template>

<script>
export default {
  name: "NnTheFooter",

  data() {
    return {
      listFooter: [
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
      ],
    };
  },

  mounted() {},

  methods: {},
};
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

<style lang="scss" scoped></style>
