import React from "react";
import { Download } from "lucide-react";

interface DownloadCVButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export default function DownloadCVButton({
  className = "",
  variant = "primary",
}: DownloadCVButtonProps) {
  const getButtonStyles = () => {
    const base = "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm md:text-base cursor-pointer";
    
    if (variant === "primary") {
      return `${base} bg-teal-600 hover:bg-teal-500 text-slate-50 border border-teal-500 hover:border-teal-400 hover:shadow-teal-500/10 hover:shadow-md`;
    }
    return `${base} bg-slate-800/80 hover:bg-slate-700/80 text-teal-400 border border-slate-700 hover:border-teal-500/30`;
  };

  return (
    <a
      href="/documents/Yosafat-Juan-Reno-CV.pdf"
      download="Yosafat-Juan-Reno-CV.pdf"
      className={`${getButtonStyles()} ${className}`}
      aria-label="Download CV"
    >
      <Download className="h-4 w-4" />
      <span>Download CV</span>
    </a>
  );
}
