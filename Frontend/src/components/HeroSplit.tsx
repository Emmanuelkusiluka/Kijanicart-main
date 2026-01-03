import { Button } from "./ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";


export function HeroSplit() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">{t("hero.badge")}</span>
            </div>

            {/* Heading with gradient */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6">
                <span className="block text-white">{t("hero.title1")}</span>
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  {t("hero.title2")}
                </span>
                <span className="block text-white">{t("hero.title3")}</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-6 rounded-2xl group"
              >
                <Link to="/getstarted">{t("hero.cta1")}</Link>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-500/30 text-green-400 hover:bg-green-500/10 text-lg px-8 py-6 rounded-2xl"
              >
                <Play className="w-4 h-4 mr-2" />
                <Link to="/products">{t("hero.cta2")}</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-500">{t("hero.stat1")}</div>
              </div>
              <div className="w-px h-12 bg-green-500/20" />
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">100M</div>
                <div className="text-sm text-gray-500">{t("hero.stat2")}</div>
              </div>
              <div className="w-px h-12 bg-green-500/20" />
              <div className="text-center">
                <div className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">+63%</div>
                <div className="text-sm text-gray-500">{t("hero.stat3")}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div 
            className="relative h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Image with 3D effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[500px] rounded-3xl overflow-hidden border border-green-500/30 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581625458990-343ee0613bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVyJTIwaGFuZHMlMjBzb2lsfGVufDF8fHx8MTc2MzY3NDYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agribusiness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent" />
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-[300px] h-[350px] rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596776572010-93e181f9fc07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwbWFya2V0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzNjc0NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh Produce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute top-12 left-12 bg-neutral-900/80 backdrop-blur-xl border border-green-500/30 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">{t("hero.growth")}</div>
                  <div className="text-green-400">+156%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}