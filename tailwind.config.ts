import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8BBDC2',
        primary_darker: '#7AA8B0',
        secondary: '#B1DEC1',
        secondary_darker: '#9FC7AD',
        dark: '#424242',
      },
    },
  },
  plugins: [],
}
export default config
