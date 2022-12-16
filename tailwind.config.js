/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        colors: {
            themelightgray: "#D9D9D9",
            themedarkgray: "#323031",
            themelightblue: "#177E89",
            themedarkblue: "#084C61",
            themered: "#DB3A34",
            themeyellow: "#FFC857",
            themegreen: "#306100",
            black: "#000",
            white: "#fff",
        },
    },
};
