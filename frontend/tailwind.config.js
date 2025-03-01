/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
        display: ["'Montserrat'", "sans-serif"],
      },
      backgroundColor: {
        'saladicious': {
          green: '#4CAF50', // Fresh green for brand identity
          'light-green': '#8BC34A', // Light green for accents
          orange: '#FF9800', // Vibrant orange for Indian elements
          yellow: '#FFC107', // Turmeric inspired yellow
          red: '#E91E63', // Vibrant pink/red for spice elements
          purple: '#9C27B0', // Deep purple for royal Indian touch
          teal: '#009688', // Fresh teal for modern appeal
          white: '#FFFFFF', // Clean white background
          cream: '#FFF8E1', // Soft cream for backgrounds
        },
      },
      textColor: {
        'saladicious': {
          green: '#4CAF50',
          'dark-green': '#2E7D32',
          orange: '#FF9800',
          'dark-orange': '#EF6C00',
          black: '#263238', // Deep blue-black for text
          white: '#FFFFFF',
        },
      },
      borderColor: {
        'saladicious': {
          green: '#4CAF50',
          orange: '#FF9800',
          yellow: '#FFC107',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};