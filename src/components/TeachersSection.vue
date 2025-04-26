<script setup lang="ts">
</script>

<template>
    <div
        class="mb-[165px] flex flex-col items-center px-5 relative md:mb-[200px] lg:flex-row lg:max-w-[1200px] mx-auto">
        <div
            class="mt-0 mx-6 mb-6 md:my-0 md:mx-[110px] lg:my-0 lg:mr-[90px] lg:ml-0 relative flex flex-col items-stretch">
            <img class="w-full h-auto" alt="" src="https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png">
        </div>
        <div aria-hidden="true" class="w-3 basis-3 shrink-0 relative flex flex-col items-stretch"></div>
        <div
            class="max-w-[584px] w-auto basis-auto mx-auto md:w-[548px] md:max-w-none lg:w-auto flex flex-col items-stretch lg:basis-[464px] shrink-0 relative">
            <span
                class="block text-sm leading-[18px] tracking-[0.1em] text-[#21242ca3] mx-0 mt-0 mb-[37px]">TEACHERS</span>
            <h2
                class="my-0 block font-serif text-[30px] font-semibold leading-[35px] -tracking-[0.1px] -indent-[0.35em] md:text-[44px] md:leading-[48px]">
                “I’m finally
                able to truly <svg class="overflow-visible absolute left-0 top-0 w-[100px] h-[100px]"
                    preserveAspectRatio="xMidYMid meet" aria-hidden="true"
                    aria-labelledby="_khannotations_LineDrawing_0.1219301002401858_title _khannotations_LineDrawing_0.1219301002401858_desc">
                    <g>
                        <path class="teacher-animate"
                            d="M0 122 C52.29606252845028 122, 104.59212505690056 122, 169 122 "
                            style="stroke: rgb(191, 230, 221); stroke-width: 2; fill: none; stroke-dasharray: 169; stroke-dashoffset: 169; animation-delay: 1200ms; animation-duration: 84.5ms;">
                        </path>
                        <path class="teacher-animate" d="M0 122 C46.4222553580954 122, 92.8445107161908 122, 169 122"
                            style="stroke: rgb(191, 230, 221); stroke-width: 2; fill: none; stroke-dasharray: 169; stroke-dashoffset: -169; animation-delay: 1284.5ms; animation-duration: 84.5ms;">
                        </path>
                    </g>
                </svg><span style="position: relative;">differentiate</span> my classroom. This has been priceless for
                my students’ engagement.”</h2><span
                class="block font-sans text-[11px] leading-[17px] tracking-[0.08em] text-[#21242ca3] mt-[14px]">UDAYA
                LAKSHMI PALAPALA / Middle school Coordinator
                / Hyderabad, Telangana</span>
            <p
                class="text-sm leading-[22px] block -tracking-[0.1px] mt-[26px] mb-[42px] mx-0 sm:text-base sm:leading-[26px] md:text-lg md:leading-[30px]">
                We empower teachers to support their entire classroom. 90% of US teachers who have used
                Khan Academy have found us effective.</p>
            <div class="hidden w-full md:flex relative items-stretch flex-row md:w-auto">
                <div class="flex items-stretch relative flex-row"><a role="button"
                        class="h-[56px] rounded color-white bg-primary text-white px-8 inline-flex items-center justify-center relative button"
                        href="/signup?isteacher=1"><span
                            class="font-bold inline-block items-center whitespace-nowrap overflow-hidden text-ellipsis text-lg leading-[26px]">Teachers,
                            start here</span></a></div>
                <div aria-hidden="true" class="relative flex flex-col items-stretch"></div>
            </div>
            <div class="flex flex-row w-full items-stretch relative md:hidden"><a role="button"
                    class="h-10 px-4 rounded bg-primary text-white inline-flex justify-center items-center button"
                    href="/signup?isteacher=1"><span
                        class="font-bold inline-block text-ellipsis leading-6 items-center text-base">Teachers, start
                        here</span></a></div>
        </div>
    </div>
</template>
<style scoped>
.teacher-animate {
    @apply md:hidden;
    animation-name: teacher-animation;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

@keyframes teacher-animation {
    100% {
        stroke-dashoffset: 0;
    }
}
</style>