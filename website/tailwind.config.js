/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include all React component files
    ],
    theme: {
        extend: {
            colors: {
                neonblue: '#c4ffff',
            },
        },
    },
    plugins: [
        require("daisyui"), // Use require() for CommonJS
    ],
    daisyui: {
        themes: ["garden", "luxury", "dark", "cymk"],
    },
};