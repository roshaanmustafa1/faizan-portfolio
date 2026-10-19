export type RcmIcon = "billing" | "receivables" | "denials" | "payer" | "payments" | "eligibility" | "leadership" | "primary" | "family" | "emergency" | "medical" | "surgical" | "outpatient" | "diagnostics" | "coding" | "edi" | "analytics" | "software";

export interface KnowledgeCategory {
  id: string;
  title: string;
  description: string;
  icon: RcmIcon;
  items: string[];
}

export interface SpecialtyCategory extends KnowledgeCategory {
  filterLabel: string;
  experienceStatus: "Workflow reference";
}

export const RCM_EXPERTISE: KnowledgeCategory[] = [
  {
    id: "billing", title: "End-to-End Medical Billing", icon: "billing",
    description: "Medical billing workflow coordination from patient demographic verification and charge processing through submission, reimbursement follow-up, and account resolution.",
    items: ["Patient demographics and registration validation", "Insurance eligibility and benefits verification", "Charge entry and charge validation", "Claim preparation and scrubbing", "Electronic claim submission", "Clearinghouse rejection resolution", "Primary, secondary, and tertiary billing", "Timely filing management"],
  },
  {
    id: "receivables", title: "Accounts Receivable (A/R) Management", icon: "receivables",
    description: "Structured follow-up of outstanding insurance receivables, with attention to aging, collection efficiency, and reimbursement accuracy.",
    items: ["Insurance A/R follow-up", "30, 60, 90, and 120+ day aging analysis", "Outstanding claims investigation", "Unpaid and underpaid claim resolution", "Insurance collection follow-up", "High-value account prioritization", "Payer escalation management", "Reimbursement variance investigation"],
  },
  {
    id: "denials", title: "Denial Management & Appeals", icon: "denials",
    description: "Denial investigation through root-cause analysis, corrected submissions, appeals, and preventive workflow improvements.",
    items: ["CARC and RARC analysis", "Denial classification and trend analysis", "Corrected claims and resubmissions", "Appeal preparation and follow-up", "Eligibility-related denial resolution", "Authorization and referral denial investigation", "Coordination of Benefits (COB) issues", "Medical necessity denial follow-up", "Documentation-related denial investigation"],
  },
  {
    id: "payer", title: "Insurance & Claim Follow-up", icon: "payer",
    description: "Communication with U.S. commercial and government payers to investigate claim status, payment delays, and adjudication progress.",
    items: ["Payer portal inquiries", "Claim status investigations", "Payer representative communication", "Medicare and Medicaid billing workflows", "Commercial insurance follow-up", "Claim adjudication tracking", "Coverage and eligibility discrepancies", "Timely filing and payer policy research"],
  },
  {
    id: "payments", title: "Payment Posting & Reconciliation", icon: "payments",
    description: "Review of insurance payments, adjustments, outstanding balances, and reimbursement discrepancies.",
    items: ["Explanation of Benefits (EOB)", "Electronic Remittance Advice (ERA)", "Payment reconciliation", "Contractual adjustment review", "Underpayment identification", "Credit balance investigation", "Patient responsibility review", "Payment variance analysis"],
  },
  {
    id: "eligibility", title: "Eligibility, Benefits & Authorizations", icon: "eligibility",
    description: "Front-end billing considerations for coverage, benefits, authorization status, referrals, and coordination of benefits.",
    items: ["Eligibility verification", "Benefits verification", "Prior authorization status tracking", "Referral verification", "Primary and secondary payer identification", "Insurance information validation", "COB updates and resolution"],
  },
  {
    id: "leadership", title: "RCM Operations & Team Leadership", icon: "leadership",
    description: "Coordination of revenue cycle teams, work queues, quality standards, and operational reporting.",
    items: ["Team productivity monitoring", "Work queue coordination", "Quality assurance reviews", "Operational performance reporting", "Escalation management", "SLA monitoring", "Process improvement", "Staff mentoring and workflow training", "A/R and denial performance analysis"],
  },
];

