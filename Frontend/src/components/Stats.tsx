import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Stats() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjc0NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Agriculture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6">
              <div className="text-center">
                <div className="text-green-600 mb-1">$2.5M+</div>
                <div className="text-sm text-gray-600">Total Sales Processed</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-gray-900 mb-4">
                Built for African Agribusiness
              </h2>
              <p className="text-gray-600">
                Kijanicart was born from understanding the unique challenges facing African agribusinesses. We combine cutting-edge technology with local market expertise to deliver solutions that truly work.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-green-600 mb-2">5,000+</div>
                <div className="text-sm text-gray-700">Registered Businesses</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-emerald-600 mb-2">50,000+</div>
                <div className="text-sm text-gray-700">Products Listed</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-700">Countries Served</div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="text-emerald-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-700">Uptime</div>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Local Payment Integration</div>
                  <div className="text-sm text-gray-600">Support for mobile money and local payment methods across Africa</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Multilingual Support</div>
                  <div className="text-sm text-gray-600">Available in multiple languages to serve diverse communities</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Offline Capability</div>
                  <div className="text-sm text-gray-600">Continue working even in areas with limited internet connectivity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
