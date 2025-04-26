<script setup lang="ts">
</script>

<template>
    <div id="last-chance-lohp" tabindex="-1"
        class="justify-center min-h-screen py-0 lg:justify-normal lg:min-h-0 lg:p-0 flex flex-col relative mx-0 mt-0 mb-[166px] items-center">
        <h2
            class="px-[50px] sm:px-0 my-0 block font-serif text-[30px] font-semibold leading-[35px] -tracking-[0.1px] text-center md:text-[44px] md:leading-[48px]">
            Join Khan Academy today</h2>
        <div
            class="mt-4 pt-4 pb-6 w-full sm:mt-8 sm:pt-8 lg:mt-6 lg:mx-0 lg:mb-0 lg:py-6 px-0 min-h-[438px] flex flex-col items-center join-container">
            <ul class="max-w-[335px] w-[90%] items-center">
                <li><a role="button"
                        class="h-[56px] mt-0 mx-0 mb-2 rounded px-8 bg-primary text-white inline-flex items-center justify-center button w-full"
                        href="/signup"><span
                            class="font-bold inline-block truncate text-[18px] leading-[26px] items-center">Learners</span></a>
                </li>
                <li><a role="button"
                        class="h-[56px] mt-0 mx-0 mb-2 rounded px-8 bg-primary text-white inline-flex items-center justify-center button w-full"
                        href="/signup?isteacher=1"><span
                            class="font-bold inline-block truncate text-[18px] leading-[26px] items-center">Teachers</span></a>
                </li>
                <li><a role="button"
                        class="h-[56px] mt-0 mx-0 mb-2 rounded px-8 bg-primary text-white inline-flex items-center justify-center button w-full"
                        href="/signup?isparent=1"><span
                            class="font-bold inline-block truncate text-[18px] leading-[26px] items-center">Parents</span></a>
                </li>
                <li><a role="button" rel="noopener noreferrer" target="_blank"
                        href="https://india.khanacademy.org/donate"
                        class="hidden h-[56px] mt-0 mx-0 mb-2 rounded px-8 bg-primary text-white lg:inline-flex items-center justify-center button w-full"><span
                            class="font-bold inline-block truncate text-[18px] leading-[26px] items-center">Give
                            today</span></a></li>
                <li><button type="button" role="button" aria-disabled="false"
                        class="h-10 mt-0 mx-0 mb-2 rounded px-8 bg-white text-primary inline-flex items-center justify-center w-full button-secondary"><span
                            class="font-bold inline-block truncate text-base leading-[24px] items-center ">Back</span></button>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.join-container {
    background-image: url(https://cdn.kastatic.org/images/lohp/last_chance_collage@2x.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}
</style>
