<template>
  <div class="p-0 h-8 relative overflow-visible w-full bg-white shadow-lg">
    <div class="gridClass">
      <div
        class="bg-primary top-0 bg-primary h-8 float-left relative w-[15%] before:bg-primary before:w-4 before:h-4 before:top-2 before:-right-1 before:absolute before:rotate-45"
      >
        <h3 class="text-white font-bold relative text-center">{{ label }}</h3>
      </div>
      <div class="w-[85%] float-right">
        <div class="relative flex overflow-x-hidden">
          <div class="animate-marquee whitespace-nowrap">
            <span
              class="h-8 leading-5 font-bold"
              v-for="(item, index) in items"
              :key="index"
            >
              <img
                src="http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/favicon.png"
                class="-ml-1 w-auto align-middle inline-block p-1 max-h-[35px]"
              />
              <span class="wp-dark-mode-ignore"
                ><span class="p-2 inline-block font-normal text-xs">
                  {{ item }}</span
                ></span
              >
            </span>
          </div>

          <div class="absolute top-0 animate-marquee2 whitespace-nowrap">
            <span
              class="h-8 leading-5 font-bold"
              v-for="(item, index) in items"
              :key="index"
            >
              <img
                src="http://mellat.demo-qaleb.ir/wp-content/uploads/2020/02/favicon.png"
                class="-ml-1 w-auto align-middle inline-block p-1 max-h-[35px]"
              />
              <span class="wp-dark-mode-ignore"
                ><span class="p-2 inline-block font-normal text-xs">
                  {{ item }}</span
                ></span
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  items: Object,
});
</script>
