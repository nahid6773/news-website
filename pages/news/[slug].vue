<template>
  <div class="gridClass">
    <div class="py-6 flex items-start justify-between w-full flex-wrap">
      <div class="w-full lg:w-6/12 xl:w-7/12 flex flex-col gap-y-5">
        <div class="w-full bg-white flex flex-col gap-y-6 p-3">
          <div class="flex items-center justify-between w-full px-2">
            <span class="bg-gray-300 py-1 px-4 text-gray-500">خانه</span>
            <span class="cursor-pointer"><IconLike /></span>
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-sm text-gray-400">معاون وزیر راه و شهرسازی</span>
            <h1 class="font-bold text-lg hover:text-yellow-600 cursor-pointer">
              نظام شهرنشینی بر پایه حمل و نقل ریلی تنها راه‌ حل مشکلات
            </h1>
          </div>
          <hr />
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <span class="flex items-center ml-4">
                <IconNote />کد خبر : 142
              </span>
              <span class="flex items-center"
                ><IconDatePicker />۰۴ دی ۱۳۹۸ - ۱۲:۴۵
              </span>
            </div>
            <div class="flex items-center">
              <IconEdit class="ml-4" />
              <IconEnvelope />
            </div>
          </div>
          <hr />
          <div>
            <img src="https://picsum.photos/900/400" alt="" />
            <p class="bg-gray-300 px-2 py-3">
              ایستگاه‌های راه‌آهن به عنوان دروازه ارتباط بین شهر و ریل
              ایمنی،‌آسایش و امنیت مسافر را تضمین کند و ارائه خدمات نوین نظیر
              حمل و نقل درب تا درب،‌تجاری سازی فضاها از طریق توسعه کسب و کار و
              ایجاد اشتغال برای ساکنان محدوده ایستگاه داشته باشد.
            </p>
          </div>
          <p class="text-sm leading-7 py-3">
            به گزارش خبرنگار اقتصادی خبرگزاری فارس، هفتمین کنفرانس بین‌المللی
            ایستگاه‌های آینده اتحادیه بین‌المللی راه‌آهن‌ها امروز با حضور وزیر
            راه و شهرسازی، دبیرکل اتحادیه بین‌المللی راه‌آهن‌ها، مدیرعامل
            راه‌آهن جمهوری اسلامی ایران، و جمعی از دست اندرکاران حمل و نقل ریلی
            کشور و چندین کشور در تهران دنیا آغاز شد.<br />
            در این مراسم مدیرعامل راه‌آهن جمهوری اسلامی ایران اظهار داشت: امروز
            تصور وجود و اداره شهرهای بزرگ توسعه یافته بدون نظام هماهنگ ریلی
            مانند تصور آسمانخراش‌های بدون آسانسور و تصویری دور از ذهن است.<br />
            سعید رسولی افزود:در عصر حاضر شهرسازی‌ها مبتنی بر حمل و نقل همگانی در
            کشورهای پیشرفته بر پایه حمل و نقل ریلی بنا شده‌اند و توسعه شهرها با
            رویکرد توسعه پایدار انجام می‌شود. مدیرعامل راه‌آهن جمهوری اسلامی
            ایران افزود: ایستگاههای راه‌آهن ایفا کننده نقش اصلی این توسعه هستند
            و نمی‌توان آنها را صرفا به عنوان محلی برای سوار و پیاده شدن مسافر در
            نظر گرفت. <br />ایستگاه‌ها به عنوان نقاط مهم شهری در محل تلاقی شهر و
            ریل بوده و بسیاری از خدمات علاوه بر دسترسی به حمل و نقل بر آنها
            ارائه می‌شود که همین امر ایستگاه‌های راه‌آهن دنیا را به نقاط مهم
            جاذب سفرهای شهری و دروازه ارائه فرهنگ شهرها تبدیل کرده است.<br />
            رسولی گفت:تجربه‌ها نشان می‌دهد تنها راه حل برون رفت از مشکلات تردد
            مردم در کلانشهرها ترافیک و آلودگی‌های زیست محیطی، ایجاد نظام
            شهرنشینی بر پایه حمل و نقل ریلی است تا حمل و نقل برون و درون شهری بر
            اساس شبکه ریلی کشور برنامه‌ریزی شود.<br />
            وی ادامه داد:ایستگاه‌های راه‌آهن به عنوان دروازه ارتباط بین شهر و
            ریل باید با ظاهر و طراحی مناسب این دو بخش را مرتبط کند ضمنا حفظ
            ایمنی،‌آسایش و امنیت مسافر را تضمین کند و ارائه خدمات نوین نظیر حمل
            و نقل درب تا درب،‌تجاری سازی فضاها از طریق توسعه کسب و کار و ایجاد
            اشتغال برای ساکنان محدوده ایستگاه داشته باشد.
          </p>
          <hr />
          <div class="flex items-center justify-between flex-wrap">
            <div class="text-xs hover:text-greenlight font-bold">
              لینک کوتاه : http://mellat.demo-qaleb.ir/?p=142
            </div>
            <div
              class="flex flex-wrap items-center justify-center w-full lg:w-auto"
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
          <hr />
          <div class="flex items-center justify-start w-full">
            <span class="text-xs hover:text-greenlight mx-3 font-bold"
              >نویسنده : مهدی دادگر</span
            >
            <span class="text-xs hover:text-greenlight mx-3 font-bold">
              ارسال توسط : ظهور</span
            >
            <span class="text-xs hover:text-greenlight mx-3 font-bold">
              منبع : فارس</span
            >
            <span class="text-xs hover:text-greenlight mx-3 font-bold">
              1062 بازدید</span
            >
            <span class="text-xs hover:text-greenlight mx-3 font-bold"
              >بدون دیدگاه</span
            >
          </div>
        </div>
        <div class="w-full">
          <ElementsSimilarText />
        </div>
        <div class="w-full">
          <BaseTitle label="ثبت دیدگاه" />
          <div class="bg-white py-5 px-3 flex flex-col gap-y-5 w-full">
            <div class="flex items-center justify-between w-full">
              <input
                class="border-1 text-xs appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="نام ونام خانوادگی *"
              />
              <input
                class="border-1 text-xs appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="پست الکترونیک *"
              />
            </div>
            <textarea
              placeholder="متن دیدگاه *"
              class="h-32 text-xs border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            <div class="w-56">
              <button class="px-3 py-2 text-white bg-primary text-sm">
                ثبت دیدگاه
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-y-5 lg:w-56 xl:w-72">

        <ElementsNotes :data="notes" />
        <ElementsLatestContent :data="content" />
      </div>
      <div class="w-full lg:w-48">
        <ElementsPublicity />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
import { useNewsList } from "~/composables/useNews";
const { news, pending } = useNewsList();

const selectedNew =
  !pending.value &&
  news.collection.find((item) => item.titlePage == route.params.slug);

useHead({
  title: route.params.slug,
  meta: [
    {
      name: "description",
      content: route.params.slug,
    },
  ],
});
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
const content = ref([
  {
    id: 1,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 2,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 3,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 4,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 5,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 6,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 7,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 8,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 9,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 10,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
    {
    id: 6,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 7,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 8,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
  {
    id: 9,
    title: "جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
    img: "https://picsum.photos/300/300",
    date: "04 دی 1401 12:45",
  },
 
]);
</script>

<style scoped></style>
