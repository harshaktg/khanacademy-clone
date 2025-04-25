<script setup lang="ts">
import { computed } from 'vue';

interface CourseItem {
    name: string;
    href: string;
    class?: string;
}

interface CourseListStructure {
    primary: CourseItem[];
    secondary: CourseItem[];
}

interface Course {
    section: number;
    name: string;
    icon: string;
    list: CourseListStructure;
    class?: string;
}

// Type guard to check if a course list is split into primary/secondary
function isCourseListStructure(list: any): list is CourseListStructure {
    return 'primary' in list && 'secondary' in list;
}

const courses: Course[] = [
    {
        section: 1,
        name: 'Math (NCERT)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
        list: {
            primary: [
                {
                    name: 'Class 1',
                    href: '/math/in-in-class-1st-math-cbse',
                },
                {
                    name: 'Class 2',
                    href: '/math/in-in-class-2nd-math-cbse',
                },
                {
                    name: 'Class 3',
                    href: '/math/in-in-class-3rd-math-cbse',
                },
                {
                    name: 'Class 4',
                    href: '/math/in-in-class-4th-math-cbse',
                },
                {
                    name: 'Class 5',
                    href: '/math/in-in-class-5th-math-cbse',
                },
                {
                    name: 'Class 6 (2024)',
                    href: '/math/class-6-ncf',
                },
            ],
            secondary: [
                {
                    name: 'Class 7',
                    href: '/math/ncert-class-7',
                },
                {
                    name: 'Class 8',
                    href: '/math/ncert-class-8',
                },
                {
                    name: 'Class 9',
                    href: '/math/ncert-class-9',
                },
                {
                    name: 'Class 10',
                    href: '/math/ncert-class-10',
                },
                {
                    name: 'Class 11',
                    href: '/math/ncert-class-11',
                },
                {
                    name: 'Class 12',
                    href: '/math/ncert-class-12',
                },
            ]
        }
    },
    {
        section: 1,
        name: 'Math (Bridge)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
        list: {
            primary: [
                {
                    name: 'Class 6',
                    href: '/math/in-class-6-math-foundation',
                },
                {
                    name: 'Class 7',
                    href: '/math/in-class-7-math-foundation',
                },
                {
                    name: 'Class 8',
                    href: '/math/in-class-8-math-foundation',
                },
                {
                    name: 'Class 9',
                    href: '/math/in-class-9-math-foundation',
                },
            ],
            secondary: [
                {
                    name: 'Class 10',
                    href: '/math/in-class-10-math-foundation',
                },
                {
                    name: 'Class 11',
                    href: '/math/class-11-bridge',
                },
                {
                    name: 'Class 12',
                    href: '/math/class-12-bridge',
                }
            ]
        }
    },
    {
        section: 1,
        name: 'Math (Telangana)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
        list: {
            primary: [
                {
                    name: 'Class 7',
                    href: '/math/class-7-tg',
                },
                {
                    name: 'Class 8',
                    href: '/math/class-8-tg',
                },
                {
                    name: 'Class 9',
                    href: '/math/class-9-tg',
                },
            ],
            secondary: [
                {
                    name: 'Class 10',
                    href: '/math/class-10-tg',
                },
                {
                    name: 'Class 12',
                    href: '/math/class-12-tg',
                },
            ]
        }
    },
    {
        section: 1,
        name: 'Math (Maharashtra)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
        list: {
            primary: [
                {
                    name: 'Class 1',
                    href: '/math/mr-class-1',
                },
                {
                    name: 'Class 2',
                    href: '/math/mr-class-2',
                },
                {
                    name: 'Class 3',
                    href: '/math/mr-class-3',
                },
                {
                    name: 'Class 4',
                    href: '/math/mr-class-4',
                },
                {
                    name: 'Class 5',
                    href: '/math/mr-class-5',
                },
            ],
            secondary: [
                {
                    name: 'Class 6',
                    href: '/math/mr-class-6',
                },
                {
                    name: 'Class 7',
                    href: '/math/mr-class-7',
                },
                {
                    name: 'Class 8',
                    href: '/math/mr-class-8',
                },
                {
                    name: 'Class 9',
                    href: '/math/mr-class-9',
                },
                {
                    name: 'Class 10',
                    href: '/math/mr-class-10',
                },
            ]
        }
    },
    {
        section: 1,
        name: 'Science (NCERT)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/science_green.png-4ca7bf-128c.png',
        list: {
            primary: [
                {
                    name: 'NCERT (Hinglish)',
                    href: '/math/hinglish',
                },
                {
                    name: 'Class 6',
                    href: '/science/ncert-class-6-science',
                },
                {
                    name: 'Class 7',
                    href: '/science/ncert-class-7-science',
                },
                {
                    name: 'Class 8',
                    href: '/science/ncert-class-8-science',
                },
                {
                    name: 'Class 9',
                    href: '/science/ncert-class-9-science',
                },
                {
                    name: 'Class 10',
                    href: '/science/ncert-class-10-science',
                },
                {
                    name: 'Class 11 Physics',
                    href: '/science/in-in-class11th-physics',
                },
            ],
            secondary: [
                {
                    name: 'Class 11 Chemistry',
                    href: '/science/class-11-chemistry-india',
                },
                {
                    name: 'Class 11 Biology',
                    href: '/science/in-in-class-11-biology-india',
                },
                {
                    name: 'Class 12 Physics',
                    href: '/science/in-in-class-12th-physics-india',
                },
                {
                    name: 'Class 12 Chemistry',
                    href: '/science/class-12-chemistry-india',
                },
                {
                    name: 'Class 12 Biology',
                    href: '/science/in-in-class-12-biology-india',
                },
                {
                    name: 'Essentials (9-12)',
                    href: '/science/in-science-essentials',
                },
            ]
        }
    },
    // second list
    {
        section: 2,
        name: 'Science (Bridge)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/science_green.png-4ca7bf-128c.png',
        list: {
            primary: [
                {
                    name: 'Class 7',
                    href: '/science/bridge-course-class-7th-science',
                },
                {
                    name: 'Class 8',
                    href: '/science/bridge-course-class-8th-science',
                },
                {
                    name: 'Class 9',
                    href: '/science/bridge-course-class-9th-science',
                },
                {
                    name: 'Class 10',
                    href: '/science/bridge-course-class-10th-science',
                },
                {
                    name: 'Class 11 Physics',
                    href: '/science/bridge-course-class-11th-physics',
                },
            ],
            secondary: [
                {
                    name: 'Class 11 Chemistry',
                    href: '/science/bridge-course-class-11th-chemistry',
                },
                {
                    name: 'Class 11 Biology',
                    href: '/science/bridge-course-class-11th-biology',
                },
                {
                    name: 'Class 12 Physics',
                    href: '/science/bridge-course-class-12th-physics',
                },
                {
                    name: 'Class 12 Chemistry',
                    href: '/science/bridge-course-class-12th-chemistry',
                },
                {
                    name: 'Class 12 Biology',
                    href: '/science/bridge-course-class-12th-biology',
                },
            ]
        }
    },
    {
        section: 2,
        name: 'Science (Telangana)',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/science_green.png-4ca7bf-128c.png',
        list: {
            primary: [
                {
                    name: 'Class 7',
                    href: '/science/telangana-class-7-science',
                },
                {
                    name: 'Class 8 Physical Science',
                    href: '/science/telangana-class-8-science',
                },
                {
                    name: 'Class 8 Biology',
                    href: '/science/telangana-class-8-biology',
                },
                {
                    name: 'Class 9 Physical Science',
                    href: '/science/telangana-class-9-physical-sciencein',
                },
                {
                    name: 'Class 9 Biology',
                    href: '/science/telangana-class-9-biology',
                },
                {
                    name: 'Class 10 Physical Science',
                    href: '/science/telangana-class-10-physical-sciencein',
                }
            ],
            secondary: [
                {
                    name: 'Class 10 Biology',
                    href: '/science/telangana-class-10-biologyin',
                },
                {
                    name: 'Class 12 Physics',
                    href: '/science/telangana-class-12-physics',
                },
                {
                    name: 'Class 12 Chemistry',
                    href: '/science/telangana-class-12-chemistry',
                },
                {
                    name: 'Class 12 Botany',
                    href: '/science/telangana-class-12-botany',
                },
                {
                    name: 'Class 12 Zoology',
                    href: '/science/telangana-class-12-zoologyin',
                },
            ]
        }
    },
    {
        section: 2,
        name: 'All Board',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png',
        list: {
            primary: [
                {
                    name: 'Punjab',
                    href: '/math/content-pa-1',
                },
                {
                    name: 'Uttar Pradesh',
                    href: '/math/content-up',
                },
                {
                    name: 'Maharashtra',
                    href: '/math/content-mr-1',
                },
            ],
            secondary: [
                {
                    name: 'Assam',
                    href: '/math/math-assam-1',
                },
                {
                    name: 'Odisha',
                    href: '/math/math-od',
                },
            ]
        }
    },
    {
        section: 2,
        name: 'Explore more',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/life_skills.png-1a4785-128c.png',
        list: {
            primary: [
                {
                    name: 'Digital SAT',
                    href: '/digital-sat/start'
                },
                {
                    name: 'Grammar',
                    href: '/grammar'
                },
                {
                    name: 'Intro to CS - Python',
                    href: '/computing/intro-to-python-fundamentals'
                },
                {
                    name: 'Computer Programming',
                    href: '/computer-programming'
                },
                {
                    name: 'Computer Science',
                    href: '/computer-science'
                },
                {
                    name: 'World History',
                    href: '/world-history'
                },
                {
                    name: 'Macroeconomics',
                    href: '/macroeconomics'
                },
                {
                    name: 'Microeconomics',
                    href: '/microeconomics'
                }
            ],
            secondary: [
                {
                    name: 'Finance',
                    href: '/core-finance'
                },
                {
                    name: 'Personal Finance',
                    href: '/personal-finance'
                },
                {
                    name: 'Financial Literacy',
                    href: '/financial-literacy'
                },
                {
                    name: 'Social Media Literacy',
                    href: '/social-media-challenges-and-opportunities'
                },
                {
                    name: 'AI for Education',
                    href: '/ai-for-education'
                },
                {
                    name: 'Wireless Philosophy',
                    href: '/wi-phi'
                },
                {
                    name: 'Learn to Learn',
                    href: '/learn-to-learn'
                }
            ]
        }
    },
    {
        section: 2,
        name: 'Khan for Educators',
        icon: 'https://cdn.kastatic.org/genfiles/topic-icons/icons/life_skills.png-1a4785-128c.png',
        class: 'border-b-0',
        list: {
            primary: [
                {
                    name: 'Khan for Educators (Beginner)',
                    href: '/khan-for-educators-india/khan-for-educators-for-teachers'
                },
                {
                    name: 'Khan for Educators (Advanced)',
                    href: '/khan-for-educators-india/khan-for-educators-advanced-course'
                }
            ],
            secondary: [
                {
                    name: 'Khan for Educators (Mentors)',
                    href: '/khan-for-educators-india/khan-for-educators-for-mentors',
                    class: 'mb-2'
                },
            ]
        }
    }
];

