import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': 'radial-gradient(circle, rgba(4,3,29,1) 0%, rgba(30,14,61,1) 80%, rgba(16,16,57,1) 90%, rgba(18,18,46,1) 100%)',
      }),
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "purple-light": {
          extend: "light",
          colors: {
            background: "#ffffff",
            foreground: "#202124",
            primary: {
              50: "#FEECFE",
              100: "#FDD5F9",
              200: "#FCADF9",
              300: "#F182F6",
              400: "#DD62ED",
              500: "#c031e2",
              600: "#9823C2",
              700: "#7318A2",
              800: "#520F83",
              900: "#3B096C",
              DEFAULT: "#3B096C",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
          
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        "purple-dark": {
          extend: "dark",
          colors: {
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],

}
export default config
