<template>
  <section class="mb-4">
      <div
        class="w-full relative h-auto mb-2 items-center justify-center bg-[#fafafa] shadow-lg"
      >
        <div class="h-40 relative block overflow-hidden">
          <NuxtLink :to="'/news/' + info.title"
            ><img src="https://picsum.photos/300/300" :alt="info.title"
          /></NuxtLink>
        </div>
        <div class="top-0 left-0 bottom-0 float-right p-4">
          <div class="mb-1">
            <span class="news-subtitle">{{ info.subtitle }}</span>
          </div>
          <h2>
            <NuxtLink
              :to="'/news/' + info.title"
              class="news-title mb-1 !text-sm"
            >
              {{ info.title }}
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
