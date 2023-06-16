<template>
  <div class="gridClass mx-auto my-3" v-if="news">
    <div class="w-full">
      <img
        class="w-full"
        src="https://static.tgju.org/advertisement/1200-70-1682767266.gif"
        alt=""
      />
    </div>
    <div class="flex items-center justify-between mt-3 flex-wrap gap-y-3">
      <BaseCurrencyCard
        v-for="(item, index) in currency"
        :key="index"
        :data="item"
      />
    </div>
    <!-- row 1 -->
    <div
      class="flex items-start justify-between mt-10 w-full laptop:h-80  flex-wrap laptop:nowrap gap-y-5 "
    >
      <CarouselSingleNew :items="news" class="w-full laptop:w-[52%] h-full" />
      <ElementsChosenCard :data="news" class="w-full laptop:w-[22%] h-full" />
      <ElementsNotes :data="notes" class="w-full laptop:w-[24%] h-full" />
    </div>
    <!-- row 2 -->
    <div
      class="flex items-start justify-between mt-10 w-full flex-wrap laptop:nowrap gap-y-5"
    >
      <ElementsLatestNews :data="news" class="w-full laptop:w-[52%]" />
      <ElementsNewsTab :data="news" class="w-full laptop:w-[22%]" />
      <ElementsPublicity class="w-full laptop:w-[24%]" />
    </div>
    <!-- row 3 -->
    <div
      class="flex items-start justify-between mt-10 w-full flex-wrap laptop:nowrap gap-y-5"
    >
      <CarouselSingleImg :info="topNews" class="w-full laptop:w-[52%]" />
      <div class="w-full laptop:w-[22%]">
        <BaseTitle label="اخبار مهم" />
        <BaseList :data="news" />
      </div>
      <div class="w-full laptop:w-[24%] flex flex-col items-center gap-y-2">
        <CarouselComments :data="comments" class="w-full" />
        <CarouselSingleImg :info="images" class="w-full" />
      </div>
    </div>
    <!-- row 4 -->
    <!-- <CarouselNews :data="news" /> -->
    <!-- row 5 -->
    <ElementsLastCard :data="lastCard" />
    <!-- row 6 -->
    <!-- <div class="flex items-start justify-between mt-10 w-full">
      <div>
        <BaseTitle label="آخرین اخبار" />
        <ElementsLatestContent :data="content" />
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useNewsList } from "~/composables/useNews";
const { news, pending } = useNewsList();
const currency = ref([
  {
    title: "سکه",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
  {
    title: "18طلا",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
  {
    title: "مثقال طلا",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
  {
    title: "بورس",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
  {
    title: "انس طلا",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
  {
    title: "نفت برنت",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
  {
    title: "دلار",
    price: "291,010,000",
    change: "9,782.6 (0.46%)",
  },
]);

const images = ref([
  {
    image:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/116568-450x320.jpg",
    alt: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
    title: "دبیر انجمن داروسازان استان تهران",
    text: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
  },
  {
    image:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/116568-450x320.jpg",
    alt: "رأفت اسلامی حاکم است اما اجازه ناامنی نمی‌دهیم",
    title: "رئیس قوه قضائیه:",
    text: "رأفت اسلامی حاکم است اما اجازه ناامنی نمی‌دهیم",
  },
  {
    image:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/116568-450x320.jpg",
    alt: "پلیس در فضای حقیقی و مجازی آماده و هوشیار است",
    title: "فرمانده انتظامی پایتخت",
    text: "پلیس در فضای حقیقی و مجازی آماده و هوشیار است",
  },
  {
    image:
      "http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/116568-450x320.jpg",
    alt: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
    title: "دبیر انجمن داروسازان استان تهران",
    text: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
  },
]);
const topNews = ref([
  {
    image:
      "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/24/14020324000811_Test_PhotoN.jpg",
    alt: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
    text: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
  },
  {
    image:
      "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/03/14020303000552_Test_PhotoN.jpg",
    alt: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
    text: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
  },
  {
    image:
      "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/03/14020303000552_Test_PhotoN.jpg",
    alt: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
    text: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
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

const content = ref([
  {
    id: 1,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
  {
    id: 2,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
  {
    id: 3,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
  {
    id: 4,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
  {
    id: 5,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
  {
    id: 6,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
  {
    id: 7,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    date: "04 دی 1401 12:45",
  },
]);
const lastCard = ref([
  {
    title: "",
    date: "",
    img: "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/24/14020324000811_Test_PhotoN.jpg",
    reverse: true,
  },

  {
    title: "",
    date: "",
    img: "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/24/14020324000272_Test_PhotoN.jpg",
    reverse: false,
  },
]);
</script>
<style scoped lang="postcss">
.g-head-anime {
  @apply invisible;
}
</style>
