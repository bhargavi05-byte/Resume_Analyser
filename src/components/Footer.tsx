import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onSubmitResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSubmitResumeClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold font-display text-white tracking-tight">
              Vektor
            </span>
            <p className="mt-3 text-slate-400 max-w-sm text-xs leading-relaxed">
              An engineering and technology studio dedicated to building high-throughput workflow engines, autonomous agent systems, and resilient web architectures.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>n8n Workflow Ingestion Active</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Career Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#open-roles" className="hover:text-white transition-colors">
                  Open Positions
                </a>
              </li>
              <li>
                <a href="#culture" className="hover:text-white transition-colors">
                  Culture & Operating Principles
                </a>
              </li>
              <li>
                <a href="#hiring-process" className="hover:text-white transition-colors">
                  Hiring Roadmap
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div>
            <div className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Direct Application
            </div>
            <p className="text-slate-400 mb-4 text-xs leading-relaxed">
              Ready to submit your CV directly to our engineering review queue?
            </p>
            <button
              onClick={onSubmitResumeClick}
              className="px-4 py-2.5 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Submit Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Vektor Dynamics Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Powered by n8n Cloud Automation</span>
            <a
              href="https://cap00136105.app.n8n.cloud/form/4eabac2b-7b9e-4c7a-8658-a0351ef8cc41"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <span>Direct Form URL</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
