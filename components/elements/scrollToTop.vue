<template>
  <button
    id="to-top-button"
    class="hidden fixed z-50 bottom-10 right-10 p-1 border-0 shadow-md bg-primary text-white text-lg font-semibold transition-colors duration-300"
    @click="goToTop"
  >
    <IconArrowUp />
  </button>
</template>

<script setup>
if (process.client) {
  var toTopButton = document.getElementById("to-top-button");

  if (toTopButton) {
    window.onscroll = function () {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTopButton.classList.remove("hidden");
      } else {
        toTopButton.classList.add("hidden");
      }
    };
  }
}

const goToTop = () => {
  console.log("object");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
