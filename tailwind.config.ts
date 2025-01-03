import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      body: {
        overflowX: 'hidden',
    },
      boxShadow: {
        'custom': '0px 1px 0px 0px #E1E3E5',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"], 
        roboto: ["Roboto", "sans-serif"],
        helvetica: ["helvetica", "sans-serif"],
        
      },
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  
    
    }




  },
  plugins: [],
} satisfies Config;
