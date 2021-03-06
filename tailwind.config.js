const colors = require('tailwindcss/colors');
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {

        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '5rem',
                xl: '6rem',
                '2xl': '8rem',
            },
        },
        colors: {
            Cyan: colors.cyan,
            Sky: colors.sky,
            gray: colors.gray,
            Slate: colors.slate,
            Indigo: colors.indigo,
            Yellow: colors.yellow,
            white: colors.white,
            red: colors.red,
            green: colors.green,
            blue: colors.blue,
            Violet: colors.violet
        },
        fontWeight: {
            hairline: 100,
            'extra-light': 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            'extra-bold': 800,
            black: 900,
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        fontFamily: {
            'tangerine': ['Tangerine', 'cursive', 'Oswald', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
    darkMode: 'class',

}