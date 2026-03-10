import { ChartNoAxesCombined, ClipboardClock, EarthLock,Link, Landmark, Mic, Sparkles, Target, CheckCircle2, TrendingUp, BellRing, Wallet, Shield, Lock, KeyRound, ShieldCheck, Flame, Award, Medal } from "lucide-react";

export const navLinks = [
    { name: "Features", link: "/features" },
    { name: "How It Works", link: "/how" },
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
// voice to transaction data
export const voiceToTransaction = {
  mainIcon : Mic,
  mainTitle : "Voice-to-Transaction",
  mainDescription : "Stop manual typing. Our integration with the Web Speech API parses natural language with 99% accuracy. Just speak, and SmartExpense handles the rest.", 
  feature : [
    {
    icon : CheckCircle2,
    title : "Natural Language Parsing",
    description : "Automatically detects amounts, categories, and vendors from your speech."
  },
   {
    icon : CheckCircle2,
    title : "Instant Categorization",
    description : "Identifies keywords like 'petrol', 'coffee', or 'rent' to sort expenses immediately."
  },
   {
    icon : CheckCircle2,
    title : "Hands-Free Logging",
    description : "Perfect for logging expenses while driving or on the move."
  },
]
}
// powered by AI insights data
export const poweredByAiInsights = [
  {
    icon : Sparkles,
    title : "Smart Categorization",
    description : "AI learns from your spending habits to automatically assign transactions to the right buckets with increasing precision over time.",
  },
   {
    icon : TrendingUp,
    title : "Monthly Predictions",
    description : "Know where you'll stand at the end of the month. Our predictive model forecasts your balance based on recurring bills and average spending.",
  },
   {
    icon : BellRing,
    title : "Overspending Alerts",
    description : "Get proactive notifications when you're trending toward exceeding your budget in specific categories before it's too late.",
  }
]
// Financial Dashboard Card right data
export const financialCards = [
  {
    title: "TOTAL BALANCE",
    amount: "Rs. 245,000",
    color: "text-white"
  },
  {
    title: "CREDIT USED",
    amount: "Rs. 12,450",
    color: "text-orange-500"
  },
  {
    title: "JAZZCASH",
    amount: "Rs. 4,200",
    color: "text-white"
  },
  {
    title: "SAVINGS",
    amount: "Rs. 89,000",
    color: "text-green-400"
  }
];
// Financial Dashboard content left data
export const financialContent = [
  {
    icon : Landmark,
    title: "12+ Major Banks",
    description : "Secure API connection with instant syncing.",
  },
  {
    icon : Wallet,
    title: "Digital Wallets",
    description : "Integrated support for JazzCash and Easypaisa.",
  }
]
// Security Section data

export const securitySection = [
  {
    icon : Shield,
    title : "Security is Our First Priority",
    description : "We use the same security standards as global banks to ensure your data stays private and protected."
  }
]
//Security Section card data
export const securityCard = [
  {
    icon : Lock,
    title : "Bank-Grade Encryption",
    description : "AES-256 bit encryption for all data.", 
  },
   {
    icon : KeyRound,
    title : "2FA Securit",
    description : "Optional biometric & SMS authentication.", 
  },
   {
    icon : ShieldCheck,
    title : "Data Privacy",
    description : "We never sell your data to third parties.", 
  }
]
// Progress feature data 

export const progressFeatures = {
  mainTitle : "Build Habits, Not Just Budgets.",
  mainDescription : "Gamified saving makes financial discipline fun. Track your streaks, earn badges, and level up your financial health.",
  features :[
    {
      icon :Flame,
      title : "Saving Streaks",
      description : "Stay within budget for 7 consecutive days to build a streak and earn bonus points."
    },
      {
      icon :Award,
      title : "Achievement Badges",
      description : "Unlock 'Rainy Day Hero' or 'Debt Crusher' badges as you reach your financial milestones."
    }
  ]
}
// progress card data
export const progressCard = {
    icon : Medal,
    lockIcon :Lock, 
    title : "Your Progress",
    level: "Lvl 12",
    day: "15",
    streak : "Day Streak"
  }
  // call to action data

export const callToAction = [
  {
    title: "Ready to take control?",
    description : "Join 50,000+ users who have optimized their finances with the world's most advanced expense tracker."
  }
]
// how its works saction
// hero section data
export const heroSection = {
  icon : Sparkles,
  description : "The AI-Driven Financial Workflow",
  features: [{
    title : "Smart Money",
    span : "Simplified.",
    description : "Experience the future of personal finance with our AI-driven workflow that turns natural speech into actionable financial insights. No more tedious manual entries."
  }]
}



