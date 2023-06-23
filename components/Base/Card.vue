<template>
  <div
    class="bg-white flex flex-col items-center justify-between gap-y-1 w-full laptop:w-72 h-72 radius"
  >
    <div class="w-full" >
      <img
        class="w-full"
        src="https://media.farsnews.ir/Uploaded/Files/Images/1402/03/11/14020311000400_Test_PhotoO.jpg"
        alt=""
      />
    </div>
    <div class="flex flex-col gap-y-5 px-4 pb-3">
      <h4
        class="font-bold hover:text-yellow-600 cursor-pointer text-sm laptop:text-base"
      >
        پارک‌های علم و فناوری، مرکز حل مشکلات در مواقع بحران خواهند بود
      </h4>
      <div class="flex items-center justify-between text-xs font-bold">
        <span class="text-primary cursor-pointer">علم و فناوری ایران</span>
        <span>6 دقیقه قبل</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isImg: Boolean,
  data: Object,
});
</script>

<style lang="scss" scoped></style>
