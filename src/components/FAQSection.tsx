import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How does the n8n resume submission pipeline process my application?',
    answer: 'When you submit the form on this website, your name, contact information, and resume document are transmitted directly to our secure n8n cloud webhook (URL: https://cap00136105.app.n8n.cloud/form/4eabac2b-7b9e-4c7a-8658-a0351ef8cc41). The workflow logs your submission, generates an intake receipt, parses your metadata, and notifies our engineering leads in real-time.'
  },
  {
    question: 'What resume formats and file sizes are supported?',
    answer: 'We support PDF (.pdf), Microsoft Word (.docx, .doc), and plain text (.txt, .rtf) formats up to 10MB. We recommend PDF for the cleanest visual formatting across all platforms.'
  },
  {
    question: 'Do you hire candidates internationally or only within specific timezones?',
    answer: 'We hire globally. We currently have core team members across 14 countries spanning the Americas, Europe, and Asia-Pacific. We operate with an asynchronous-first culture, requiring only a 3-hour overlap window with UTC±4.'
  },
  {
    question: 'How quickly will I hear back after submitting?',
    answer: 'We maintain a strict 48-business-hour SLA for every resume submitted through our portal. You will receive an automated email confirmation as soon as your resume is ingested, followed by personalized feedback from a hiring manager.'
  },
  {
    question: 'Is the practical collaboration project really compensated?',
    answer: 'Yes, absolutely. We respect your professional expertise. If you advance to the practical take-home or work session stage, we pay a flat $600 stipend ($150/hr for 4 hours) regardless of whether we make an offer.'
  }
];

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            <span>Clear Answers</span>
            <span aria-hidden="true">·</span>
            <span>Hiring FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our recruitment pipeline, compensation philosophy, and remote operations.
          </p>
        </div>

        {/* Accordions */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 text-slate-900 hover:text-slate-700 transition-colors cursor-pointer group"
                >
                  <span className="text-base font-semibold font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-slate-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm text-slate-600 leading-relaxed pr-6 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
