<template>
  <header class="bg-primary mb-20 pt-3">
    <nav class="gridClass">
      <div class="relative flex justify-between items-center">
        <div class="flex flex-1 items-center">
          <a href="/"
            ><img
              src="https://www.farsnews.ir/assets/images/white/farsnews.svg"
              alt="تاپ نیوز"
              class="h-10 mt-1"
          /></a>
        </div>
        <BaseCurrentTime />
        <!-- <div
          class="flex items-center justify-center text-white lable px-3 py-2"
        >
          <span> Tuesday - 29 June - 2021 11:48:20{{ interval }}</span>
        </div> -->
      </div>
      <div class="flex items-center justify-center">
        <div
          class="hidden md:flex items-center justify-between mt-5 shadow-md text-center bg-gray-600 w-full"
        >
          <div class="py-2 text-xs font-bold text-white lg:flex-grow flex">
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
          <div class="flex items-center px-3">
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
          </div>
        </div>
      </div>
    </nav>
    <BaseAnimateText :items="text" label="اخبار ویژه" />
    <!-- <div class="w-full bg-white h-16" style="margin-top: -26px">
      <div class="gridClass">
        <div class="flex items-center justify-end pt-6">
          <span class="bg-primary text-white px-7 py-2">اخبار ویژه</span>
        </div>
      </div>
    </div> -->
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
          title: "جامعه",
          link: "#",
        },
        {
          title: "اقتصاد",
          link: "#",
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
        '1.جمهوری اسلامی ایران به خود خواهد بالید و افتخار خواهد کرد',
        '2.اگر یک روز از عمرم باقی باشد، آرزو دارم به مردم سیستان خدمت کنم',
        '3.رأفت اسلامی حاکم است اما اجازه ناامنی نمی‌دهیم',
        '4.نظام شهرنشینی بر پایه حمل و نقل ریلی تنها راه‌ حل مشکلات',
        '5.پیشرفت‌های ایران دوست و دشمن را متعجب کرده است',
        '6.نیویورک‌تایمز ادعای ترامپ درباره ناسا و ایران را رد کرد',
        '7.بایرن خواهان قرض‌گرفتن مدافع منچسترسیتی در زمستان',
      ]
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
</style>
