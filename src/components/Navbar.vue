<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../ui/Logo.vue';
import MobileNavMenu from './MobileNavMenu.vue';
import { useTheme } from '../composables/useTheme';

const mobileMenuOpen = ref(false);
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div
    class="bg-white dark:bg-gray-900 h-[62px] relative left-0 right-0 top-0 border-t border-b border-t-[#21242c29] border-b-[#21242c29]">
    <nav class="max-w-[1200px] mx-auto w-full h-full">
      <div class="flex h-full items-center text-base">
        <div class="hidden md:flex lg:gap-x-8 h-full items-center gap-x-4 justify-start flex-grow basis-0 pl-5">
          <div class="inline-block h-full whitespace-nowrap">
            <button aria-expanded="false" data-testid="learn-menu-dropdown" type="button" aria-disabled="false"
              class="flex whitespace-nowrap p-0 h-full font-bold items-center bg-transparent border-none text-base text-primary dark:text-primary-light">
              <span data-learn-menu-trigger="true" class="block font-bold leading-5"
                data-testid="learn-menu-button">Explore<span class="ml-1.5 relative"><span
                    class="caret-logo icon" /></span></span>
            </button>
          </div>
          <div class="flex flex-col items-stretch py-3 mx-8 w-[200px] relative">
            <button type="button" data-testid="navbar-search-button" role="button"
              aria-label="Search for courses, skills, and videos" aria-disabled="false"
              class="inline-flex items-center justify-start flex-grow h-10 px-4 rounded bg-transparent border border-solid border-[#909296] text-primary dark:text-primary-light hover:outline hover:outline-2 hover:-outline-offset-2 hover:outline-primary">
              <div class="flex flex-col p-0.5 min-h-0 items-stretch">
                <span aria-hidden="true" data-testid="navbar-search-button-start-icon" class="search-logo icon" />
              </div>
              <span class="font-bold inline-block leading-6 whitespace-nowrap"
                data-testid="navbar-search-button-inner-label">Search</span>
            </button>
          </div>
        </div>
        <div class="flex h-full items-center gap-x-4 lg:gap-x-8">
          <a class="pl-4 md:pl-0 h-full flex text-base font-bold items-center">
            <Logo />
          </a>
        </div>
        <div class="pr-0 md:pr-5 gap-x-4 lg:gap-x-8 flex h-full flex-grow basis-0 justify-end items-center">
          <a data-testid="header-donate-link" target="_blank" rel="noopener noreferrer"
            href="https://india.khanacademy.org/donate"
            class="hidden md:flex text-base font-bold items-center text-primary dark:text-primary-light h-full whitespace-nowrap hover:underline md:-mr-1.5">Donate<span
              data-testid="external-icon" class="donate-logo icon" /></a>
          <a id="login-or-signup"
            class="hidden md:flex text-base font-bold items-center text-primary dark:text-primary-light h-full whitespace-nowrap hover:underline"
            href="/login">Log in</a>
          <a role="button" rel="nofollow"
            class="hidden md:inline-flex items-center h-10 px-4 rounded relative text-white bg-primary signup-button"
            href="/signup"><span
              class="inline-block items-center overflow-hidden whitespace-nowrap text-ellipsis leading-6 font-bold">Sign
              up</span></a>
          <!-- Dark mode toggle button -->
          <button @click="toggleTheme" :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
            class="ml-2 flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span v-if="theme === 'dark'" aria-hidden="true">
              <!-- Sun icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            </span>
            <span v-else aria-hidden="true">
              <!-- Moon icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            </span>
          </button>
          <div class="flex md:hidden items-stretch">
            <a data-testid="mobile-search-button" aria-disabled="false" class="overflow-visible bg-transparent mr-4"
              href="/search"><span
                class="overflow-hidden -m-[1px] h-[1px] p-0 absolute w-[1px] search-button align-baseline">Search
                for
                courses, skills, and videos</span><span
                class="inline-block align-text-bottom w-6 h-6 bg-primary search-icon icon" /></a>
          </div>
          <div class="flex md:hidden items-stretch">
            <button aria-expanded="false" aria-label="Open menu" aria-controls="page-header-responsive-nav-menu"
              data-testid="mobile-header-menu-button" type="button" aria-disabled="false"
              class="flex items-center text-primary font-bold h-full bg-transparent border-none overflow-visible mr-4"
              @click="mobileMenuOpen = true">
              <span class="inline-block align-text-bottom w-6 h-6 bg-primary hamburger-icon icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    <MobileNavMenu v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
  </div>
</template>
<style scoped>
.icon {
  mask-position: center;
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
}

.caret-logo {
  @apply inline-block align-text-bottom bg-primary w-4 h-4;
  mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/1cb92100cc76810d-caret-down-fill.svg);
}

.search-logo {
  @apply inline-block align-text-bottom bg-primary w-6 h-6 flex-shrink-0 flex-grow-0 mr-1.5 -ml-0.5;
  mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/39808d4c9b5e8dd7-magnifying-glass.svg);
}

.donate-logo {
  @apply inline-block align-text-bottom bg-primary w-4 h-4 flex-shrink-0 flex-grow-0 mr-1.5 -ml-0.5;
  vertical-align: -10%;
  mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/130111336c1bb24e-arrow-square-out-bold.svg);
  margin-inline-start: 4px;
}

.signup-button {
  @apply hover:outline-offset-2 hover:outline hover:outline-2 hover:outline-primary;
  padding-inline: 16px;
}

.search-button {
  clip: rect(0, 0, 0, 0);
}

.search-icon {
  mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/39808d4c9b5e8dd7-magnifying-glass.svg);
}

.hamburger-icon {
  mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/cd1174896be8cc9b-list.svg);
}
</style>
