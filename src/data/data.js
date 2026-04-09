import { ChartNoAxesCombined, ClipboardClock, EarthLock, Link, Landmark, Mic, Sparkles, Target, CheckCircle2, TrendingUp, BellRing, Wallet, Shield, Lock, KeyRound, ShieldCheck, Flame, Award, Medal, Braces, Network, GitBranch, Banknote, CreditCard, icons, Cloud, BrainCircuit, Database, Subtitles, AlertTriangle, PiggyBank, Trophy, BriefcaseBusiness, Play, LayoutDashboard, ArrowLeftRight, BarChart3, Settings, Search, Bell, TrendingDown, ShoppingBag, Utensils, Wallet2, Wallet2Icon, Receipt, Calendar, RefreshCcw, Download, Plus, Coffee, Car, Monitor, Eye, Pencil, Trash2, ShoppingCart, Home, Lightbulb } from "lucide-react";

export const navLinks = [
  { name: "Features", link: "/features" },
  { name: "How It Works", link: "/howitwork" },
  { name: "Pricing", link: "/pricing" },
  { name: "AI Insights", link: "/aiinsights" },
];
// AI Insights data
export const aiAinsights = [
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
  mainIcon: Mic,
  mainTitle: "Voice-to-Transaction",
  mainDescription: "Stop manual typing. Our integration with the Web Speech API parses natural language with 99% accuracy. Just speak, and SmartExpense handles the rest.",
  feature: [
    {
      icon: CheckCircle2,
      title: "Natural Language Parsing",
      description: "Automatically detects amounts, categories, and vendors from your speech."
    },
    {
      icon: CheckCircle2,
      title: "Instant Categorization",
      description: "Identifies keywords like 'petrol', 'coffee', or 'rent' to sort expenses immediately."
    },
    {
      icon: CheckCircle2,
      title: "Hands-Free Logging",
      description: "Perfect for logging expenses while driving or on the move."
    },
  ]
}
// powered by AI insights data
export const poweredByAiInsights = [
  {
    icon: Sparkles,
    title: "Smart Categorization",
    description: "AI learns from your spending habits to automatically assign transactions to the right buckets with increasing precision over time.",
  },
  {
    icon: TrendingUp,
    title: "Monthly Predictions",
    description: "Know where you'll stand at the end of the month. Our predictive model forecasts your balance based on recurring bills and average spending.",
  },
  {
    icon: BellRing,
    title: "Overspending Alerts",
    description: "Get proactive notifications when you're trending toward exceeding your budget in specific categories before it's too late.",
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
    icon: Landmark,
    title: "12+ Major Banks",
    description: "Secure API connection with instant syncing.",
  },
  {
    icon: Wallet,
    title: "Digital Wallets",
    description: "Integrated support for JazzCash and Easypaisa.",
  }
]
// Security Section data

export const securitySection = [
  {
    icon: Shield,
    title: "Security is Our First Priority",
    description: "We use the same security standards as global banks to ensure your data stays private and protected."
  }
]
//Security Section card data
export const securityCard = [
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description: "AES-256 bit encryption for all data.",
  },
  {
    icon: KeyRound,
    title: "2FA Securit",
    description: "Optional biometric & SMS authentication.",
  },
  {
    icon: ShieldCheck,
    title: "Data Privacy",
    description: "We never sell your data to third parties.",
  }
]
// Progress feature data 

export const progressFeatures = {
  mainTitle: "Build Habits, Not Just Budgets.",
  mainDescription: "Gamified saving makes financial discipline fun. Track your streaks, earn badges, and level up your financial health.",
  features: [
    {
      icon: Flame,
      title: "Saving Streaks",
      description: "Stay within budget for 7 consecutive days to build a streak and earn bonus points."
    },
    {
      icon: Award,
      title: "Achievement Badges",
      description: "Unlock 'Rainy Day Hero' or 'Debt Crusher' badges as you reach your financial milestones."
    }
  ]
}
// progress card data
export const progressCard = {
  icon: Medal,
  lockIcon: Lock,
  title: "Your Progress",
  level: "Lvl 12",
  day: "15",
  streak: "Day Streak"
}
// call to action data

