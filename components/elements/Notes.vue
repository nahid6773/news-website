<template>
  <div>
    <BaseTitle label="یادداشت ها" />
    <div class="flex flex-wrap">
      <div v-for="(item, index) in data" :key="index">
        <BaseHorizontalCard :info="item" avatar inverse />
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
