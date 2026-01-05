import React from "react";
import {Mail, MapPin, Phone} from "lucide-react";
import {Facebook, Twitter, Instagram, Linkedin} from "lucide-react";
import {useLanguage} from "../contexts/LanguageContext";
import {Link} from "react-router-dom";

export function Footer() {
    const {t} = useLanguage();

    const productLinks = [
        {label: t("footer.marketplace"), path: "/products"},
        {label: t("footer.analytics"), path: "/products"},
        {label: t("footer.pricing"), path: "/pricing"},
        {label: t("footer.enterprise"), path: "/getstarted"},
    ];

    const companyLinks = [
        {label: t("footer.features"), path: "/features"},
        {label: t("footer.blog"), path: "/blog"},
        {label: t("footer.contact"), path: "/contact"},
    ];

    const socialLinks = [
        {Icon: Twitter, href: "https://x.com/kijanicart"},
        {Icon: Linkedin, href: "https://linkedin.com/company/kijanicart"},
        {Icon: Instagram, href: "https://instagram.com/kijanicart"},
        {Icon: Facebook, href: "https://facebook.com/kijanicart"},
    ];

    return (
        <footer
            id="contact"
            className="relative border-t border-neutral-800 bg-neutral-950"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <Link to="/">
                            <img
                                src="logos/logo-main.svg"
                                alt="Kijanicart Logo"
                                className="w-32 h-auto"
                            />
                        </Link>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t("footer.description")}
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map(({Icon, href}) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="w-10 h-10 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-green-500/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                                >
                  <span className="text-gray-400 group-hover:text-green-400 text-sm">
                    {React.createElement(Icon, {className: "w-5 h-5"})}
                  </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white mb-6">{t("footer.products")}</h4>
                        <ul className="space-y-4">
                            {productLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span
                                            className="w-0 h-px bg-green-400 group-hover:w-4 transition-all duration-300"/>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white mb-6">{t("footer.company")}</h4>
                        <ul className="space-y-4">
                            {companyLinks.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span
                                            className="w-0 h-px bg-green-400 group-hover:w-4 transition-all duration-300"/>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white mb-6">{t("footer.getintouch")}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"/>
                                <a
                                    href="mailto:hello@kijanicart.com"
                                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                                >
                                    hello@kijanicart.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"/>
                                <span className="text-gray-400 text-sm">+255 714 710 827</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"/>
                                <span className="text-gray-400 text-sm">
                  Dodoma, Tanzania
                  <br/>
                  East Africa
                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">{t("footer.copyright")}</p>
                        <div className="flex items-center gap-6">
                            {[
                                t("footer.privacy"),
                                t("footer.terms"),
                                t("footer.cookies"),
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="/terms"
                                    className="text-sm text-gray-500 hover:text-green-400 transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Company Name at Bottom - Shows 65% from top, cuts 35% from bottom */}
            <div className="relative overflow-hidden h-40">
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] whitespace-nowrap pointer-events-none">
                    <div className="text-[200px] font-black tracking-tighter text-neutral-900/80 select-none">
                        KIJANICART
                    </div>
                </div>
            </div>

            {/* Ambient lighting at bottom */}
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-green-500/10 blur-[100px] pointer-events-none"/>
        </footer>
    );
}
