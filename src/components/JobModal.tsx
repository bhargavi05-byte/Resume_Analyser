import React, { useEffect } from 'react';
import { X, ArrowRight, Check, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { JobOpening } from '../types/career';

interface JobModalProps {
  job: JobOpening | null;
  onClose: () => void;
  onApply: (jobId: string) => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, onClose, onApply }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (job) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [job, onClose]);

  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-50/50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1.5">
              <span>{job.departmentName}</span>
              <span aria-hidden="true">·</span>
              <span>{job.experienceLevel}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              {job.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                {job.type}
              </span>
              <span className="flex items-center gap-1 font-mono font-semibold text-slate-900">
                <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                {job.compensation}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200/50 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 font-display">
              Role Overview
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {job.overview}
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 font-display">
              Key Responsibilities
            </h3>
            <ul className="space-y-2.5">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 font-display">
              Candidate Qualifications
            </h3>
            <ul className="space-y-2.5">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal">
                  <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 font-display">
              Role Benefits & Perks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {job.benefits.map((benefit, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-xs text-slate-700 font-medium">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Applications are processed through our direct n8n candidate pipeline.
          </div>
          <button
            onClick={() => {
              onClose();
              onApply(job.id);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-slate-950 rounded-xl hover:bg-slate-800 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Apply for this Role</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
