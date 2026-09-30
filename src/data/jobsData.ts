import { JobOpening } from '../types/career';

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'eng-automation-lead',
    title: 'Staff Workflow Automation Engineer',
    department: 'engineering',
    departmentName: 'Engineering & Infrastructure',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experienceLevel: 'Staff / 6+ yrs',
    compensation: '$180,000 – $225,000 · 0.25% Equity',
    shortDescription: 'Architect resilient event-driven pipelines, webhook orchestration engines, and high-throughput n8n workflow systems.',
    overview: 'As our Staff Workflow Automation Engineer, you will own the architectural backbone connecting our distributed services, third-party integrations, and automated pipelines. You will optimize our internal workflow engines and build mission-critical automations processing millions of daily events.',
    responsibilities: [
      'Design, maintain, and scale distributed workflow pipelines using n8n, Node.js, and TypeScript',
      'Engineer robust webhook ingestion layers with backpressure, retry queues, and idempotent processing',
      'Collaborate directly with cross-functional teams to automate complex operational and engineering handoffs',
      'Establish monitoring, telemetry, and automated alerting for orchestration clusters'
    ],
    requirements: [
      '6+ years of backend or systems integration engineering experience',
      'Deep hands-on expertise with workflow engines (n8n, Temporal, or Airflow) and REST/GraphQL APIs',
      'Strong proficiency in TypeScript / Node.js and distributed queue architectures (Redis, BullMQ, Kafka)',
      'Obsessive dedication to reliability, error recovery, and data integrity'
    ],
    benefits: [
      'Comprehensive worldwide healthcare & dental coverage',
      'Unlimited paid time off with mandatory 25-day minimum',
      '$4,000 home office hardware allowance refreshed every two years',
      'Annual $2,500 learning and conference budget'
    ]
  },
  {
    id: 'eng-fullstack-sr',
    title: 'Senior Full-Stack Engineer (React & TypeScript)',
    department: 'engineering',
    departmentName: 'Engineering & Infrastructure',
    location: 'Remote (Americas / EMEA)',
    type: 'Full-Time',
    experienceLevel: 'Senior / 4+ yrs',
    compensation: '$160,000 – $195,000 · 0.20% Equity',
    shortDescription: 'Build high-performance web interfaces, modular component libraries, and low-latency API layers.',
    overview: 'Join our core product team to craft distinctive, zero-latency user experiences. You will partner with designers and backend engineers to build resilient frontend systems with exceptional attention to typography, performance, and accessibility.',
    responsibilities: [
      'Develop modern, responsive web applications using React 19, TypeScript, and modern styling architectures',
      'Architect resilient state synchronization and optimistic UI patterns',
      'Maintain rigorous component accessibility (WCAG AA) and test suites',
      'Profile web applications to ensure sub-100ms interaction latency and optimal Core Web Vitals'
    ],
    requirements: [
      '4+ years building production-grade web applications with modern React and TypeScript',
      'Strong eye for visual rhythm, typography, and micro-interactions',
      'Deep understanding of browser performance, rendering lifecycles, and modern bundlers (Vite)',
      'Experience working in remote-first, asynchronous teams'
    ],
    benefits: [
      'Flexible working hours across timezones',
      'Competitive equity grant in top-tier growth studio',
      'Wellness stipend for gym, mental health, or coworking access',
      'Parental leave: 16 weeks paid for all new parents'
    ]
  },
  {
    id: 'ai-lead-systems',
    title: 'Lead AI Systems & Agent Architect',
    department: 'ai_systems',
    departmentName: 'AI & Autonomous Systems',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experienceLevel: 'Lead / 5+ yrs',
    compensation: '$190,000 – $240,000 · 0.35% Equity',
    shortDescription: 'Lead the design of autonomous agent architectures, multi-step LLM reasoning loops, and structured evaluation suites.',
    overview: 'We are pioneering deterministic AI workflows that execute mission-critical tasks without hallucination. In this role, you will create production-grade agentic frameworks that bridge large models with real-world databases and external API systems.',
    responsibilities: [
      'Architect multi-agent collaboration systems and stateful reasoning loops',
      'Implement real-time grounding, tool execution, and guardrail validation',
      'Build automated benchmark pipelines to stress-test prompt resilience and output accuracy',
      'Partner with product leads to turn experimental prototypes into robust production services'
    ],
    requirements: [
      '5+ years in software engineering with 2+ years dedicated to production LLM architectures',
      'Deep experience with tool-calling, embeddings, vector indexing, and structured outputs',
      'Proficiency in Python and TypeScript with production deployment experience',
      'Pragmatic engineering mindset prioritizing reliability and cost-efficiency over hype'
    ],
    benefits: [
      'Direct compute budget for research and personal experimentation',
      'Annual team retreats in inspiring international locations',
      'Top-tier Apple or Linux developer setup',
      'Full health, vision, and dental insurance'
    ]
  },
  {
    id: 'des-senior-product',
    title: 'Senior Product Designer (Systems & Craft)',
    department: 'design',
    departmentName: 'Design & Experience',
    location: 'Remote (EMEA / Americas)',
    type: 'Full-Time',
    experienceLevel: 'Senior / 4+ yrs',
    compensation: '$150,000 – $185,000 · 0.20% Equity',
    shortDescription: 'Define product visual language, multi-platform design tokens, and deeply intuitive interaction models.',
    overview: 'Design at Vektor is not decoration—it is functional clarity. You will collaborate directly with engineers to craft refined, tactile interfaces that respect user focus, eliminate clutter, and elevate productivity.',
    responsibilities: [
      'Lead product design from initial customer discovery to high-fidelity implementation specs',
      'Expand and maintain our unified design token system and Figma component library',
      'Create high-fidelity interactive prototypes to validate workflows before development',
      'Uphold strict typographic discipline, information density, and accessibility standards'
    ],
    requirements: [
      'Demonstrated portfolio of shipped web applications showcasing thoughtful systems thinking',
      'Mastery of Figma, component variants, and design token architectures',
      'Fundamental understanding of frontend markup (HTML/CSS) and layout mechanics',
      'Ability to articulate trade-offs clearly and write concise product copy'
    ],
    benefits: [
      'Generous hardware allowance for displays, tablets, and peripherals',
      'Comprehensive global healthcare',
      'Monthly book & design resource stipend',
      'Company matching 401(k) / international pension equivalent'
    ]
  },
  {
    id: 'prod-technical-pm',
    title: 'Technical Product Lead (Integration Platforms)',
    department: 'product',
    departmentName: 'Product Strategy',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experienceLevel: 'Lead / 5+ yrs',
    compensation: '$170,000 – $210,000 · 0.25% Equity',
    shortDescription: 'Drive roadmap, developer developer experience, and integration ecosystems for high-speed workflow platforms.',
    overview: 'As Technical Product Lead, you will bridge the gap between technical architecture and customer outcomes. You will speak the language of engineers and enterprise partners, translating complex workflow problems into streamlined product roadmaps.',
    responsibilities: [
      'Define product strategy and roadmap for developer integration tools and automated connectors',
      'Conduct rigorous user research with software architects and automation specialists',
      'Author unambiguous technical PRDs, user stories, and acceptance criteria',
      'Monitor key adoption metrics, API throughput, and developer retention'
    ],
    requirements: [
      '5+ years leading product initiatives in developer tools, API platforms, or SaaS infrastructure',
      'Previous background as a software engineer or strong ability to read and write code',
      'Exceptional written communication skills in an asynchronous environment',
      'Track record of shipping products with measurable commercial impact'
    ],
    benefits: [
      'Equity ownership in a high-margin profitable studio',
      'Flexible remote schedule with minimal meetings',
      'Continuous learning and executive coaching access',
      'Premium health, dental, and life coverage'
    ]
  },
  {
    id: 'ops-talent-systems',
    title: 'People Operations & Talent Systems Lead',
    department: 'operations',
    departmentName: 'Operations & People',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experienceLevel: 'Senior / 4+ yrs',
    compensation: '$135,000 – $165,000 · 0.15% Equity',
    shortDescription: 'Manage international remote employment infrastructure, transparent onboarding, and automated hiring workflows.',
    overview: 'Help us scale a truly global, remote-first team across 15+ jurisdictions. You will manage our employer of record infrastructure, optimize our automated n8n recruitment pipelines, and ensure an empathetic, prompt candidate experience.',
    responsibilities: [
      'Manage global hiring pipelines, contract administration, and compliant international onboarding',
      'Supervise the automated recruitment intake system, ensuring candidate reviews happen within 48h',
      'Develop transparent compensation bands and career progression frameworks',
      'Organize bi-annual team offsites and foster inclusive asynchronous communication rituals'
    ],
    requirements: [
      '4+ years in People Ops or Talent Operations within distributed or high-growth tech companies',
      'Familiarity with global payroll/EOR platforms (Deel, Remote) and hiring compliance',
      'Strong affinity for workflow automation tools (n8n, Zapier, Airtable) to automate admin tasks',
      'High emotional intelligence, discretion, and problem-solving abilities'
    ],
    benefits: [
      'Global healthcare and mental wellness perks',
      'Annual team retreats in destinations like Lisbon, Tokyo, and Montreal',
      'Generous parental leave and family support benefits',
      'Home office ergonomics budget'
    ]
  }
];
