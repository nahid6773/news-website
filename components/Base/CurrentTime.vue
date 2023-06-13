<template>
  <div class=" float-left pt-2">
    <div
      class="h-8 w-16 float-right text-xs leading-7 text-center text-[#eee] bg-black/50"
    >
      <span id="clock" class="w-20">{{ currentTime.toLocaleTimeString("fa-IR") }}</span>
    </div>

    <div
      class="h-8 w-56 float-right text-white text-xs leading-7 text-center overflow-hidden bg-black/25"
    >
      <span class="font-bold">
        امروز: {{ weekday }} - {{ day }} {{ month }} {{ year }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useCurrentTime } from "~/composables/useCurrentTime";
const { currentTime } = useCurrentTime();

const year = new Intl.DateTimeFormat("fa-IR", {
  year: "numeric",
}).format(currentTime.value);
const month = new Intl.DateTimeFormat("fa-IR", {
  month: "long",
}).format(currentTime.value);
const day = new Intl.DateTimeFormat("fa-IR", {
  day: "numeric",
}).format(currentTime.value);
const weekday = new Intl.DateTimeFormat("fa-IR", {
  weekday: "long",
}).format(currentTime.value);
</script>