export const SPECIALTY_CATEGORIES: SpecialtyCategory[] = [
  {
    id: "primary-care", filterLabel: "Primary Care", title: "Primary Care & General Medicine", icon: "primary", experienceStatus: "Workflow reference",
    description: "Outpatient evaluation and management, preventive visits, chronic disease management, and primary care reimbursement workflows.",
    items: ["Family Medicine", "Family Practice", "Internal Medicine", "General Practice", "Primary Care", "Preventive Medicine", "Geriatric Medicine", "Hospitalist Medicine"],
  },
  {
    id: "womens-health", filterLabel: "Women's Health", title: "Women's Health & Pediatrics", icon: "family", experienceStatus: "Workflow reference",
    description: "Specialty billing considerations for maternity services, pediatric care, preventive visits, and related insurance reimbursement.",
    items: ["Obstetrics & Gynecology (OB/GYN)", "Gynecology", "Obstetrics", "Prenatal & Postnatal Care", "Maternal-Fetal Medicine", "Pediatrics", "Neonatology"],
  },
  {
    id: "emergency-care", filterLabel: "Emergency Care", title: "Emergency & Acute Care", icon: "emergency", experienceStatus: "Workflow reference",
    description: "Claim processing and reimbursement considerations for emergency department services, urgent care, observation, and acute treatment.",
    items: ["Emergency Medicine", "Emergency Room (ER)", "Emergency Department Physician Billing", "Urgent Care", "Critical Care", "Hospitalist Services", "Observation Services", "Ambulance & Emergency Transport"],
  },
  {
    id: "medical-specialties", filterLabel: "Medical Specialties", title: "Medical Specialties", icon: "medical", experienceStatus: "Workflow reference",
    description: "Specialist consultations, diagnostic procedures, ongoing medical management, and payer-specific reimbursement requirements.",
    items: ["Cardiology", "Gastroenterology", "Pulmonology", "Nephrology", "Endocrinology", "Neurology", "Oncology", "Hematology", "Rheumatology", "Infectious Disease", "Allergy & Immunology"],
  },
  {
    id: "surgical-care", filterLabel: "Surgical Care", title: "Surgical & Musculoskeletal Care", icon: "surgical", experienceStatus: "Workflow reference",
    description: "Surgical procedures, musculoskeletal treatment, procedural reimbursement, rehabilitation, and therapy documentation considerations.",
    items: ["Orthopedics", "General Surgery", "Neurosurgery", "Pain Management", "Physical Medicine & Rehabilitation (PM&R)", "Physical Therapy", "Occupational Therapy", "Chiropractic", "Podiatry"],
  },
  {
    id: "outpatient-care", filterLabel: "Outpatient Care", title: "Outpatient & Specialized Care", icon: "outpatient", experienceStatus: "Workflow reference",
    description: "Billing workflows for outpatient procedures, behavioral healthcare, diagnostic consultations, and specialized physician services.",
    items: ["Dermatology", "Psychiatry", "Behavioral Health", "Psychology", "Mental Health Services", "Urology", "Ophthalmology", "Optometry", "Otolaryngology (ENT)", "Sleep Medicine", "Wound Care"],
  },
  {
    id: "diagnostics", filterLabel: "Diagnostics", title: "Diagnostic & Ancillary Services", icon: "diagnostics", experienceStatus: "Workflow reference",
    description: "Diagnostic testing, ancillary clinical services, equipment reimbursement, and post-acute care billing considerations.",
    items: ["Radiology", "Diagnostic Imaging", "Laboratory Medicine", "Pathology", "Anesthesiology", "Clinical Diagnostic Testing", "Durable Medical Equipment (DME)", "Home Health", "Hospice & Palliative Care"],
  },
];

export const TECHNICAL_SKILLS: KnowledgeCategory[] = [
  {
    id: "coding", title: "Medical Billing & Coding Knowledge", icon: "coding",
    description: "Billing terminology and coding classifications; this does not imply coding certification or a formal coder role.",
    items: ["Medical Billing", "Revenue Cycle Management", "ICD-10-CM", "CPT", "HCPCS Level II", "Medical Coding Terminology", "Modifier Review", "Claim Scrubbing", "Charge Entry", "Medical Necessity Review"],
  },
  {
    id: "edi", title: "Claims & Electronic Data Interchange", icon: "edi",
    description: "Claim formats, acknowledgments, remittance information, and claim lifecycle terminology.",
    items: ["CMS-1500", "Electronic Claims", "837P Claims", "EDI Workflows", "999 Acknowledgments", "277CA Acknowledgments", "Electronic Remittance Advice (835)", "EOB Review", "CARC / RARC", "Clearinghouse Rejections", "Claim Status Investigation"],
  },
  {
    id: "insurance", title: "Insurance & Payer Knowledge", icon: "payer",
    description: "Coverage, payer requirements, and reimbursement processes across government and commercial insurance.",
    items: ["Medicare", "Medicaid", "Medicare Advantage", "Commercial Insurance", "Payer Portals", "Eligibility Verification", "Benefits Verification", "Prior Authorization", "Coordination of Benefits", "Timely Filing", "Payer Policies", "Claim Reimbursement"],
  },
  {
    id: "operations", title: "Revenue Cycle Operations", icon: "receivables",
    description: "Operational focus areas across receivables, denials, payment review, and collection reporting.",
    items: ["Accounts Receivable", "A/R Aging Analysis", "Denial Management", "Insurance Follow-up", "Appeals Management", "Payment Reconciliation", "Underpayment Analysis", "Claim Rework", "Collection Reporting", "Process Improvement"],
  },
  {
    id: "analytics", title: "Analytics & Leadership", icon: "analytics",
    description: "Reporting and team coordination concepts that support accountable billing operations.",
    items: ["Microsoft Excel", "Pivot Tables", "A/R Reports", "Performance Dashboards", "Denial Trend Analysis", "Operational Reporting", "Quality Assurance", "Team Coordination", "Workload Management", "SLA Monitoring", "Productivity Analysis"],
  },
  {
    id: "software", title: "EHR / Practice Management Software", icon: "software",
    description: "CureMD healthcare billing EHR/PM software experience is documented in the existing career records.",
    items: ["CureMD"],
  },
];

export const RCM_METRICS = [
  { title: "Accounts Receivable Performance", items: ["A/R Aging", "Days in A/R", "Outstanding Claims", "A/R Resolution Trends"] },
  { title: "Claims Quality", items: ["Clean Claim Rate", "Claim Rejection Rate", "Denial Rate", "Appeal Outcomes"] },
  { title: "Revenue & Collections", items: ["Net Collection Rate", "Payment Variances", "Underpayment Recovery", "Reimbursement Turnaround"] },
  { title: "Operational Performance", items: ["Team Productivity", "Quality Scores", "SLA Compliance", "Account Resolution Turnaround"] },
];
