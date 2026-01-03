import { useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

export function ProductsCircle() {
  const [activeProduct, setActiveProduct] = useState<
    "marketplace" | "analytics"
  >("analytics");
  const { t } = useLanguage();

  const products = {
    analytics: {
      icon: BarChart3,
      title: t("products.analytics.title"),
      tagline: t("products.analytics.tagline"),
      description: t("products.analytics.description"),
      features: [
        t("products.analytics.feature1"),
        t("products.analytics.feature2"),
        t("products.analytics.feature3"),
        t("products.analytics.feature4"),
        t("products.analytics.feature5"),
      ],
      color: "emerald",
      shortDesc: t("products.analytics.short"),
      forLabel: t("products.analytics.for"),
    },
    marketplace: {
      icon: ShoppingCart,
      title: t("products.marketplace.title"),
      tagline: t("products.marketplace.tagline"),
      description: t("products.marketplace.description"),
      features: [
        t("products.marketplace.feature1"),
        t("products.marketplace.feature2"),
        t("products.marketplace.feature3"),
        t("products.marketplace.feature4"),
        t("products.marketplace.feature5"),
      ],
      color: "green",
      shortDesc: t("products.marketplace.short"),
      forLabel: t("products.marketplace.for"),
    },
  };

  const active = products[activeProduct];
  const Icon = active.icon;

  return (
    <section id="products" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">
              <span className="text-gray-400">{t("products.title1")}</span>{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {t("products.title2")}
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t("products.subtitle")}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Selector */}
          <div className="space-y-6">
            {/* Marketplace Button */}
            <motion.button
              onClick={() => setActiveProduct("analytics")}
              className={`w-full text-left p-8 rounded-3xl border-2 transition-all duration-300 ${
                activeProduct === "analytics"
                  ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                  : "bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    activeProduct === "analytics"
                      ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                      : "bg-neutral-800"
                  }`}
                >
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-1">
                    {products.analytics.title}
                  </h3>
                  <p className="text-emerald-400">
                    {products.analytics.forLabel}
                  </p>
                </div>
              </div>
              <p className="text-gray-400">{products.analytics.shortDesc}</p>
            </motion.button>

            {/* Analytics Button */}
            <motion.button
              onClick={() => setActiveProduct("marketplace")}
              className={`w-full text-left p-8 rounded-3xl border-2 transition-all duration-300 ${
                activeProduct === "marketplace"
                  ? "bg-green-500/10 border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                  : "bg-neutral-900/50 border-neutral-800 hover:border-green-500/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    activeProduct === "marketplace"
                      ? "bg-gradient-to-br from-green-500 to-green-600"
                      : "bg-neutral-800"
                  }`}
                >
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-1">
                    {products.marketplace.title}
                  </h3>
                  <p className="text-green-400">
                    {products.marketplace.forLabel}
                  </p>
                </div>
              </div>
              <p className="text-gray-400">{products.marketplace.shortDesc}</p>
            </motion.button>
          </div>

          {/* Right - Product Details */}
          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-10 relative overflow-hidden"
          >
            {/* Glow effect */}
            <div
              className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[100px] ${
                activeProduct === "marketplace"
                  ? "bg-green-500/30"
                  : "bg-emerald-500/30"
              }`}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                  activeProduct === "marketplace"
                    ? "bg-gradient-to-br from-green-500 to-green-600"
                    : "bg-gradient-to-br from-emerald-500 to-emerald-600"
                }`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="mb-2 text-sm tracking-wider uppercase text-gray-500">
                {active.tagline}
              </div>
              <h3 className="text-4xl text-white mb-6">{active.title}</h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {active.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {active.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        activeProduct === "marketplace"
                          ? "bg-green-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className={`w-full ${
                  activeProduct === "marketplace"
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
                } text-white rounded-2xl group`}
              >
                <Link to="/getstarted">{t("products.cta")} {active.title}</Link>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
