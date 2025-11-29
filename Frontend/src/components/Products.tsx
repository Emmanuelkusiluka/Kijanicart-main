import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ShoppingCart, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Our Products</span>
          </div>
          <h2 className="text-gray-900 mb-4">
            Discover the Kijanicart Family
          </h2>
          <p className="text-gray-600">
            Comprehensive solutions tailored for every aspect of your agribusiness journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Marketplace Product */}
          <Card className="overflow-hidden border-2 hover:border-green-600 transition-all duration-300 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715443972582-270bf02c085f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXJzJTIwbWFya2V0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzYzNjc0NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Marketplace"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                For Sellers & Buyers
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-gray-900">Marketplace</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A powerful e-commerce platform connecting agribusiness sellers with customers. List your products, manage orders, and grow your customer base with ease.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                  Easy product listing and management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                  Secure payment processing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                  Customer relationship tools
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                  Real-time order tracking
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Explore Marketplace
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Analytics Product */}
          <Card className="overflow-hidden border-2 hover:border-emerald-600 transition-all duration-300 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzYwODQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Analytics Dashboard"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                For Business Owners
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-gray-900">Analytics</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced analytics and AI-powered insights to help you make data-driven decisions. Track inventory, sales, and get seasonal demand predictions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  Smart inventory management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  AI-powered demand forecasting
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  Seasonal trend analysis
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  Real-time sales tracking
                </li>
              </ul>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Explore Analytics
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
