<template>
  <canvas ref="canvas" :data="data"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  CategoryScale
);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const canvas = ref(null);
let chart = null;

onMounted(() => {
  const ctx = canvas.value;
  console.log(ctx);
  new Chart(ctx, {
    type: "line",
    data: props.data,
    options: {
      layout: {
        padding: 20,
      },
    },
  });
});

onUnmounted(() => chart.destroy());
</script>
