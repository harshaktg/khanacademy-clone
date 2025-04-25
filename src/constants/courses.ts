
export interface CourseItem {
    name: string;
    href: string;
    class?: string;
}

export interface CourseListStructure {
    primary: CourseItem[];
    secondary: CourseItem[];
}

export interface Course {
    section: number;
    name: string;
    icon: string;
    list: CourseListStructure;
    class?: string;
}

export const courses: Course[] = [
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

// Type guard for course list structure
export function isCourseListStructure(list: any): list is CourseListStructure {
    return 'primary' in list && 'secondary' in list;
} 