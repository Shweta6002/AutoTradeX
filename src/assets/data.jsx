import { ChevronsDown, Brain, Columns3Cog, Globe } from "lucide-react";

const features = [
  {
    title: "Low Latency",
    description:
      "Delivers lightning-fast market data and order execution with minimal delay, ensuring real-time responsiveness.",
    icon: <ChevronsDown className="w-9 h-9" />,
    image: "/fit1.svg",
    isActive: true,
  },
  {
    title: "Highly Customisable Alerts",
    description:
      "Set precise alerts for price, volume, indicators, or custom conditions tailored exactly to your trading style.",
    icon: <Columns3Cog className="w-6 h-6" />,
    image: "/fit2.svg",
    isActive: false,
  },
  {
    title: "Custom Strategy Builder with Combo Alerts",
    description:
      "Create your own trading strategies and trigger multi-condition combo alerts without writing any code.",
    icon: <Brain className="w-6 h-6" />,
    image: "/fit3.svg",
    isActive: false,
  },
  {
    title: "Wide Range of Integrations",
    description:
      "Connect seamlessly with major brokers, charting tools, and third-party platforms for a unified workflow.",
    icon: <Globe className="w-6 h-6" />,
    image: "/fit4.svg",
    isActive: false,
  },
];

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Stock Market Analyst",
    image: "/av2.svg",
    content:
      "The real-time market insights and advanced trading tools have boosted my intraday performance tremendously. The platform’s security features are truly world-class.",
  },
  {
    name: "Aisha Verma",
    role: "Crypto Portfolio Manager",
    image: null,
    content:
      "ForexTrade’s automated trading capabilities and API integration have streamlined our operations. Perfect for Indian investors looking for serious growth.",
  },
  {
    name: "Kabir Singh",
    role: "Early Crypto Investor",
    image: "/av1.png",
    content:
      "Exceptional customer support and a very clean interface. Getting started with crypto felt smooth and beginner-friendly. Highly recommended for Indian traders.",
  },
  {
    name: "Neha Iyer",
    role: "Blockchain Developer",
    image: "/av4.png",
    content:
      "Our trading workflows improved drastically after switching to ForexTrade. Smart order routing and liquidity aggregation are extremely efficient.",
  },
  {
    name: "Arjun Patel",
    role: "Cybersecurity Consultant",
    image: "/av3.png",
    content:
      "The platform’s security standards are solid and updated regularly. With rising cyber threats in India, this level of protection is absolutely essential.",
  },
  {
    name: "Priya Sharma",
    role: "Investment Portfolio Manager",
    image: "/av2.png",
    content:
      "Managing diversified portfolios has become effortless. The platform handles complex trading strategies while staying simple and intuitive to use.",
  },
];


const footerLinks = [
  {
    _id: "001",
    title: "Trading",
    links: ["Markets", "Trading Fees"],
  },
  {
    _id: "002",
    title: "Resources",
    links: ["Trading Guide", "Market Analysis"],
  },
  {
    _id: "003",
    title: "Legal",
    links: ["Privacy Policy", "Terms of Services"],
  },
];

const pricingData = [
  {
    _id: "p1",
    isPopular: false,
    name: "Basic",
    description: "Perfect for beginners starting their trading journey.",
    price: "₹0",
    features: [
      "Auto Trade Execution",
      "% trades per day",
      "10 total alerts limit",
      "Combo alerts",
    ],
  },
  {
    _id: "p2",
    isPopular: true,
    name: "Pro",
    description: "Ideal for active traders who need advanced tools.",
    price: "₹499",
    features: [
      "Auto Trade Execution",
      "50 trades per day",
      "100 total alerts limit",
      "Combo alerts",
      "Paper Trading",
    ],
  },
  {
    _id: "p3",
    isPopular: false,
    name: "Plus",
    description: "For institutions and high-frequency trade professionals.",
    price: "₹799",
    features: [
      "Auto Trade Execution",
      "500 trades per day",
      "250 total alerts limit",
      "Combo Alerts",
      "Paper Trading",
    ],
  },
];

export { footerLinks, testimonials, features , pricingData};
