import {motion} from "motion/react";
import {Mail, Phone, MapPin, Send, MessageSquare, Clock} from "lucide-react";
import {Button} from "../components/ui/button";
import {Input} from "../components/ui/input";
import {Textarea} from "../components/ui/textarea";
import {Card, CardContent} from "../components/ui/card";
import {useState} from "react";
import {Link} from "react-router-dom";

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-green-950/30">
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,#10b98120_1px,transparent_1px),linear-gradient(to_bottom,#10b98120_1px,transparent_1px)] bg-[size:4rem_4rem]"/>
                </div>

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"/>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-center"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
                            <span className="text-sm text-green-400">Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl mb-6">
                            <span className="text-white">We'd Love to</span>
                            <br/>
                            <span
                                className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Hear From You
              </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Have questions? Need support? Want to partner with us? We're here
                            to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: Mail,
                                title: "Email Us",
                                content: "hello@kijanicart.com",
                                subContent: "support@kijanicart.com",
                                gradient: "from-green-500 to-emerald-600",
                            },
                            {
                                icon: Phone,
                                title: "Call Us",
                                content: "+255 714 710 827",
                                subContent: "Mon-Fri, 8am-6pm EAT",
                                gradient: "from-emerald-500 to-teal-600",
                            },
                            {
                                icon: MapPin,
                                title: "Visit Us",
                                content: "Dodoma, Tanzania",
                                subContent: "East Africa",
                                gradient: "from-teal-500 to-green-600",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                            >
                                <Card
                                    className="bg-neutral-900/50 border-neutral-800 hover:border-green-500/50 transition-all duration-300">
                                    <CardContent className="p-8 text-center">
                                        <div
                                            className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                                        >
                                            <item.icon className="w-8 h-8 text-white"/>
                                        </div>
                                        <h3 className="text-xl text-white mb-3">{item.title}</h3>
                                        <p className="text-green-400 mb-1">{item.content}</p>
                                        <p className="text-sm text-gray-500">{item.subContent}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-4xl text-white mb-6">Send Us a Message</h2>
                            <p className="text-lg text-gray-400 mb-8">
                                Fill out the form and our team will get back to you within 24
                                hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-gray-400 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-gray-400 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm text-gray-400 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="How can we help?"
                                        className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm text-gray-400 mb-2"
                                    >
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us more about your inquiry..."
                                        className="bg-neutral-900/50 border-neutral-800 text-white placeholder:text-gray-600 focus:border-green-500 min-h-[150px]"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl py-6 group"
                                >
                                    <Send className="w-5 h-5 mr-2"/>
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            className="space-y-8"
                        >
                            <Card className="bg-neutral-900/50 border-neutral-800">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div
                                            className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <MessageSquare className="w-6 h-6 text-green-400"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl text-white mb-2">
                                                Live Chat Support
                                            </h3>
                                            <p className="text-gray-400 mb-4">
                                                Chat with our support team in real-time for immediate
                                                assistance.
                                            </p>
                                            <Link to="/chat-support">
                                                <Button
                                                    variant="outline"
                                                    className="border-green-500/30 text-green-400 hover:bg-green-500/10 hover:text-white"
                                                >
                                                    Start Chat
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-neutral-900/50 border-neutral-800">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-emerald-400"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl text-white mb-2">
                                                Business Hours
                                            </h3>
                                            <div className="space-y-2 text-gray-400">
                                                <div className="flex justify-between">
                                                    <span>Monday - Friday</span>
                                                    <span className="text-green-400">8am - 6pm EAT</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Saturday</span>
                                                    <span className="text-green-400">9am - 2pm EAT</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Sunday</span>
                                                    <span className="text-gray-500">Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
                                <CardContent className="p-8">
                                    <h3 className="text-xl text-white mb-4">
                                        Need Immediate Help?
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Check out our comprehensive documentation and FAQs for quick
                                        answers to common questions.
                                    </p>
                                    <Link to="/documentation">
                                        <Button
                                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-2xl">
                                            View Documentation
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
