<template>
  <div class="gridClass">
    <div
      class="w-full my-5 flex flex-wrap gap-y-3 laptop:flex-nowrap items-center justify-between"
    >
      <div class="w-full laptop:w-[30%] border-1 bg-white py-5">
        <div
          class="w-full flex items-center justify-between py-2 px-7 font-bold text-sm border-b"
        >
          <span class="text-center">تنظیمات</span>
          <span class="text-center">انتخاب کشور و محصول</span>
        </div>
        <div
          class="flex flex-col items-center gap-y-5 w-full py-6 px-8 font-bold text-sm"
        >
          <span>لطفا انتخاب کنید:</span>
          <div class="flex items-center justify-between w-full px-14">
            <button class="border-2 py-1 px-4">محصول</button>
            <button class="border-2 py-1 px-4">موقعیت</button>
          </div>
          <div
            @click="value = !value"
            class="flex items-center justify-between py-1 px-3 w-full border-2 relative cursor-pointer"
          >
            <span>انتخاب موقعیت</span>
            <span class="low"></span>
            <div
              v-if="value"
              class="absolute top-[28px] overflow-hidden h-44 w-full bg-gray-200 right-0 flex flex-col items-end gap-y-3 px-4 py-2"
            >
            <span v-for="item in  optionsCountry" :key="item">{{item.nameCountry}}</span>
            </div>
          </div>
          <hr class="w-full" />
          <!-- ///// type business -->
          <span>نوع تجارت</span>
          <div class="w-full flex items-center justify-center border-2">
            <span
              class="py-1 px-4 w-[50%] bg-gray-300 text-center cursor-pointer"
              >صادرات</span
            >
            <span class="py-1 px-4 w-[50%] text-center cursor-pointer"
              >واردات</span
            >
          </div>
          <!-- //// maps -->
          <div class="w-full flex items-center justify-between">
            <span
              class="w-24 flex flex-col gap-y-1 py-1 items-center border-2 cursor-pointer"
            >
              <span class="text-xs">Geo Map</span>
              <IconMap />
            </span>
            <span
              class="w-24 flex flex-col gap-y-1 py-1 items-center border-2 cursor-pointer"
            >
              <span>Chart</span>
              <IconChart />
            </span>
            <span
              class="w-24 flex flex-col gap-y-1 py-1 items-center border-2 cursor-pointer"
            >
              <span>Tree Map</span>
              <IconMap />
            </span>
          </div>
          <div class="w-full flex flex-col  items-start gap-y-1 justify-between">
            <span>نقشه جغرافیایی</span>
            <p class="text-xs">
              نقشه جغرافیایی  ارزش جریان های تجاری را بر اساس مکان
              یا محصول در یک سال مشخص نشان می دهد. برای اطلاعات بیشتر روی یک
              کشور حرکت کنید
            </p>
          </div>
        </div>
      </div>
      <div class="w-full laptop:w-[65%]  bg-white">
        <ChartLine :data="chartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
let value = ref(false);
const optionsCountry=ref([
  {
    nameCountry:"Americas"
  },
    {
    nameCountry:"Africa"
  },
   {
    nameCountry:"Asia"
  },
   {
    nameCountry:"Europe"
  },
   {
    nameCountry:"Oceani"
  },
   

])
const chartData = ref({
  labels: [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ],
  datasets: [
    // Indigo line
    {
      label: "Current",
      data: [
        30940, 31000, 30960, 31420, 31000, 31560, 31420, 30940, 31000, 30960,
        31420, 31000, 31560, 31420, 30940, 31000, 30960, 31420, 31000, 31560,
        31420, 31000, 31560, 31420,
      ],
      fill: true,
      // backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
      // borderColor: tailwindConfig().theme.colors.indigo[500],
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      // pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
      clip: 20,
    },
  ],
});
</script>
<style lang="scss" scoped></style>
