<template>
  <div>
    <BaseTitle label="یادداشت ها" isWidth />
    <div class="flex  flex-col ">
      <template v-for="(item, index) in data" :key="index">
        <BaseHorizontalCard :info="item" avatar inverse isFont/>
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
