<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../ui/Logo.vue';
import { courses, type Course } from '../constants/courses';

const emit = defineEmits(['close']);

// Group courses by section name for display
const coursesBySection = Object.entries(
    courses.reduce((acc: { [key: string]: Course[] }, course: Course) => {
        if (!acc[course.name]) acc[course.name] = [];
        acc[course.name].push(course);
        return acc;
    }, {})
);

const expanded = ref<string | null>(null);
const toggle = (name: string) => {
    expanded.value = expanded.value === name ? null : name;
};
</script>
<template>
    <div class="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col min-h-screen w-full overflow-y-auto">
        <div class="flex items-center justify-between px-4 py-3">
            <a class="flex items-center" href="/">
                <Logo class="w-36 h-8" />
            </a>
            <div class="flex items-center gap-8">
                <a href="/search" aria-label="Search" class="text-primary">
                    <span class="inline-block w-6 h-6 bg-primary search-icon icon" />
                </a>
                <button aria-label="Close menu" @click="$emit('close')" class="text-primary">
                    <span class="inline-block w-6 h-6 bg-primary close-icon icon" />
                </button>
            </div>
        </div>
        <div class="flex flex-col px-4 py-2 gap-2">
            <a href="/login"
                class="py-3 font-bold border-b border-[#e5e5e5] dark:border-gray-700 text-[#21242c] dark:text-gray-100">Log
                in</a>
            <a href="/signup"
                class="py-3 font-bold border-b border-[#e5e5e5] dark:border-gray-700 text-[#21242c] dark:text-gray-100">Sign
                up</a>
        </div>
        <div class="flex flex-col divide-y divide-[#e5e5e5] dark:divide-gray-700">
            <div v-for="[sectionName, sectionCourses] in coursesBySection" :key="sectionName">
                <button
                    class="w-full flex items-center justify-start gap-x-4 py-[15px] font-bold text-left text-[#21242c] dark:text-gray-100 text-base"
                    :class="{ 'border-b border-[#e5e5e5] dark:border-gray-700': expanded === sectionName }"
                    @click="toggle(sectionName)" :aria-expanded="expanded === sectionName">
                    <span class="caret-down" :class="{ 'collapsed': expanded !== sectionName }" />
                    <span class="uppercase text-sm leading-4 tracking-[0.6px]">{{ sectionName }}</span>
                </button>
                <div v-if="expanded === sectionName" class="pl-4 pb-2">
                    <ul>
                        <li v-for="course in sectionCourses" :key="course.name">
                            <ul>
                                <li v-for="item in course.list.primary" :key="item.name">
                                    <a :href="item.href"
                                        class="block px-8 pt-3 pb-3 text-base text-primary hover:underline leading-[19.6px]">{{
                                            item.name }}</a>
                                </li>
                                <li v-for="item in course.list.secondary" :key="item.name">
                                    <a :href="item.href"
                                        class="block px-8 pt-3 pb-3 text-base text-primary hover:underline  leading-[19.6px]">{{
                                            item.name }}</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="px-4 pt-4 pb-2 border-t border-[#e5e5e5] dark:border-gray-700 mt-4">
            <div class="flex items-center justify-between bg-white dark:bg-gray-900 h-14 mb-2">
                <a href="/about"
                    class="block py-3 font-bold hover:text-primary hover:underline text-[#21242c] dark:text-gray-100">About</a>
            </div>
            <a href="https://india.khanacademy.org/donate" target="_blank" rel="noopener noreferrer"
                class="block py-2 font-bold text-white bg-primary text-center rounded button">Donate</a>
        </div>
    </div>
</template>
<style scoped>
.icon {
    mask-position: center;
    mask-size: 100% 100%;
    mask-repeat: no-repeat;
}

.search-icon {
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/39808d4c9b5e8dd7-magnifying-glass.svg);
}

.close-icon {
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/d8819c13063cb093-x.svg);
}

.caret-down {
    @apply w-4 h-4 inline-block align-text-bottom ml-4 dark:bg-white;
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/188ef46fb20241ed-caret-down-bold.svg);
    background-color: #21242c;
    transition: transform .3s;
    transform: rotate(-180deg);
}

.caret-down.collapsed {
    transform: rotate(0deg);
}
</style>