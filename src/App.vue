<script setup lang="ts">
import InfoBanner from './components/InfoBanner.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="h-full">
    <div class="flex flex-col min-h-full">
      <InfoBanner />
      <Navbar />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
