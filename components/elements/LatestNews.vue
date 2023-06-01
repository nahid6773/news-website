<template>
  <div>
    <BaseTitle label="آخرین مطالب" />
    <div v-for="item in 8" :key="item">
      <BaseHorizontalCard :info="data[item]" show-date />
    </div>
  </div>
</template>

<!--<script>

export default {
  name: "latestNews",

  data() {
    return {};
  },
  props: {
    data: Array,
  },

  mounted() {},

  methods: {},
};


</script>

<style scoped></style> -->

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
});
</script>
