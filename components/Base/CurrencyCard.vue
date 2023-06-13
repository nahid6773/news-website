<template>
  <div class="bg-white w-40  flex flex-col items-center rounded cursor-pointer">
    <div class="w-full bg-gray-200 hover:bg-gray-300  text-center py-1 text-sm font-bold">{{data.title}}</div>
    <div class="px-3 py-2 w-full flex flex-col items-center justify-center gap-y-2">
      <span class="font-bold text-greenlight">{{data.price}}</span>
      <hr class="w-full" />
      <span>{{data.change}}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
});

</script>

<style lang="scss" scoped></style>
