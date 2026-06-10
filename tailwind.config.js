/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#2c3e50',
            '--tw-prose-links': '#646cff',
            '--tw-prose-headings': '#1e1e20',
            '--tw-prose-code': '#1e1e20',
            'code::before': { content: '""' },
            'code::after':  { content: '""' },
            code: {
              backgroundColor: '#ebebec',
              borderRadius: '4px',
              padding: '3px 6px',
              fontSize: '0.875em',
            },
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

