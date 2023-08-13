/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg_app: '#F7F8FD',
        bg_comments:'#FFFFFF',
        bg_labels: '#F2F4FF',
        button_1: '#AD1FEA',
        button_2:'#4661E6',
        button_3:'#373f68',
        planned:'#F49F85',
        live:'#62BCFA',
        in_progress:'#AD1FEA',
        header:'#3A4374',
        bg_labels_2:'#647196'
      },
    },
  },
  plugins: [],
}
