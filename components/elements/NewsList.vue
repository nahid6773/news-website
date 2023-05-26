<template>
  <div class="flex flex-col gap-y-0.5">
    <div class="bg-white h-40 flex items-center justify-between" v-for="item in 5" :key="item">
      <div class="">
        <img class="img-widget w-64" src="/img/img-news.jpg" alt="" />
      </div>
      <div class="flex flex-col items-start justify-between gap-y-7 px-5" v-if="data">
        <span class="text-sm">{{data.collection[item].titlePage}}</span>
        <span class="text-xs text-sky-500">موشک خرمشهر۴ باحضور وزیردفاع رو نمایی شد</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Widget",

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

<style scoped>
.img-widget {
  border-radius: 12px 0 12px 0;
}
</style>
