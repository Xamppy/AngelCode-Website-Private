import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from design-01.json
        purple: {
          primary: "#8B5CF6",
          hover: "#7C3AED",
          light: "#A78BFA",
          dark: "#6D28D9",
        },
        // Neutral colors
        neutral: {
          black: "#0A0A0A",
          "gray-dark": "#1A1A1A",
          "gray-medium": "#2A2A2A",
          "gray-light": "#404040",
          white: "#FFFFFF",
          "gray-text": "#A0A0A0",
        },
        // Text colors
        text: {
          primary: "#FFFFFF",
          secondary: "#A78BFA",
          subtitle: "#A0A0A0",
          body: "#CCCCCC",
          accent: "#8B5CF6",
          price: "#8B5CF6",
          metric: "#8B5CF6",
        },
        // Navigation colors
        nav: {
          normal: "#CCCCCC",
          hover: "#8B5CF6",
          active: "#A78BFA",
        },
        // Card colors
        card: {
          background: "#1A1A1A",
          "background-hover": "#2A2A2A",
          border: "rgba(139, 92, 246, 0.2)",
          "border-hover": "rgba(139, 92, 246, 0.4)",
        },
        // Button colors
        button: {
          primary: "#8B5CF6",
          "primary-hover": "#7C3AED",
          "primary-text": "#FFFFFF",
          secondary: "transparent",
          "secondary-hover": "rgba(139, 92, 246, 0.1)",
          "secondary-text": "#8B5CF6",
          contact: "rgba(139, 92, 246, 0.1)",
          "contact-hover": "rgba(139, 92, 246, 0.2)",
          "contact-text": "#8B5CF6",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
      fontSize: {
        // Typography scale from design-01.json
        "hero-title": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "hero-title-mobile": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "section-title": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "section-title-mobile": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "card-title": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "metric-number": ["3rem", { lineHeight: "1", fontWeight: "700" }],
        "metric-number-mobile": ["2rem", { lineHeight: "1", fontWeight: "700" }],
        "body-large": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-normal": ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label": ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
        "code": ["0.9rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        // Spacing system from design-01.json
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "80px",
        "5xl": "96px",
      },
      borderRadius: {
        // Border radius from design-01.json
        "small": "8px",
        "medium": "12px",
        "large": "16px",
        "full": "50%",
      },
      boxShadow: {
        // Shadows from design-01.json
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 32px rgba(139, 92, 246, 0.2)",
        "button-primary": "0 4px 16px rgba(139, 92, 246, 0.3)",
        "button-hover": "0 6px 20px rgba(139, 92, 246, 0.4)",
        "tech-card": "0 2px 12px rgba(0, 0, 0, 0.3)",
      },
      transitionDuration: {
        // Transitions from design-01.json
        "fast": "200ms",
        "normal": "300ms",
        "slow": "500ms",
      },
      screens: {
        // Responsive breakpoints from design-01.json
        "mobile": "768px",
        "tablet": "1024px",
        "desktop": "1200px",
      },
      maxWidth: {
        // Container max width
        "container": "1200px",
      },
      gap: {
        // Grid gaps
        "cards": "32px",
        "technologies": "24px",
      },
      gridTemplateColumns: {
        // Grid columns from design-01.json
        "services": "repeat(auto-fit, minmax(300px, 1fr))",
        "technologies": "repeat(auto-fit, minmax(200px, 1fr))",
        "metrics": "repeat(3, 1fr)",
        "metrics-mobile": "repeat(1, 1fr)",
      },
      backgroundImage: {
        // Hero background gradients
        "hero-gradient": "linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(26,26,26,0.8) 100%)",
        "hero-overlay": "linear-gradient(45deg, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.08) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
