<template>
  <section class="">
    <div
      class="w-full flex items-center justify-between my-7 flex-wrap laptop:nowrap gap-y-3"
      :class="item.reverse ? 'reverse' : ''"
      v-for="(item, index) in data"
      :key="index"
    >
      <div class="flex items-center justify-between laptop:w-[53%] w-full flex-wrap laptop:nowrap gap-y-3">
        <div
          class="bg-white flex flex-col items-center justify-between gap-y-1 w-full laptop:w-80 h-72 radius"
        >
          <div class="w-full">
            <img
              class="w-full"
              src="https://media.farsnews.ir/Uploaded/Files/Images/1402/03/25/14020325000452_Test_PhotoO.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col gap-y-5 px-4 pb-3">
            <h4 class="font-bold hover:text-yellow-600 cursor-pointer text-sm laptop:text-base">
              پارک‌های علم و فناوری، مرکز حل مشکلات در مواقع بحران خواهند بود
            </h4>
            <div class="flex items-center justify-between text-xs font-bold">
              <span class="text-primary cursor-pointer"
                >علم و فناوری ایران</span
              >
              <span>6 دقیقه قبل</span>
            </div>
          </div>
        </div>
        <div
          class="bg-white flex flex-col items-start justify-between w-full laptop:w-80 p-4 h-72 radius"
        >
          <div class="flex flex-col gap-y-6">
            <h2 class="font-bold hover:text-yellow-600 cursor-pointer text-sm laptop:text-base">
              رای الیوم: آینده درخشان اقتصادی در انتظار ایران است
            </h2>
            <p class="text-xs text-gray-400 !leading-5">
              روزنامه فرامنطقه‌ای رای الیوم نوشت، بر خلاف انتظار دشمنان، گشایش
              اقتصادی برای ایران در راه است و پیوستن به بریکس آینده درخشانی را
              برای این کشور رقم می‌زند.
            </p>
          </div>
          <span class="text-xs text-primary font-bold cursor-pointer"
            >اظهارات سفیر ایران درباره دلارزدایی</span
          >
        </div>
      </div>
      <div class="relative overflow-hidden radius laptop:w-[45%] w-full">
        <nuxt-link to="/" class="cursor-pointer block">
          <figure>
            <img
              class="w-full radius"
              :src="item.img"
              alt=""
            />
          </figure>
        </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer block ">
          <h1
            class="absolute w-full text-white bottom-0 p-3 text-sm laptop:text-lg"
            style="
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.6) 30%,
                rgba(0, 0, 0, 0.8) 80%,
                rgba(0, 0, 0, 1) 100%
              );
            "
          >
            حداد عادل: شورای ائتلاف به هیچ مسؤولی پیشنهاد استعفا نداده است
          </h1>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: false,
  },
});
</script>

<style scoped>
.reverse {
  flex-direction: row-reverse;
}
.radius{
    border-radius: 12px 0 12px 0;
}
</style>
