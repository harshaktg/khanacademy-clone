<script setup lang="ts">
import { useStreakXp } from '../composables/useStreakXp';

const {
    loading,
    streak,
    xp,
    streakText,
    xpText,
    xpPercent,
    nextRewardXp,
    resetProgress,
} = useStreakXp();

const shareUrl = window.location.href;

function share(platform: string) {
    const text = `I'm on a ${streak.value}-day learning streak with ${xp.value} XP on Khan Academy! 🚀🔥`;
    const url = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(text);
    let shareLink = '';
    if (platform === 'facebook') {
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'twitter') {
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}%20${url}`;
    } else if (platform === 'linkedin') {
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'whatsapp') {
        shareLink = `https://wa.me/?text=${encodedText}%20${url}`;
    } else if (platform === 'instagram') {
        navigator.clipboard.writeText(`${text} ${shareUrl}`);
        alert('Copied to clipboard! Paste in your Instagram story or post.');
        return;
    }
    window.open(shareLink, '_blank');
}
</script>

<template>
    <div class="flex justify-center my-8">
        <div
            class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center transition-colors duration-300">
            <div v-if="loading" class="w-full flex flex-col items-center animate-pulse">
                <div class="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div class="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                <div class="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <template v-else>
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-2xl">🔥</span>
                    <span class="font-bold text-lg text-gray-800 dark:text-gray-100 transition-colors duration-300">{{
                        streakText }}</span>
                </div>
                <div class="flex items-center gap-2 mb-4">
                    <span class="text-xl">⭐</span>
                    <span class="text-gray-700 dark:text-gray-200 transition-colors duration-300">{{ xpText }}</span>
                </div>
                <div class="w-full mb-4">
                    <div class="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div class="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-500"
                            :style="{ width: xpPercent + '%' }"></div>
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">Next reward at {{ nextRewardXp
                        }} XP</div>
                </div>
                <button @click="resetProgress"
                    class="w-full max-w-[220px] mx-auto flex items-center justify-center gap-2 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors mb-6">
                    <span class="inline-block">♻️</span>
                    <span>Reset Progress</span>
                </button>
                <div class="w-full flex flex-col items-center">
                    <div class="w-full flex items-center my-2">
                        <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                        <span class="mx-3 text-xs text-gray-400 dark:text-gray-500 tracking-wide uppercase">Share</span>
                        <div class="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div class="flex flex-row gap-3 justify-center mt-1">
                        <button @click="() => share('facebook')" aria-label="Share on Facebook"
                            title="Share on Facebook" class="icon facebook-icon"></button>
                        <button @click="() => share('twitter')" aria-label="Share on Twitter" title="Share on Twitter"
                            class="icon twitter-icon"></button>
                        <button @click="() => share('linkedin')" aria-label="Share on LinkedIn"
                            title="Share on LinkedIn" class="icon"
                            style="mask-image: url('https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg'); background-color: #0a66c2;"></button>
                        <button @click="() => share('whatsapp')" aria-label="Share on WhatsApp"
                            title="Share on WhatsApp" class="icon"
                            style="mask-image: url('https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg'); background-color: #25d366;"></button>
                        <button @click="() => share('instagram')" aria-label="Share on Instagram"
                            title="Share on Instagram" class="icon instagram-icon"></button>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
.icon {
    @apply inline-block shrink-0 grow-0 w-7 h-7 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-200;
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center;
    margin: 0 2px;
    opacity: 0.85;
}

.icon:hover {
    @apply scale-110 shadow-lg opacity-100;
    filter: brightness(1.1);
}

.facebook-icon {
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/e5b43b9c0717d989-facebook-logo-fill.svg);
    background-color: #1877f3;
}

.twitter-icon {
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/f5240dcae2b53974-twitter-logo-fill.svg);
    background-color: #1da1f2;
}

.instagram-icon {
    mask-image: url(https://cdn.kastatic.org/genwebpack/prod/en/images/62e92f7fbb787def-instagram-logo-fill.svg);
    background-color: #e1306c;
}
</style>