import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Tag, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import type { PageType } from "../App";

const blogPosts = [
  {
    id: 1,
    title: "10 Ways AI is Transforming African Agriculture",
    excerpt: "Discover how artificial intelligence is revolutionizing farming practices across the continent, from crop monitoring to predictive analytics.",
    image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtfGVufDF8fHx8MTc2MzU3Nzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Technology",
    date: "Nov 15, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building a Sustainable Agribusiness in 2025",
    excerpt: "Learn the key strategies and best practices for creating a profitable and environmentally sustainable agricultural business.",
    image: "https://images.unsplash.com/photo-1581625458990-343ee0613bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmFybWVyJTIwaGFuZHMlMjBzb2lsfGVufDF8fHx8MTc2MzY3NDYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Business",
    date: "Nov 12, 2025",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "The Rise of Digital Marketplaces for Farmers",
    excerpt: "How online platforms are connecting farmers directly with consumers and transforming the supply chain.",
    image: "https://images.unsplash.com/photo-1596776572010-93e181f9fc07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGVzJTIwbWFya2V0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzYzNjc0NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Marketplace",
    date: "Nov 10, 2025",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Seasonal Trends: Planning Your Crop Calendar",
    excerpt: "Master the art of seasonal planning with data-driven insights on demand patterns and market opportunities.",
    image: "https://images.unsplash.com/photo-1650274568088-0a09f4e69da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGFlcmlhbCUyMGZpZWxkfGVufDF8fHx8MTc2MzY3NDYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Analytics",
    date: "Nov 8, 2025",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Mobile Money Integration: A Game Changer",
    excerpt: "Why mobile payment solutions are crucial for agribusiness growth in emerging markets.",
    image: "https://images.unsplash.com/photo-1668608322777-364314214cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3cml0aW5nJTIwbGFwdG9wfGVufDF8fHx8MTc2MzY3NTA3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Technology",
    date: "Nov 5, 2025",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Customer Relationships in Agribusiness",
    excerpt: "Building trust and loyalty with your customers through transparent communication and quality service.",
    image: "https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjB0ZWFtfGVufDF8fHx8MTc2MzU2NzkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Business",
    date: "Nov 3, 2025",
    readTime: "6 min read"
  }
];

const categories = ["All", "Technology", "Business", "Marketplace", "Analytics"];

interface BlogPageProps {
  onNavigate: (page: PageType, data?: any) => void;
}

export function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              <span className="text-sm text-green-400">Insights & Updates</span>
            </div>
            <h1 className="text-4xl md:text-7xl mb-6">
              <span className="text-white">The Kijanicart</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Latest insights, trends, and tips for modern agribusiness success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-12 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`border-neutral-800 hover:border-green-500/50 hover:bg-green-500/10 hover:text-white ${
                  category === "All" ? "border-green-500 bg-green-500/10 text-green-400" : "text-gray-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card 
                className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                onClick={() => onNavigate("blogdetail", { blogPostId: featuredPost.id })}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-sm text-white">
                      Featured
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    </div>
                    <h2 className="text-4xl text-white mb-4 group-hover:text-green-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                      <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl text-white">Latest Articles</h2>
            <Button variant="outline" className="border-neutral-800 text-gray-400 hover:border-green-500/50 hover:bg-green-500/10">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trending
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all duration-300 h-full group cursor-pointer"
                  onClick={() => onNavigate("blogdetail", { blogPostId: post.id })}
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-green-500/10 border border-green-500/30 rounded text-xs text-green-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-green-400 hover:text-green-300 hover:bg-green-500/10 p-0 h-auto"
                      >
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-neutral-800 text-gray-400 hover:border-green-500/50 hover:bg-green-500/10 hover:text-white"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Tag className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl text-white mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get the latest insights, trends, and tips delivered straight to your inbox every week.
                </p>
                <div className="flex flex-col items-center sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl text-white placeholder:text-gray-600 focus:outline-none focus:border-green-500"
                  />
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  No spam, unsubscribe anytime
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
