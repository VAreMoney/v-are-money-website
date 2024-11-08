import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/styles/**/*.scss',
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000ff',
                foreground: '#e0ff00ff',
                yellow: {
                    DEFAULT: '#e0ff00',
                },
                'matcha-green': {
                    DEFAULT: '#3cbe67',
                },
                'uniswap-pink': {
                    DEFAULT: '#F25A67',
                },
                'flooz-blue': {
                    DEFAULT: '#5e38f4',
                },
            },
            scale: {
                '110': '1.1',
            },
            fontFamily: {
                spaceMono: ['Space Mono', 'monospace'],
                rubikGlitch: ['Rubik Glitch', 'system-ui'],
            },
        },
    },
    variants: {
        extend: {
            scale: ['hover', 'focus'],
        },
    },
    plugins: [],
};
export default config;
