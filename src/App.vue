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
import KeySupporters from './components/KeySupporters.vue';
import Footer from './components/Footer.vue';
import StreakXpTracker from './components/StreakXpTracker.vue';
import { onMounted, onUnmounted } from 'vue';

let confettiCanvas: HTMLCanvasElement | null = null;

function launchConfetti() {
  if (!confettiCanvas) return;
  const ctx = confettiCanvas.getContext('2d');
  if (!ctx) return;
  const W = window.innerWidth;
  const H = window.innerHeight;
  confettiCanvas.width = W;
  confettiCanvas.height = H;
  const confettiColors = ['#fbbf24', '#34d399', '#60a5fa', '#f472b6', '#f87171', '#a78bfa'];
  const confetti = Array.from({ length: 120 }, () => ({
    x: Math.random() * W,
    y: Math.random() * -H,
    r: 6 + Math.random() * 6,
    d: 8 + Math.random() * 8,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleIncremental: (Math.random() * 0.07) + 0.05
  }));
  let angle = 0;
  let frame = 0;
  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, W, H);
    angle += 0.01;
    for (let i = 0; i < confetti.length; i++) {
      const c = confetti[i];
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(angle + c.d) + 6 + c.r) / 1.5;
      c.x += Math.sin(angle);
      c.tilt = Math.sin(c.tiltAngle - (i % 3)) * 15;
      if (!ctx) return;
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
      ctx.stroke();
    }
    frame++;
    if (frame < 180) {
      requestAnimationFrame(draw);
    } else {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      confettiCanvas!.style.display = 'none';
    }
  }
  confettiCanvas.style.display = 'block';
  draw();
}

onMounted(() => {
  confettiCanvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
  window.addEventListener('ka-confetti', launchConfetti);
});
onUnmounted(() => {
  window.removeEventListener('ka-confetti', launchConfetti);
});
</script>

<template>
  <div class="h-full">
    <canvas id="confetti-canvas" class="fixed inset-0 pointer-events-none z-50" style="display:none"></canvas>
    <div class="flex flex-col min-h-full">
      <InfoBanner />
      <Navbar />
      <main id="main-content" class="min-h-screen flex-none">
        <div class="flex flex-col relative items-stretch overflow-x-hidden align-baseline">
          <div class="bg-white dark:bg-gray-900 relative">
            <Hero />
            <StreakXpTracker />
            <Courses />
            <WhySection />
            <TeachersSection />
            <LearnersSection />
            <StudentTestimonial />
            <ChanceSection />
            <JoinSection />
            <KeySupporters />
          </div>
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
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
