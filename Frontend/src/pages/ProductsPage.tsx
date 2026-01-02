import { motion } from "motion/react";
import { ShoppingCart, BarChart3, Check, ArrowRight, Package, Users, TrendingUp, Brain, Smartphone, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import type { PageType } from "../App";

// interface ProductsPageProps {
//   onNavigate: (page: PageType, data?: any) => void;
// }

export function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
              <span className="text-sm text-green-400">Our Products</span>
            </div>
            <h1 className="text-6xl md:text-7xl mb-6">
              <span className="text-white">Powerful Tools for</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Every Agribusiness
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the solution that fits your needs, or combine both for maximum impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Product */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl text-white mb-6">Marketplace</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Your complete e-commerce platform for agricultural products. Connect with buyers, manage your inventory, and grow your customer base.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Multi-vendor marketplace support",
                  "Integrated payment processing",
                  "Real-time inventory management",
                  "Customer relationship tools",
                  "Order tracking & fulfillment",
                  "Mobile money integration"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => onNavigate("getstarted", { selectedProduct: "marketplace" })}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-2xl group"
              >
                Get Started with Marketplace
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Package, title: "Product Management", desc: "Easy listing & catalog" },
                { icon: Users, title: "Customer Hub", desc: "Build relationships" },
                { icon: Shield, title: "Secure Payments", desc: "Safe transactions" },
                { icon: Smartphone, title: "Mobile Ready", desc: "Works anywhere" }
              ].map((item, index) => (
                <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Analytics Product */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 grid grid-cols-2 gap-6"
            >
              {[
                { icon: Brain, title: "AI Insights", desc: "Smart predictions" },
                { icon: TrendingUp, title: "Sales Analytics", desc: "Track performance" },
                { icon: Package, title: "Inventory Control", desc: "Stock optimization" },
                { icon: BarChart3, title: "Custom Reports", desc: "Your way" }
              ].map((item, index) => (
                <Card key={index} className="bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl text-white mb-6">Analytics</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Make data-driven decisions with AI-powered insights. Track everything from inventory to seasonal trends and optimize your operations.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "AI-powered demand forecasting",
                  "Real-time inventory tracking",
                  "Seasonal trend analysis",
                  "Sales performance metrics",
                  "Custom dashboard builder",
                  "Automated reporting"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => onNavigate("getstarted", { selectedProduct: "analytics" })}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-2xl group"
              >
                Get Started with Analytics
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA to Pricing */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-green-950/10 to-neutral-950" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Choose the perfect plan for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate("pricing")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-8"
              >
                View Pricing
              </Button>
              <Button
                onClick={() => onNavigate("getstarted")}
                variant="outline"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-2xl px-8"
              >
                Start Free Trial
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}