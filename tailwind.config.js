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
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        'soft': 'rgb(246 246 247)',
        'info': 'rgb(103 103 108)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

