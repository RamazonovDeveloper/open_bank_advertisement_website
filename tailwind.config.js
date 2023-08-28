/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#000000",
        main_violet: "#4E0F8A",
        check_gray: "#DCDDDD",
        brown_light: "#F0CEAF",
        card_yellow: "#F0CEAF",
        card_violet: "#DCCFE8",
        text_gray:"#F4F4F5"
      },
    },
    screens: {
      xs: "320px",
      sm: "414px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2000px",
    },
    container: {
      center: true,
      padding: {
        xs: "0.625rem",
        sm: "1rem",
        md: "1.25rem",
        lg: "1.875rem",
        xl: "1.875rem",
      },
      screens: {
        xs: "320px",
        sm: "414px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