// Group courses by section
const coursesBySection = computed(() => {
    return Object.entries(
        courses.reduce((acc: { [key: number]: Course[] }, course) => {
            if (!acc[course.section]) {
                acc[course.section] = [];
            }
            acc[course.section].push(course);
            return acc;
        }, {})
    );
});

// Computed property for course list rendering
const getCourseItems = (course: Course) => {
    if (!isCourseListStructure(course.list)) {
        return { primary: [], secondary: [] };
    }
    return course.list;
};
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
                <div v-for="course in sectionCourses" :key="course.name"
                    class="flex flex-col relative items-stretch border-b border-[#21242c52] lg:grid lg:grid-cols-[1fr_1fr]"
                    :class="course.class">
                    <!-- Course Header -->
                    <button aria-expanded="true" type="button" aria-disabled="false"
                        class="font-bold grid grid-cols-[auto_1fr_auto] items-center bg-transparent leading-5 overflow-visible py-3 text-left section-header">
                        <img :src="course.icon" width="45" height="45" class="rounded-full mr-3 w-[34px] h-[34px]"
                            :alt="course.name">
                        {{ course.name }}
                        <span class="caret-down"></span>
                    </button>

                    <!-- Primary List -->
                    <ul v-if="getCourseItems(course).primary.length"
                        class="ml-[46px] lg:ml-[57px] lg:-mt-[5px] lg:mb-3">
                        <li v-for="item in getCourseItems(course).primary" :key="item.name"
                            class="hover:text-primary hover:underline hover:cursor-pointer">
                            <a class="block items-center leading-5 item-list" :class="item.class" :href="item.href">
                                <span>{{ item.name }}</span>
                            </a>
                        </li>
                    </ul>

                    <!-- Secondary List -->
                    <ul v-if="getCourseItems(course).secondary.length"
                        class="ml-[46px] mb-2 lg:ml-6 lg:-mt-[5px] lg:mb-3">
                        <li v-for="item in getCourseItems(course).secondary" :key="item.name"
                            class="hover:text-primary hover:underline hover:cursor-pointer">
                            <a class="block items-center leading-5 item-list" :class="item.class" :href="item.href">
                                <span>{{ item.name }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
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

.item-list {
    padding-block: 8px;
}

@media screen and (min-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 100px;
    }

    .section-header {
        @apply text-xl;
        padding-block: 16px;
        grid-column-start: 1;
        grid-column-end: 3;
    }
}
</style>