<template>
  <div class="gridClass mx-auto my-3">
    <div class="flex gap-6 my-4 flex-wrap laptop:flex-nowrap">
      <!-- Column 1 -->
      <div class="w-full laptop:w-1/3 flex flex-col gap-y-5">
        <BaseTable :data="summary" />
      </div>
      <!-- Column 2 -->
      <div class="w-full laptop:w-2/3 flex flex-col gap-y-5">
        <!-- Row 1 -->
        <div class="flex flex-col laptop:flex-row justify-between gap-10">
          <div class="w-1/2 flex-grow bg-white rounded-md overflow-hidden">
            <h2 class="text-gray-700 border-b-2 divide-[#e6e6e6] p-4 text-sm text-zinc-500 before:content-[''] before:bg-warning before:w-3 before:h-3 before:relative before:inline-block before:rounded-full before:top-[2px] before:mx-[2px]">
              نوسانات دلار / پوند مصر در روز جاری
            </h2>
            <ChartLine :data="chartData" />
          </div>
          <div class="w-1/2 bg-white flex flex-col justify-between rounded-md overflow-hidden">
            <BaseTable :data="revenue" hide_header />
          </div>
        </div>
        <!-- Row 2 -->
        <div class="flex flex-col laptop:flex-row justify-between gap-10">
          <div class="w-1/2 flex-grow bg-white rounded-md overflow-hidden">
            <BaseTable :data="EMA" />
          </div>
          <div class="w-1/2 bg-white flex flex-col justify-between rounded-md overflow-hidden">
            <BaseTable :data="SMA" />
          </div>
        </div>

        <BaseTable :data="insistence" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { getCurrencyById } = useCurrency();

onMounted(async () => {
  const {data, error} = await getCurrencyById();
  console.log(data.value);
});

const chartData = ref({
      labels: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
      ],
      datasets: [
        // Indigo line
        {
          label: 'Current',
          data: [
            30940, 31000, 30960, 31420, 31000, 31560, 31420,
            30940, 31000, 30960, 31420, 31000, 31560, 31420,
            30940, 31000, 30960, 31420, 31000, 31560, 31420,
            31000, 31560, 31420
          ],
          fill: true,
          // backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
          // borderColor: tailwindConfig().theme.colors.indigo[500],
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          // pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          clip: 20,
        },
      ],
    })

const summary = ref({
  title: "دلار / پوند مصر در یک نگاه",
  header: [
    { label: "خصیصه", props: "feature", classes: "text-right" },
    { label: "مقادیر", props: "value", classes: "!text-left" },
  ],
  data: [
    { feature: { label: "نرخ فعلی" }, value: { label: "30.9263" } },
    { feature: { label: "بالاترین قیمت روز" }, value: { label: "31.0641" } },
    { feature: { label: "پایین ترین قیمت روز" }, value: { label: "30.822" } },
    {
      feature: { label: "بیشترین مقدار نوسان روز" },
      value: { label: "0.15", classes: "low" },
    },
    {
      feature: { label: "درصد بیشترین نوسان روز" },
      value: { label: "0.31%", classes: "low" },
    },
    { feature: { label: "نرخ بازگشایی بازار" }, value: { label: "30.9279" } },
    { feature: { label: "زمان ثبت آخرین نرخ" }, value: { label: "۲۳:۴۳:۴۰" } },
    { feature: { label: "نرخ روز گذشته" }, value: { label: "30.9297" } },
    {
      feature: { label: "درصد تغییر نسبت به روز گذشته" },
      value: { label: "0.01%", classes: "low" },
    },
    {
      feature: { label: "میزان تغییر نسبت به روز گذشته" },
      value: { label: "0.0034", classes: "high" },
    },
  ],
});

