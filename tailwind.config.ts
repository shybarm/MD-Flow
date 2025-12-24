import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        slateDeep: "#0f172a",
        electricBlue: "#2563eb"
      }
    }
  },
  plugins: []
};

export default config;
