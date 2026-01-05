import {motion} from "motion/react";
import {Wrench, AlertCircle, RefreshCw, Home, Clock} from "lucide-react";
import {Button} from "../../components/ui/button.tsx";

import {useLanguage} from "../../contexts/LanguageContext.tsx";
import {Link} from "react-router-dom";


export function UnderMaintenancePage() {
    // const {t} = useLanguage();

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-neutral-950">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950/20">
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b20_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b20_1px,transparent_1px)] bg-[size:4rem_4rem]"/>
            </div>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]"/>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]"/>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
                <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                >
                    {/* Icon with Animation */}
                    <motion.div
                        animate={{
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="inline-flex mb-8"
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-50"/>
                            <div
                                className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center">
                                <Wrench className="w-12 h-12 text-white"/>
                            </div>
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-8"
                    >
                        <AlertCircle className="w-4 h-4 text-amber-400"/>
                        <span className="text-sm text-amber-400">Under Maintenance</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="text-5xl md:text-6xl md:text-7xl mb-6"
                    >
                        <span className="text-white">We're Making</span>
                        <br/>
                        <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Things Better
            </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-l md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                    >
                        We're currently performing scheduled maintenance to improve your experience. We'll be back up
                        and running shortly. Thank you for your patience!
                    </motion.p>

                    {/* Info Cards */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        {[
                            {
                                icon: Clock,
                                title: "Expected Time",
                                description: "Back online in a few hours"
                            },
                            {
                                icon: RefreshCw,
                                title: "Regular Updates",
                                description: "We're working as fast as we can"
                            },
                            {
                                icon: AlertCircle,
                                title: "Stay Connected",
                                description: "Follow us for real-time updates"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl"
                            >
                                <div
                                    className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                    <item.icon className="w-6 h-6 text-amber-400"/>
                                </div>
                                <h3 className="text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Loading Animation */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6}}
                        className="mb-12"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <motion.div
                                animate={{scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5]}}
                                transition={{duration: 1.5, repeat: Infinity, delay: 0}}
                                className="w-3 h-3 bg-amber-400 rounded-full"
                            />
                            <motion.div
                                animate={{scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5]}}
                                transition={{duration: 1.5, repeat: Infinity, delay: 0.2}}
                                className="w-3 h-3 bg-amber-400 rounded-full"
                            />
                            <motion.div
                                animate={{scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5]}}
                                transition={{duration: 1.5, repeat: Infinity, delay: 0.4}}
                                className="w-3 h-3 bg-amber-400 rounded-full"
                            />
                        </div>
                        <p className="text-sm text-gray-500">Maintenance in progress...</p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.7}}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            onClick={() => window.location.reload()}
                            className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-2xl px-8 group"
                        >
                            <RefreshCw
                                className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500"/>
                            Refresh Page
                        </Button>
                        <Link to="/">
                            <Button
                                variant="outline"
                                className="w-full border-neutral-700 text-gray-400 hover:bg-neutral-800 hover:text-white rounded-2xl px-8"
                            >
                                <Home className="w-5 h-5 mr-2"/>
                                Back to Home
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
                        style={{top: `${20 + i * 15}%`}}
                        animate={{
                            opacity: [0, 0.5, 0],
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
