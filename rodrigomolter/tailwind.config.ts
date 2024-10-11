import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "100px",
        sm: "412px",
        "3xl": "2560px",
        "4xl": "3840px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "logo-primary": "#eab308",
        "logo-secondary": "#92400e",
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0.0deg)",
          },
          "10%": {
            transform: "rotate(20.0deg)",
          },
          "20%": {
            transform: "rotate(-16.0deg)",
          },
          "30%": {
            transform: "rotate(20.0deg)",
          },
          "40%": {
            transform: "rotate(-8.0deg)",
          },
          "50%": {
            transform: "rotate(20.0deg)",
          },
          "60%": {
            transform: "rotate(0.0deg)",
          },
          "100%": {
            transform: "rotate(0.0deg)",
          },
        },
        rainbow: {
          "0%": { "background-position": "0%" },
          "100%": { "background-position": "200%" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
        rainbow: "rainbow var(--speed, 2s) infinite linear",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["winter"],
          primary: "#c026d3",
          secondary: "#7e22ce",
          accent: "#92400e",
        },
        dracula: {
          ...require("daisyui/src/theming/themes")["dracula"],
        },
      },
    ],
  },
}

export default config
