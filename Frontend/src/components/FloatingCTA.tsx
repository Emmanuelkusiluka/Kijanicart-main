import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";


export function FloatingCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-green-950/20 to-neutral-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-green-500/30 rounded-2xl overflow-hidden"
          >
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left - Content */}
              <div className="p-6 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8 w-fit">
                  <Sparkles className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">{t("cta.badge")}</span>
                </div>

                <h2 className="text-4xl lg:text-5xl md:text-6xl mb-6">
                  <span className="text-white">{t("cta.title1")}</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {t("cta.title2")}
                  </span>
                </h2>

                <p className="text-sm lg:text:xl text-gray-400 mb-8 leading-relaxed">
                  {t("cta.description")}
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-10">
                  {[
                    t("cta.benefit1"),
                    t("cta.benefit2"),
                    t("cta.benefit3"),
                    t("cta.benefit4")
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => onNavigate("getstarted")}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-8 group"
                  >
                    {t("cta.button1")}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg"
                    onClick={() => onNavigate("contact")}
                    variant="outline"
                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-2xl px-8"
                  >
                    {t("cta.button2")}
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="mt-10 pt-10 border-t border-neutral-800">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-2xl text-white mb-1">4.9/5</div>
                      <div className="text-sm text-gray-500">{t("cta.rating")}</div>
                    </div>
                    <div className="w-px h-12 bg-neutral-800" />
                    <div>
                      <div className="text-2xl text-white mb-1">99.9%</div>
                      <div className="text-sm text-gray-500">{t("cta.uptime")}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="relative min-h-[500px] lg:min-h-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650274568088-0a09f4e69da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGFlcmlhbCUyMGZpZWxkfGVufDF8fHx8MTc2MzY3NDYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Agriculture Fields"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-neutral-900/50 to-neutral-900 lg:to-neutral-950" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-8 right-8 bg-neutral-900/80 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                      $100k+
                    </div>
                    <div className="text-sm text-gray-400">{t("cta.sales")}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-[80px]" />
        </div>
      </div>
    </section>
  );
}