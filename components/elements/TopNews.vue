<template>
  <div class="pb-2">
    <div class="relative overflow-hidden rounded-lg">
      <nuxt-link to="/" class="cursor-pointer block">
        <figure>
          <img class="w-full" :src="info.image" :alt="info.alt ? info.alt : info.text" />
        </figure>
      </nuxt-link>
      <h3 class="text-lg">
        <nuxt-link to="/" class="cursor-pointer block">
          <div
            class="absolute w-full text-white bottom-0 right-3 p-3"
            style="
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.6) 30%,
                rgba(0, 0, 0, 0.8) 80%,
                rgba(0, 0, 0, 1) 100%
              );
            "
            v-text="info.text"
          />
        </nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>
