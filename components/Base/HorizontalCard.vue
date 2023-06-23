<template>
  <div class="">
    <section
      class=""
      :class="[
        isHeight ? 'h-80' : '',
        !isHeight ? 'border-b-2 mb-2' : '',
        heightLatest ? 'h-56 laptop:h-36' : '',
        isHeightComment ? 'h-56' : '',
      ]"
    >
      <div
        :class="[
          multipleSlider ? 'flex-col' : '',
          isHeightComment ? 'flex items-center' : '',
        ]"
        class="w-full flex relative bg-white shadow-lg before:table before:content[''] h-full"
      >
        <!-- showDate -->
        <div
          v-if="showDate"
          class="border-2 border-success flex items-center flex-col w-10 laptop:w-12 h-10 laptop:h-12 text-center leading-3 absolute -mr-2 mt-2 bg-white p-1 hover:bg-success hover:text-white"
        >
          <span class="text-xs w-10 block">10</span
          ><b class="w-10 block text-[8px]">اسفند</b>
        </div>
        <!-- avatar -->
        <div
          v-if="avatar"
          class="block overflow-hidden float-right w-[30%] my-auto mx-0"
        >
          <BaseAvatar />
        </div>
        <div
          v-else
          class="block overflow-hidden float-right w-[30%]"
          :class="[isWidthImg ? 'w-[50%]' : '', multipleSlider ? 'w-full' : '']"
        >
          <NuxtLink :to="'/news/' + info.title"
            ><img
              src="https://picsum.photos/300/300"
              class="h-full w-full"
              :alt="info.title"
          /></NuxtLink>
        </div>
        <div class="top-0 left-0 bottom-0 float-right w-[70%] px-4 py-2">
          <div v-if="!inverse">
            <span class="news-subtitle">{{ info.subtitle }}</span>
          </div>
          <h2>
            <NuxtLink
              :to="'/news/' + info.title"
              class="news-title mb-1 leading-3 laptop:leading-5 text-sm"
              :class="[
                !info.text ? 'text-xs !leading-4' : '',
                isFont ? 'text-[10px]' : '',
              ]"
            >
              {{ info.title }}
            </NuxtLink>
          </h2>
          <div v-if="inverse" class="mt-1">
            <span class="news-subtitle">{{ info.subtitle }}</span>
          </div>
          <template v-if="!multipleSlider">
            <p class="news-text">
              {{ info.text }}
            </p>
          </template>
          <slot name="footer"></slot>
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
  isHeight: Boolean,
  isWidthImg: Boolean,
  heightLatest: Boolean,
  multipleSlider: Boolean,
  isFont: Boolean,
  isHeightComment: Boolean,
});
</script>
