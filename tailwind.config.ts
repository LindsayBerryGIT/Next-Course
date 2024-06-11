import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    darkTheme:"mythemedark",
    themes: [
      {
      
          mytheme: {

          "primary": "#86198f",
        
          "secondary": "#c026d3",
                    
          "accent": "#e879f9",
                    
          "neutral": "#e879f9",
                    
          "base-100": "#f3f4f6",
                    
          "info": "#a78bfa",
                    
          "success": "#a78bfa",
                    
          "warning": "#6d28d9",
                    
          "error": "#6d28d9",
                    },
                    mythemedark: {
                      "primary": "#86198f",
                      "secondary": "#c026d3",
                      "accent": "#e879f9",
                      "neutral": "#e879f9",
                      "base-100": "#1f2937",       
                      "info": "#a78bfa",
                      "success": "#a78bfa",
                      "warning": "#6d28d9",
                      "error": "#6d28d9",
                               },

      },
    ],
  },
};
export default config;
