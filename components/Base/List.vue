<template>
  <div class="w-full bg-white overflow-y-scroll h-96">
    <div class="">
      <ul class="post-number">
        <li v-for="n in 8" :key="n" class="border-b border-gray-100 hover:bg-gray-100 hover:text-lime-600">
          <nuxt-link
            :to="'/news/' + data[n].title"
            class="px-6 py-3 flex flex-row items-center text-xs leading-6 font-bold"
          >
            {{ data[n].title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
});
</script>

<style scoped>
.post-number {
  counter-reset: my-counter;
}

.post-number li a::before {
  font-size: 16px;
  counter-increment: my-counter;
  content: counter(my-counter);
  color: #005b3d !important;
  margin-left: 0.5rem;
  background-color: #f1f1f1;
  border-radius: 50%;
  text-align: center;
  height: 2rem;
    line-height: 2rem;
    width: 2rem;
}
</style>
