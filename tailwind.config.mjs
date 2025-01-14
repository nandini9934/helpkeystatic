/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient': 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(215, 110, 110) 40%, rgb(155, 81, 224) 100%)',
        'custom-gradient': 'linear-gradient(135deg, rgb(6, 147, 227) 0%, rgb(65, 0, 0) 39%, rgb(155, 81, 224) 100%)',
      },
      boxShadow: {
        'even': '0 0 10px rgba(0, 0, 0, 0.47)',
        'odd': '0 0 10px rgba(0, 0, 0, 0.22)', // Equal shadow on all sides
      },
    },
  },
  plugins: [],
};
