<template>
  <div class="gridClass my-5" v-if="news">
    <div
      class="w-full flex items-center justify-center text-primary h-24"
      v-if="!dataCurrency"
    >
      <IconSpinner />
      <span class="font-bold"> Loading... </span>
    </div>
    <div
      class="flex items-center justify-between mt-3 flex-wrap gap-y-3"
      v-if="dataCurrency"
    >
      <BaseCurrencyCard :data="dataCurrency" />
    </div>
    <ElementsLastCard :data="lastCard" />
    <div
      class="w-full flex flex-wrap gap-y-3 items-center justify-between my-5"
    >
      <BaseCard />
      <BaseCard />
      <BaseCard />
      <BaseCard />
    </div>
    <div
      class="flex flex-wrap laptop:flex-nowrap w-full items-start justify-between"
    >
      <div class="w-full laptop:w-[73%]">
        <ElementsLatestNews :data="news" />
      </div>
      <div class="w-full laptop:w-[25%] flex flex-col gap-y-5">
        <ElementsPublicity />
        <ElementsChosenCard :data="news" :title="`برگزیده های اقتصادی`" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNewsList } from "~/composables/useNews";
const { news } = useNewsList();
import { ref, onMounted } from "vue";

const dataCurrency = ref(null);
onMounted(() => {
  // ///// get list currency
  fetch("http://23.227.196.200:81/Currency/ListCurrency", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
    },
    body:JSON.stringify(

      [
        {
      typeCurrency: 80,
      start: 0,
      end: 1,
    },
    {
      typeCurrency: 81,
      start: 0,
      end: 1,
    },
        {
      typeCurrency: 1,
      start: 0,
      end: 1,
    },
    
     {
      typeCurrency: 10,
      start: 0,
      end: 1,
    },
     {
      typeCurrency: 4,
      start: 0,
      end: 1,
    },
     {
      typeCurrency: 5,
      start: 0,
      end: 1,
    },
     {
      typeCurrency: 2,
      start: 0,
      end: 1,
    },
     {
      typeCurrency: 202,
      start: 0,
      end: 1,
    },
    {
      typeCurrency: 200,
      start: 0,
      end: 1,
    },]
    )
    
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result)
      dataCurrency.value = JSON.parse(result);

    })
    .catch((error) => console.log("error", error));
});

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
