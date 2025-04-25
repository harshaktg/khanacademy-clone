<script setup lang="ts">
import { computed } from 'vue';
import CourseAccordion from './CourseAccordion.vue';
import { courses, type Course } from '../constants/courses';

// Group courses by section
const coursesBySection = computed(() => {
    return Object.entries(
        courses.reduce((acc: { [key: number]: Course[] }, course: Course) => {
            if (!acc[course.section]) {
                acc[course.section] = [];
            }
            acc[course.section].push(course);
            return acc;
        }, {})
    );
});

</script>

<template>
    <nav aria-label="Courses"
        class="flex flex-col relative mt-5 -mb-5 ml-auto mr-auto items-stretch bg-white max-w-[1200px]">
        <div
            class="flex flex-col relative p-4 mx-4 bg-[#f5f5f5] rounded items-stretch lg:grid grid-container lg:py-5 lg:px-20">
            <!-- Section Container -->
            <div v-for="[sectionId, sectionCourses] in coursesBySection" :key="sectionId"
                class="flex flex-col relative items-stretch">
                <!-- Course Container -->
                <CourseAccordion v-for="course in sectionCourses" :key="course.name" :course="course" />
            </div>
        </div>
    </nav>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 100px;
    }
}
</style>