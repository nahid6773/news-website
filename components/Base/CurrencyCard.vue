<template>
  <div v-if="data">
    <NuxtLink to="/currency" v-for="item in data" :key="item.currencyType">
      <div
        class="bg-white w-40 flex flex-col items-center rounded cursor-pointer"
      >
        <div
          class="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-center py-2 text-sm font-bold"
        >
          <IconChevronUp class="ml-1" />{{ item.currencyName }}
        </div>
        <div
          class="px-3 py-2 w-full flex flex-col items-center justify-center gap-y-2"
        >
          <span class="font-bold text-greenlight">{{ item.max }}</span>
          <hr class="w-full" />
          <span>{{ item.change }}</span>
        </div>
      </div>
    </NuxtLink>
  </div>
      {{data }}
</template>

<script setup>
const props = defineProps({
  data:Array
});
</script>

<style lang="scss" scoped></style>
