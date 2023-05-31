<template>
  <div class="container mx-auto mt-5">
    <div class="flex gap-6 my-4" v-if="news">
      <!-- First Colomn -->
      <div class="w-[50%]">
        <CarouselSingleNew :items="news" />
        <br />
        <CarouselMultipleNews :data="news" class="my-4" />
        <br />
        <ElementsLatestNews :data="news" class="my-4" />
        <br />
        <br />
        <ElementsTopNews :info="topNews" />
      </div>
      <div class="w-[25%]">
        <ElementsNewsTab :data="news" class="my-4" />
        <br />
        <ElementsNotes :data="notes" class="my-4" />
        <br />
        <CarouselComments :data="comments" class="my-4" />
        <br />
        <ElementsTopNews :info="images[0]" />
        <br />
        <div>
          <BaseTitle label="اخبار مهم" />
          <BaseList :data="news" />
        </div>
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
    image:
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

const notes = ref([
  {
    avatar:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980701000376_Test_PhotoN-450x320.jpg",
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    subtitle: "علی بخشایشی",
  },
  {
    avatar:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980701000376_Test_PhotoN-450x320.jpg",
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    subtitle: "علی بخشایشی",
  },
  {
    avatar:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980701000376_Test_PhotoN-450x320.jpg",
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    subtitle: "علی بخشایشی",
  },
]);

const comments = ref([
  {
    text: "به گفته محققان، با انتقال بخشی از بار رشد محصولات زراعی جهان به مناطق شهری و مناطق دیگر می‌توان زمین را از وضع",
    title: "هانیه میرزاپور",
  },
]);
</script>
<style scoped lang="postcss">
.g-head-anime {
  @apply invisible;
}
</style>
