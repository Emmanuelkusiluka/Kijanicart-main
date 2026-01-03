import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/products", label: t("nav.products") },
    { path: "/features", label: t("nav.features") },
    { path: "/pricing", label: t("nav.pricing") },
    // { path: "/blog", label: t("nav.blog") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-green-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo with animated border */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="logos/logo-main.svg"
              alt="Kijanicart Logo"
              className="w-20 h-auto"
            />
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors relative group ${
                  isActive(item.path) ||
                  (item.path === "/blog" &&
                    location.pathname.startsWith("/blog"))
                    ? "text-green-400"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-100 ${
                    isActive(item.path) ||
                    (item.path === "/blog" &&
                      location.pathname.startsWith("/blog"))
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 hover:border-green-500/50 rounded-lg transition-color"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">
                {language === "en" ? "EN" : "SW"}
              </span>
            </button>

            <div className="flex items-center gap-3">
              <Button
                asChild
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-white/5"
              >
                <Link to="/signin">{t("nav.signin")}</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0"
              >
                <Link to="/getstarted">{t("nav.getstarted")}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 hover:border-green-500/50 rounded-lg transition-color"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">
                {language === "en" ? "EN" : "SW"}
              </span>
            </button>

            <button
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-green-500/20 bg-neutral-950/95 backdrop-blur-xl -mx-6 px-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`text-left transition-colors py-2 ${
                    isActive(item.path) ||
                    (item.path === "/blog" &&
                      location.pathname.startsWith("/blog"))
                      ? "text-green-400"
                      : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                onClick={closeMobileMenu}
              >
                <Link to="/signin">{t("nav.signin")}</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                onClick={closeMobileMenu}
              >
                <Link to="/getstarted">{t("nav.getstarted")}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
