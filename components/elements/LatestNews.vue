<template>
  <div>
    <!-- <BaseTitle label="آخرین مطالب" /> -->
    <div v-for="item in 5" :key="item">
      <BaseHorizontalCard :info="data[item]" show-date heightLatest />
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
