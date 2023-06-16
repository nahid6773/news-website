<template>
  <header class="bg-success mb-4 pt-3">
    <!-- search overlay -->
    <div
      v-if="search"
      class="w-full h-full fixed bottom-0 top-0 z-10 overlay-search flex flex-col items-center justify-center"
    >
      <IconClose
        class="absolute top-10 right-14 text-white"
        @click="search = false"
      />
      <div
        class="relative mx-auto text-gray-600   flex items-center justify-center"
      >
        <input
          class="border-2 border-gray-300 bg-white h-14 pr-8 text-sm focus:outline-none text-sm focus:ring-4 focus:ring-success focus:ring-opacity-20 focus:border-opacity-40 border-transparent w-96 shadow-none bg-slate-200 pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72"
          type="search"
          name="search"
          placeholder="متن جستجو ..."
        />
        <button
          type="submit"
          class="bg-yellow-600 text-white font-bold h-14 px-6"
        >
          جستجو
        </button>
      </div>
    </div>
    <nav class="gridClass">
      <div class="relative flex justify-between items-center">
        <div class="flex flex-1 items-center">
          <NuxtLink to="/"
            ><img
              src="https://www.farsnews.ir/assets/images/white/farsnews.svg"
              alt="تاپ نیوز"
              class="h-10 mt-1"
          /></NuxtLink>
        </div>
        <BaseCurrentTime />
      </div>
      <div class="flex items-center justify-center">
        <div
          class=" flex items-center justify-between py-3 mt-7 shadow-md text-center bg-gray-600 w-full"
        >
          <div class="hidden  text-xs font-bold text-white lg:flex-grow laptop:flex">
            <nuxt-link
              v-for="(item, index) in itemMenu"
              :key="index"
              :to="item.link"
              class="  lg:inline-block lg:mt-0 px-4  hover:text-greenlight"
              :class="index && 'border-r'"
            >
              {{ item.title }}
            </nuxt-link>
          </div>
          <div class=" flex items-center justify-between px-3 laptop:w-40 w-full">
            <IconMenu />
            <IconSearch @click="search = true" />
            <!-- <button
              class="flex items-center justify-between bg-gray-500 py-1 px-3 rounded-full"
            >
              <IconLight  />
              <IconDark />
            </button> -->
            <ElementsThemeChanger />
            
          </div>
        </div>
      </div>
    </nav>
    <BaseAnimateText :items="text" label="اخبار ویژه" />
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      search: false,
      date: null,
      interval: null,
      itemMenu: [
        {
          title: "جامعه",
          link: "#",
        },
        {
          title: "اقتصاد",
          link: "/Economic",
        },
        {
          title: " بین الملل",
          link: "#",
        },
        {
          title: " سیاست",
          link: "#",
        },
        {
          title: " علم وپیشرفت",
          link: "#",
        },
        {
          title: " دانشگاه",
          link: "#",
        },
        {
          title: " فرهنگ",
          link: "#",
        },
        {
          title: " هنر و رسانه",
          link: "#",
        },
        {
          title: " ورزش",
          link: "#",
        },
        {
          title: " زندگی",
          link: "#",
        },
      ],

      text: [
        "1.جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد",
        "2.اگر یک روز از عمرم باقی باشد، آرزو دارم به مردم سیستان خدمت کنم",
        "3.رأفت اسلامی حاکم است اما اجازه ناامنی نمی‌دهیم",
        "4.نظام شهرنشینی بر پایه حمل و نقل ریلی تنها راه‌ حل مشکلات",
        "5.پیشرفت‌های ایران دوست و دشمن را متعجب کرده است",
        "6.نیویورک‌تایمز ادعای ترامپ درباره ناسا و ایران را رد کرد",
        "7.بایرن خواهان قرض‌گرفتن مدافع منچسترسیتی در زمستان",
      ],
      // currentTime: Date.now(),
    };
  },
  methods: {
    updateDate() {
      let date = new Date();
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
.overlay-search {
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.69);
}

</style>
