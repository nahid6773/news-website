<template>
  <div class="gridClass" v-if="news">
    <div class="flex items-center justify-between mt-3 flex-wrap gap-y-3">
      <BaseCurrencyCard
        v-for="(item, index) in currency"
        :key="index"
        :data="item"
      />
    </div>
    <ElementsLastCard :data="lastCard" />
    <div class="flex items-start justify-between flex-wrap laptop:nowrap">
      <ElementsLatestNews :data="news"/>
    </div>
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
