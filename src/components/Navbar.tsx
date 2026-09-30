import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onSubmitResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSubmitResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <a 
          href="#" 
          className="text-2xl font-bold tracking-tight text-slate-950 font-display hover:opacity-85 transition-opacity"
        >
          Vektor
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a 
            href="#open-roles" 
            className="hover:text-slate-950 transition-colors py-1"
          >
            Open Roles
          </a>
          <a 
            href="#culture" 
            className="hover:text-slate-950 transition-colors py-1"
          >
            Culture & Values
          </a>
          <a 
            href="#hiring-process" 
            className="hover:text-slate-950 transition-colors py-1"
          >
            Hiring Process
          </a>
          <a 
            href="#submit-resume" 
            className="hover:text-slate-950 transition-colors py-1"
          >
            Resume Portal
          </a>
          <a 
            href="#faq" 
            className="hover:text-slate-950 transition-colors py-1"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSubmitResumeClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>Submit Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a
              href="#open-roles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Open Roles
            </a>
            <a
              href="#culture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Culture & Values
            </a>
            <a
              href="#hiring-process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Hiring Process
            </a>
            <a
              href="#submit-resume"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              Resume Portal
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-slate-950"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSubmitResumeClick();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-white bg-slate-950 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Submit Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
