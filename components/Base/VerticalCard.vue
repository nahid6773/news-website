<template>
  <section class="mb-4">
      <div
        class="w-full relative h-auto mb-2 items-center justify-center bg-[#fafafa] shadow-lg"
      >
        <div class="h-40 relative block overflow-hidden">
          <NuxtLink :to="'/news/' + info.titlePage"
            ><img src="https://picsum.photos/300/300" :alt="info.titlePage"
          /></NuxtLink>
        </div>
        <div class="top-0 left-0 bottom-0 float-right p-4">
          <div class="mb-1">
            <span class="text-xs text-gray-400">{{ info.newsAgencyName }}</span>
          </div>
          <h2>
            <NuxtLink
              :to="'/news/' + info.titlePage"
              class="mb-1 text-sm font-semibold text-gray-700 leading-6 hover:text-lime-600"
            >
              {{ info.titlePage }}
            </NuxtLink>
          </h2>
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
