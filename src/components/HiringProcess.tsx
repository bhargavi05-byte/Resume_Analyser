import React from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Automated Application Intake',
    duration: '24 – 48 Hours',
    description: 'Your resume and portfolio are securely ingested through our n8n automation pipeline. Our senior engineering leads review your projects directly—no keyword filters or algorithmic rejections.'
  },
  {
    number: '02',
    title: 'Technical Discovery Conversation',
    duration: '30 Minutes',
    description: 'A relaxed video conversation with a prospective teammate to explore your past architecture decisions, preferred systems patterns, and what environment brings out your best work.'
  },
  {
    number: '03',
    title: 'Paid Practical Collaboration Project',
    duration: '3 – 4 Hours (Self-Paced)',
    description: 'A real-world engineering or product problem typical of our daily work. We compensate you at $150/hr for your time. No puzzle games, no live whiteboarding under pressure.'
  },
  {
    number: '04',
    title: 'Transparent Offer & Onboarding',
    duration: '2 – 3 Days',
    description: 'If there is mutual alignment, we extend a formal offer within 48 hours. Transparent salary, vetted equity grant, and comprehensive hardware provisioning sent straight to your door.'
  }
];

export const HiringProcess: React.FC = () => {
  return (
    <section id="hiring-process" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Candidate Experience</span>
            <span aria-hidden="true">·</span>
            <span>Predictable & Fast</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
            A respectful, four-stage hiring roadmap.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We value your time. We never ghost candidates, our technical reviews are paid, and we decide within days—not months.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-slate-950">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-950 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Stage {step.number} of 04</span>
                <span className="text-emerald-600 font-semibold">100% Feedback</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
