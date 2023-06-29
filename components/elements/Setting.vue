<template>
  <div class="fixed z-50 bottom-40 left-0 flex flex-col py-10 px-2">
    <button
    class="fixed z-50 bottom-10 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold" @click="changeTheme('blue')">
    blue
  </button>
  <button
    class="fixed z-50 bottom-20 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold" @click="changeTheme('green')">
    green
  </button>
  <button
    class="fixed z-50 bottom-40 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold" @click="changeTheme('orange')">
    orange
  </button>
  <button
    class="fixed z-50 bottom-60 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold" @click="changeTheme('red')">
    red
  </button>
  </div>
</template>

<script setup>
const changeTheme = (theme) => {
  localStorage.theme = theme
  // isDark.value = bool
}
</script>
