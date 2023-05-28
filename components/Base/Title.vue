<template>
  <div class="text-right mb-2">
    <h4 class="bg-primary text-white inline-block relative text-lg px-4 py-1 before:bg-primary before:w-3 before:h-[2px] before:absolute before:top-[-1px] before:right-[-12px] before:content-[''] before:rotate-90 after:bg-primary after:w-3 after:h-[2px] after:absolute after:top-[-6px] after:right-[-6px] after:content-['']">
      <span class="relative px-4">{{ label }}</span>
    </h4>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
