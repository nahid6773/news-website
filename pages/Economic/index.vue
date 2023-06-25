<template>
  <div class="gridClass my-5" v-if="news">
    <div class="flex items-center justify-between mt-3 flex-wrap gap-y-3" v-if="data">
      <BaseCurrencyCard :data="data" />
    </div>
    <ElementsLastCard :data="lastCard" />
    <div class="w-full flex items-center justify-between my-5">
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </div>
    <div class="flex w-full items-start justify-between">
      <div class="w-[73%]">
        <ElementsLatestNews :data="news" />
      </div>
      <div class="w-[25%] flex flex-col gap-y-5">
        <ElementsPublicity />
        <ElementsChosenCard :data="news" :title="`برگزیده های اقتصادی`" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsList } from "~/composables/useNews";
const { news } = useNewsList();
const { data, pending } = await useFetchApi(
  "http://23.227.196.200:81/Currency/LastUpdateCurrency",
  "POST"
);

const lastCard = ref([
  {
    title: "",
    date: "",
    img: "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/24/14020324000811_Test_PhotoN.jpg",
    reverse: true,
    pic: "",
  },

  {
    title: "",
    date: "",
    img: "https://media.farsnews.ir/Uploaded/Files/Images/1402/03/24/14020324000272_Test_PhotoN.jpg",
    reverse: false,
  },
]);
</script>

<style lang="scss" scoped></style>
