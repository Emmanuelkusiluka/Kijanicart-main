import { motion } from "motion/react";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Up to 50 products",
      "Basic analytics",
      "Email support",
      "Mobile app access",
      "Standard dashboard"
    ],
    gradient: "from-gray-500 to-gray-600",
    buttonText: "Start Free"
  },
  {
    name: "Professional",
    price: "Tsh 49000",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Unlimited products",
      "Advanced analytics & AI insights",
      "Priority support (24/7)",
      "Custom branding",
      "API access",
      "Multi-user accounts",
      "Advanced reporting"
    ],
    gradient: "from-green-500 to-emerald-600",
    popular: true,
    buttonText: "Start 30-Day Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large operations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee (99.9%)",
      "Training & onboarding",
      "White-label options",
      "Advanced security features",
      "Custom contracts"
    ],
    gradient: "from-emerald-500 to-teal-600",
    buttonText: "Contact Sales"
  }
];

const faqs = [
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, mobile money (M-Pesa, MTN Mobile Money, Airtel Money), and bank transfers for annual plans."
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees ever. You only pay the monthly or annual subscription fee based on your chosen plan."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely! You can cancel your subscription at any time with no penalties. Your access continues until the end of your billing period."
  },
  {
    question: "Do you offer discounts for annual payments?",
    answer: "Yes! Pay annually and save 20% compared to monthly billing. Contact our sales team for enterprise custom pricing."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains accessible for 30 days after cancellation. You can export all your data anytime before or after cancellation."
  },
  {
    question: "Is customer support included?",
    answer: "Yes! All plans include customer support. Professional and Enterprise plans get priority support with faster response times."
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! We offer a 30-day free trial for Professional plan with full feature access. No credit card required to start."
  }
];

export function PricingPage() {
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
              <span className="text-sm text-green-400">Flexible Pricing</span>
            </div>
            <h1 className="text-4xl md:text-7xl mb-6">
              <span className="text-white">Grow Your Business</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                At Your Own Pace
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start free, scale as you grow • No hidden fees • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-neutral-900/50 border-2 hover:border-green-500/50 transition-all duration-300 relative h-full ${
                  plan.popular ? 'border-green-500 shadow-[0_0_50px_rgba(34,197,94,0.3)]' : 'border-neutral-800'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-sm text-white">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-5xl text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 mb-8">{plan.description}</p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => onNavigate("getstarted")}
                      className={`w-full bg-gradient-to-r ${plan.gradient} text-white rounded-2xl group`}
                    >
                      {plan.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="relative py-20 border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white mb-4">All Plans Include</h2>
            <p className="text-xl text-gray-400">Core features available to everyone</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Secure cloud storage",
              "Mobile app access",
              "Data export anytime",
              "Regular updates",
              "Community access",
              "Basic integrations",
              "SSL encryption",
              "GDPR compliant"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 rounded-xl p-4"
              >
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg text-white mb-2">{faq.question}</h3>
                        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12"
          >
            <h3 className="text-2xl text-white mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help you find the perfect plan for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl"
              >
                Contact Sales
              </Button>
              <Button
                onClick={() => onNavigate("getstarted")}
                variant="outline"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-2xl"
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
