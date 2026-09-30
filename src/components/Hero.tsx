import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import heroImage from '../assets/images/hero_modern_workspace_1790759063484.jpg';

interface HeroProps {
  onExploreRoles: () => void;
  onSubmitResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRoles, onSubmitResume }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/30 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
          <span>Talent & Engineering Studio</span>
          <span aria-hidden="true">·</span>
          <span>Automated Intake via n8n</span>
        </div>

        {/* Marquee Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.08] [text-wrap:balance]">
            Build the frontier of intelligent workflows and autonomous software systems.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            We are a multidisciplinary collective of systems engineers, designers, and researchers.
            We eliminate bureaucracy, practice radical transparency, and ship software that handles critical workflows worldwide.
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreRoles}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 rounded-xl hover:bg-slate-800 transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Open Roles</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onSubmitResume}
            className="px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors shadow-2xs inline-flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-600" />
            <span>Fast-Track Resume Drop</span>
          </button>
        </div>

        {/* Quantitative Rigor Proof Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 tabular-nums">
              &lt; 48 hrs
            </div>
            <div className="mt-1 text-xs text-slate-500 font-medium">
              Application Review SLA
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 tabular-nums">
              100%
            </div>
            <div className="mt-1 text-xs text-slate-500 font-medium">
              Human Peer Review
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 tabular-nums">
              14 Hubs
            </div>
            <div className="mt-1 text-xs text-slate-500 font-medium">
              Worldwide Remote Team
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-950 tabular-nums">
              $10,000
            </div>
            <div className="mt-1 text-xs text-slate-500 font-medium">
              Annual Setup & Stipend
            </div>
          </div>
        </div>

        {/* Dominant Hero Image Focal Carrier */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm relative group aspect-[16/9] max-h-[520px]">
          <img
            src={heroImage}
            alt="Modern architectural technology and engineering workspace with natural lighting"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white pointer-events-none">
            <div className="max-w-md">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-300">
                Studio Headquarters & Remote Culture
              </div>
              <div className="text-lg font-semibold font-display mt-0.5">
                Engineered for deep focus and async execution.
              </div>
            </div>
            <div className="hidden sm:block text-xs text-slate-300 font-mono">
              Coordinates · 37.7749° N, 122.4194° W
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
