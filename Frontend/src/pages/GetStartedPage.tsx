import { motion } from "motion/react";
import { User, Mail, Lock, Building, MapPin, Phone, ArrowRight, Check, ShoppingCart, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { useState } from "react";
import {Link} from "react-router-dom";

interface GetStartedPageProps {
  selectedProduct?: "marketplace" | "analytics";
}

export function GetStartedPage({ selectedProduct: initialProduct }: GetStartedPageProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Step 2 - Product Selection
    selectedProduct: initialProduct || ("" as "marketplace" | "analytics" | ""),
    // Step 3 - Product Specific Data
    businessName: "",
    businessType: "",
    location: "",
    phone: "",
    // Step 4 - Confirmation
    acceptTerms: false,
    newsletter: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Redirect based on selected product
      const redirectUrl = formData.selectedProduct === "marketplace" 
        ? "marketplace.kijanicart.com" 
        : "analytics.kijanicart.com";
      
      console.log("Form submitted:", formData);
      alert(`Account created! Redirecting to ${redirectUrl}...`);
      
      // In a real app, this would redirect:
      // window.location.href = `https://${redirectUrl}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const getTotalSteps = () => 4;

  return (
    <div className="min-h-screen pt-20">
      <section className="relative min-h-screen flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl text-white mb-4">
              Start Your Free Trial
            </h1>
            <p className="text-xl text-gray-400">
              30 days free • No credit card required • Cancel anytime
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {Array.from({ length: getTotalSteps() }, (_, i) => i + 1).map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-auto md:w-10 h-10 p-2 rounded-full flex items-center justify-center transition-all ${
                  step >= s 
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" 
                    : "bg-neutral-800 text-gray-500"
                }`}>
                  {step > s ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < getTotalSteps() && (
                  <div className={`w-20 h-1 mx-1 md:mx-2 transition-all ${
                    step > s ? "bg-green-500" : "bg-neutral-800"
                  }`} />
                )}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-white mb-2">Create Your Account</h2>
                    <p className="text-gray-400">Let's start with your basic information</p>
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block text-sm text-gray-400 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm text-gray-400 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Product Selection */}
              {step === 2 && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-white mb-2">Choose Your Product</h2>
                    <p className="text-gray-400">Select the platform that fits your needs</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, selectedProduct: "marketplace" }))}
                      className={`p-8 rounded-2xl border-2 text-left transition-all duration-300 ${
                        formData.selectedProduct === "marketplace"
                          ? "bg-green-500/10 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.3)]"
                          : "bg-neutral-900/50 border-neutral-800 hover:border-green-500/50"
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        formData.selectedProduct === "marketplace"
                          ? "bg-gradient-to-br from-green-500 to-green-600"
                          : "bg-neutral-800"
                      }`}>
                        <ShoppingCart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl text-white mb-3">Marketplace</h3>
                      <p className="text-gray-400 mb-4">
                        Launch your online store and connect with thousands of customers
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          E-commerce platform
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          Payment processing
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" />
                          Order management
                        </li>
                      </ul>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, selectedProduct: "analytics" }))}
                      className={`p-8 rounded-2xl border-2 text-left transition-all duration-300 ${
                        formData.selectedProduct === "analytics"
                          ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
                          : "bg-neutral-900/50 border-neutral-800 hover:border-emerald-500/50"
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        formData.selectedProduct === "analytics"
                          ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                          : "bg-neutral-800"
                      }`}>
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl text-white mb-3">Analytics</h3>
                      <p className="text-gray-400 mb-4">
                        Get AI-powered insights to optimize your operations
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400" />
                          AI forecasting
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400" />
                          Inventory tracking
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400" />
                          Sales analytics
                        </li>
                      </ul>
                    </button>
                  </div>

                  {!formData.selectedProduct && (
                    <p className="text-center text-sm text-red-400">Please select a product to continue</p>
                  )}
                </>
              )}

              {/* Step 3: Business Info */}
              {step === 3 && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-white mb-2">Tell Us About Your Business</h2>
                    <p className="text-gray-400">Help us tailor your {formData.selectedProduct} experience</p>
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm text-gray-400 mb-2">
                      Business Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your Farm or Business Name"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm text-gray-400 mb-2">
                      Business Type
                    </label>
                    <Select
                      name="businessType"
                      onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}
                    >
                      <SelectTrigger className="bg-neutral-900/50 border-neutral-800 text-white h-12">
                        <SelectValue placeholder="Select your business type" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-neutral-800">
                        <SelectItem value="farmer">Farmer / Grower</SelectItem>
                        <SelectItem value="supplier">Supplier / Distributor</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="processor">Processor</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm text-gray-400 mb-2">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Country"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="pl-12 bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 h-12"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl text-white mb-2">Almost There!</h2>
                    <p className="text-gray-400">Review and confirm your details</p>
                  </div>

                  <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
                    <h3 className="text-white mb-4">Account Summary</h3>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-white">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Product:</span>
                      <span className="text-white capitalize">{formData.selectedProduct}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Business:</span>
                      <span className="text-white">{formData.businessName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white">{formData.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Redirect to:</span>
                      <span className="text-green-400">
                        {formData.selectedProduct}.kijanicart.com
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="acceptTerms"
                        checked={formData.acceptTerms}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, acceptTerms: checked as boolean }))
                        }
                        required
                      />
                      <label htmlFor="acceptTerms" className="text-sm text-gray-400 cursor-pointer">
                        I agree to the{" "}
                        <a href="#" className="text-green-400 hover:text-green-300">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-400 hover:text-green-300">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({ ...prev, newsletter: checked as boolean }))
                        }
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-400 cursor-pointer">
                        Send me tips, trends, and updates about agribusiness
                      </label>
                    </div>
                  </div>

                  <div className={`border rounded-2xl p-6 ${
                    formData.selectedProduct === "marketplace" 
                      ? "bg-green-500/10 border-green-500/30" 
                      : "bg-emerald-500/10 border-emerald-500/30"
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        formData.selectedProduct === "marketplace" ? "bg-green-500" : "bg-emerald-500"
                      }`}>
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white">30-Day Free Trial</h4>
                        <p className="text-sm text-gray-400">Full access to all features</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${formData.selectedProduct === "marketplace" ? "text-green-400" : "text-emerald-400"}`} />
                        No credit card required
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${formData.selectedProduct === "marketplace" ? "text-green-400" : "text-emerald-400"}`} />
                        Cancel anytime
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className={`w-4 h-4 ${formData.selectedProduct === "marketplace" ? "text-green-400" : "text-emerald-400"}`} />
                        Priority email support
                      </li>
                    </ul>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <Button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    variant="outline"
                    className="flex-1 border-neutral-800 text-gray-300 hover:bg-neutral-900 h-12"
                  >
                    Back
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={step === 2 && !formData.selectedProduct}
                  className={`${
                    formData.selectedProduct === "marketplace"
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      : formData.selectedProduct === "analytics"
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
                      : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  } text-white h-12 group ${
                    step === 1 ? 'w-full' : 'flex-1'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {step === 4 ? "Create Account & Continue" : "Continue"}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>

            <p className="text-center text-gray-400 mt-6">
              Already have an account?{" "}
              <Link to="/signin" className="text-green-400 hover:text-green-300">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
