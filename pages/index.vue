<template>
  <div>
    <div v-if="news" v-for="(item, index) in news.collection" :key="index"> 
      <nuxt-link
        :to="'/news/' + item.titlePage"
        class="cursor-pointer block"
      >
        {{ item.titlePage }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { useNewsList } from "~/composables/useNews";
const { news, pending } = useNewsList();

// const { data: news, error } = await useAsyncData("news", () =>
//   $fetch(`News/NewsByDate`, {
//     method: "GET",
//     baseURL: "http://newspodium.sakku-khatam.ir",
//     params: {
//       NewsAgencyId: 20,
//       Page: 1,
//       date: '2023 05 18'
//     },
//   })
// );
</script>
<style scoped lang="postcss">
.g-head-anime {
  @apply invisible;
}
</style>
