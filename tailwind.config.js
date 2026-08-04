/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#080808",
          900: "#0E0E0E",
          800: "#151515",
          700: "#1C1C1C",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F4C542",
          bright: "#FFD700",
        },
        ivory: {
          DEFAULT: "#FFFFFF",
          soft: "#D9D9D9",
          muted: "#A0A0A0",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Sora'", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F4C542 50%, #FFD700 100%)",
        "radial-fade": "radial-gradient(circle at center, rgba(212,175,55,0.15), transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(212,175,55,0.45)",
        "gold-sm": "0 0 20px -6px rgba(212,175,55,0.4)",
        glass: "0 8px 32px rgba(0,0,0,0.5)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
