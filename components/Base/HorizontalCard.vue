<template>
  <section class="mb-4">
    <div class="w-full flex relative bg-white shadow-lg before:table before:content['']">
      <div
        v-if="showDate"
        class="border-2 border-primary w-12 h-12 text-center leading-3 absolute -mr-2 mt-2 bg-white p-1 hover:bg-primary hover:text-white"
      >
        <span class="text-sm w-10 block">10</span
        ><b class="w-10 block text-[10px]">اسفند</b>
      </div>
      <div class="block overflow-hidden float-right w-[30%] bg-[#fafafa]">
        <NuxtLink :to="'/news/' + info.titlePage"
          ><img
            src="https://picsum.photos/200/200"
            :alt="info.titlePage"
        /></NuxtLink>
      </div>
      <div class="top-0 left-0 bottom-0 float-right w-[70%] p-4">
        <div class="mb-1">
          <span class="text-xs text-gray-400">{{ info.newsAgencyName }}</span>
        </div>
        <h2>
          <NuxtLink
            :to="'/news/' + info.titlePage"
            class="mb-1 text-base font-normal text-gray-900 leading-10 hover:text-lime-600"
          >
            {{ info.titlePage }}
          </NuxtLink>
        </h2>
        <p class="text-justify text-xs text-gray-500 leading-6">
          {{ info.lead }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: false,
  },
  showDate: Boolean,
});
</script>
