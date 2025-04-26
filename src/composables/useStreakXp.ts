import { ref, computed, watch, onMounted } from 'vue';

const STREAK_KEY = 'ka_streak';
const XP_KEY = 'ka_xp';
const LAST_VISIT_KEY = 'ka_last_visit';
const COMPLETED_KEY = 'ka_completed_courses';

const loading = ref(true);
const streak = ref(1);
const xp = ref(0);
const lastVisit = ref<string | null>(null);
const today = new Date().toDateString();
const completedCourses = ref<string[]>([]);

export function getSubjectKey(parentName: string, itemName: string) {
    return `${parentName} - ${itemName}`;
}

function save() {
    localStorage.setItem(STREAK_KEY, streak.value.toString());
    localStorage.setItem(XP_KEY, xp.value.toString());
    localStorage.setItem(LAST_VISIT_KEY, today);
    localStorage.setItem(COMPLETED_KEY, JSON.stringify(completedCourses.value));
}

function load() {
    streak.value = parseInt(localStorage.getItem(STREAK_KEY) || '1', 10);
    xp.value = parseInt(localStorage.getItem(XP_KEY) || '0', 10);
    lastVisit.value = localStorage.getItem(LAST_VISIT_KEY);
    try {
        completedCourses.value = JSON.parse(localStorage.getItem(COMPLETED_KEY) || '[]');
    } catch {
        completedCourses.value = [];
    }
}

function awardXp(amount: number) {
    xp.value += amount;
    save();
}

function handleDailyVisit() {
    if (lastVisit.value !== today) {
        // Check if yesterday was last visit
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        if (lastVisit.value === yesterday) {
            streak.value += 1;
        } else {
            streak.value = 1;
        }
        awardXp(50);
    }
    save();
}

function handleSubjectClick(subjectKey: string) {
    if (!completedCourses.value.includes(subjectKey)) {
        completedCourses.value.push(subjectKey);
        awardXp(30);
        save();
    }
}

function handleScrollToBottom() {
    if (!localStorage.getItem('ka_scrolled_today_' + today)) {
        awardXp(20);
        localStorage.setItem('ka_scrolled_today_' + today, '1');
    }
}

function resetProgress() {
    streak.value = 1;
    xp.value = 0;
    completedCourses.value = [];
    localStorage.removeItem('ka_scrolled_today_' + today);
    save();
}

function shareProgress() {
    const text = `I'm on a ${streak.value}-day learning streak with ${xp.value} XP on Khan Academy! 🚀🔥`;
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({ title: 'My Learning Progress', text, url });
    } else {
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + url)}`;
        window.open(shareUrl, '_blank');
    }
}

const streakText = computed(() => `You're on a ${streak.value}-day learning streak!`);
const xpText = computed(() => `You have earned ${xp.value} XP!`);
const xpPercent = computed(() => Math.min((xp.value % 100) / 100 * 100, 100));
const nextRewardXp = computed(() => {
    const xpValue = Number(xp.value);
    if (isNaN(xpValue)) return 100;
    return ((Math.floor(xpValue / 100) + 1) * 100);
});

const lastLevel = ref(Math.floor(xp.value / 100));
watch(xp, (newXp) => {
    const newLevel = Math.floor(newXp / 100);
    if (newLevel > lastLevel.value) {
        lastLevel.value = newLevel;
        window.dispatchEvent(new CustomEvent('ka-confetti'));
    }
});

let initialized = false;
function initialize() {
    if (initialized) return;
    initialized = true;
    load();
    handleDailyVisit();
    loading.value = false;
}

export function useStreakXp() {
    onMounted(() => {
        initialize();
    });
    return {
        loading,
        streak,
        xp,
        completedCourses,
        streakText,
        xpText,
        xpPercent,
        nextRewardXp,
        handleSubjectClick,
        handleScrollToBottom,
        resetProgress,
        shareProgress,
        save,
        getSubjectKey,
    };
} 