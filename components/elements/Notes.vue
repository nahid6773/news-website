<template>
  <div>
    <BaseTitle label="یادداشت ها" />
    <div class="flex  flex-col bg-white">
      <template v-for="(item, index) in data" :key="index">
        <BaseHorizontalCard :info="item" avatar inverse />
      </template>
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
