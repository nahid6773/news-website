<template>
  <footer class="flex flex-col items-center">
    <div class="h-14 flex items-center w-full bg-gray-500">
      <div class="gridClass">
        <div class="flex items-center justify-start">
          <span class="mx-2 text-white text-sm cursor-pointer hover:text-greenlight">صفحه اصلی</span>
          <span class="mx-2 text-white text-sm cursor-pointer hover:text-greenlight">گالری عکس</span>
          <span class="mx-2 text-white text-sm cursor-pointer hover:text-greenlight">گالری فیلم</span>
          <span class="mx-2 text-white text-sm cursor-pointer hover:text-greenlight">فروشگاه</span>
          <span class="mx-2 text-white text-sm cursor-pointer hover:text-greenlight">پیوند های سایت</span>
          <span class="mx-2 text-white text-sm cursor-pointer hover:text-greenlight">جستجوی پیشرفته</span>
        </div>
      </div>
    </div>
    <div class="h-14 w-full bg-gray-600 flex items-center">
      <div class="gridClass py-4">
        <div class="flex items-center justify-start">
          <span
            class="mx-2 text-white text-sm cursor-pointer px-2 py-2 hover:text-greenlight"
            :class="index && 'border-r'"
            v-for="(item, index) in listFooter"
            :key="index"
            >{{ item.title }}</span
          >
        </div>
      </div>
    </div>
    <div class="py-4 w-full bg-gray-700 flex flex-col items-center gap-y-7">
      <div class="gridClass">
        <div class="flex items-center justify-start flex-wrap">
          <span
            class="mx-2 bg-gray-500 w-20 text-xs text-white cursor-pointer px-2 py-2 mt-2 text-center hover:text-greenlight"
            v-for="(item, index) in subjects"
            :key="index"
            >{{ item.title }}</span
          >
        </div>
      </div>
      <div class="gridClass">
        <div class="flex flex-wrap justify-between py-1 sizeScreen px-4 text-white">
          <a
            target="_blank"
            class="flex items-center text-sm text-customBlue text-justify pl-5"
            href="#"
            >© کپی رایت تمامی حقوق مادی و معنوی این سرویس متعلق به تاپ نیوز
            است</a
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
          title: "آخرین اخبار",
          link: "#",
        },
        {
          title: "ویژه خبری",
          link: "#",
        },
        {
          title: "اجتماعی",
          link: "#",
        },
        {
          title: "اقتصاد",
          link: "#",
        },
        {
          title: "سیاسی",
          link: "#",
        },
        {
          title: "فرهنگ",
          link: "#",
        },
        {
          title: "مذهبی",
          link: "#",
        },
        {
          title: "ورزش",
          link: "#",
        },
        {
          title: "دانشگاه",
          link: "#",
        },
      ],
      subjects: [
        {
          title: "اجتماعی",
          url: "",
        },
        {
          title: "اقتصاد",
          url: "",
        },
        {
          title: "اقتصادی",
          url: "",
        },
        {
          title: "انتخابات",
          url: "",
        },
        {
          title: "ایران",
          url: "",
        },
        {
          title: "تهران",
          url: "",
        },
        {
          title: "تولید",
          url: "",
        },
        {
          title: "تیراندازی",
          url: "",
        },
        {
          title: "جشنواره",
          url: "",
        },
        {
          title: "خبر",
          url: "",
        },
        {
          title: "خبری",
          url: "",
        },
        {
          title: "خودرو",
          url: "",
        },
        {
          title: "دانشگاه",
          url: "",
        },
        {
          title: "فرهنگ",
          url: "",
        },
        {
          title: "فرهنگی",
          url: "",
        },
        {
          title: "مجلس",
          url: "",
        },
        {
          title: "ورزش",
          url: "",
        },
        {
          title: "وزیر صنعت",
          url: "",
        },
        {
          title: "سیاسی",
          url: "",
        },
        {
          title: "مذهبی",
          url: "",
        },
        {
          title: "رهبر",
          url: "",
        },
        {
          title: "روحانی",
          url: "",
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
