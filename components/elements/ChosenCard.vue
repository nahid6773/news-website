<template>
  <div class="flex flex-col bg-white gap-y-3">
    <div
      class="flex w-full justify-between bg-success text-white font-bold px-2 py-1 items-center"
    >
      <span> برگزیده ها </span>
      <IconChosen />
    </div>
    <div class="relative z-0 overflow-y-scroll bg-white w-full h-72">
      <div class="overflow-x-hidden pt-3">
        <ul class="list-disc list-inside w-full" v-if="data">
          <li
            v-for="(n, index) in data"
            :key="index"
            class="text-right text-[12px] py-2 px-3 word-wrap flex items-center border-b-2"
          >
            <NuxtLink to="#">
              <h3 class="font-bold hover:text-yellow-600">
                {{ n.title }}
              </h3>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
