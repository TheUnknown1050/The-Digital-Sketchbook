import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 3s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { "border-radius": "48% 52% 51% 49% / 50% 54% 46% 50%" },
          "10%": { "border-radius": "53% 47% 71% 29% / 76% 42% 58% 24%" },
          "20%": { "border-radius": "49% 51% 73% 27% / 70% 15% 85% 30%" },
          "30%": { "border-radius": "30% 70% 56% 44% / 59% 51% 49% 41%" },
          "40%": { "border-radius": "18% 82% 40% 60% / 34% 43% 57% 66%" },
          "50%": { "border-radius": "23% 77% 22% 78% / 48% 78% 22% 52%" },
          "60%": { "border-radius": "33% 67% 14% 86% / 60% 50% 50% 40%" },
          "70%": { "border-radius": "48% 52% 22% 78% / 61% 34% 66% 39%" },
          "80%": { "border-radius": "61% 39% 39% 61% / 75% 23% 77% 25%" },
          "90%": { "border-radius": "55% 45% 46% 54% / 63% 29% 71% 37%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
