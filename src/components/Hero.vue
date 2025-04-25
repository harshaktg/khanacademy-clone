<script setup lang="ts">
</script>

<template>
  <div data-testid="hero-heading"
    class="px-5 pt-2 pb-[95px] relative flex-row-reverse overflow-hidden max-w-[1152px] mx-auto flex items-stretch md:grid md:pt-[30px] md:px-5 md:pb-[10px] md:grid-cols-[41%_1fr] lg:grid-cols-[451px_1fr] grid-container">
    <div class="relative float-right w-[80%] md:static md:w-full md:self-center">
      <img class="w-full" src="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png"
        srcset="https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_2x.png 2x, https://cdn.kastatic.org/images/lohp/hero_student_collage_IN_1x.png 1x"
        alt="" data-testid="hero-image" />
    </div>
    <div class="absolute w-[calc(100%-40px)] bottom-0 pb-[5px] md:static md:w-full md:self-center">
      <h1
        class="font-serif text-2xl font-semibold leading-8 mb-[22px] inline bg-white relative bottom-3 md:block md:static md:text-[32px] md:leading-[36px] lg:text-[34px] lg:leading-[36px]">
        For every
        student,<br />every classroom.<br /><svg class="overflow-visible absolute left-0 top-0 w-[100px] h-[100px]"
          preserveAspectRatio="xMidYMid meet" aria-hidden="true"
          aria-labelledby="_khannotations_LineDrawing_0.5146826507618307_title _khannotations_LineDrawing_0.5146826507618307_desc">
          <g>
            <path class="header-animate " d="M0 90 C45.45326951397172 90, 90.90653902794344 90, 134 90 "
              style="stroke: rgb(191, 230, 221); stroke-width: 2; fill: none; stroke-dasharray: 134; stroke-dashoffset: 134; animation-delay: 1200ms; animation-duration: 67ms;" />
            <path class="header-animate " d="M0 90 C46.453258599730134 90, 92.90651719946027 90, 134 90"
              style="stroke: rgb(191, 230, 221); stroke-width: 2; fill: none; stroke-dasharray: 134; stroke-dashoffset: -134; animation-delay: 1267ms; animation-duration: 67ms;" />
          </g>
        </svg><span style="position: relative;">Real</span> <span style="position: relative;">results.</span>
      </h1>
      <p
        class="mt-0 mx-0 mb-5 text-sm leading-6 w-[85%] max-w-[500px] md:w-full md:max-w-full md:pr-[15%] lg:text-base">
        <span class="align-text-bottom">We’re a
          nonprofit
          with the mission to provide a free, world-class
          education for anyone, anywhere.</span>
      </p>
      <div class="hidden lg:grid lg:grid-flow-col hero-buttons-container">
        <a role="button"
          class="inline-flex items-center justify-center h-10 px-4 rounded bg-primary text-white relative button"
          href="/signup"><span
            class="font-bold leading-6 inline-block overflow-hidden items-center overflow-ellipsis">Learners</span></a><a
          role="button"
          class="inline-flex items-center justify-center h-10 px-4 rounded bg-primary text-white relative button"
          href="/signup?isteacher=1"><span
            class="font-bold leading-6 inline-block overflow-hidden items-center overflow-ellipsis">Teachers</span></a><a
          role="button"
          class="inline-flex items-center justify-center h-10 px-4 rounded bg-primary text-white relative button"
          href="/signup?isparent=1"><span
            class="font-bold leading-6 inline-block overflow-hidden items-center overflow-ellipsis">Parents</span></a>
      </div>
      <p class="hidden mt-0 mx-0 mb-5 text-sm leading-6 w-[85%] max-w-[500px]">
        Learners, teachers, and parents:
      </p><button type="button" role="button" aria-disabled="false"
        class="relative inline-flex items-center justify-center h-10 px-4 rounded bg-primary text-white w-full md:w-auto lg:hidden button">
        <span
          class="inline-block overflow-hidden items-center overflow-ellipsis leading-6 font-bold whitespace-nowrap button">Start
          here</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  grid-gap: 30px;
}

.header-animate {
  @apply md:hidden;
  animation-name: keyframe_hero;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.button {
  @apply hover:outline-offset-2 hover:outline hover:outline-2 hover:outline-primary;
}

@keyframes keyframe_hero {
  100% {
    stroke-dashoffset: 0;
  }
}

@media screen and (min-width: 1023.5px) {
  .hero-buttons-container {
    grid-gap: 10px;
  }
}
</style>