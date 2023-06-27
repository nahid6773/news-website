<template>
  <div class="gridClass">
    <div class="py-6 flex items-start justify-between w-full flex-wrap gap-y-5">
      <div class="w-full laptop:w-6/12 laptop-m:w-7/12 flex flex-col gap-y-5">
        <div class="w-full bg-white flex flex-col gap-y-6 p-3" v-if="details">
          <div class="flex items-center justify-between w-full px-2">
            <span class="bg-gray-300 py-1 px-4 text-gray-500">خانه</span>
            <span class="cursor-pointer"><IconLike /></span>
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-sm text-gray-400">
              {{ details.item.newsAgencyName }}
            </span>
            <h1
              class="font-bold hover:text-yellow-600 cursor-pointer mobile-s:text-sm laptop:text-lg"
            >
              {{ details.item.titleNews }}
            </h1>
          </div>
          <hr />
          <div class="flex items-center justify-between flex-wrap">
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
              {{ details.item.lead }}
            </p>
          </div>
          <p class="text-sm leading-7 py-3">
            {{ details.item.body }}
          </p>
          <hr />
          <div
            class="flex w-full items-center justify-between flex-wrap gap-y-3"
          >
            <div class="text-xs hover:text-greenlight font-bold">
              لینک کوتاه : {{ details.item.shortLink }}
            </div>
            <div
              class="flex flex-wrap items-center justify-start laptop:justify-center w-full laptop:w-auto"
            >
              <a
                target="_blank"
                class="flex items-center px-1 laptop:px-3 mt-1"
                href="#"
              >
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
          <div class="flex items-center justify-start w-full flex-wrap gap-y-3">
            <span
              class="text-xs hover:text-greenlight mx-3 font-bold max-w-screen-sm:w-full"
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
            <div
              class="flex items-center justify-between w-full flex-wrap gap-y-5"
            >
              <input
                class="border-1 text-xs appearance-none border rounded w-full laptop:w-52 laptop-m:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="نام ونام خانوادگی *"
              />
              <input
                class="border-1 text-xs appearance-none border rounded w-full laptop:w-52 laptop-m:w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="پست الکترونیک *"
              />
            </div>
            <textarea
              placeholder="متن دیدگاه *"
              class="h-32 text-xs border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            <div class="w-56">
              <button class="px-3 py-2 text-white bg-success text-sm">
                ثبت دیدگاه
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-y-5 laptop:w-64 laptop-m:w-72">
        <ElementsNotes :data="notes" />
        <div>
          <BaseTitle label="آخرین مطالب" />
          <ElementsLatestContent :data="content" />
        </div>
      </div>
      <div class="w-full laptop:w-44 laptop-m:w-48">
        <ElementsPublicity />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const route = useRoute();
const routId = ref(route.params.slug);
const details = ref(null);

fetch(`http://newspodium.sakku-khatam.ir/News/newsByKey?Id=${routId.value}`, {
  method: "GET",
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
    details.value = JSON.parse(result);
  })
  .catch((error) => console.log("error", error));
onMounted(async () => {});

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
