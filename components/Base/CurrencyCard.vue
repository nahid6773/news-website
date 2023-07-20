<template>
  <NuxtLink
    v-for="item in data"
    :key="item"
    :to="`/currencyDetails/` + item.currency.currencyType"
  >
    <div
      class="bg-white w-32 flex flex-col items-center rounded cursor-pointer"
    >
      <div
        class="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-center py-2 text-xs font-bold"
      >
        <IconChevronUp class="ml-1" />{{ item.currency.currencyName }}
      </div>
      <div
        class="px-3 py-2 text-xs w-full flex flex-col items-center justify-center gap-y-2"
      >
        <span class="font-bold text-greenlight">{{ item.data[0].max }}</span>
        <hr class="w-full" />
        <span>{{ item.data[0].change }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped></style>
