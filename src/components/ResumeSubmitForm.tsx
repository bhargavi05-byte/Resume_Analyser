import React, { useState, useRef, useEffect } from 'react';
import { 
  UploadCloud, 
  FileCheck, 
  AlertCircle, 
  CheckCircle2, 
  Loader2, 
  Trash2, 
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Send
} from 'lucide-react';
import { JOB_OPENINGS } from '../data/jobsData';
import { SubmissionState } from '../types/career';

const N8N_FORM_URL = "https://cap00136105.app.n8n.cloud/form/4eabac2b-7b9e-4c7a-8658-a0351ef8cc41";

interface ResumeSubmitFormProps {
  preselectedRoleId?: string | null;
  onClearPreselection?: () => void;
}

export const ResumeSubmitForm: React.FC<ResumeSubmitFormProps> = ({
  preselectedRoleId,
  onClearPreselection
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState(preselectedRoleId || 'general');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [notes, setNotes] = useState('');
  
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  
  const [submission, setSubmission] = useState<SubmissionState>({ status: 'idle' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync when preselectedRoleId changes
  useEffect(() => {
    if (preselectedRoleId) {
      setSelectedRole(preselectedRoleId);
    }
  }, [preselectedRoleId]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (uploadedFile: File) => {
    const allowedExtensions = ['pdf', 'doc', 'docx', 'txt', 'rtf'];
    const extension = uploadedFile.name.split('.').pop()?.toLowerCase() || '';
    
    // Check file size (max 10MB)
    if (uploadedFile.size > 10 * 1024 * 1024) {
      setValidationErrors((prev) => ({
        ...prev,
        file: 'File size exceeds 10MB limit. Please upload a smaller resume.'
      }));
      return;
    }

    if (!allowedExtensions.includes(extension)) {
      setValidationErrors((prev) => ({
        ...prev,
        file: 'Supported formats: PDF, DOC, DOCX, TXT (up to 10MB)'
      }));
      return;
    }

    setValidationErrors((prev) => {
      const copy = { ...prev };
      delete copy.file;
      return copy;
    });
    setFile(uploadedFile);
  };

  const loadSampleResume = () => {
    // Generate a realistic sample text file for instant testing
    const sampleContent = `================================================
CANDIDATE CURRICULUM VITAE
Candidate Name: ${name.trim() || 'Alex Morgan'}
Email: ${email.trim() || 'alex.morgan.candidate@example.com'}
Target Role: ${selectedRole}
Submitted via Vektor Career Portal (n8n Webhook Pipeline)
Date: ${new Date().toISOString()}

SUMMARY
Accomplished software engineer with 6+ years specializing in distributed systems,
workflow automation engines (n8n, temporal), modern React TypeScript frontends,
and cloud infrastructures.

CORE SKILLS
- Languages: TypeScript, Node.js, Python, SQL, Go
- Frameworks: React 19, Tailwind CSS, Express, Next.js
- Tools & Automation: n8n, Docker, Redis, PostgreSQL, Git
- Methodologies: Asynchronous Systems, CI/CD, Event-Driven Architecture

EXPERIENCE
Staff Engineer · Automation Dynamics (2022 - Present)
- Architected enterprise webhook orchestration processing 5M+ payloads daily.
- Improved pipeline reliability from 99.4% to 99.98% using idempotent queues.

Senior Full-Stack Developer · Cloudworks Studio (2019 - 2022)
- Built interactive developer dashboards and customer-facing workflow builders.
================================================`;

    const blob = new Blob([sampleContent], { type: 'text/plain' });
    const sampleFile = new File([blob], `${(name || 'Alex_Morgan').replace(/\s+/g, '_')}_Resume.txt`, {
      type: 'text/plain',
      lastModified: Date.now()
    });

    if (!name) setName('Alex Morgan');
    if (!email) setEmail('alex.morgan.candidate@example.com');
    setFile(sampleFile);
    setValidationErrors({});
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please provide a valid email address';
    }

    if (!file) {
      errors.file = 'Please upload your resume document';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmission({ status: 'submitting' });

    try {
      // Build FormData exactly as expected by the n8n form schema:
      // field-0: name
      // field-1: email
      // field-2: Upload_Resume (file)
      const formData = new FormData();
      formData.append('field-0', name.trim());
      formData.append('field-1', email.trim());
      
      if (file) {
        formData.append('field-2', file, file.name);
      }

      // If user specified role or portfolio, we can append metadata fields
      const roleObj = JOB_OPENINGS.find((r) => r.id === selectedRole);
      const roleTitle = roleObj ? roleObj.title : 'General Application';
      formData.append('target_role', roleTitle);
      if (portfolioUrl.trim()) formData.append('portfolio_url', portfolioUrl.trim());
      if (notes.trim()) formData.append('candidate_notes', notes.trim());

      // Send POST request directly to the n8n webhook URL
      const response = await fetch(N8N_FORM_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok || response.status === 200 || response.status === 204) {
        const refId = `VKTR-${Math.floor(100000 + Math.random() * 900000)}`;
        setSubmission({
          status: 'success',
          referenceId: refId,
          submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          candidateName: name.trim(),
          candidateEmail: email.trim(),
          selectedRole: roleTitle,
          fileName: file?.name,
          fileSize: file ? formatFileSize(file.size) : undefined
        });
      } else {
        // If n8n returns an error response
        const text = await response.text().catch(() => '');
        throw new Error(text || `Submission returned status ${response.status}`);
      }
    } catch (err: any) {
      console.error('Error submitting resume to n8n:', err);
      // Attempt fallback: if fetch failed due to ad-blockers or strict local restrictions,
      // offer clear retry or direct n8n window launch
      setSubmission({
        status: 'error',
        errorMessage: err?.message || 'Unable to establish connection to the workflow webhook. Please check your internet or submit via the direct link.'
      });
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSelectedRole('general');
    setPortfolioUrl('');
    setNotes('');
    setFile(null);
    setValidationErrors({});
    setSubmission({ status: 'idle' });
    if (onClearPreselection) onClearPreselection();
  };

  return (
    <section id="submit-resume" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
            <span>Direct Talent Intake</span>
            <span aria-hidden="true">·</span>
            <span>Live n8n Automation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display [text-wrap:balance]">
            Submit your resume and join our engineering collective.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
            Every submission triggers our automated intake workflow, dispatching your profile directly to our hiring team for human review within 48 hours.
          </p>
        </div>

        {/* n8n Status Banner */}
        <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-800">Connected Endpoint:</span>
            <span className="font-mono text-slate-500 truncate max-w-xs sm:max-w-md">
              n8n Cloud Webhook Pipeline
            </span>
          </div>
          <a
            href={N8N_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-slate-700 hover:underline transition-colors shrink-0"
          >
            <span>Open raw form in new tab</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Success Confirmation View */}
        {submission.status === 'success' ? (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              Submission Confirmed
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mb-3">
              Your resume has been successfully recorded.
            </h3>
            <p className="text-slate-600 max-w-lg mx-auto text-sm leading-relaxed mb-8">
              Thank you, <strong className="text-slate-900">{submission.candidateName}</strong>. Your profile has entered our automated n8n recruitment queue. A confirmation email has been logged to <strong className="text-slate-900">{submission.candidateEmail}</strong>.
            </p>

            {/* Submission Receipt Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 max-w-md mx-auto text-left shadow-2xs mb-8">
              <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4 pb-2 border-b border-slate-100">
                Application Intake Receipt
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Reference ID:</span>
                  <span className="font-mono font-bold text-slate-900">{submission.referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Role:</span>
                  <span className="font-medium text-slate-900">{submission.selectedRole}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Attached File:</span>
                  <span className="font-mono text-slate-800 truncate max-w-[180px]">{submission.fileName}</span>
                </div>
                {submission.fileSize && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">File Size:</span>
                    <span className="font-mono text-slate-700">{submission.fileSize}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">Received At:</span>
                  <span className="font-mono text-slate-700">{submission.submittedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Next Step:</span>
                  <span className="font-semibold text-emerald-600">Review within 48h</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-slate-950 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Submit Another Application
              </button>
              <a
                href="#open-roles"
                className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors inline-flex items-center justify-center"
              >
                Browse Other Roles
              </a>
            </div>
          </div>
        ) : (
          /* Main Interactive Form */
          <form 
            onSubmit={handleSubmit} 
            noValidate
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs"
          >
            {/* Quick Sample Resume Loader helper button */}
            <div className="mb-8 p-4 bg-slate-50/80 border border-slate-200 rounded-xl flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs text-slate-600">
                  Testing this app? Click to autofill candidate data and generate a sample CV.
                </span>
              </div>
              <button
                type="button"
                onClick={loadSampleResume}
                className="text-xs font-semibold text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
              >
                Autofill Test Candidate
              </button>
            </div>

            {submission.status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-xs text-red-800">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold mb-1">Submission encountered an issue</div>
                  <p>{submission.errorMessage}</p>
                  <div className="mt-2 flex gap-3">
                    <button
                      type="submit"
                      className="underline font-semibold hover:text-red-950 cursor-pointer"
                    >
                      Retry Submission
                    </button>
                    <span>·</span>
                    <a
                      href={N8N_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-semibold hover:text-red-950 inline-flex items-center gap-1"
                    >
                      Submit directly via n8n Form <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="field-0" className="block text-xs font-semibold text-slate-900 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="field-0"
                    name="field-0"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (validationErrors.name) {
                        setValidationErrors((prev) => {
                          const c = { ...prev };
                          delete c.name;
                          return c;
                        });
                      }
                    }}
                    placeholder="e.g. Maya Lin"
                    className={`w-full px-4 py-3 text-sm bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all ${
                      validationErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                    }`}
                  />
                  {validationErrors.name && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {validationErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="field-1" className="block text-xs font-semibold text-slate-900 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="field-1"
                    name="field-1"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (validationErrors.email) {
                        setValidationErrors((prev) => {
                          const c = { ...prev };
                          delete c.email;
                          return c;
                        });
                      }
                    }}
                    placeholder="e.g. maya.lin@example.com"
                    className={`w-full px-4 py-3 text-sm bg-white border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all ${
                      validationErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300'
                    }`}
                  />
                  {validationErrors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {validationErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Target Position & Portfolio/Link */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role-select" className="block text-xs font-semibold text-slate-900 mb-2">
                    Target Role / Specialty
                  </label>
                  <select
                    id="role-select"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all"
                  >
                    <option value="general">General Application / Unlisted Role</option>
                    {JOB_OPENINGS.map((job) => (
                      <option key={job.id} value={job.id}>
                        {job.title} ({job.departmentName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="portfolio-url" className="block text-xs font-semibold text-slate-900 mb-2">
                    Portfolio / GitHub / LinkedIn <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <input
                    id="portfolio-url"
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://github.com/yourhandle"
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all"
                  >
                  </input>
                </div>
              </div>

              {/* Row 3: Resume Document Upload (field-2 in n8n) */}
              <div>
                <label className="block text-xs font-semibold text-slate-900 mb-2">
                  Upload Resume / CV Document <span className="text-rose-500">*</span>
                </label>
                
                <input
                  ref={fileInputRef}
                  id="field-2"
                  name="field-2"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.rtf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!file ? (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                      isDragging
                        ? 'border-slate-950 bg-slate-100/70 scale-[0.99]'
                        : validationErrors.file
                        ? 'border-red-400 bg-red-50/30 hover:border-red-500'
                        : 'border-slate-300 bg-slate-50/50 hover:border-slate-400 hover:bg-slate-100/50'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-2xs border border-slate-200 flex items-center justify-center mx-auto mb-3 text-slate-700">
                      <UploadCloud className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mb-1">
                      Click to upload or drag & drop your resume
                    </div>
                    <div className="text-xs text-slate-500">
                      PDF, DOCX, DOC, or TXT · Maximum file size 10MB
                    </div>
                  </div>
                ) : (
                  <div className="border border-slate-200 bg-slate-50 rounded-xl p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-slate-900 truncate">
                          {file.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500">
                          {formatFileSize(file.size)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-xs font-semibold text-slate-700 hover:text-slate-950 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 transition-colors cursor-pointer"
                      >
                        Change
                      </button>
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        aria-label="Remove uploaded resume"
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {validationErrors.file && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {validationErrors.file}
                  </p>
                )}
              </div>

              {/* Row 4: Optional Candidate Note */}
              <div>
                <label htmlFor="candidate-notes" className="block text-xs font-semibold text-slate-900 mb-2">
                  Additional Note or Context <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                </label>
                <textarea
                  id="candidate-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share anything you'd like our engineers to know about your background, projects, or timezone preferences..."
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 transition-all resize-y"
                />
              </div>

              {/* Privacy & Compliance Assurance */}
              <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  Your information is processed strictly for candidate evaluation and never shared with third parties. All files are encrypted during transit to our secure n8n instance.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Required fields are marked with <span className="text-rose-500">*</span>
                </div>

                <button
                  type="submit"
                  disabled={submission.status === 'submitting'}
                  className="px-8 py-3.5 text-sm font-semibold text-white bg-slate-950 rounded-xl hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submission.status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting to n8n Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Application</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
