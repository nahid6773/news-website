<template>
  <NuxtLink
    :to="`/currencyDetails/` + data[n].currencyType"
    v-for="n in 9"
    :key="n"
  >
    <div
      class="bg-white w-32 flex flex-col items-center rounded cursor-pointer"
    >
      <div
        class="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-center py-2 text-xs font-bold"
      >
        <IconChevronUp class="ml-1" />{{ data[n].currencyName }}
      </div>
      <div
        class="px-3 py-2 text-xs w-full flex flex-col items-center justify-center gap-y-2"
      >
        <span class="font-bold text-greenlight">{{ data[n].max }}</span>
        <hr class="w-full" />
        <span>{{ data[n].change }}</span>
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
