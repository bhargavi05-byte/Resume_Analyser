export type Department = 'all' | 'engineering' | 'ai_systems' | 'design' | 'product' | 'operations';

export interface JobOpening {
  id: string;
  title: string;
  department: Department;
  departmentName: string;
  location: string;
  type: string;
  experienceLevel: string;
  compensation: string;
  shortDescription: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export interface SubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  referenceId?: string;
  submittedAt?: string;
  candidateName?: string;
  candidateEmail?: string;
  selectedRole?: string;
  fileName?: string;
  fileSize?: string;
  errorMessage?: string;
}
