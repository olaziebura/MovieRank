import { themePlugin } from "@/lib/tailwind/theme-plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    // Will be extended by plugin
  },
  plugins: [themePlugin],
};

export default config;
