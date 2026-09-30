/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JobsSection } from './components/JobsSection';
import { CultureBento } from './components/CultureBento';
import { HiringProcess } from './components/HiringProcess';
import { ResumeSubmitForm } from './components/ResumeSubmitForm';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { JobModal } from './components/JobModal';
import { JobOpening } from './types/career';

export default function App() {
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobOpening | null>(null);
  const [preselectedRoleId, setPreselectedRoleId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreRoles = () => {
    scrollToSection('open-roles');
  };

  const handleSubmitResumeClick = () => {
    scrollToSection('submit-resume');
  };

  const handleSelectRoleForApply = (jobId: string) => {
    setPreselectedRoleId(jobId);
    scrollToSection('submit-resume');
  };

  const handleViewJobDetails = (job: JobOpening) => {
    setSelectedJobForModal(job);
  };

  const handleApplyFromModal = (jobId: string) => {
    setPreselectedRoleId(jobId);
    scrollToSection('submit-resume');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <Navbar onSubmitResumeClick={handleSubmitResumeClick} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onExploreRoles={handleExploreRoles} 
          onSubmitResume={handleSubmitResumeClick} 
        />
        
        <JobsSection
          onSelectRoleForApply={handleSelectRoleForApply}
          onViewJobDetails={handleViewJobDetails}
        />

        <CultureBento />

        <HiringProcess />

        <ResumeSubmitForm
          preselectedRoleId={preselectedRoleId}
          onClearPreselection={() => setPreselectedRoleId(null)}
        />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onSubmitResumeClick={handleSubmitResumeClick} />

      {/* Job Details Modal */}
      <JobModal
        job={selectedJobForModal}
        onClose={() => setSelectedJobForModal(null)}
        onApply={handleApplyFromModal}
      />
    </div>
  );
}