export const callToAction = [
  {
    title: "Ready to take control?",
    description: "Join 50,000+ users who have optimized their finances with the world's most advanced expense tracker."
  }
]
// how its works saction
// hero section data
export const heroSection = {
  icon: Sparkles,
  description: "The AI-Driven Financial Workflow",
  features: [{
    title: "Smart Money",
    span: "Simplified.",
    description: "Experience the future of personal finance with our AI-driven workflow that turns natural speech into actionable financial insights. No more tedious manual entries."
  }]
}
export const voiceExpenseSection = {
  micIcon: Mic,
  mainDescription: "I just spent $55.00 on a sushi dinner with friends at Nobu.",
  features: [{
    icon: CheckCircle2,
    count: "01",
    title: "Talk to Your Wallet",
    description: "Leveraging the Web Speech API and Natural Language Parsing (NLP), SmartExpense understands you like a human assistant. Just speak naturally.",
    subDescription1: "Hands-free voice recognition for on-the-go logging.",
    subDescription2: "Multi-language support for global tracking."
  }]
}
// AIProcessingSection
export const aiProcessingSection = {
  count: "02",
  mainDescription: "Behind the Scenes: AI Processing.",
  features: [
    {
      icon: Braces,
      title: "Entity Extraction",
      description: "Our LLM identifies the merchant (Nobu), the amount ($55.00), and the context (Dinner)."
    },
    {
      icon: Network,
      title: "Auto-Categorization",
      description: `Instantly maps "Sushi Dinner" to your Dining & Drinks budget category with 99% accuracy.`
    },
    {
      icon: GitBranch,
      title: "Logic Routing",
      description: "Determines which payment method was likely used and flags it for confirmation or auto-approval."
    }
  ]
}
export const multiAccountSyncSection = {
  count: "03",
  title: "Multi-Account Syncing",
  description: "SmartExpense securely connects to over 10,000 financial institutions worldwide. Whether it's traditional bank accounts or digital wallets like Apple Pay and PayPal, we keep everything in sync.",
  icons: [Banknote, CreditCard, Landmark, Wallet]
}

export const multiAccountSyncSectionCard = [
  {
    title: "Security Level",
    lockIcon: Lock,
    shiledIcon: Shield,
    description1: "AES-256 Bank-Level Encryption",
    description2: "SOC2 Type II Compliant Infrastructure"
  }
]
export const gamificationSection = {
  count: "04",
  title: "Insights & Gamification",
  description: "Finance doesn't have to be boring. SmartExpense turns your savings goals into a journey with rewards, streaks, and milestone badges.",
  features: [
    {
      icon: Award,
      title: "Badges",
      description: "Earn rewards for meeting goals."
    },
    {
      icon: TrendingUp,
      title: "Streaks",
      description: "Stay consistent to win big."
    },
  ]
}
export const techStackSection = {
  title: "Built with Modern Tech",
  icons: [
    {
      icon: Cloud,
      title: "mern stack"
    },
    {
      icon: BrainCircuit,
      title: "openai api"
    },
    {
      icon: Mic,
      title: "web speech api"
    },
    {
      icon: Database,
      title: "mongodb"
    },
  ]
}
export const catSection = {
  title: "Ready to master your financial future?",
  button1: "Start Your Joureny",
  button2: "Talk to Sales"
}
//Pricing section data
export const pricingHero = [
  {
    title: "Choose the Plan That Fits Your Financial Goals",
    description: "Flexible pricing for teams and individuals of all sizes. Save 20% with annual billing."
  }
]
// pricing card data 
export const pricingCard = [
  {
    title: "Free",
    price: 0,
    description: "Perfect for individuals starting their journey.",
    buttonText: "Start for Free",
    features: [
      "Basic transaction tracking",
      "Up to 50 transactions /mo",
      "1 Linked account",
      "Email support",
    ],
  },
  {
    title: "Pro",
    price: 29,
    description: "Advanced tools for serious financial management.",
    buttonText: "Get Started",
    features: [
      "AI-powered categorization",
      "Unlimited transactions",
      "Up to 10 Linked accounts",
      "Voice-activated logging",
      "Priority 24/7 support",
    ],
  },
  {
    title: "Enterprise",
    price: 99,
    description: "Ultimate power for complex business needs.",
    buttonText: "Contact Sales",
    features: [
      "Custom AI models",
      "Unlimited everything",
      "Dedicated Success Manager",
      "SSO & Enterprise Security",
      "White-label reporting",
    ],
  },
]
// pricing FAQ data

