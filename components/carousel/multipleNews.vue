<template>
  <div>
    <BaseTitle label="آخرین مطالب" />
    <div class="flex relative">
    <div v-for="i in 3" :key="i" class="w-1/3 mx-1 bg-white">
      <BaseVerticalCard :info="data.collection[i]" />
    </div>
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