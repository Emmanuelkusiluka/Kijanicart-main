import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  HeartHandshake,
  Brain,
  Package
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations on demand, supply, and seasonal trends to stay ahead of the market."
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Track your stock levels in real-time and never run out of your best-selling products."
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Comprehensive sales reports and forecasting to help you maximize revenue and plan growth."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Bank-level security for your data and transactions, ensuring peace of mind for you and your customers."
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Get your agribusiness online in minutes with our intuitive onboarding process."
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Build lasting relationships with powerful CRM tools designed for agribusiness."
  },
  {
    icon: Globe,
    title: "Multi-Channel Sales",
    description: "Reach customers across multiple platforms and grow your market presence."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Our team understands agribusiness and is here to help you succeed 24/7."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-gray-600">
            Powerful features designed specifically for the unique challenges of agribusiness
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
