<template>
  <header class="bg-primary">
    <nav class="gridClass">
      <div class="relative flex justify-between items-center">
        <div class="flex flex-1 items-center">
          <a href="/"
            ><img
              src="http://mellat.demo-qaleb.ir/wp-content/uploads/2021/01/logo.png"
              alt="تاپ نیوز"
              class="h-24 mt-1"
          /></a>
        </div>
        <div
          class="flex items-center justify-center text-white lable px-3 py-2"
        >
          <span> Tuesday - 29 June - 2021 11:48:20   {{ interval }}</span>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="hidden md:block items-center justify-flex-start shadow-md text-center bg-gray-900 w-2/3"
        >
          <div class="text-md font-bold text-white lg:flex-grow flex">
            <nuxt-link
              v-for="(item, index) in itemMenu"
              :key="index"
              :to="item.link"
              class="block mt-4 lg:inline-block lg:mt-0 px-4 py-2"
              :class="index && 'border-r'"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
        </div>
        <div class="bg-gray-500 w-96 py-2 px-4 flex items-center justify-end">
          <div class="relative mx-auto text-gray-600 lg:block hidden">
            <input
              class="border-2 border-gray-300 bg-white h-7 ml-2 pr-8 rounded-lg text-sm focus:outline-none text-sm focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72"
              type="search"
              name="search"
              placeholder="جستجو..."
            />
            <button type="submit" class="absolute right-0 bottom-1 mt-3 mr-2">
              <base-icon name="search" />
            </button>
          </div>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-white"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      date: null,
      interval: null,
      itemMenu: [
        {
          title: "اخبار",
          link: "#",
        },
        {
          title: "چندرسانه",
          link: "#",
        },
        {
          title: "دسترسی سریع ",
          link: "#",
        },
        {
          title: "پیوند ها",
          link: "#",
        },
      ],
      // currentTime: Date.now(),
    };
  },
  methods: {
    updateDate() {
      const date = new Date();
      date++;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.updateDate();
    }, 1000);
  },
};
</script>

<style scoped>
.lable {
  background-color: rgba(12, 14, 10, 0.1);
}
</style>
