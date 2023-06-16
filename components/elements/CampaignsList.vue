<template>
  <div class="flex flex-col bg-white mb-2 rounded-lg min-h-[330px]">
    <div class="flex flex-col relative">
      <nuxt-link
        class="flex h-10 bg-success text-white top-0 right-0 w-full justify-between py-2 px-3 rounded-t-lg"
        to="/"
      >
        <span class="flex items-center">
          <IconNewsPaper />
        </span>
        <span class="flex items-center"> ۶,۱۷۷,۹۲۵ عضو </span>
      </nuxt-link>
      <!-- To Do Carosel -->
      <div>
        <div class="relative overflow-hidden">
          <nuxt-link to="/" class="cursor-pointer block">
            <figure>
              <img
                src="https://my-media.farsnews.ir/my-media/1402/03/01/6199530/893d5ce54ae013e9fcb57c4ad5114b59/T3_1684831494739.jpg"
                alt="حج عمره برقرار شود "
              />
            </figure>
          </nuxt-link>
          <h3 class="text-lg">
            <nuxt-link to="/" class="cursor-pointer block">
              <div
                class="absolute w-full text-white bottom-0"
                style="
                  background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.6) 30%,
                    rgba(0, 0, 0, 0.8) 80%,
                    rgba(0, 0, 0, 1) 100%
                  );
                "
              >
                <span
                  class="bg-yellow-600 text-white float-left left-0 py-1 px-3 text-sm mt-4 rounded-r-3xl"
                >
                  حامیان: ۴۸ نفر</span
                >
              </div>
            </nuxt-link>
          </h3>
        </div>
        <h3 class="w-full block font-sm font-bold p-2">حج عمره برقرار شود</h3>
      </div>

      <div
        class="relative border-t-4 border-[#f1f1f1] flex justify-around items-center py-1"
      >
        <span class="flex flex-col items-center justify-center pr-1">
          <span class="text-sm text-gray-500">سوژه ها</span>
          <span class="text-gray-800 mt-1">۸۱.۳ هزار </span>
        </span>
        <span class="flex flex-col items-center justify-center pr-1">
          <span class="text-sm text-gray-500">حامیان</span>
          <span class="text-gray-800 mt-1">۱۵ میلیون </span>
        </span>
        <span class="flex flex-col items-center justify-center">
          <span class="text-sm text-gray-500">پیگیری ها</span>

          <span class="text-gray-800 mt-1">۷۱.۳ هزار </span>
        </span>
      </div>
      <div class="flex justify-between mx-2 mb-2 mt-1">
        <div
          class="text-sm text-gray-900 whitespace-no-wrap cursor-pointer bg-white border border-yellow-500 rounded-lg px-4 py-2 inline-flex justify-center items-center text-center"
        >
          ایجاد کمپین
        </div>

        <div
          class="text-sm text-gray-900 whitespace-no-wrap cursor-pointer bg-white border border-yellow-500 rounded-lg px-4 py-2 inline-flex justify-center items-center text-center"
        >
          <span class="tab-none pl-1"> گزارش </span>
          فساد
        </div>

        <div
          class="text-sm text-gray-900 whitespace-no-wrap cursor-pointer bg-white border border-yellow-500 rounded-lg px-4 py-2 inline-flex justify-center items-center text-center"
        >
          <span class="tab-none pl-1"> سایر </span>
          موارد
        </div>
      </div>
    </div>
  </div>
</template>
