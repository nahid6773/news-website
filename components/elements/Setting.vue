<template>
  <div class="group fixed bottom-0 left-10 p-2 flex items-end justify-end w-24 h-24">
    <!-- main -->
    <div
      class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-primary z-50 absolute"
    >
      <IconSetting />
    </div>
    <!-- sub items -->
    <div
      class="fixed rounded-md transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 flex p-2 hover:p-3 bg-white text-white select-none"
    >
      <div class="py-1 text-sm">
        <div @click="changeTheme('green')"
          class="flex justify-center items-center cursor-pointer text-gray-500 hover:text-white hover:bg-secondary rounded-md px-2 py-2 my-2"
        >
          <span class="bg-[#005b3d] h-4 w-4 m-2 rounded-sm"></span>
          <div class="flex-grow font-medium px-2">تم سبز</div>
        </div>
        <div @click="changeTheme('blue')"
          class="flex justify-center items-center cursor-pointer text-gray-500 hover:text-white hover:bg-secondary rounded-md px-2 py-2 my-2"
        >
          <span class="bg-[#385e9d] h-4 w-4 m-2 rounded-sm"></span>
          <div class="flex-grow font-medium px-2">تم آبی</div>
        </div>
        <div @click="changeTheme('orange')"
          class="flex justify-center items-center cursor-pointer text-gray-500 hover:text-white hover:bg-secondary rounded-md px-2 py-2 my-2"
        >
          <span class="bg-[#ed7e30] h-4 w-4 m-2 rounded-sm"></span>
          <div class="flex-grow font-medium px-2">تم نارنجی</div>
        </div>
        <div @click="changeTheme('red')"
          class="flex justify-center items-center cursor-pointer text-gray-500 hover:text-white hover:bg-secondary rounded-md px-2 py-2 my-2"
        >
          <span class="bg-[#e74432] h-4 w-4 m-2 rounded-sm"></span>
          <div class="flex-grow font-medium px-2">تم قرمز</div>
        </div>
        <div @click="changeSize('plus')"
          class="flex justify-center items-center cursor-pointer text-gray-500 hover:text-white hover:bg-secondary rounded-md px-2 py-2 my-2"
        >
          <span class="m-2 rounded-sm">+</span>
          <div class="flex-grow font-medium px-2">افزایش سایز متن</div>
        </div>
        <div @click="changeSize('minus')"
          class="flex justify-center items-center cursor-pointer text-gray-500 hover:text-white hover:bg-secondary rounded-md px-2 py-2 my-2"
        >
          <span class="m-2 rounded-sm">-</span>
          <div class="flex-grow font-medium px-2">کاهش سایز متن</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";

let theme = ref();
let fontSize = ref();

if (process.client) {
  theme = localStorage.theme ? localStorage.theme : "green";
  fontSize = localStorage.fontSize ? +localStorage.fontSize : "14";
}

onBeforeMount(() => {
  changeTheme(theme);
  changeSize(fontSize);
});

const themes = [
  {
    name: "green",
    colors: {
      primary: "#005b3d",
      secondary: "#005b3d80",
    },
  },
  {
    name: "blue",
    colors: {
      primary: "#385e9d",
      secondary: "#385e9d80",
    },
  },
  {
    name: "orange",
    colors: {
      primary: "#ed7e30",
      secondary: "#ed7e3080",
    },
  },
  {
    name: "red",
    colors: {
      primary: "#e74432",
      secondary: "#e7443280",
    },
  },
];

const changeTheme = (theme) => {
  localStorage.theme = theme;
  const selected = themes.find((item) => item.name == theme);
  document.documentElement.style.setProperty("--color-primary", selected.colors.primary);
  document.documentElement.style.setProperty(
    "--color-secondary",
    selected.colors.secondary
  );
};

const changeSize = (type = null) => {
  if(type == 'plus') {
    if(fontSize < 28) {
      fontSize += 2
    }
  } else if(type == 'minus') {
    if(fontSize > 14) {
      fontSize -= 2
    }
  }
  document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
  localStorage.fontSize = fontSize
}
</script>