export const pricingFAQSection = {
  mainTitle: "Frequently Asked Questions",
  features: [
    {
      title: "How secure is my financial data?",
      description: "We use bank-level AES-256 encryption for all data at rest and TLS for data in transit. Your security is our highest priority."
    },
    {
      title: "Can I cancel my subscription at any time?",
      description: "Yes, you can cancel your subscription from your account settings at any time. You'll retain access until the end of your billing cycle."
    },
    {
      title: "Does the AI feature store my personal habits?",
      description: "Our AI categorization is designed for processing, not profiling. We do not sell your data to third parties."
    },
    {
      title: "What happens if I exceed my transaction limit?",
      description: "We'll notify you when you reach 90% of your limit. You can easily upgrade to the Pro plan for unlimited tracking."
    },
  ]
}
export const ctaSction = [
  {
    title: "Ready to take control of your spending?",
    subtitle: "Join over 50,000 users managing their finances with AI-powered insights.",
    buttons: [
      {
        text: "Start 14-Day Free Trial",
        primary: true,
      },
      {
        text: "Schedule a Demo",
        primary: false,
      }
    ]
  }
]
//AI Insights section data 

export const aiInsightsSection = {
  mainTitle: "AI Smart Insights",
  subtitle: "Data-driven financial forecasting and personalized tips",

  chartData: [
    { month: "Jan", expenses: 300 },
    { month: "Feb", expenses: 500 },
    { month: "Mar", expenses: 450 },
    { month: "Apr", expenses: 200 },
    { month: "May", expenses: 650 },
    { month: "Jun", expenses: 400 },
  ],

  insightsCard: {
    tag: "FORECAST",
    title: "Monthly Spending Prediction",
    description:
      "Based on your current habits, you are projected to spend $3,450 this month.",

    amount: "$3,450",

    breakdown: [
      { label: "Fixed", percentage: 60, color: "orange" },
      { label: "Variable", percentage: 30, color: "dark-orange" },
      { label: "Savings", percentage: 10, color: "gray" },
    ],

    buttonText: "View Detailed Analysis",
  },
};
// recent insights data card
export const recentInsightsCardData = {
  mainTitle: "Recent Insights",
  features: [
    {
      title: "Overspending Alert",
      description: "Food & Dining is 15% higher than your 3-month average.",
      icon: AlertTriangle,
    },
    {
      title: "Saving Opportunity",
      description: "Cancel unused Netflix subscription.",
      icon: PiggyBank,
    },
    {
      title: "Budget Master Progress",
      description: "Only 2 more days...",
      icon: Trophy,
    }
  ]
};
export const financialAssistantData = {
  mainIcon: BriefcaseBusiness,
  title: "Financial AI Assistant",
  subtitle: "Ask me anything about your finances",
  subIcon: Play,
  messages: [
    {
      type: "bot",
      text: "Hello! I can help you analyze your spending, find savings, or plan for a big purchase. What's on your mind today?"
    },
    {
      type: "user",
      text: "Can I afford a $2,000 vacation next month?"
    },
  ],
  suggestions: [
    "Top spending categories",
    "How to save more?",
    "Analyze my utilities"
  ]
};
// sidebar dashboard data
export const sidebarData = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    active: true,
  },
  {
    title: "Transactions",
    icon: ArrowLeftRight,
    path: "/dashboard/transactions",
  },
  {
    title: "Budget",
    icon: Wallet,
    path: "/dashboard/budget",
  },
  {
    title: "Accounts",
    icon: Landmark,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
  {
    title: "AI Insights",
    icon: Sparkles,
  },
];

