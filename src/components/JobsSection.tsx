import React, { useState } from 'react';
import { ArrowRight, MapPin, DollarSign, Briefcase, Eye } from 'lucide-react';
import { JOB_OPENINGS } from '../data/jobsData';
import { Department, JobOpening } from '../types/career';

interface JobsSectionProps {
  onSelectRoleForApply: (jobId: string) => void;
  onViewJobDetails: (job: JobOpening) => void;
}

const CATEGORIES: { id: Department; label: string }[] = [
  { id: 'all', label: 'All Openings' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'ai_systems', label: 'AI & Systems' },
  { id: 'product', label: 'Product' },
  { id: 'design', label: 'Design' },
  { id: 'operations', label: 'Operations' },
];

export const JobsSection: React.FC<JobsSectionProps> = ({
  onSelectRoleForApply,
  onViewJobDetails
}) => {
  const [activeCategory, setActiveCategory] = useState<Department>('all');

  const filteredJobs = JOB_OPENINGS.filter((job) => {
    if (activeCategory === 'all') return true;
    return job.department === activeCategory;
  });

  return (
    <section id="open-roles" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              <span>Opportunities</span>
              <span aria-hidden="true">·</span>
              <span>Global Remote</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
              Open Positions
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              We look for craft, curiosity, and intellectual rigor. Every role below has direct access to founders and technical autonomy.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-xl self-start md:self-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-slate-950 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-3">
                  <span>{job.departmentName}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.experienceLevel}</span>
                </div>

                {/* Job Title */}
                <h3 className="text-lg font-bold text-slate-950 font-display mb-2.5">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {job.shortDescription}
                </p>
              </div>

              <div>
                {/* Specs */}
                <div className="pt-4 border-t border-slate-100 space-y-2 mb-6 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      Location
                    </span>
                    <span className="font-medium text-slate-800">{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <DollarSign className="w-3.5 h-3.5 text-slate-400" />
                      Compensation
                    </span>
                    <span className="font-mono font-medium text-slate-900 tabular-nums">
                      {job.compensation}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => onViewJobDetails(job)}
                    className="px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View Specs</span>
                  </button>

                  <button
                    onClick={() => onSelectRoleForApply(job.id)}
                    className="px-3 py-2.5 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl transition-colors inline-flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Banner */}
        <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold font-display text-slate-950 mb-1">
              Don't see your specific discipline listed?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We frequently create bespoke roles for exceptional engineers, systems architects, and technical operators. Submit a general application with your portfolio.
            </p>
          </div>
          <button
            onClick={() => onSelectRoleForApply('general')}
            className="px-6 py-3 text-xs font-semibold text-slate-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors shrink-0 inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Submit Open Application</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
