<template>
  <div>
    <button
      class="fixed z-50 bottom-10 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold"
      @click="changeTheme('blue')"
    >
      blue
    </button>
    <button
      class="fixed z-50 bottom-20 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold"
      @click="changeTheme('green')"
    >
      green
    </button>
    <button
      class="fixed z-50 bottom-40 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold"
      @click="changeTheme('orange')"
    >
      orange
    </button>
    <button
      class="fixed z-50 bottom-60 left-10 p-1 shadow-md bg-white text-primary text-lg font-semibold"
      @click="changeTheme('red')"
    >
      red
    </button>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'

let theme = ref()

if(process.client) {
  theme = localStorage.theme ? localStorage.theme : 'green'
}

onBeforeMount(() => {
  changeTheme(theme)
})

const themes = [
  {
    name: "green",
    colors: {
      primary: "#005b3d",
      secondary: "#fff",
    },
  },
  {
    name: "blue",
    colors: {
      primary: "#385e9d",
      secondary: "#fff",
    },
  },
  {
    name: "orange",
    colors: {
      primary: "#ed7e30",
      secondary: "#fff",
    },
  },
  {
    name: "red",
    colors: {
      primary: "#e74432",
      secondary: "#fff",
    },
  },
];

const changeTheme = (theme) => {
  localStorage.theme = theme
  const selected = themes.find((item) => item.name == theme);
  document.documentElement.style.setProperty("--color-primary", selected.colors.primary);
  document.documentElement.style.setProperty("--color-secondary", selected.colors.secondary);
};
</script>
