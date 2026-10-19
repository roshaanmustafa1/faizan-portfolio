export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  description: string;
}

export interface CapabilityProject {
  id: string;
  title: string;
  category: "Accounts Receivable" | "Claims" | "Denials" | "Operations";
  description: string;
  image: string;
  size: "big" | "mid" | "normal";
  details: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  points: string[];
}

export interface ApproachItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  author: string;
  role: string;
}

export interface CapabilityPackage {
  id: string;
  name: string;
  category: string;
  description: string;
  includes: string[];
  recommended?: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  month: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Faizan Karamat",
    shortName: "Faizan",
    title: "Medical Billing & Revenue Cycle Management (RCM) Specialist",
    currentPosition: "Assistant Manager Billing and Operations",
    currentOrganization: "F&A Global",
    experienceYears: "5+",
    rolesCount: "4",
    orgsCount: "3",
    specialization: "U.S. Healthcare RCM Specialization",
    location: "Lahore, Punjab, Pakistan",
    email: "Faizankaramat13@gmail.com",
    phone: "0302-4547589",
    phoneDisplay: "+92 302-4547589",
    linkedin: "https://www.linkedin.com/in/faizan-karamat-6571241b2",
    linkedinDisplay: "linkedin.com/in/faizan-karamat-6571241b2",
    cvPath: "/resume/faizan-karamat-resume.pdf",
    portraitImage: "/images/faizan-karamat.png",
  },

  hero: {
    greeting: "Hi there! I'm",
    heading: "Faizan Karamat",
    subheading: "MEDICAL BILLING & RCM SPECIALIST",
    supportingTitle: "Assistant Manager — Billing & Operations",
    description:
      "Helping U.S. healthcare organizations streamline revenue cycle operations, improve accounts receivable follow-up, resolve claim denials, and support efficient payment collection through 5+ years of hands-on RCM experience.",
    primaryCta: "Let's Talk",
    secondaryCta: "Download CV",
    watermark: "MEDICAL BILLING & RCM SPECIALIST",
  },

  skills: [
    {
      id: "medical-billing",
      name: "Medical Billing",
      category: "Healthcare RCM",
      iconName: "FileSpreadsheet",
      description: "End-to-end billing charge capture and claim transmission",
    },
    {
      id: "rcm",
      name: "Revenue Cycle",
      category: "Operations",
      iconName: "RefreshCw",
      description: "Comprehensive revenue cycle workflow governance",
    },
    {
      id: "accounts-receivable",
      name: "Accounts Receivable",
      category: "Financial AR",
      iconName: "TrendingUp",
      description: "AR follow-up, balance resolution & aging reduction",
    },
    {
      id: "denial-mgmt",
      name: "Denial Management",
      category: "Root Cause",
      iconName: "ShieldAlert",
      description: "Payer denial investigation, appeals & rework pipelines",
    },
    {
      id: "payment-collection",
      name: "Payment Collection",
      category: "Cash Recovery",
      iconName: "DollarSign",
      description: "Maximized payer collection & account reconciliation",
    },
    {
      id: "insurance-followup",
      name: "Insurance Follow-up",
      category: "Payer Relations",
      iconName: "PhoneCall",
      description: "Systematic communication with commercial & gov payers",
    },
    {
      id: "claim-resolution",
      name: "Claim Resolution",
      category: "Appeals",
      iconName: "CheckCircle2",
      description: "Underpaid/rejected claim investigation and rework",
    },
    {
      id: "billing-operations",
      name: "Billing Operations",
      category: "Quality",
      iconName: "Layers",
      description: "Operational quality oversight and timely filing compliance",
    },
    {
      id: "team-coordination",
      name: "Team Coordination",
      category: "Leadership",
      iconName: "Users",
      description: "Productivity tracking, mentorship & executive reporting",
    },
    {
      id: "ms-excel",
      name: "Microsoft Excel",
      category: "Analytics",
      iconName: "BarChart3",
      description: "Advanced data analysis, pivot reporting & AR tracking",
    },
  ] as SkillItem[],

  about: {
    sectionTitle: "About Me",
    headline: "Driving Efficiency Across the Healthcare Revenue Cycle.",
    paragraphs: [
      "I am a U.S. Healthcare Revenue Cycle Management (RCM) professional with over five years of experience supporting medical billing operations, accounts receivable management, denial resolution, insurance follow-up, and payment recovery.",
      "Currently serving as Assistant Manager – Billing & Operations at F&A Global, I coordinate billing workflows, improve accounts receivable visibility, support complex claim resolution, and monitor operational performance.",
      "My professional focus covers insurance claim follow-up, claim rework, denial investigation, payment reconciliation, A/R aging analysis, and operational coordination. I bring a process-driven approach centered on accuracy, accountability, timely claim resolution, and continuous improvement.",
    ],
    experienceYears: "5+",
    statTitle: "Years Experience",
    stats: [
      { label: "Experience", value: "5+ Years" },
      { label: "Professional Roles", value: "4 Roles" },
      { label: "Leading Organizations", value: "3 Orgs" },
      { label: "Specialization", value: "U.S. Healthcare RCM" },
    ],
  },

  capabilities: [
    {
      id: "ar-management",
      title: "Accounts Receivable Management",
      category: "Accounts Receivable",
      description:
        "Proactive management of outstanding balances, comprehensive insurance collections, and prioritization of aging accounts across commercial and government payers.",
      image: "/images/medical-billing/ar-analytics.png",
      size: "big",
      details: [
        "Rigorous follow-up on 30/60/90/120+ day aging accounts",
        "Payer reimbursement verification and underpayment reconciliation",
        "Direct communication with U.S. commercial payers, Medicare, and Medicaid",
        "Preventive AR aging review reducing days in AR",
      ],
    },
    {
      id: "insurance-followup",
      title: "Insurance Claims Follow-up",
      category: "Claims",
      description:
        "Systematic verification of claim statuses, payer timely-filing monitoring, and continuous engagement with insurance representatives.",
      image: "/images/medical-billing/claims-processing.png",
      size: "mid",
      details: [
        "Automated and manual portal verification across major U.S. payers",
        "Timely submission of secondary and tertiary claims with EOB documentation",
        "Tracking proof of timely filing to prevent statutory write-offs",
        "Claim status inquiry escalations and payer liaison",
      ],
    },
    {
      id: "denial-management",
      title: "Denial Management & Resolution",
      category: "Denials",
      description:
        "Structured diagnosis of denial reason codes (CARC/RARC), claim correction, appeal packet assembly, and error mitigation.",
      image: "/images/medical-billing/claims-processing.png",
      size: "normal",
      details: [
        "In-depth investigation of eligibility, authorization, and coding denials",
        "Systematic claim rework, medical record submission, and reconsiderations",
        "Root cause analysis and feedback loops to credentialing and intake teams",
        "Follow-up on first and second-level appeals and payer decisions",
      ],
    },
    {
      id: "payment-collection",
      title: "Payment Collection Operations",
      category: "Operations",
      description:
        "End-to-end reconciliation of electronic remittance advices (ERA) and explanation of benefits (EOB) ensuring maximal reimbursement capture.",
      image: "/images/medical-billing/payment-reconciliation.png",
      size: "normal",
      details: [
        "ERA/EFT payment posting reconciliation against billed charges",
        "Identification and reallocation of contractual adjustments and co-insurance",
        "Resolution of unallocated balances and credit balances",
        "Revenue leakage protection through audit controls",
      ],
    },
    {
      id: "billing-workflow",
      title: "Billing Workflow Coordination",
      category: "Operations",
      description:
        "Multi-disciplinary coordination across demographic entry, charge capture, clearinghouse scrubbing, and operational standards.",
      image: "/images/medical-billing/claims-processing.png",
      size: "normal",
      details: [
        "Clearinghouse front-end edit resolution and EDI batch tracking",
        "Compliance monitoring with HIPAA guidelines and payer rules",
        "Standard operating procedure (SOP) refinement for billing consistency",
        "Cross-functional team alignment between front desk and billing staff",
      ],
    },
    {
      id: "ar-aging-analysis",
      title: "AR Aging & Account Analysis",
      category: "Accounts Receivable",
      description:
        "Data-driven AR portfolio auditing and customized reporting in Microsoft Excel to isolate delinquent payer trends and forecast cash flows.",
      image: "/images/medical-billing/ar-analytics.png",
      size: "big",
      details: [
        "Cohort analysis of delinquent claims categorized by payer and facility",
        "Executive dashboard generation for weekly and monthly collection reviews",
        "Identification of repetitive authorization and medical necessity trends",
        "Actionable task-lists structured by dollar value and denial urgency",
      ],
    },
  ] as CapabilityProject[],

  services: [
    {
      id: "service-1",
      title: "Medical Billing Operations",
      tagline: "End-to-end revenue cycle billing workflows & demographic accuracy",
      points: [
        "Patient demographic intake, eligibility & benefits verification",
        "Charge entry validation, clearinghouse scrubbing & claim submission",
        "Clearinghouse EDI 837 claim transmission and 999/277CA acknowledgment review",
        "Payer-specific timely filing requirements and submission tracking",
      ],
    },
    {
      id: "service-2",
      title: "Accounts Receivable Management",
      tagline: "Outstanding balance recovery, aging reduction & insurer follow-up",
      points: [
        "Systematic AR aging review across 30, 60, 90, and 120+ day buckets",
        "Payer follow-up protocols for pending, delayed, and pended claims",
        "Underpayment discovery, dispute lodging & contract rate enforcement",
        "Daily reconciliation of expected reimbursement vs. paid remittances",
      ],
    },
    {
      id: "service-3",
      title: "Denial Management",
      tagline: "Root-cause investigation, corrective rework & structured appeals",
      points: [
        "Review of claim adjustment reason codes (CARC) and remittance advice remark codes (RARC)",
        "Appeals packet preparation with clinical documentation & medical records",
        "Eligibility mismatch resolution, coordination of benefits (COB) updates",
        "Operational feedback to upstream intake teams to curb recurring rejections",
      ],
    },
    {
      id: "service-4",
      title: "Insurance & Claim Follow-up",
      tagline: "Persistent multi-channel follow-up across commercial & gov payers",
      points: [
        "Portal-based inquiries and telephone escalations with payer representatives",
        "Tracking claim adjudication timelines against prompt pay legislation",
        "Secondary and tertiary billing with correct primary remittance documentation",
        "Pre-authorization validation and referral reconciliation",
      ],
    },
    {
      id: "service-5",
      title: "RCM Operations Coordination",
      tagline: "Workflow management, operational reporting & team performance",
      points: [
        "Team productivity tracking, task distribution & quality control reviews",
        "Executive operational dashboards tracking gross vs. net collection ratios",
        "Continuous staff training on emerging U.S. payer policy updates",
        "Complex account issue escalation and hands-on operational leadership",
      ],
    },
  ] as ServiceItem[],

  approach: [
    {
      id: "accuracy",
      title: "Precision & Attention to Detail",
      subtitle: "The Foundation of Zero-Error Billing",
      description:
        "Medical billing leaves no margin for assumptions. Every patient record, modifier, authorization number, and diagnostic code is meticulously cross-referenced prior to clearinghouse transmission to ensure maximum first-pass clean claim rates.",
      image: "/images/faizan-karamat.png",
      author: "Faizan Karamat",
      role: "Methodology Principle #1",
    },
    {
      id: "followup",
      title: "Persistent & Consistent Account Follow-Up",
      subtitle: "Preventing Aging Slip & Payer Delays",
      description:
        "Unpaid claims do not resolve themselves. I implement disciplined, cadence-driven follow-up cycles across web portals and payer representative lines, actively preventing accounts from slipping into delinquent aging tiers.",
      image: "/images/faizan-karamat.png",
      author: "Faizan Karamat",
      role: "Methodology Principle #2",
    },
    {
      id: "denial-resolution",
      title: "Structured Denial Root-Cause Resolution",
      subtitle: "Fixing Upstream Causes, Not Just Symptoms",
      description:
        "Rather than repeatedly patching rejected claims, my approach isolates the root cause—whether patient demographic capture, pre-authorization omission, or coding conflict—and builds preventative operational safeguards.",
      image: "/images/faizan-karamat.png",
      author: "Faizan Karamat",
      role: "Methodology Principle #3",
    },
    {
      id: "coordination",
      title: "Operational Visibility & Team Coordination",
      subtitle: "Data-Driven Transparency & KPI Accountability",
      description:
        "High-performance RCM relies on operational visibility. Through structured Excel reporting, daily productivity benchmarks, and clear delegation, team members stay focused on high-priority accounts that drive healthy cash flow.",
      image: "/images/faizan-karamat.png",
      author: "Faizan Karamat",
      role: "Methodology Principle #4",
    },
  ] as ApproachItem[],

  marquee: [
    "MEDICAL BILLING",
    "REVENUE CYCLE MANAGEMENT",
    "ACCOUNTS RECEIVABLE",
    "DENIAL MANAGEMENT",
    "PAYMENT COLLECTION",
    "CLAIM FOLLOW-UP",
    "AR AGING ANALYSIS",
    "OPERATIONS COORDINATION",
  ],

  packages: [
    {
      id: "pkg-ar",
      name: "Accounts Receivable",
      category: "Specialized AR Track",
      description: "Dedicated focus on accelerating collections and reducing aging buckets.",
      includes: [
        "Outstanding account balance review",
        "AR aging analysis (>60, >90, >120 days)",
        "Commercial and Government insurance follow-up",
        "Unpaid, underpaid & disputed claim investigation",
        "Payment reconciliation & credit balance review",
        "Payer reimbursement trend reporting",
      ],
    },
    {
      id: "pkg-denials",
      name: "Denial & Claims Management",
      category: "Resolution & Appeals",
      description: "Comprehensive recovery pipeline for denied, rejected, and stalled claims.",
      includes: [
        "Root-cause denial code investigation (CARC/RARC)",
        "Structured claim rework & resubmission",
        "First and second level formal appeals preparation",
        "Medical necessity & authorization documentation",
        "Clearinghouse rejection handling & EDI tracking",
        "Preventive workflow recommendations",
      ],
      recommended: true,
    },
    {
      id: "pkg-operations",
      name: "RCM Operations & Leadership",
      category: "End-to-End Operational Oversight",
      description: "Holistic revenue cycle coordination, team performance, and reporting.",
      includes: [
        "End-to-end billing workflow coordination",
        "Team productivity tracking & quality monitoring",
        "Weekly & monthly executive operational reporting",
        "Complex account escalation support",
        "Billing compliance & standard maintenance",
        "Payer policy monitoring & staff coordination",
      ],
    },
  ] as CapabilityPackage[],

  experience: [
    {
      id: "fa-global-assistant-mgr",
      role: "Assistant Manager Billing and Operations",
      organization: "F&A Global",
      location: "Lahore, Pakistan",
      period: "February 2025 – Present",
      isCurrent: true,
      responsibilities: [
        "Manage and coordinate U.S. healthcare medical billing and RCM operations.",
        "Oversee Accounts Receivable activities and strategic cash recovery initiatives.",
        "Manage outstanding account follow-up and payment collections across commercial and government payers.",
        "Supervise denial-management workflows and quality control checks.",
        "Monitor AR aging and prioritize high-value, aging accounts.",
        "Coordinate team productivity, metrics tracking, and executive operational reporting.",
        "Assist with complex billing escalations and intricate account-resolution issues.",
        "Maintain operational quality, client SLAs, and billing compliance standards.",
      ],
    },
    {
      id: "fa-global-senior-ar",
      role: "Senior Accounts Receivable Executive",
      organization: "F&A Global",
      location: "Lahore, Pakistan",
      period: "October 2022 – February 2025",
      isCurrent: false,
      responsibilities: [
        "Managed U.S. healthcare Accounts Receivable portfolios and aging accounts.",
        "Handled outstanding account balances and accelerated payment collections.",
        "Performed continuous insurance claim follow-up via phone and payer portals.",
        "Investigated unpaid, underpaid, and stalled healthcare claims.",
        "Managed claim denials, appeal packets, rework, and timely resolution.",
        "Monitored account aging trends to safeguard organization cash flow.",
        "Coordinated with internal billing teams to resolve data and documentation gaps.",
      ],
    },
    {
      id: "prg-billing-exec",
      role: "Billing Executive",
      organization: "PRG Pakistan",
      location: "Lahore, Pakistan",
      period: "February 2022 – October 2022",
      isCurrent: false,
      responsibilities: [
        "Performed medical billing activities for multi-specialty healthcare practices.",
        "Managed and validated patient demographic information.",
        "Maintained insurance coverage, eligibility, and account information.",
        "Supported medical claim workflows and clearinghouse submissions.",
        "Assisted claim and insurance processing through prompt error resolution.",
        "Supported accurate and timely billing operations adhering to regulatory guidelines.",
      ],
    },
    {
      id: "curemd-rcm-exec",
      role: "Revenue Cycle Management Executive",
      organization: "CureMD",
      location: "Lahore, Pakistan",
      period: "April 2021 – January 2022",
      isCurrent: false,
      responsibilities: [
        "Supported comprehensive U.S. healthcare RCM operations.",
        "Worked extensively with CureMD healthcare billing EHR/PM software.",
        "Maintained patient demographic and insurance account information.",
        "Supported revenue-cycle workflows from charge capture to payment verification.",
        "Assisted with account-related inquiries and basic denial rework.",
        "Maintained accurate billing documentation and compliant records.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor's Degree in Metallurgy & Materials Engineering",
      institution: "University of the Punjab",
      location: "Lahore, Pakistan",
      period: "2017 – 2021",
      cgpa: "3.64 / 4.00",
    },
  ] as EducationItem[],

  insights: [
    {
      id: "insight-1",
      slug: "understanding-accounts-receivable-medical-billing",
      title: "Understanding Accounts Receivable in U.S. Medical Billing",
      date: "15",
      month: "Oct",
      readTime: "5 min read",
      category: "Accounts Receivable",
      excerpt:
        "A breakdown of how disciplined AR tracking, aging bucket categorization, and prompt payer follow-up preserve liquidity for healthcare organizations.",
      image: "/images/medical-billing/ar-analytics.png",
      content: [
        "Accounts Receivable (AR) in medical billing represents the revenue due to healthcare providers for medical services delivered to patients. In the U.S. healthcare landscape, managing AR is one of the most vital determinants of a medical practice's financial vitality.",
        "Healthcare AR differs markedly from traditional commercial billing because of complex third-party payer relationships, pre-authorization mandates, coordination of benefits, and stringent timely-filing windows. When claims linger beyond 60 or 90 days, the statistical probability of full payment collection drops precipitously.",
        "A structured AR strategy requires categorizing receivables into precise 30-day buckets, prioritizing high-dollar claims, and establishing clear cadence rules for following up on claims that remain in 'pending' or 'in-process' states without explanation.",
        "By enforcing daily AR aging audits, tracking payer reimbursement lag times, and maintaining open communication with payer representatives, billing teams can dramatically compress their days in AR and ensure consistent cash flow.",
      ],
    },
    {
      id: "insight-2",
      slug: "common-causes-medical-claim-denials",
      title: "Common Causes of Medical Claim Denials and Strategic Rework",
      date: "28",
      month: "Sep",
      readTime: "6 min read",
      category: "Denial Management",
      excerpt:
        "Analyzing why claim denials occur, the significance of CARC/RARC codes, and how systematic appeals recover hard-earned medical practice revenue.",
      image: "/images/medical-billing/claims-processing.png",
      content: [
        "Claim denials are among the most expensive disruptions in healthcare revenue cycles. Industry studies indicate that upwards of 15% to 20% of claims are initially rejected or denied by commercial and government payers, representing billions in uncollected revenue annually.",
        "The most prevalent denial catalysts include demographic data discrepancies, inactive patient coverage on the date of service, absence of required prior authorization, medical necessity challenges, and non-compliance with payer-specific modifier requirements.",
        "Resolving denials begins with a rigorous reading of Claim Adjustment Reason Codes (CARC) and Remittance Advice Remark Codes (RARC). Rather than merely resubmitting an unedited claim, specialists must identify the root discrepancy, append required clinical records, and file structured appeal packets.",
        "More importantly, effective denial management creates a feedback loop to patient access and clinical documentation teams, preventing recurring rejections before claims leave the clearinghouse.",
      ],
    },
    {
      id: "insight-3",
      slug: "importance-of-insurance-claim-follow-up",
      title: "The Importance of Insurance Claim Follow-up & Timely Filing",
      date: "12",
      month: "Sep",
      readTime: "4 min read",
      category: "Claims Management",
      excerpt:
        "Why passive submission fails in U.S. billing, and how active payer engagement prevents write-offs caused by missed timely-filing deadlines.",
      image: "/images/medical-billing/payment-reconciliation.png",
      content: [
        "Submitting a claim through a clearinghouse is only the initial step of the reimbursement journey. Without proactive insurance claim follow-up, dozens of claims remain unadjudicated in payer processing queues until statutory timely filing deadlines expire.",
        "Timely filing limits vary dramatically across payers: Medicare typically allows 12 calendar months, while certain commercial insurers like Aetna or UnitedHealthcare contractually enforce 90 to 180-day limits from the date of service.",
        "Systematic claim tracking involves confirming receipt within 48 to 72 hours of EDI transmission, auditing EDI 277 acknowledgment files, and reaching out to payer claim representatives as soon as adjudication exceeds 30 calendar days.",
        "Documenting call reference numbers, representative IDs, and exact portal timestamps equips billing operations with indisputable proof of timely filing should a claim be improperly denied for timeliness later.",
      ],
    },
    {
      id: "insight-4",
      slug: "improving-revenue-cycle-workflow-visibility",
      title: "Improving Revenue Cycle Workflow Visibility & Denial Tracking",
      date: "04",
      month: "Aug",
      readTime: "5 min read",
      category: "Operations",
      excerpt:
        "How operational dashboards, Excel cohort analysis, and team task allocation boost billing productivity and collection ratios.",
      image: "/images/medical-billing/ar-analytics.png",
      content: [
        "In complex multi-specialty billing environments, operational opacity is the enemy of revenue maximization. When team leaders lack real-time visibility into claim pipelines, accounts age silently and denial trends go unnoticed for weeks.",
        "Building visibility requires establishing key performance indicators (KPIs) such as Clean Claim Rate, Days in AR, Gross and Net Collection Ratios, and Denial Rate percentage by payer.",
        "Using structured Microsoft Excel modeling, billing managers can synthesize clearinghouse batch reports and practice management data into weekly cohort summaries that clearly identify which payers or CPT codes are generating friction.",
        "Transparent productivity benchmarks empower team members to take ownership of assigned aging buckets, fostering accountability and ensuring that collection performance consistently meets organizational targets.",
      ],
    },
  ] as InsightArticle[],

  contact: {
    heading: "Let’s Connect!",
    description:
      "Interested in discussing medical billing, revenue cycle management, or professional opportunities? Feel free to get in touch.",
    email: "Faizankaramat13@gmail.com",
    phone: "0302-4547589",
    location: "Lahore, Punjab, Pakistan",
    linkedin: "https://www.linkedin.com/in/faizan-karamat-6571241b2",
    navLinks: [
      { name: "Home", num: "01", href: "/" },
      { name: "About Me", num: "02", href: "/#about" },
      { name: "Expertise", num: "03", href: "/#expertise" },
      { name: "Services", num: "04", href: "/#services" },
      { name: "Approach", num: "05", href: "/#approach" },
      { name: "Experience", num: "06", href: "/#experience" },
      { name: "Insights", num: "07", href: "/#insights" },
      { name: "Contact", num: "08", href: "/#contact" },
    ],
  },
};
