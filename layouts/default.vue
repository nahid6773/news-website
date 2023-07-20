<template>
  <div>
    <MobileHeader v-if="device.isMobile" />
    <TheHeader v-else />

    <nuxt-page></nuxt-page>

    <TheFooter v-if="device.isMobile" />
    <MobileFooter v-else />

    <ElementsScrollToTop />
    <ElementsSetting />
  </div>
</template>

<script setup>
const device=useDevice();
</script>
