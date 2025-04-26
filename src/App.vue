<script setup lang="ts">
import InfoBanner from './components/InfoBanner.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Courses from './components/Courses.vue';
import WhySection from './components/WhySection.vue';
import TeachersSection from './components/TeachersSection.vue';
import LearnersSection from './components/LearnersSection.vue';
import StudentTestimonial from './components/StudentTestimonial.vue';
import ChanceSection from './components/ChanceSection.vue';
import JoinSection from './components/JoinusSection.vue';
</script>

<template>
  <div class="h-full">
    <div class="flex flex-col min-h-full">
      <InfoBanner />
      <Navbar />
      <main id="main-content" class="min-h-screen flex-none">
        <div class="flex flex-col relative items-stretch overflow-x-hidden align-baseline">
          <div class="bg-white relative">
            <Hero />
            <Courses />
            <WhySection />
            <TeachersSection />
            <LearnersSection />
            <StudentTestimonial />
            <ChanceSection />
            <JoinSection />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