export const bottomMenu = [
  {
    title: "Settings",
    icon: Settings,
  },
];
// dashboard navbar data
export const dashboardNavbarData = {

  search: {
    placeholder: "Search transactions, bills...",
    icon: Search,
  },
  actions: [
    {
      type: "notification",
      icon: Bell,
      count: 2,
    },
  ],
  user: {
    name: "Alex Rivers",
    plan: "Premium Plan",
    avatar: "https://i.pravatar.cc/40",
  },
};
// main dashboard data
export const statsData = [
  {
    title: "Total Balance",
    amount: "$12,450.00",
    change: "+2.4%",
    icon: Wallet,
    color: "orange",
  },
  {
    title: "Monthly Income",
    amount: "$5,200.00",
    change: "+8.1%",
    icon: TrendingUp,
    color: "green",
  },
  {
    title: "Monthly Expense",
    amount: "$3,120.00",
    change: "-5.1%",
    icon: TrendingDown,
    color: "red",
  },
  {
    title: "Savings Progress",
    amount: "65%",
    change: "Target",
    icon: Target,
    color: "orange",
  },
];
// financial analytics data
export const analyticsData = {
  monthlyTrend: [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 400 },
    { month: "Mar", value: 500 },
    { month: "Apr", value: 350 },
    { month: "May", value: 800 },
    { month: "Jun", value: 600 },
  ],

  categorySpending: [
    { name: "Housing", value: 45, color: "orange" },
    { name: "Food & Dining", value: 25, color: "green" },
    { name: "Others", value: 30, color: "gray" },
  ],

  totalSpent: "$3,120",
};
// recent transactions data
export const recentTransactionsData = {
  title: "Recent Transactions",
  buttonText: "View All",
  transactions: [
    {
      icon: ShoppingBag,
      name: "Apple Store",
      description: "MacBook Pro M3",
      category: "Electronics",
      date: "Oct 24, 2023",
      amount: "-$2,499.00",
      status: "Completed",
      amountColor: "text-red-500",
      statusColor: "text-green-500",
    },

    {
      icon: Utensils,
      name: "The Greenhouse",
      description: "Business Lunch",
      category: "Food",
      date: "Oct 23, 2023",
      amount: "-$124.50",
      status: "Pending",
      amountColor: "text-red-400",
      statusColor: "text-orange-400",
    },

    {
      icon: Wallet2,
      name: "Acme Corp",
      description: "Monthly Salary",
      category: "Income",
      date: "Oct 20, 2023",
      amount: "+$5,200.00",
      status: "Completed",
      amountColor: "text-green-500",
      statusColor: "text-green-500",
    },
  ],
};
// transactions overview data
export const transactionsOverviewData = {
  title: "Transactions",
  subtitle: "Manage and track your expense history",
  stats: [
    {
      title: "Total Transactions",
      value: 1284,
      growth: "+5.2%",
      icon: Receipt
    },
    {
      title: "Monthly Total",
      value: "$4,250.00",
      growth: "+12.4%",
      icon: Calendar
    },
    {
      title: "Recent Activity",
      value: "12 Today",
      growth: "-2.1%",
      icon: RefreshCcw
    }
  ],

  actions: [
    {
      text: "Export CSV",
      icon: Download,
      variant: "outline",
      action: () => console.log("Export CSV")
    },
    {
      text: "Add Transaction",
      icon: Plus,
      variant: "primary",
      action: () => console.log("Add Transaction")
    }
  ]
};
// transaction table data 
export const transactionHistoryData = {
  filters: {
    categories: [
      "All Categories",
      "Food & Dining",
      "Transportation",
      "Income",
      "Software SaaS"
    ],
    accounts: [
      "All Accounts",
      "Visa **** 4242",
      "Chase Business",
      "Amex Platinum"
    ],
    dateRanges: [
      "Last 7 Days",
      "Last 30 Days",
      "Last 3 Months"
    ]
  },

  transactions: [
    {
      id: 1,
      date: "Oct 24, 2023",
      merchant: "Starbucks Coffee",
      icon: Coffee,
      category: "Food & Dining",
      account: "Visa **** 4242",
      amount: "-$12.50",
      status: "Completed",
      actions: [Eye, Pencil, Trash2]
    },
    {
      id: 2,
      date: "Oct 23, 2023",
      merchant: "Uber Technologies",
      icon: Car,
      category: "Transportation",
      account: "Visa **** 4242",
      amount: "-$24.80",
      status: "Completed",
      actions: [Eye, Pencil, Trash2]
    },
    {
      id: 3,
      date: "Oct 22, 2023",
      merchant: "Client Payment - Acme Corp",
      icon: Wallet,
      category: "Income",
      account: "Chase Business",
      amount: "+$2,450.00",
      status: "Pending",
      actions: [Eye, Pencil, Trash2]
    },
    {
      id: 4,
      date: "Oct 22, 2023",
      merchant: "Adobe Creative Cloud",
      icon: Monitor,
      category: "Software SaaS",
      account: "Amex Platinum",
      amount: "-$52.99",
      status: "Completed",
      actions: [Eye, Pencil, Trash2]
    }
  ],
  pagination: {
    currentPage: 1,
    totalPages: 3
  }
};
// budget overview data
export const budgetCardData = {
  title: "Budget Management",
  subtitle: "Plan your future with AI-driven predictive insights.",

  headerActions: {
    period: {
      label: "Monthly (Oct)",
      icon: Calendar,
    },
    button: {
      text: "Set New Budget",
      icon: Plus,
    },
  },

  cards: [
    {
      title: "Total Monthly Budget",
      value: "$5,000",
      icon: Wallet,
      change: "+0% from last month",
      changeColor: "text-green-500",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Total Spent",
      value: "$3,200",
      icon: ShoppingCart,
      change: "64% of total",
      changeColor: "text-gray-400",
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Remaining Balance",
      value: "$1,800",
      icon: PiggyBank,
      change: "36% left",
      changeColor: "text-orange-500",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
  ],
};
// budget insights section data
export const budgetInsightsData = {
  title: "Category-Wise Budgets",
  actionText: "View All Categories",

  categories: [
    {
      name: "Food & Dining",
      icon: Utensils,
      spent: 800,
      total: 1000,
      percent: 80,
      status: "Warning",
      statusColor: "bg-orange-100 text-orange-600",
      barColor: "bg-orange-500",
    },
    {
      name: "Transportation",
      icon: Car,
      spent: 200,
      total: 500,
      percent: 40,
      status: "On Track",
      statusColor: "bg-green-100 text-green-600",
      barColor: "bg-blue-500",
    },
    {
      name: "Shopping",
      icon: ShoppingBag,
      spent: 1100,
      total: 1000,
      percent: 110,
      status: "Over Budget",
      statusColor: "bg-red-100 text-red-600",
      barColor: "bg-red-500",
    },
    {
      name: "Housing",
      icon: Home,
      spent: 1500,
      total: 1500,
      percent: 100,
      status: "Settled",
      statusColor: "bg-gray-200 text-gray-600",
      barColor: "bg-gray-400",
    },
  ],

  insights: [
    {
      text: "You've used 85% of your Dining budget. Likely to exceed by $150.",
    },
    {
      text: "You're 20% under budget in Transportation. Great job!",
    },
    {
      text: "AI suggests moving $100 from Utilities to Shopping.",
    },
  ],

  buttonText: "Optimize My Budget",

  bills: [
    {
      name: "Netflix",
      date: "Oct 24, 2023",
      amount: "$15.99",
      icon: Calendar,
      color: "bg-red-100 text-red-500",
    },
    {
      name: "Electricity Bill",
      date: "Oct 26, 2023",
      amount: "$84.50",
      icon: Lightbulb,
      color: "bg-green-100 text-green-600",
    },
  ],
};