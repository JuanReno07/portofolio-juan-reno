"use client";

import { ArrowUp } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05080E] border-t border-slate-800/80 py-12 md:py-16 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Column: Name & Tagline */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-xl font-extrabold text-slate-100 font-sans tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-cyan-400 font-mono font-semibold">
              {personalInfo.title}
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
              &ldquo;{personalInfo.supportingStatement}&rdquo;
            </p>
          </div>

          {/* Right Column: Links & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {personalInfo.instagram && (
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <hr className="my-8 border-slate-800/80" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
