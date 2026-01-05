import {motion} from "motion/react";
import {Calendar, Clock, ArrowLeft, Share2, Bookmark} from "lucide-react";
import {Button} from "../../components/ui/button.tsx";
import {ImageWithFallback} from "../../components/figma/ImageWithFallback.tsx";
import type {PageType} from "../../App.tsx";

const blogPosts = [
    {
        id: 1,
        title: "10 Ways AI is Transforming African Agriculture",
        content: `Artificial Intelligence is revolutionizing the agricultural sector across Africa, bringing unprecedented opportunities for farmers and agribusinesses. From predictive analytics to automated irrigation systems, AI is helping farmers maximize yields while minimizing costs.

## The Rise of Smart Farming

Smart farming technologies are becoming increasingly accessible to African farmers. Mobile applications powered by AI can now predict weather patterns, identify crop diseases, and recommend optimal planting times with remarkable accuracy.

### Key Technologies Driving Change

1. **Drone Technology**: Drones equipped with AI-powered cameras can monitor crop health across vast areas, identifying problem spots before they become visible to the human eye.

2. **Predictive Analytics**: Machine learning algorithms analyze historical data to forecast demand, helping farmers make informed decisions about what to plant and when to harvest.

3. **Automated Irrigation**: AI-driven systems can optimize water usage based on soil moisture levels, weather forecasts, and crop requirements, reducing water waste by up to 30%.

## Impact on Small-Scale Farmers

Perhaps the most exciting aspect of AI in agriculture is its democratization. What was once available only to large commercial farms is now accessible to small-scale farmers through mobile apps and affordable sensors.

### Success Stories

In Kenya, farmers using AI-powered advisory services have reported yield increases of up to 40%. In Nigeria, AI-based pest detection systems have helped farmers reduce crop losses significantly.

## The Road Ahead

As infrastructure improves and technology becomes more affordable, we can expect AI to play an even larger role in African agriculture. The key is ensuring that these technologies are accessible, affordable, and adapted to local conditions.`,
        image: "https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBmYXJtfGVufDF8fHx8MTc2MzU3Nzk4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        category: "Technology",
        date: "Nov 15, 2025",
        readTime: "8 min read",
        author: "Jane Mwangi"
    }
];

interface BlogDetailPageProps {
    blogPostId: number;
    onNavigate: (page: PageType, data?: any) => void;
}

export function BlogDetailPage({blogPostId, onNavigate}: BlogDetailPageProps) {
    const post = blogPosts.find(p => p.id === blogPostId) || blogPosts[0];

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]"/>
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                    >
                        <Button
                            variant="ghost"
                            onClick={() => onNavigate("blog")}
                            className="text-gray-400 hover:text-green-400 mb-8 p-0"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2"/>
                            Back to Blog
                        </Button>

                        <div className="flex items-center gap-4 mb-6">
              <span
                  className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400">
                {post.category}
              </span>
                            <span className="text-sm text-gray-500">{post.date}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl text-white mb-6">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                                    {post.author[0]}
                                </div>
                                <div>
                                    <div className="text-white">
                                        {post.author}
                                    </div>
                                    <div className="text-sm text-gray-500">Senior Writer</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-neutral-800 text-gray-400 hover:border-green-500/50 hover:bg-green-500/10"
                                >
                                    <Share2 className="w-4 h-4 mr-2"/>
                                    Share
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-neutral-800 text-gray-400 hover:border-green-500/50 hover:bg-green-500/10"
                                >
                                    <Bookmark className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="relative">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent"/>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="relative py-20">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div className="text-gray-300 leading-relaxed space-y-6">
                            {post.content.split('\n\n').map((paragraph, index) => {
                                if (paragraph.startsWith('## ')) {
                                    return (
                                        <h2 key={index} className="text-3xl text-white mt-12 mb-6">
                                            {paragraph.replace('## ', '')}
                                        </h2>
                                    );
                                } else if (paragraph.startsWith('### ')) {
                                    return (
                                        <h3 key={index} className="text-2xl text-white mt-8 mb-4">
                                            {paragraph.replace('### ', '')}
                                        </h3>
                                    );
                                } else if (paragraph.match(/^\d+\./)) {
                                    const lines = paragraph.split('\n');
                                    return (
                                        <ol key={index} className="space-y-4 ml-6 list-decimal">
                                            {lines.map((line, i) => {
                                                const match = line.match(/^\d+\.\s\*\*(.*?)\*\*:\s(.*)/);
                                                if (match) {
                                                    return (
                                                        <li key={i} className="text-gray-300">
                                                            <strong
                                                                className="text-green-400">{match[1]}</strong>: {match[2]}
                                                        </li>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </ol>
                                    );
                                } else {
                                    return (
                                        <p key={index} className="text-lg text-gray-300 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    );
                                }
                            })}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        className="mt-16 p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl"
                    >
                        <div className="text-center">
                            <h3 className="text-2xl text-white mb-4">
                                Ready to Transform Your Agribusiness?
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Join thousands of farmers already using Kijanicart to grow their operations
                            </p>
                            <Button
                                onClick={() => onNavigate("getstarted")}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl"
                            >
                                Get Started Free
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="relative py-20 border-t border-neutral-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl text-white mb-12">Related Articles</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: i * 0.1}}
                                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                                onClick={() => onNavigate("blogdetail", {blogPostId: i})}
                            >
                                <div className="relative h-48">
                                    <ImageWithFallback
                                        src={post.image}
                                        alt="Related post"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="text-xs text-green-400">Technology</span>
                                    <h3 className="text-xl text-white mt-2 mb-2 group-hover:text-green-400 transition-colors">
                                        Related Article Title {i}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Clock className="w-3 h-3"/>
                                        5 min read
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
