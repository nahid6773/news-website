<template>
  <div class="gridClass">
    <div class="w-full">
      <img
        class="w-full"
        src="https://static.tgju.org/advertisement/1200-70-1682767266.gif"
        alt=""
      />
    </div>
    <!-- ///// whene loading data -->
    <div
      class="w-full flex items-center justify-center text-primary h-24"
      v-if="!dataCurrency"
    >
      <IconSpinner />
      <span class="font-bold"> Loading... </span>
    </div>
    <div
      class="flex items-center justify-between mt-6 flex-wrap gap-y-3"
      v-if="dataCurrency"
    >
      <BaseCurrencyCard :data="dataCurrency" />
    </div>
    <div class="w-full my-3">
      <img
        class="w-full"
        src="https://static.tgju.org/advertisement/1200x70-1686373624.gif"
        alt=""
      />
    </div>
    <div
      class="my-3 flex items-center justify-between rounded-md overflow-hidden flex-wrap laptop:no-wrap"
    >
      <BaseTable :data="tolerance_high" noTitle class="w-full laptop:w-[32%]" />
      <BaseTable :data="last" noTitle class="w-full laptop:w-[32%]" />
      <BaseTable :data="tolerance_low" noTitle class="w-full laptop:w-[32%]" />
    </div>
    <div
      class="w-full my-3 flex flex-wrap laptop:no-wrap items-center justify-between"
    >
      <img
        src="https://static.tgju.org/advertisement/ez610gifcom-optimize-1685259387.gif"
        alt=""
      />
      <img
        src="https://static.tgju.org/advertisement/visa-visaland-d-1684906594.gif"
        alt=""
      />
    </div>
    <div
      class="my-3 flex items-center justify-between rounded-md overflow-hidden flex-wrap laptop:no-wrap"
    >
      <BaseTable :data="ansGold" noTitle class="w-full laptop:w-[49%]" />
      <BaseTable :data="gold" noTitle class="w-full laptop:w-[49%]" />
    </div>
   
    <div class="w-full my-3">
      <img
        class="w-full"
        src="https://static.tgju.org/advertisement/lotus-120070-1-1676963467.gif"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const dataCurrency = ref(null);
const errorCurrency = ref(null);

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

// const { data, pending } = useFetchApi(
//   "http://23.227.196.200:81/Currency/LastUpdateCurrency",
//   "POST"
// );

const tolerance_high = ref({
  title: "",
  header: [
    { label: "داغ ترین/افزایشی", props: "time" },
    { label: "قیمت زنده", props: "revenue" },
    { label: "تغییر", props: "percentage" },
    // { label: "", props: "date" },
  ],
  data: [
    {
      time: { label: " گندم", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0531", classes: "low" },
      percentage: { label: "0.1714%", classes: "text-red-500" },
      //   date: { label: "1402/03/19" },
    },
    {
      time: { label: "سکه گرمی ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0081", classes: "low" },
      percentage: { label: "0.0262%", classes: "text-red-500" },
      //   date: { label: "1402/02/26" },
    },
    {
      time: { label: " انس پلاتین", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "6.2063", classes: "high" },
      percentage: { label: "25.1064%", classes: "text-green-500" },
      //   date: { label: "1401/09/23" },
    },
    {
      time: { label: "مس ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "12.1363", classes: "high" },
      percentage: { label: "64.5891%", classes: "text-green-500" },
      //   date: { label: "1401/03/26" },
    },
  ],
});
const tolerance_low = ref({
  title: "",
  header: [
    { label: "داغ ترین/کاهشی", props: "time" },
    { label: "قیمت زنده", props: "revenue" },
    { label: "تغییر", props: "percentage" },
    // { label: "", props: "date" },
  ],
  data: [
    {
      time: { label: " سویا", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0531", classes: "low" },
      percentage: { label: "0.1714%", classes: "text-red-500" },
      //   date: { label: "1402/03/19" },
    },
    {
      time: { label: "مثقال طلا", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0081", classes: "low" },
      percentage: { label: "0.0262%", classes: "text-red-500" },
      //   date: { label: "1402/02/26" },
    },
    {
      time: {
        label: "  طلای 18 عیار/750",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      revenue: { label: "6.2063", classes: "high" },
      percentage: { label: "25.1064%", classes: "text-green-500" },
      //   date: { label: "1401/09/23" },
    },
    {
      time: { label: "کنجاله سویا ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "12.1363", classes: "high" },
      percentage: { label: "64.5891%", classes: "text-green-500" },
      //   date: { label: "1401/03/26" },
    },
  ],
});
const last = ref({
  title: "",
  header: [
    { label: "جدیدترین", props: "time" },
    { label: "قیمت زنده", props: "revenue" },
    { label: "تغییر", props: "percentage" },
    // { label: "", props: "date" },
  ],
  data: [
    {
      time: {
        label: " حباب سکه گرمی",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      revenue: { label: "0.0531", classes: "low" },
      percentage: { label: "0.1714%", classes: "text-red-500" },
      //   date: { label: "1402/03/19" },
    },
    {
      time: { label: " آبشده نقدی ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0081", classes: "low" },
      percentage: { label: "0.0262%", classes: "text-red-500" },
      //   date: { label: "1402/02/26" },
    },
    {
      time: { label: "  مثقال طلا", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "6.2063", classes: "high" },
      percentage: { label: "25.1064%", classes: "text-green-500" },
      //   date: { label: "1401/09/23" },
    },
    {
      time: { label: "دلار ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "12.1363", classes: "high" },
      percentage: { label: "64.5891%", classes: "text-green-500" },
      //   date: { label: "1401/03/26" },
    },
  ],
});

const ansGold = ref({
  title: "",
  header: [
    { label: "انس طلا", props: "time" },
    { label: "قیمت زنده", props: "revenue" },
    { label: "تغییر", props: "percentage" },
    { label: "بیشترین", props: "hight" },
    { label: "کمترین", props: "low" },
    { label: "زمان", props: "date" },
  ],
  data: [
    {
      time: {
        label: " انس طلا  ",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      revenue: { label: "0.0531", classes: "low" },
      percentage: { label: "0.1714%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
    {
      time: { label: "  انس نقره ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0081", classes: "low" },
      percentage: { label: "0.0262%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
    {
      time: { label: "انس پلاتین ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "6.2063", classes: "high" },
      percentage: { label: "25.1064%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
    {
      time: { label: "انس پالادیوم ", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "12.1363", classes: "high" },
      percentage: { label: "64.5891%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
  ],
});
const gold = ref({
  title: "",
  header: [
    { label: " قیمت طلا", props: "time" },
    { label: "قیمت زنده", props: "revenue" },
    { label: "تغییر", props: "percentage" },
    { label: "بیشترین", props: "hight" },
    { label: "کمترین", props: "low" },
    { label: "زمان", props: "date" },
  ],
  data: [
    {
      time: {
        label: "  طلای 18 عیار  ",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      revenue: { label: "0.0531", classes: "low" },
      percentage: { label: "0.1714%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
    {
      time: {
        label: "  طلای 24 عیار  ",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      revenue: { label: "0.0081", classes: "low" },
      percentage: { label: "0.0262%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
    {
      time: {
        label: " طلای دست دوم ",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      revenue: { label: "6.2063", classes: "high" },
      percentage: { label: "25.1064%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
    {
      time: { label: "گرم نقره 999", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "12.1363", classes: "high" },
      percentage: { label: "64.5891%", classes: "" },
      hight: { label: "" },
      low: { label: "" },
      date: { label: "3 تیر" },
    },
  ],
});
</script>

<style lang="scss" scoped></style>
