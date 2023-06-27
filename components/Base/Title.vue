<template>
  <div class="text-right mb-2">
    <h4
      :class="isWidth ? 'w-full flex justify-between items-center' : ''"
      class="bg-primary text-white inline-block relative font-bold px-2 py-1 before:bg-primary before:w-3 before:h-[2px] before:absolute before:top-[-1px] before:right-[-10px] before:content-[''] before:rotate-90 after:bg-primary after:w-3 after:h-[2px] after:absolute after:top-[-6px] after:right-[-3px] after:content-['']"
    >
      <span class="relative px-4">{{ label }}</span>
    
      <IconNote v-if="isWidth" />

    </h4>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  isWidth: Boolean,
});
</script>
