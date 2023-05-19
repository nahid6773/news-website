<template>
  <div class="bg-gray-50 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
      <div class="flex flex-row flex-wrap">
        <div class="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
          <div class="w-full py-3 mb-3">
            <h2 class="text-gray-800 text-3xl font-bold">
              <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>
              {{ selectedNew.titleNews }}
            </h2>
          </div>
          <div class="flex flex-row flex-wrap">
            <div class="max-w-full w-full px-4">
              <div class="pb-4">
                <p class="mb-5">
                  {{ selectedNew.lead }}
                </p>
                <figure class="text-center mb-6">
                  <img
                    class="w-full h-auto new-img rounded-lg"
                    src="https://picsum.photos/900/400"
                    :alt="selectedNew.titlePage"
                  />
                  <figcaption></figcaption>
                </figure>
                <br />
                <p class="mb-5">
                  {{ selectedNew.body }}
                </p>

                <div
                  class="relative flex flex-row items-center justify-between overflow-hidden bg-gray-100 mt-12 mb-2 px-6 py-2"
                >
                  <div class="my-4 text-sm">
                    <span class="ml-2 md:ml-4" datetime="2020-10-22 10:00">
                      <base-icon name="calendar" />
                      {{ selectedNew.dateShamsi }}
                    </span>
                  </div>

                  <div class="hidden lg:block">
                    <ul class="space-x-3">
                      <li class="inline-block">
                        <a
                          target="_blank"
                          class="hover:text-primary"
                          href="#"
                          title="Share to Facebook"
                        >
                        <base-icon name="facebook" />
                        </a>
                      </li>
                      <li class="inline-block">
                        <a
                          target="_blank"
                          class="hover:text-primary"
                          href="#"
                          title="Share to Twitter"
                        >
                        <base-icon name="telegram" />
                        </a>
                      </li>
                      <li class="inline-block">
                        <a
                          target="_blank"
                          class="hover:text-primary"
                          href="#"
                          title="Share to Instagram"
                        >
                        <base-icon name="instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last pr-5"
        >
          <div class="w-full bg-white">
            <div class="mb-6">
              <div class="p-4 bg-gray-200">
                <h2 class="text-lg font-bold">پربازدیدها</h2>
              </div>
              <ul class="post-number" v-if="news">
                <li
                  v-for="n in 5"
                  :key="n"
                  class="border-b border-gray-100 hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="'/news/' + news.collection[n].titlePage"
                    class="px-6 py-3 flex flex-row items-center"
                  >
                    {{ news.collection[n].titlePage }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="w-full bg-white">
            <div class="mb-6">
              <div class="p-4 bg-gray-200">
                <h2 class="text-lg font-bold">پربحث ترین ها</h2>
              </div>
              <ul class="post-number" v-if="news">
                <li
                  v-for="n in 5"
                  :key="n"
                  class="border-b border-gray-100 hover:bg-gray-100"
                >
                  <nuxt-link
                    :to="'/news/' + news.collection[n].titlePage"
                    class="px-6 py-3 flex flex-row items-center"
                  >
                    {{ news.collection[n].titlePage }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useNewsDetail } from "~~/composables/useNews";
// const { data, pending } = await useNewsDetail(route.params.slug as string);
const route = useRoute();
import { useNewsList } from "~/composables/useNews";
const { news, pending } = useNewsList();

const selectedNew =
  !pending.value && news.collection.find((item) => item.titlePage == route.params.slug);

useHead({
  title: route.params.slug,
  meta: [
    {
      name: "description",
      content: route.params.slug,
    },
  ],
});
</script>

<style scoped>
.new-img {
  background-size: 100% 100%;
}
.post-number {
  counter-reset: my-counter;
}

.post-number li a::before {
  font-size: 2rem;
  counter-increment: my-counter;
  content: counter(my-counter);
  color: #ced4da !important;
  width: 3rem;
  margin-right: 0.5rem;
}
</style>
