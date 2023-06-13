<template>
  <div>
    <BaseTitle label=" آخرین مطالب" />
    <div class="bg-white p-2 flex flex-col">
      <div class="flex flex-col " v-for="item in data" :key="item.id">
        <div class="flex justify-between py-3 px-2">
          <div
            class="block overflow-hidden float-right h-16 w-[40%] bg-[#fafafa] my-auto mx-0 cursor-pointer"
          >
            <img class="w-full" :src="item.img" alt="" />
          </div>
          <div class="flex flex-col gap-y-3 mr-3 justify-between">
            <span class="text-xs font-bold hover:text-greenlight cursor-pointer">{{ item.title }}</span>
            <span class="text-xs text-gray-400 flex items-center justify-start"><IconClock/>{{ item.date }}</span>
          </div>
        </div>
        <hr class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: false,
  },
});
</script>
>

<style lang="scss" scoped></style>
