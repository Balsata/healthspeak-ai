import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#3b82f6',
                secondary: '#38bdf8',
                dark: '#0f172a',
                light: '#f8fafc',
            },
        },
    },
    plugins: [],
};

export default config;
