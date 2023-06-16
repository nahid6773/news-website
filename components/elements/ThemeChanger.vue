<script setup>
import { ref, onMounted } from 'vue'

let isDark = ref()

if(process.client) {
  isDark = localStorage.isDark ? (localStorage.isDark == 'true' ? ref(true) : ref(false)) : (window.matchMedia('(prefers-color-scheme: dark)').matches ? ref(true) :ref(false))
}

onMounted(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

const setDarkTheme = (bool) => {
  localStorage.isDark = bool
  isDark.value = bool

  if (bool) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
    <div class="cursor-pointer text-slate-200">
      <IconDark v-if="isDark" @click="setDarkTheme(false)" />
      <IconLight v-else @click="setDarkTheme(true)" />
    </div>
</template>