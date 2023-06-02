<template>
  <div class="p-0 h-8 relative overflow-visible w-full bg-white shadow-lg">
    <div class="gridClass">
      <div
        class="bg-primary top-0 bg-primary h-8 float-left relative w-[15%] before:bg-primary before:w-4 before:h-4 before:top-2 before:-right-1 before:absolute before:rotate-45"
      >
        <h3 class="text-white font-bold relative text-center">{{ label }}</h3>
      </div>
      <div class="w-[85%] float-right">
        <div class="overflow-hidden p-0" dir="rtl">
          <div class="animate-leftToRight absolute ml-0 w-[100000px]">
            <div class="flex mr-0 float-left">
              <p
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
              </p>
            </div>
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
