/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  variants: {
    extend: {
      // Enable the necessary variants here
      backgroundColor: ["hover", "focus", "active"],
      textColor: ["hover", "focus", "active"],
    },
  },
  theme: {
    extend: {
      colors: {
        //light mode color #f0f0f0
        ioty__white: "#f7f8fa",
        ioty__black: "#22323c",
        ioty__primary: "#87c4dc",
        ioty__secondary: "#ff7a42",

        //dark mode color
        gray__950: "#030712",
        gray__900: "#111827",
        gray__800: "#1f2937",
        gray__700: "#374151",
        gray__600: "#4b5563",
        gray__400: "#6b7280",
        gray__300: "#d1d5db",
        gray__200: "#e5e7eb",
        gray__100: "#f9fafb",
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#F9C107",
        danger: "#F92525",
        success: "#22AB58",
        info: "#3BA2B8",
        light: "#efefef",
        "form-stroke": "#E0E0E0",
        "tg-bg": "#f7f8fa",
        black: "#212B36",
        stroke: "#E7E7E7",
        gray: "#F4F7FF",
        "gray-1": "#F4F7FF",
        "gray-2": "#F8FAFC",
        orange: "#F2994A",
        purple: "#9B51E0",
        btn_bg: "#ECEFFD",
        icon_bg: "#ECEFF9",
        black_head: "#090712",
        pg_title: "#242F57",

        desc_clr: "#97A0C3",
        profile_tag: "#B2B1B9",
        profile_name: "#242F57",
        even_bg: "#F7F9FD",
        table_low: "#A9B1CB",
        detail_tag: "#7985AE",
        menu_bg: "#12151C",
        text_clr: "#7F7C76",
        web_clr: "#FF4900",
        table_heading: "#1A1A1A",
        input_border: "#FFDBCC",
        btn_bg2: "#FFEDE5",
        linear: "#FCB045",
        hover_clr_dark: "#e64100",
        hover_clr_light: "#ffdccc",
        
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: ["Inter"],
      },
    },
  },
  plugins: [
    require("tailgrids/plugin"),
    require("@tailwindcss/forms"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
};
