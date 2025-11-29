import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sprout, Menu, X, Globe } from "lucide-react";
import type { PageType } from "../App";
import { useLanguage } from "../contexts/LanguageContext";

interface CreativeNavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function CreativeNav({ currentPage, onNavigate }: CreativeNavProps) {
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

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "sw" : "en");
  };

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
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <Sprout className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xl tracking-tight">Kijanicart</div>
              <div className="text-xs text-green-400">Agri Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick("products")}
              className={`transition-colors relative group ${
                currentPage === "products" ? "text-green-400" : "text-gray-300 hover:text-green-400"
              }`}
            >
              {t("nav.products")}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                currentPage === "products" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
            <button
              onClick={() => handleNavClick("features")}
              className={`transition-colors relative group ${
                currentPage === "features" ? "text-green-400" : "text-gray-300 hover:text-green-400"
              }`}
            >
              {t("nav.features")}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                currentPage === "features" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
            <button
              onClick={() => handleNavClick("pricing")}
              className={`transition-colors relative group ${
                currentPage === "pricing" ? "text-green-400" : "text-gray-300 hover:text-green-400"
              }`}
            >
              {t("nav.pricing")}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                currentPage === "pricing" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
            <button
              onClick={() => handleNavClick("blog")}
              className={`transition-colors relative group ${
                currentPage === "blog" || currentPage === "blogdetail" ? "text-green-400" : "text-gray-300 hover:text-green-400"
              }`}
            >
              {t("nav.blog")}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                currentPage === "blog" || currentPage === "blogdetail" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`transition-colors relative group ${
                currentPage === "contact" ? "text-green-400" : "text-gray-300 hover:text-green-400"
              }`}
            >
              {t("nav.contact")}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                currentPage === "contact" ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 hover:border-green-500/50 rounded-lg transition-colors"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">{language === "en" ? "EN" : "SW"}</span>
            </button>

            <div className="flex items-center gap-3">
              <Button 
                onClick={() => handleNavClick("signin")}
                variant="ghost" 
                className="text-gray-300 hover:text-white hover:bg-white/5"
              >
                {t("nav.signin")}
              </Button>
              <Button 
                onClick={() => handleNavClick("getstarted")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0"
              >
                {t("nav.getstarted")}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-green-500/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavClick("products")}
                className="text-left text-gray-300 hover:text-green-400 transition-colors py-2"
              >
                {t("nav.products")}
              </button>
              <button
                onClick={() => handleNavClick("features")}
                className="text-left text-gray-300 hover:text-green-400 transition-colors py-2"
              >
                {t("nav.features")}
              </button>
              <button
                onClick={() => handleNavClick("pricing")}
                className="text-left text-gray-300 hover:text-green-400 transition-colors py-2"
              >
                {t("nav.pricing")}
              </button>
              <button
                onClick={() => handleNavClick("blog")}
                className="text-left text-gray-300 hover:text-green-400 transition-colors py-2"
              >
                {t("nav.blog")}
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-left text-gray-300 hover:text-green-400 transition-colors py-2"
              >
                {t("nav.contact")}
              </button>

              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg"
              >
                <Globe className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">{language === "en" ? "English" : "Kiswahili"}</span>
              </button>

              <Button 
                onClick={() => handleNavClick("signin")}
                variant="outline" 
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                {t("nav.signin")}
              </Button>
              <Button 
                onClick={() => handleNavClick("getstarted")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
              >
                {t("nav.getstarted")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}