"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
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

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
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
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080C14]/80 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Yosafat Juan Reno Portfolio"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Terminal className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight font-sans text-slate-100 group-hover:text-cyan-300 transition-colors">
                Juan Reno
              </span>
              <span className="text-[10px] font-mono tracking-wider uppercase text-cyan-400/80 font-medium">
                Infrastructure & Networks
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            {hasCV && <DownloadCVButton variant="secondary" />}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50 transition-all shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Contact Direct</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#080C14]/95 backdrop-blur-2xl border-b border-cyan-500/20 p-6 shadow-2xl flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-mono font-semibold transition-all ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-900/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
