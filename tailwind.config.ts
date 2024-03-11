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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      darkTheme: {
        // Override default dark theme colors
        backgroundColor: '#222', // Your desired background color
        textColor: '#eee', // Your desired text color
        // Override other colors as needed (primary, secondary, etc.)
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {

    }
  )],
}
export default config
