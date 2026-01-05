import {motion} from "motion/react";
import {Rocket, Bell, Clock, Sparkles, ArrowRight} from "lucide-react";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {useState} from "react";
import {toast} from "sonner";
import {Link} from "react-router-dom";

// import {useLanguage} from "../../contexts/LanguageContext";

interface ComingSoonProps {
    productName?: string;
}

export function ComingSoonPage({productName: defaultProductName = "Marketplace"}: ComingSoonProps) {
    const [email, setEmail] = useState("");
    const productName = location.state?.productName || defaultProductName;

    console.log(productName);
    const [loading, setLoading] = useState(false);
    // const {t} = useLanguage();

    const handleJoinWaitlist = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email address");
            console.log("pobably not showing toast")
            return;
        }

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            toast.success("You're on the waitlist! We'll notify you when we launch.");
            setEmail("");
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen md:pt-20 flex items-center justify-center relative overflow-hidden bg-neutral-950">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]"/>
            </div>

            <div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[150px] animate-pulse"/>
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px] animate-pulse"
                style={{animationDelay: "1s"}}/>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                >
                    {/* Icon */}
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="inline-flex mb-8 mr-2"
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-50 animate-pulse"/>
                            <div
                                className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center p-2">
                                <Rocket className="w-12 h-12 text-white"/>
                            </div>
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-green-400"/>
                        <span className="text-sm text-green-400">Coming Soon</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="text-4xl md:text-6xl md:text-7xl mb-6"
                    >
                        <span className="text-white">{productName} is</span>
                        <br/>
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Almost Here
            </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                    >
                        We're working hard to bring you an amazing experience. Join our waitlist to be the first to know
                        when we launch and get exclusive early access perks.
                    </motion.p>

                    {/* Waitlist Form */}
                    <motion.form
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        onSubmit={handleJoinWaitlist}
                        className="max-w-md mx-auto mb-12"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Bell className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-12 h-14 bg-neutral-900 border-neutral-800 focus:border-green-500 text-white rounded-2xl"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={loading}
                                className="h-14 px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl group"
                            >
                                {loading ? "Joining..." : "Join Waitlist"}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"/>
                            </Button>
                        </div>
                    </motion.form>

                    {/* Features Grid */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6}}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {[
                            {
                                icon: Bell,
                                title: "Get Notified First",
                                description: "Be the first to know when we launch"
                            },
                            {
                                icon: Sparkles,
                                title: "Early Access",
                                description: "Exclusive perks for waitlist members"
                            },
                            {
                                icon: Clock,
                                title: "Launch Updates",
                                description: "Regular progress updates via email"
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-green-500/50 transition-all duration-300"
                            >
                                <div
                                    className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <feature.icon className="w-6 h-6 text-green-400"/>
                                </div>
                                <h3 className="text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Navigation Buttons */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.7}}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/products">
                            <Button
                                variant="outline"
                                className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 hover:text-white rounded-2xl px-8"
                            >
                                View Other Products
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button
                                variant="outline"
                                className="w-full border-neutral-700 text-gray-400 hover:bg-neutral-800 hover:text-white rounded-2xl px-8"
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
}
