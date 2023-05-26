<template>
  <div class="container mx-auto">
    <div class="grid grid-rows-1 grid-flow-col gap-4 mt-4">
      <div class="col-span-2">
        <ElementsTopNews :info="topNews" />
      </div>
      <div class="col-span-1">
        <ElementsNewsTab :data="news" />
      </div>
      <div class="col-span-1">
        <ElementsPublicity />
      </div>
    </div>
    <!-- <div class="grid grid-rows-1 grid-flow-col gap-4 mt-4 w-full">
      <div class="col-span-1">
        <ElementsNewsList :data="news"/>
      </div>
      <div class="col-span-2">
        <ElementsNewsTab :data="news" />
      </div>
      <div class="col-span-4">
        <ElementsPublicity />
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
  alt: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
  text: "رهبرانقلاب: مجلس یازدهم را همچنان انقلابی، جوان و پرتحرک می‌دانم/ نگاه مجلس در تنظیم رابطه با دولت همکاری و هم‌افزایی باشد",
});
</script>
<style scoped lang="postcss">
.g-head-anime {
  @apply invisible;
}
</style>
