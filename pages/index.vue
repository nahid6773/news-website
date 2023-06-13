<template>
  <div class="gridClass mx-auto mt-3">
    <div class="w-full">
      <img
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
    <div class="flex gap-6 my-4 flex-wrap laptop:flex-nowrap" v-if="news">
      <!--  Column 1-->
      <div class="w-full laptop:w-[50%] flex flex-col gap-y-5">
        <CarouselSingleNew :items="news" />
        <CarouselMultipleNews :data="news" class="my-4" />
        <ElementsLatestNews :data="news" class="my-4" />
        <ElementsTopNews :info="topNews" />
      </div>
      <!--  Column 2-->
      <div class="w-full laptop:w-[25%] flex flex-col gap-y-5">
        <ElementsNewsTab :data="news" class="my-4" />
        <ElementsNotes :data="notes" class="my-4" />
        <CarouselComments :data="comments" class="my-4" />
        <ElementsTopNews :info="images[0]" />
        <div>
          <BaseTitle label="اخبار مهم" />
          <BaseList :data="news" />
        </div>
      </div>
      <!--  Column 3-->
      <div class="w-full laptop:w-[22%]">
        <ElementsPublicity />
      </div>
    </div>
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
const topNews = ref({
  image:
    "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/03/14020303000552_Test_PhotoN.jpg",
  alt: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
  text: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
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
    img: "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980118000811_Test_PhotoN-450x320.jpg",
    alt: "پلیس در فضای حقیقی و مجازی آماده و هوشیار است",
    title: "فرمانده انتظامی پایتخت",
    text: "پلیس در فضای حقیقی و مجازی آماده و هوشیار است",
  },
  {
    img: "http://mellat.demo-qaleb.ir/wp-content/uploads/2019/12/13980701000376_Test_PhotoN-450x320.jpg",
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
