<script setup lang="ts">
</script>

<template>
    <div
        class="mb-[165px] px-5 flex-col flex items-center relative md:mb-[200px] lg:max-w-[1200px] mx-auto lg:flex-row-reverse">
        <div
            class="mt-0 mx-6 mb-6 md:my-0 md:mx-[110px] lg:my-0 lg:ml-[90px] lg:mr-0 relative flex flex-col items-stretch">
            <img class="w-full h-auto" alt="" src="https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png"
                usemap="#easterEggMap">
            <!-- TODO: Click for confetti -->
            <button class="absolute bg-transparent border-none cursor-pointer" aria-label="Click for a surprise"
                style="inset: 51% 46.5% 43% 46%;"></button>
            <div class="sr-only" role="status"></div>
        </div>
        <div aria-hidden="true" class="flex flex-col relative items-stretch basis-3 shrink-0"></div>
        <div
            class="max-w-[584px] w-auto basis-auto mx-auto md:w-[548px] md:max-w-none lg:w-auto flex flex-col items-stretch lg:basis-[464px] shrink-0 relative">
            <span class="block text-sm leading-[18px] tracking-[0.1em] text-[#21242ca3] mx-0 mt-0 mb-[37px]">LEARNERS
                AND STUDENTS</span>
            <h2
                class="my-0 block font-serif text-[30px] font-semibold leading-[35px] -tracking-[0.1px] -indent-[0.35em] md:text-[44px] md:leading-[48px]">
                <span class="align-baseline -tracking-[0.1px] ml-2.5">
                    <svg class="overflow-visible absolute left-0 top-0 w-[100px] h-[100px] md:hidden"
                        aria-hidden="true">
                        <g>
                            <path class="learner-animate"
                                d="M-3.486371267970852 49.324593442891526 L46.25825793411237 55.81586632218598 L49.749629637760094 88.93214756324717 L3.8823334801258005 93.41607861489777"
                                style="stroke: none; stroke-width: 0; fill: rgb(191, 230, 221); stroke-dasharray: 139.552; stroke-dashoffset: 139.552; transform-origin: 0px 53px; animation-delay: 200ms; animation-duration: 100ms; transform: scaleX(0);">
                            </path>
                        </g>
                    </svg>
                    <span style="position: relative;">You</span>
                </span>
                can learn anything.
            </h2>
            <p
                class="text-sm leading-[22px] block -tracking-[0.1px] mt-[26px] mb-[42px] mx-0 sm:text-base sm:leading-[26px] md:text-lg md:leading-[30px]">
                Build a deep, solid understanding in math, science, grammar, history, SAT®, and more.</p>
            <div class="hidden w-full md:flex relative items-stretch flex-row md:w-auto">
                <div class="flex items-stretch relative flex-row"><a role="button"
                        class="h-[56px] rounded color-white bg-primary text-white px-4 inline-flex items-center justify-center relative button"
                        href="/signup"><span
                            class="font-bold inline-block items-center whitespace-nowrap overflow-hidden text-ellipsis text-lg leading-[26px]">Learners,
                            start here</span></a></div>
                <div aria-hidden="true" class="relative flex flex-col items-stretch"></div>
            </div>
            <div class="flex flex-row w-full items-stretch relative md:hidden"><a role="button"
                    class="h-10 px-4 rounded bg-primary text-white inline-flex justify-center items-center button"
                    href="/signup"><span
                        class="font-bold inline-block text-ellipsis leading-6 items-center text-base">Learners,
                        start here</span></a></div>
        </div>
    </div>
</template>

<style scoped>
.learner-animate {
    animation-name: learner-animation;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
}

.button {
    @apply hover:outline-offset-2 hover:outline hover:outline-2 hover:outline-primary;
}


@keyframes learner-animation {
    0% {
        transform: scaleX(0);
    }

    100% {
        transform: scaleX(1);
    }
}
</style>