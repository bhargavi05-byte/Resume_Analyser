import React from 'react';
import teamCollabImage from '../assets/images/team_collaboration_space_1790759088784.jpg';
import engLabImage from '../assets/images/engineering_culture_lab_1790759105309.jpg';

export const CultureBento: React.FC = () => {
  return (
    <section id="culture" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Operating Principles</span>
            <span aria-hidden="true">·</span>
            <span>How We Build</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
            A sanctuary for high-agency engineers and systems thinkers.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We deliberately design our organization to minimize distraction, reward deep technical craft, and give every contributor real ownership.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 (Span 2): Asynchronous Collaboration */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-8 sm:p-10">
              <div className="text-xs font-mono font-semibold text-slate-400 mb-2">
                01. ASYNCHRONOUS MASTERY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-3">
                Calendar zero: we treat four-hour unbroken focus blocks as sacred.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                We default to written architecture proposals, short loom walk-throughs, and clear pull requests over endless Zoom meetings. Your time belongs to thinking, coding, and designing.
              </p>
            </div>
            <div className="h-64 sm:h-72 w-full overflow-hidden border-t border-slate-200 relative group">
              <img
                src={teamCollabImage}
                alt="Multidisciplinary engineering and product design team collaborating in an open modern studio"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-white text-xs font-medium">
                Annual cross-functional offsite & sync workshop
              </div>
            </div>
          </div>

          {/* Card 2 (Span 1): Radical Transparency & Real Equity */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-400 mb-2">
                02. EQUAL ACCESS & EQUITY
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-3">
                Published bands & meaningful ownership.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Compensation is standardized, location-agnostic, and transparent. Every full-time hire receives direct equity with extended 10-year exercise windows.
              </p>
            </div>

            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Vesting Schedule</span>
                <span className="font-mono font-medium text-slate-900">4-Year / 1-Yr Cliff</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Exercise Window</span>
                <span className="font-mono font-medium text-slate-900">10 Years Post-Exit</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Profit Allocation</span>
                <span className="font-mono font-medium text-slate-900">Annual Studio Pool</span>
              </div>
            </div>
          </div>

          {/* Card 3 (Span 1): Craft & Hardware */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-8">
              <div className="text-xs font-mono font-semibold text-slate-400 mb-2">
                03. HARDWARE & ENVIRONMENT
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-950 mb-2">
                World-class tools for world-class work.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Order whatever workstation, mechanical keyboard, or dual 5K monitors make you fastest. Refreshed every 24 months.
              </p>
            </div>
            <div className="h-48 sm:h-52 w-full overflow-hidden border-t border-slate-200">
              <img
                src={engLabImage}
                alt="High-spec modern developer engineering workstation with mechanical keyboard and clean studio lighting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 4 (Span 2): Distributed Autonomy */}
          <div className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-slate-400 mb-2">
                04. SYSTEMIC THINKING & AUTOMATION
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-3">
                Automate the repetitive; obsess over the exceptional.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                We practice what we build. Internal pipelines—from resume triage to customer deployments—are wired with deterministic n8n automations, leaving humans to do the creative and strategic work.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <div className="font-bold text-slate-950">Zero Friction</div>
                <div className="text-slate-500 mt-0.5">Automated CI/CD deployments</div>
              </div>
              <div>
                <div className="font-bold text-slate-950">Deterministic Ops</div>
                <div className="text-slate-500 mt-0.5">Event-driven infrastructure</div>
              </div>
              <div>
                <div className="font-bold text-slate-950">Living Docs</div>
                <div className="text-slate-500 mt-0.5">Self-updating architectural specs</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
