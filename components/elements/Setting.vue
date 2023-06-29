<template>
  <div class="fixed z-50 bottom-40 left-0 flex flex-col py-10 px-2">
    <button
      class="p-1 shadow-md bg-white text-center text-primary border-b text-lg font-semibold"
      @click="changeTheme('blue')"
    >
      <div class="w-4 h-4 bg-[#0891b2]"></div>
    </button>
    <button
      class="p-1 shadow-md bg-white text-primary border-b text-lg font-semibold"
      @click="changeTheme('green')"
    >
      <div class="w-4 h-4 bg-[#16a34a]"></div>
    </button>
    <button
      class="p-1 shadow-md bg-white text-primary border-b text-lg font-semibold"
      @click="changeTheme('orange')"
    >
      <div class="w-4 h-4 bg-[#fbbf24]"></div>
    </button>
    <button
      class="p-1 shadow-md bg-white text-primary border-b text-lg font-semibold"
      @click="changeTheme('red')"
    >
      <div class="w-4 h-4 bg-[#e11d48]"></div>
    </button>
  </div>
</template>

<script setup>

const changeTheme = (theme) => {
  localStorage.theme = theme;
  // isDark.value = bool
};
</script>
