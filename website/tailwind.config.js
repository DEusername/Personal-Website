/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

const obj = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // <-- include all your React component files
    ],
    theme: {
        extend: {},
    },
    plugins: [daisyui], // <-- enable DaisyUI
}

export default obj