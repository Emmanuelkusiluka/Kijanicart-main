import { motion } from "motion/react";
import { 
  Brain, Shield, Zap, Globe, TrendingUp, Users, 
  Smartphone, Heart, Package, BarChart3, Bell, Lock,
  Layers, RefreshCw, Cloud, MessageSquare 
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";


const featureCategories = [
  {
    title: "Core Features",
    description: "Essential tools to run your agribusiness",
    features: [
      { icon: Package, title: "Inventory Management", description: "Track stock levels, set alerts, and manage products across multiple locations with real-time updates." },
      { icon: BarChart3, title: "Sales Analytics", description: "Comprehensive sales tracking with customizable reports and performance insights." },
      { icon: Users, title: "Customer Management", description: "Build and maintain strong customer relationships with our integrated CRM system." },
      { icon: TrendingUp, title: "Revenue Tracking", description: "Monitor revenue streams, profit margins, and financial health at a glance." }
    ]
  },
  {
    title: "AI & Intelligence",
    description: "Smart features powered by artificial intelligence",
    features: [
      { icon: Brain, title: "Demand Forecasting", description: "AI-powered predictions help you anticipate market demand and optimize stock levels." },
      { icon: Bell, title: "Smart Alerts", description: "Get notified about important events, low stock, and opportunities automatically." },
      { icon: Layers, title: "Seasonal Analysis", description: "Understand seasonal patterns and plan your inventory for peak seasons." },
      { icon: MessageSquare, title: "AI Assistant", description: "Ask questions and get insights from your data using natural language." }
    ]
  },
  {
    title: "Technology & Security",
    description: "Enterprise-grade infrastructure and protection",
    features: [
      { icon: Shield, title: "Bank-Level Security", description: "Your data is protected with end-to-end encryption and regular security audits." },
      { icon: Lock, title: "Data Privacy", description: "Full compliance with international data protection regulations and standards." },
      { icon: Cloud, title: "Cloud Backup", description: "Automatic daily backups ensure your data is never lost, with quick recovery options." },
      { icon: Zap, title: "99.9% Uptime", description: "Reliable infrastructure with minimal downtime and fast performance globally." }
    ]
  },
  {
    title: "Accessibility & Support",
    description: "Work anywhere, get help anytime",
    features: [
      { icon: Smartphone, title: "Mobile Apps", description: "Native iOS and Android apps let you manage your business on the go." },
      { icon: Globe, title: "Multi-Language", description: "Support for multiple languages to serve diverse communities across Africa." },
      { icon: RefreshCw, title: "Offline Mode", description: "Continue working even without internet, with automatic sync when reconnected." },
      { icon: Heart, title: "24/7 Support", description: "Round-the-clock customer support via chat, email, and phone in your language." }
    ]
  }
];

export function FeaturesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
              <span className="text-sm text-green-400">Platform Features</span>
            </div>
            <h1 className="text-4xl md:text-7xl mb-6">
              <span className="text-white">Everything You Need</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Built Right In
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive features designed specifically for agribusinesses, no extra plugins needed
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl text-white mb-4">{category.title}</h2>
              <p className="text-lg text-gray-400">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all duration-300 h-full group">
                      <CardContent className="p-8">
                        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <motion.div 
        className="mt-20 text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl text-white mb-6">
          Ready to Experience These Features?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Start your free 30-day trial and see how Kijanicart can transform your agribusiness
        </p>
        <button 
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]"
        >
          <Link to="/getstarted">Start Free Trial</Link>
        </button>
      </motion.div>
    </div>
  );
}