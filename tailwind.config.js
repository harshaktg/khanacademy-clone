/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', 'Noto Sans', 'Helvetica', 'Corbel', 'sans-serif'],
                'serif': ['Source Serif Pro', 'Noto Serif', 'serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#1865f2',
                    light: '#eef4fe',  // Light variant for backgrounds
                    dark: '#1557d0',   // Dark variant for hover states
                }
            },
        },
    },
    plugins: [],
} 