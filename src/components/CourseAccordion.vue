<script setup lang="ts">
import { ref } from 'vue';

interface CourseItem {
  name: string;
  href: string;
  class?: string;
}

interface CourseListStructure {
  primary: CourseItem[];
  secondary: CourseItem[];
}

interface Props {
  course: {
    name: string;
    icon: string;
    list: CourseListStructure;
    class?: string;
  }
}

defineProps<Props>();
const isExpanded = ref(true);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="flex flex-col relative items-stretch border-b border-[#21242c52] lg:grid lg:grid-cols-[1fr_1fr]"
    :class="course.class">
    <button :aria-expanded="isExpanded" type="button"
      class="font-bold grid grid-cols-[auto_1fr_auto] items-center bg-transparent leading-5 overflow-visible py-3 text-left section-header"
      @click="toggleExpand">
      <img :src="course.icon" width="45" height="45" class="rounded-full mr-3 w-[34px] h-[34px] lg:w-[45px] lg:h-[45px]"
        :alt="course.name" />
      {{ course.name }}
      <span class="caret-down" :class="{ 'collapsed': !isExpanded }" />
    </button>

    <template v-if="isExpanded">
      <ul v-if="course.list.primary.length" class="ml-[46px] lg:ml-[57px] lg:-mt-[5px] lg:mb-3">
        <li v-for="item in course.list.primary" :key="item.name"
          class="hover:text-primary hover:underline hover:cursor-pointer">
          <a class="block items-center leading-5 item-list" :class="item.class" :href="item.href">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
      <ul v-if="course.list.secondary.length" class="ml-[46px] lg:ml-6 mb-2 lg:mb-3 lg:-mt-[5px]">
        <li v-for="item in course.list.secondary" :key="item.name"
          class="hover:text-primary hover:underline hover:cursor-pointer">
          <a class="block items-center leading-5 item-list" :class="item.class" :href="item.href">
            <span>{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
.caret-down {
  @apply w-6 h-6 inline-block align-text-bottom;
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/188ef46fb20241ed-caret-down-bold.svg);
  background-color: #21242c;
  transition: -ms-transform .5s, -webkit-transform .5s, transform .5s;
  transform: rotate(-180deg);
}

.caret-down.collapsed {
  transform: rotate(0deg);
}

.item-list {
  padding-block: 8px;
}

@media screen and (min-width: 1024px) {
  .section-header {
    @apply text-xl;
    padding-block: 16px;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>