<template>
  <div class="flex flex-col bg-white gap-y-3">
    <div class="flex w-full justify-between items-center">
      <span class="btn-tab bg-success cursor-pointer">پرخواننده ها</span>
      <span class="btn-tab bg-success cursor-pointer">پربحث ها</span>
      <!-- <span class="btn-tab bg-success">توصیه شده ها</span> -->
    </div>
    <div class="relative z-0 overflow-y-scroll bg-white w-full h-[400px]">
      <div class="overflow-x-hidden pt-3">
        <ul class="list-disc list-inside w-full" v-if="data">
          <li
            v-for="(n, index) in data"
            :key="index"
            class="text-right text-[12px] py-1 px-3 word-wrap flex items-center border-b-2 px-2 py-4"
          >
            <span class="index-tab flex items-center justify-center ml-2">{{
              index + 1
            }}</span>
            <NuxtLink  to="#">
              <h3 class="item-tab">
                {{ n.title }}
              </h3>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsTab",

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
.btn-tab {
  border-radius: 12px 0 12px 0;
  /* background-color: #005b3d; */
  padding: 5px 16px;
  color: white;
  font-weight: bold;
  width: 150px;
  font-size: 14px;
  text-align: center;
}
.item-tab {
  color: black;
  /* border-bottom: 1px solid gray; */
  width: 100%;
  transition: 0.5s;
  cursor: pointer;
}
.item-tab:hover {
  color: #ffb81c;
}
.index-tab {
  background-color: #ffb81c;
  border-radius: 12px 0 12px 0;
  width: 30px;
  height: 20px;
  color: white;
}
</style>