const revenue = ref({
  title: "عملکرد دلار / پوند مصر",
  header: [
    { label: "", props: "time" },
    { label: "", props: "revenue" },
    { label: "", props: "percentage" },
    { label: "", props: "date" },
  ],
  data: [
    {
      time: { label: "یک هفته", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0531", classes: "low" },
      percentage: { label: "0.1714%", classes: "text-red-500" },
      date: { label: "1402/03/19" },
    },
    {
      time: { label: "یک ماه", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "0.0081", classes: "low" },
      percentage: { label: "0.0262%", classes: "text-red-500" },
      date: { label: "1402/02/26" },
    },
    {
      time: { label: "شش ماه", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "6.2063", classes: "high" },
      percentage: { label: "25.1064%", classes: "text-green-500" },
      date: { label: "1401/09/23" },
    },
    {
      time: { label: "یک سال", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "12.1363", classes: "high" },
      percentage: { label: "64.5891%", classes: "text-green-500" },
      date: { label: "1401/03/26" },
    },
    {
      time: { label: "سه سال", classes: "border-l-2 divider-[#e6e6e6]" },
      revenue: { label: "14.7463", classes: "high" },
      percentage: { label: "91.1391%", classes: "text-green-500" },
      date: { label: "1399/03/27" },
    },
  ],
});

const EMA = ref({
  title: "میانگین متحرک (EMA) دلار / پوند مصر",
  header: [
    { label: "اندیکاتور", props: "andicator" },
    { label: "بازه زمانی", props: "period" },
    { label: "مقدار", props: "value" },
  ],
  data: [
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "5 روز" },
      value: { label: "30.94" },
    },
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "10 روز" },
      value: { label: "30.94" },
    },
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "20 روز" },
      value: { label: "30.94" },
    },
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "30 روز" },
      value: { label: "30.93" },
    },
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "50 روز" },
      value: { label: "30.93" },
    },
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "100 روز" },
      value: { label: "30.74" },
    },
    {
      andicator: {
        label: "میانگین متحرک نمایی (EMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "200 روز" },
      value: { label: "27.53" },
    },
  ],
});

const SMA = ref({
  title: "‌میانگین متحرک (SMA) دلار / پوند مصر",
  header: [
    { label: "اندیکاتور", props: "andicator" },
    { label: "بازه زمانی", props: "period" },
    { label: "مقدار", props: "value" },
  ],
  data: [
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "5 روز" },
      value: { label: "30.94" },
    },
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "10 روز" },
      value: { label: "30.95" },
    },
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "20 روز" },
      value: { label: "30.93" },
    },
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "30 روز" },
      value: { label: "30.93" },
    },
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "50 روز" },
      value: { label: "30.93" },
    },
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "100 روز" },
      value: { label: "30.80" },
    },
    {
      andicator: {
        label: "میانگین متحرک ساده (SMA)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      period: { label: "200 روز" },
      value: { label: "26.65" },
    },
  ],
});

const insistence = ref({
  title: "سطوح ‌حمایت و مقاومت دلار / پوند مصر",
  header: [
    { label: "سطوح", props: "level" },
    { label: "کلاسیک (Classic)", props: "classic" },
    { label: "فیبوناچی (Fibonacci)", props: "fibonacci" },
    { label: "کاماریلا (Camarilla)", props: "camarilla" },
    { label: "وودی (Woodie)", props: "woodie" },
    { label: "دی مارک (DM)", props: "DM" },
  ],
  data: [
    {
      level: { label: "حمایت 3 (S3)", classes: "border-l-2 divider-[#e6e6e6]" },
      classic: { label: "30.56" },
      fibonacci: { label: "30.69" },
      camarilla: { label: "30.62" },
      woodie: { label: "30.56" },
      DM: { label: "-" },
    },
    {
      level: { label: "حمایت 2 (S2)", classes: "border-l-2 divider-[#e6e6e6]" },
      classic: { label: "30.69" },
      fibonacci: { label: "30.78" },
      camarilla: { label: "30.64" },
      woodie: { label: "30.69" },
      DM: { label: "-" },
    },
    {
      level: { label: "حمایت 1 (S1)", classes: "border-l-2 divider-[#e6e6e6]" },
      classic: { label: "30.81" },
      fibonacci: { label: "30.84" },
      camarilla: { label: "30.66" },
      woodie: { label: "30.80" },
      DM: { label: "30.75" },
    },
    {
      level: {
        label: "نقطه پیوت (PP)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      classic: { label: "30.93" },
      fibonacci: { label: "30.93" },
      camarilla: { label: "30.93" },
      woodie: { label: "30.93" },
      DM: { label: "30.90" },
    },
    {
      level: {
        label: "مقاومت 1 (R1)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      classic: { label: "31.05" },
      fibonacci: { label: "31.02" },
      camarilla: { label: "31.18" },
      woodie: { label: "31.04" },
      DM: { label: "30.99" },
    },
    {
      level: {
        label: "مقاومت 2 (R2)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      classic: { label: "31.17" },
      fibonacci: { label: "31.08" },
      camarilla: { label: "31.20" },
      woodie: { label: "31.17" },
      DM: { label: "-" },
    },
    {
      level: {
        label: "مقاومت 3 (R3)",
        classes: "border-l-2 divider-[#e6e6e6]",
      },
      classic: { label: "31.29" },
      fibonacci: { label: "31.17" },
      camarilla: { label: "31.22" },
      woodie: { label: "31.29" },
      DM: { label: "-" },
    },
  ],
});
</script>
