<template>
  <header class="bg-primary">
    <nav>
      <div class="relative flex justify-between items-center">
        <div class="flex flex-1 items-center">
          <a href="/"
            ><img
              src="http://mellat.demo-qaleb.ir/wp-content/uploads/2021/01/logo.png"
              alt="تاپ نیوز"
              class="h-24 mt-1"
          /></a>
        </div>
        <div class="relative mx-auto text-gray-600 lg:block hidden">
          <input
            class="border-2 border-gray-300 bg-white h-10 ml-2 pr-8 rounded-lg text-sm focus:outline-none text-sm focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 border-transparent w-56 shadow-none rounded-full bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72"
            type="search"
            name="search"
            placeholder="جستجو..."
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
            <base-icon name="search" />
          </button>
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
        <div class="bg-gray-500 w-96 py-2 px-4">mknjnhki</div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
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
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
