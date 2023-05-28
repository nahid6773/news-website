<template>
  <div class="container mx-auto">
    <div class="flex gap-6 my-4">
      <!-- First Colomn -->
      <div class="w-[50%]">
        <!-- <CarouselSingleNew /> -->
        <BaseHorizontalCard v-if="news" :info="news.collection[0]" class="my-4" />
        <br>
        <CarouselMultipleNews v-if="news" :data="news" class="my-4" />
        <ElementsLatestNews :data="news"/>
      </div>

      <div class="w-[25%]">
        <ElementsNewsTab :data="news" />
        <!-- <CarouselSingleImg :data="images" /> -->
      </div>
      <div class="w-[25%]">
        <ElementsPublicity />
      </div>
    </div>
    <!-- <div class="grid grid-rows-1 grid-flow-col gap-4 mt-4 w-full">
      <div class="col-span-1">
      </div>
      <div class="col-span-2">
        hjhj
      </div>
      <div class="col-span-4">
        jmhmf
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useNewsList } from "~/composables/useNews";
const { news, pending } = useNewsList();
// const { data: news, error } = await useAsyncData("news", () =>
//   $fetch(`News/NewsByDate`, {
//     method: "GET",
//     baseURL: "http://newspodium.sakku-khatam.ir",
//     params: {
//       NewsAgencyId: 20,
//       Page: 1,
//       date: '2023 05 18'
//     },
//   })
// );

const topNews = ref({
  image:
    "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/03/14020303000552_Test_PhotoN.jpg",
  alt:
    "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
  text:
    "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
});

const images = ref([
  {
    img:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980701000376_Test_PhotoN-450x320.jpg",
    alt: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
    title: "دبیر انجمن داروسازان استان تهران",
    text: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
  },
  {
    img: "http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/116568-450x320.jpg",
    alt: "رأفت اسلامی حاکم است اما اجازه ناامنی نمی‌دهیم",
    title: "رئیس قوه قضائیه:",
    text: "رأفت اسلامی حاکم است اما اجازه ناامنی نمی‌دهیم",
  },
  {
    img:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980118000811_Test_PhotoN-450x320.jpg",
    alt: "پلیس در فضای حقیقی و مجازی آماده و هوشیار است",
    title: "فرمانده انتظامی پایتخت",
    text: "پلیس در فضای حقیقی و مجازی آماده و هوشیار است",
  },
  {
    img:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980701000376_Test_PhotoN-450x320.jpg",
    alt: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
    title: "دبیر انجمن داروسازان استان تهران",
    text: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
  },
]);
</script>
<style scoped lang="postcss">
.g-head-anime {
  @apply invisible;
}
</style>
