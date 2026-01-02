import { useState } from "react";
import { 
  Zap, 
  Shield, 
  Globe, 
  Brain,
  TrendingUp,
  Smartphone,
  Users,
  Heart
} from "lucide-react";
import { motion } from "motion/react";


const features = [
  {
    icon: Brain,
    title: "AI Insights",
    description: "Smart forecasting for demand & supply patterns",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Real-time tracking and performance metrics",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Bank-level encryption for all transactions",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Works perfectly on any device, anywhere",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    title: "Multi-Region",
    description: "Serving 15+ countries across Africa",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join 5000+ agribusiness owners",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and reliability",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Heart,
    title: "24/7 Support",
    description: "We're here whenever you need us",
    gradient: "from-rose-500 to-pink-500",
  },
];

export function InteractiveFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to run and grow your agribusiness, all in one place
          </p>
        </motion.div>

        {/* Features Grid with Bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Card */}
                <div className={`
                  relative h-full bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 
                  rounded-2xl p-8 transition-all duration-500
                  ${isHovered ? 'border-transparent' : ''}
                `}>
                  {/* Gradient border on hover */}
                  {isHovered && (
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-50 blur-xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-6
                      bg-gradient-to-r ${feature.gradient}
                      transition-transform duration-300
                      ${isHovered ? 'scale-110' : 'scale-100'}
                    `}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to experience all these features?
          </p>
          <button 
            onClick={() => onNavigate("getstarted")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white cursor-pointer hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-shadow duration-300"
          >
            <span>Start your free trial</span>
            <span className="text-sm opacity-75">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}