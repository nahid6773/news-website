<template>
  <div>
    <BaseTitle label=" نوشته های مشابه" />
    <div class="bg-white flex flex-col gap-y-3 py-4 px-3">
      <div
        class="flex items-center justify-between"
        v-for="(item, index) in similarText"
        :key="index"
      >
        <span class="text-sm cursor-pointer font-bold hover:text-greenlight">{{
          item.title
        }}</span>
        <span class="text-xs text-white hover:text-greenlight"
          >۰۴ دی ۱۳۹۸ - ۱۱:۰۰
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SimilarText",

  data() {
    return {
      similarText: [
        {
          title: "حال ناخوش داروخانه‌ها در رویارویی با مشکلات مالی",
          url: "",
        },
        {
          title: "نخستین گوجه‌فرنگی شبیه به انگور تولید شد",
          url: "",
        },
        {
          title: "تصویب لایحه بودجه ۹۹ وضعیت معیشتی مردم را بدتر می‌کند",
          url: "",
        },
        {
          title: "افزایش ۱۶ هزار دستگاه تولید ایران خودرو در آبان",
          url: "",
        },
        {
          title: "نقض قانون اساسی در بررسی لایحه بودجه در کمیسیون تلفیق!",
          url: "",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
