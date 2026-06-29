"use client";

import { ArrowUp, Mail } from "lucide-react";
import { Linkedin, Instagram } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column: Name & Tagline */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-xl font-bold text-slate-100 font-sans">
              Yosafat Juan Reno
            </h2>
            <p className="mt-1 text-sm text-teal-400 font-medium">
              {personalInfo.title}
            </p>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              &ldquo;{personalInfo.supportingStatement}&rdquo;
            </p>
          </div>

          {/* Right Column: Links & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
            
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 bg-teal-500/5 hover:bg-teal-500/10 border border-teal-500/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

        <hr className="my-8 border-slate-900" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-slate-400 transition-colors">Experience</a>
            <a href="#expertise" className="hover:text-slate-400 transition-colors">Expertise</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
