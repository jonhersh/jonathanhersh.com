import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#122230",
          ocean: "#1f4c67",
          mist: "#e9f1f5",
          sand: "#f7f2ea",
          accent: "#c57e3d"
        }
      },
      boxShadow: {
        nav: "0 8px 24px rgba(10, 26, 38, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
