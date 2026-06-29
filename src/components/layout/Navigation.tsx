"use client";

import { useState, useEffect } from "react";
import { Menu, X, Network } from "lucide-react";
import DownloadCVButton from "@/components/ui/DownloadCVButton";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ hasCV = false }: { hasCV?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for tracking active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger when section is in the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Update hash in URL
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
        >
          <div className="p-1.5 bg-teal-500/10 rounded-lg text-teal-400 group-hover:bg-teal-500/20 transition-colors">
            <Network className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-teal-400 transition-colors font-sans">
            YJR<span className="text-teal-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1.5 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-1 ${
                    activeSection === link.href.substring(1)
                      ? "text-teal-400"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {hasCV && (
            <>
              <div className="h-4 w-px bg-slate-800" />
              <DownloadCVButton variant="secondary" className="!py-2 !px-4 !text-xs md:!text-sm" />
            </>
          )}
        </nav>

        {/* Mobile Menu Toggler */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[60px] bottom-0 z-30 bg-slate-950/98 backdrop-blur-lg border-t border-slate-900 transition-all duration-300 md:hidden flex flex-col justify-between p-6 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block py-3 text-lg font-medium transition-colors border-b border-slate-900 ${
                    activeSection === link.href.substring(1)
                      ? "text-teal-400 pl-2 border-l-2 border-l-teal-500 border-b-0"
                      : "text-slate-300 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 mt-auto">
          {hasCV && <DownloadCVButton variant="primary" className="w-full" />}
          <p className="text-center text-xs text-slate-500 font-sans">
            Yosafat Juan Reno &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </header>
  );
}
