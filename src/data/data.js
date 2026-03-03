import { ChartNoAxesCombined, ClipboardClock, EarthLock,Link, Landmark, Mic, Sparkles, Target } from "lucide-react";

export const navLinks = [
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "#how" },
    { name: "Pricing", link: "#pricing" },
    { name: "AI Insights", link: "#ai" },
  ];
  // AI Insights data
  export  const aiAinsights = [
     {
      icon: Mic,
      title: "Voice Expense Entry",
      description:
        "Just say 'I spent $15 on coffee' and let our NLP engine categorize it instantly.",
    },
     {
      icon: Target,
      title: "AI Spending Insights",
      description:
        "Get personalized advice on where you can save more each month based on your patterns.",
    },
     {
      icon: ClipboardClock,
      title: "Budget Tracking",
      description:
        "Set dynamic limits and receive smart alerts before you even get close to overspending.",
    },
     {
      icon: Landmark,
      title: "Multi-Account Support",
      description:
        "Securely sync all your banks, credit cards, and crypto wallets in one unified dashboard.",
    },
     {
      icon: ChartNoAxesCombined,
      title: "Analytics Dashboard",
      description:
        "Visualize your financial health with beautiful, interactive charts and weekly reports.",
    },
     {
      icon: EarthLock,
      title: "Bank-Grade Security",
      description:
        "Your data is encrypted with AES-256 and protected by multi-factor authentication.",
    }
  ];
  //Financial Freedom data
  export const steps = [
    {
      icon: Link,
      title: "Connect Your Accounts",
      description:
        "Securely sync with 10,000+ financial institutions worldwide in seconds.",
    },
    {
      icon: Mic,
      title: "Speak or Snap",
      description:
        "Log transactions via voice command or simply snap a photo of your receipt.",
    },
    {
      icon: Sparkles,
      title: "Get Smart Insights",
      description:
        "AI analyzes your data to provide actionable tips to save an average of $300/mo.",
    },
  ];
  //Pricing plan data
  export const plans = [
  {
    name: "Basic",
    price: 0,
    popular: false,
    features: [
      { text: "Manual & Voice Entry", included: true },
      { text: "Up to 2 Bank Accounts", included: true },
      { text: "Basic Monthly Reports", included: false },
      { text: "AI Savings Advice", included: false },
    ],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: 9.99,
    popular: true,
    features: [
      { text: "Unlimited Bank Connections", included: true },
      { text: "Advanced AI Savings Coach", included: true },
      { text: "Real-time Alerts & Forecasts", included: true },
      { text: "Custom Export (CSV/PDF)", included: true },
      { text: "Priority 24/7 Support", included: true },
    ],
    buttonText: "Try Pro Free for 14 Days",
  },
];
