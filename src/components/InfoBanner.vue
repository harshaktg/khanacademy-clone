<script setup lang="ts">
import { ref } from 'vue';

const showBanner = ref(true);

const closeBanner = () => {
  showBanner.value = false;
};
</script>

<template>
  <div v-if="showBanner" class="flex flex-col relative m-2">
    <div role="status"
      class="relative flex flex-col items-stretch p-2 border-l-4 border-l-[#2965f2] dark:border-l-blue-400 rounded-sm bg-[#eef4fe] dark:bg-[#22304a]">
      <div class="flex items-center">
        <div class="text-gray-500 dark:text-blue-200 ml-0.5 my-2 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="text-sm p-2 flex-1 text-[#21242c] dark:text-blue-100">
          We've updated our
          <a href="#" class="text-blue-600 dark:text-blue-300 underline">Terms of Service</a>.
          Please review it now.
        </div>
        <button
          class="text-gray-500 dark:text-blue-200 hover:text-gray-700 dark:hover:text-blue-300 mx-2 bg-[#eef4fe] dark:bg-[#22304a]"
          aria-label="Dismiss banner" @click="closeBanner">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>