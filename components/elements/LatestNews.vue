<template>
  <div>
    <BaseTitle label="آخرین مطالب" />
    <div v-for="item in 8" :key="item">
      <BaseHorizontalCard :info="data[item]" show-date />
    </div>
  </div>
  <!-- <div class="flex flex-col gap-y-3" v-if="data">
    <div
      class="bg-white h-40 flex items-center justify-between"
      v-for="item in 8"
      :key="item"
    >
      <div class="h-full w-64">
        <img class="h-full" src="/img/img-news.jpg" alt="" />
      </div>
      <div class="w-96 flex flex-col items-start justify-between gap-y-7 px-5">
        <NuxtLink :to="'/news/' + data.collection[item].titlePage">
          <span
            class="text-sm hover:text-greenlight font-bold cursor-pointer"
            >{{ data.collection[item].titlePage }}</span
          >
        </NuxtLink>
        <span class="text-xs text-gray-500">{{
          data.collection[item].lead
        }}</span>
      </div>
    </div>
  </div> -->
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
