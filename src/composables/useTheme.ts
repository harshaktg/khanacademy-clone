import { ref, watchEffect } from 'vue';

const THEME_KEY = 'theme';
// 'light' | 'dark'
const theme = ref<'light' | 'dark'>(getInitialTheme());

function getInitialTheme(): 'light' | 'dark' {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === 'dark' || saved === 'light') return saved;
        // Fallback to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
}

function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
}

function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
}

// Watch and update html class
watchEffect(() => {
    if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', theme.value === 'dark');
    }
});

export function useTheme() {
    return { theme, setTheme, toggleTheme };
}
