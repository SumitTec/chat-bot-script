import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui-kit/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bgImage: "url('/images/background.jpeg')",
      }),
      screens: {
        mobile: "475px",
        miniMobile: "380px",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        bgButton: "#5AC8C8",
        placeholderTxt: "#8F8F8F",
        bgGray: "#B8B8B8",
      },
      fontSize: {
        "10p": "10px",
      },
      width: {
        500: "500px",
      },
      spacing: {
        "10p": "10px",
      },
    },
  },
  plugins: [],
};
export default config;
