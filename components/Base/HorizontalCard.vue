<template>
<div class="bg-red">

  <section class="border-b-2 mb-2">
    <div class="w-full flex relative bg-white shadow-lg before:table before:content['']">
      <div
        v-if="showDate"
        class="border-2 border-primary w-12 h-12 text-center leading-3 absolute -mr-2 mt-2 bg-white p-1 hover:bg-primary hover:text-white"
      >
        <span class="text-sm w-10 block">10</span
        ><b class="w-10 block text-[10px]">اسفند</b>
      </div>
      <div v-if="avatar" class="block overflow-hidden float-right w-[30%] bg-[#fafafa] my-auto mx-0">
        <BaseAvatar />
      </div>
      <div v-else class="block overflow-hidden float-right w-[30%] bg-[#fafafa]">
        <NuxtLink :to="'/news/' + info.title"
          ><img
            src="https://picsum.photos/200/200"
            :alt="info.title"
        /></NuxtLink>
      </div>
      <div class="top-0 left-0 bottom-0 float-right w-[70%] p-4">
        <div v-if="!inverse" class="mb-1">
          <span class="news-subtitle">{{ info.subtitle }}</span>
        </div>
        <h2>
          <NuxtLink
            :to="'/news/' + info.title"
            class="news-title mb-1 !leading-10"
            :class="!info.text ? '!text-xs !leading-4' : ''"
          >
            {{ info.title }}
          </NuxtLink>
        </h2>
        <div v-if="inverse" class="mt-1">
          <span class="news-subtitle">{{ info.subtitle }}</span>
        </div>
        <p class="news-text">
          {{ info.text }}
        </p>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: false,
  },
  showDate: Boolean,
  avatar: Boolean,
  inverse: Boolean,
});
</script>
