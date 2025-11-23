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
    name: "Michael Chen",
    role: "Professional Trader",
    image: "/av1.png",
    content:
      "The real-time market data and advanced trading features have significantly improved my trading performance. The platform's security measures give me peace of mind.",
  },
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    image: null,
    content:
      "ForexTrade's institutional-grade tools have transformed our trading strategy. The API integration and automated features have saved us countless hours.",
  },
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    image: "/av2.png",
    content:
      "The customer support is exceptional, and the platform's intuitive design made getting started with crypto trading seamless. A game-changer for both beginners and pros.",
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    image: "/av4.png",
    content:
      "We've seen remarkable improvements in our trading efficiency since switching to ForexTrade. The smart order routing and liquidity aggregation are particularly impressive.",
  },
  {
    name: "James Rodriguez",
    role: "Forex Security Expert",
    image: "/av3.png",
    content:
      "The security features are robust and the regular updates keep us ahead of emerging threats. It's exactly what the Forex industry needed.",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    image: "/av1.png",
    content:
      "The platform's ability to handle complex trading strategies while maintaining simplicity in its interface is remarkable. It's been invaluable for our portfolio management.",
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
    price: "$0",
    features: [
      "Real-time market data",
      "Basic charting tools",
      "Single alert configuration",
      "Community support",
    ],
  },
  {
    _id: "p2",
    isPopular: true,
    name: "Pro",
    description: "Ideal for active traders who need advanced tools.",
    price: "$19",
    features: [
      "Advanced charting tools",
      "Unlimited custom alerts",
      "Strategy builder",
      "Priority email support",
      "API access",
    ],
  },
  {
    _id: "p3",
    isPopular: false,
    name: "Elite",
    description: "For institutions and high-frequency trade professionals.",
    price: "$49",
    features: [
      "Everything in Pro",
      "Ultra-low latency execution",
      "Smart order routing",
      "Unlimited strategy automation",
      "24/7 dedicated support",
    ],
  },
];

export { footerLinks, testimonials, features , pricingData};
