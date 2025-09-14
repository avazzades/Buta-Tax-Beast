// Mock data for tax and accounting business landing page

export const services = [
  {
    id: 1,
    title: "Individual Tax Filing",
    description: "Complete tax preparation and filing services for individuals and families with expert guidance.",
    icon: "FileText",
    price: "Starting at $149",
    features: ["Federal & State Returns", "Tax Optimization", "Audit Support", "Year-round Consultation"]
  },
  {
    id: 2,
    title: "Business Tax Services",
    description: "Comprehensive tax solutions for small to medium businesses including quarterly filings and planning.",
    icon: "Building2",
    price: "Starting at $299",
    features: ["Quarterly Returns", "Business Deductions", "Payroll Tax", "Strategic Planning"]
  },
  {
    id: 3,
    title: "Corporate Accounting",
    description: "Full-service accounting and financial management for corporations and large enterprises.",
    icon: "TrendingUp",
    price: "Custom Pricing",
    features: ["Financial Statements", "Cash Flow Management", "Compliance Reporting", "CFO Services"]
  },
  {
    id: 4,
    title: "Bookkeeping Services",
    description: "Professional bookkeeping to keep your financial records accurate and up-to-date.",
    icon: "Calculator",
    price: "Starting at $199/month",
    features: ["Monthly Reconciliation", "Expense Tracking", "Invoice Management", "Financial Reports"]
  },
  {
    id: 5,
    title: "Tax Planning & Strategy",
    description: "Proactive tax planning to minimize liability and maximize savings throughout the year.",
    icon: "Target",
    price: "Starting at $399",
    features: ["Strategic Planning", "Tax Minimization", "Investment Advice", "Retirement Planning"]
  },
  {
    id: 6,
    title: "Audit & Compliance",
    description: "Expert audit support and compliance services to ensure regulatory adherence.",
    icon: "Shield",
    price: "Custom Pricing",
    features: ["Audit Representation", "Compliance Review", "Risk Assessment", "Documentation Support"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    company: "Johnson's Bakery",
    content: "TaxPro helped me save over $5,000 in taxes last year through their strategic planning. Their team is incredibly knowledgeable and responsive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Startup Founder",
    company: "InnovateTech",
    content: "From startup formation to complex tax situations, they've been our trusted partners. Professional, reliable, and always available when we need them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Corporate CFO",
    company: "GreenTech Solutions",
    content: "Their corporate accounting services transformed our financial operations. The monthly reports and strategic insights have been invaluable for our growth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const caseStudies = [
  {
    id: 1,
    title: "Restaurant Chain Tax Optimization",
    client: "Metro Dining Group",
    challenge: "Complex multi-state tax compliance and optimization for 15 restaurant locations",
    solution: "Implemented strategic tax planning and streamlined compliance processes",
    result: "Reduced tax liability by 28% and eliminated compliance penalties",
    savings: "$450,000"
  },
  {
    id: 2,
    title: "Startup Growth Support",
    client: "TechStart Inc.",
    challenge: "Rapid growth requiring scalable accounting systems and tax strategy",
    solution: "Developed comprehensive financial infrastructure and growth-focused tax planning",
    result: "Successful Series A funding with clean financials and tax-efficient structure",
    savings: "$200,000"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "David Thompson",
    role: "Managing Partner & CPA",
    experience: "15+ years",
    specialties: ["Corporate Tax", "Strategic Planning", "Audit Defense"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Lisa Martinez",
    role: "Senior Tax Advisor",
    experience: "12+ years",
    specialties: ["Individual Tax", "Small Business", "IRS Representation"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Robert Kim",
    role: "Accounting Director",
    experience: "10+ years",
    specialties: ["Bookkeeping", "Financial Reporting", "Compliance"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Individual",
    price: "$149",
    period: "per return",
    description: "Perfect for individuals and families",
    features: [
      "Federal & State Tax Return",
      "Basic Tax Optimization",
      "E-filing Included",
      "Email Support",
      "Audit Insurance"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Small Business",
    price: "$299",
    period: "per month",
    description: "Ideal for small businesses and startups",
    features: [
      "Monthly Bookkeeping",
      "Quarterly Tax Returns",
      "Business Consultation",
      "Financial Reports",
      "Phone & Email Support",
      "Tax Planning Session"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Comprehensive solutions for large businesses",
    features: [
      "Full Accounting Services",
      "Dedicated Account Manager",
      "Strategic Tax Planning",
      "Compliance Management",
      "24/7 Priority Support",
      "Custom Financial Solutions"
    ],
    popular: false
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "2024 Tax Changes Every Business Owner Should Know",
    excerpt: "Stay ahead of the curve with the latest tax law changes that could impact your business this year.",
    author: "David Thompson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Tax Updates"
  },
  {
    id: 2,
    title: "Maximizing Deductions for Remote Workers",
    excerpt: "Learn about the home office deduction and other tax benefits available to remote employees.",
    author: "Lisa Martinez", 
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Individual Tax"
  },
  {
    id: 3,
    title: "Cash Flow Management Best Practices",
    excerpt: "Essential strategies to maintain healthy cash flow and improve your business's financial stability.",
    author: "Robert Kim",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Accounting"
  }
];

export const faqs = [
  {
    id: 1,
    question: "What documents do I need for tax preparation?",
    answer: "You'll need W-2s, 1099s, receipts for deductions, prior year tax returns, and any relevant financial statements. We'll provide you with a comprehensive checklist based on your specific situation."
  },
  {
    id: 2,
    question: "How much can you save me on taxes?",
    answer: "Savings vary based on individual circumstances, but our clients typically save 15-30% on their tax liability through strategic planning and optimization. We guarantee to find every deduction you're entitled to."
  },
  {
    id: 3,
    question: "Do you offer year-round support?",
    answer: "Yes! Unlike seasonal tax preparers, we provide year-round support for all our clients. This includes tax planning, quarterly check-ins, and immediate assistance with any tax-related questions."
  },
  {
    id: 4,
    question: "What if I get audited?",
    answer: "All our clients receive audit protection. If you're selected for an audit, we'll represent you throughout the entire process at no additional cost, provided we prepared your return."
  },
  {
    id: 5,
    question: "How quickly can you complete my tax return?",
    answer: "Most individual returns are completed within 3-5 business days. Business returns typically take 5-7 business days. Rush services are available for urgent situations."
  }
];