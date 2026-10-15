const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const resumeDir = path.join(__dirname, '..', 'public', 'resume');
if (!fs.existsSync(resumeDir)) {
  fs.mkdirSync(resumeDir, { recursive: true });
}

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 }
});

const destPath = path.join(resumeDir, 'faizan-karamat-resume.pdf');
const stream = fs.createWriteStream(destPath);
doc.pipe(stream);

const primaryColor = '#0f0e0e';
const accentColor = '#17c2b3';
const textColor = '#333333';
const mutedColor = '#545B63';

// Header
doc.fillColor(primaryColor).fontSize(24).font('Helvetica-Bold').text('FAIZAN KARAMAT', { characterSpacing: 1 });
doc.fillColor(accentColor).fontSize(11).font('Helvetica-Bold').text('MEDICAL BILLING & REVENUE CYCLE MANAGEMENT (RCM) SPECIALIST', { characterSpacing: 0.5 });
doc.moveDown(0.3);

// Contact details line
doc.fillColor(mutedColor).fontSize(9).font('Helvetica').text('Lahore, Punjab, Pakistan  |  +92 302 4547589  |  Faizankaramat13@gmail.com  |  linkedin.com/in/faizan-karamat-6571241b2');
doc.moveDown(0.6);

// Divider line
doc.strokeColor('#DDDDDD').lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.6);

function renderSectionTitle(title) {
  doc.moveDown(0.4);
  doc.fillColor(accentColor).fontSize(11).font('Helvetica-Bold').text(title.toUpperCase(), { characterSpacing: 1 });
  doc.strokeColor(accentColor).lineWidth(1.5).moveTo(45, doc.y + 2).lineTo(120, doc.y + 2).stroke();
  doc.moveDown(0.5);
}

// Summary
renderSectionTitle('Professional Summary');
doc.fillColor(textColor).fontSize(9.5).font('Helvetica').lineGap(2).text(
  'Medical Billing and Revenue Cycle Management professional with 5+ years of specialized experience in U.S. healthcare RCM, Accounts Receivable management, payment collection, and denial resolution. Proven progression from Revenue Cycle Management Executive to Billing Executive, Senior AR Executive, and Assistant Manager Billing and Operations. Deep operational acumen in optimizing revenue-cycle workflows, reducing AR aging days, driving insurance claim follow-up, coordinating cross-functional team productivity, and maintaining high billing compliance and quality standards.'
);

// Core Expertise
renderSectionTitle('Core Expertise & Competencies');
const skills = [
  'U.S. Healthcare Medical Billing',
  'Revenue Cycle Management (RCM)',
  'Accounts Receivable (AR) Management',
  'Denial Investigation & Resolution',
  'Insurance Follow-up & Claim Appeals',
  'Payment Collection & Reconciliation',
  'AR Aging Analysis & Prioritization',
  'Claim Rework & Re-submission',
  'Billing Operations & Quality Audits',
  'Team Coordination & Mentorship',
  'Performance Monitoring & KPIs',
  'Executive Reporting & Documentation',
  'Payer & Client Relationship Mgmt',
  'Advanced Microsoft Excel & Analytics'
];

doc.fillColor(textColor).fontSize(9).font('Helvetica');
let col = 0;
let rowY = doc.y;
skills.forEach((skill, i) => {
  const x = col === 0 ? 45 : (col === 1 ? 215 : 385);
  doc.text(`• ${skill}`, x, rowY, { width: 165 });
  col++;
  if (col === 3 || i === skills.length - 1) {
    col = 0;
    rowY += 14;
    doc.y = rowY;
  }
});

// Professional Experience
renderSectionTitle('Professional Experience');

const jobs = [
  {
    title: 'Assistant Manager Billing and Operations',
    company: 'F&A Global — Lahore, Pakistan',
    period: 'February 2025 – Present',
    responsibilities: [
      'Lead and coordinate comprehensive U.S. healthcare medical billing and RCM operations across client accounts.',
      'Direct Accounts Receivable activities, implementing structured workflows for outstanding account follow-up and timely payment collections.',
      'Supervise denial-management pipelines, ensuring systematic root-cause diagnosis, rapid rework, and appeals.',
      'Monitor AR aging buckets (>60, >90, >120 days) and prioritize high-dollar value accounts to maximize cash recovery.',
      'Drive team productivity, operational KPI reporting, and quality benchmarks to exceed client performance standards.',
      'Handle complex billing escalations and payer disputes with specialized payer guidelines understanding.'
    ]
  },
  {
    title: 'Senior Accounts Receivable Executive',
    company: 'F&A Global — Lahore, Pakistan',
    period: 'October 2022 – February 2025',
    responsibilities: [
      'Managed extensive U.S. healthcare AR portfolios and accelerated outstanding account recovery.',
      'Conducted rigorous insurance claim follow-ups with commercial payers, Medicare, and Medicaid.',
      'Investigated unpaid, underpaid, and rejected claims; coordinated claim rework and resubmission.',
      'Monitored account aging reports and resolved denial patterns to protect practice revenue stream.',
      'Collaborated closely with internal charge capture, demographic, and coding teams to prevent recurring errors.'
    ]
  },
  {
    title: 'Billing Executive',
    company: 'PRG Pakistan — Lahore, Pakistan',
    period: 'February 2022 – October 2022',
    responsibilities: [
      'Executed daily medical billing operations, demographic verification, and claim generation.',
      'Validated patient eligibility, insurance coverage details, and authorization requirements.',
      'Supported timely filing submission workflows and maintained precision patient account records.'
    ]
  },
  {
    title: 'Revenue Cycle Management Executive',
    company: 'CureMD — Lahore, Pakistan',
    period: 'April 2021 – January 2022',
    responsibilities: [
      'Supported end-to-end U.S. healthcare RCM operations utilizing CureMD healthcare billing EHR/PM software.',
      'Maintained precise patient demographics and insurance account records, ensuring billing accuracy.',
      'Assisted in account reconciliation, denial logging, and patient inquiry resolution.'
    ]
  }
];

jobs.forEach((job) => {
  doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text(job.title);
  const currentY = doc.y;
  doc.fillColor(mutedColor).fontSize(8.5).font('Helvetica-Oblique').text(`${job.company}  |  ${job.period}`);
  doc.moveDown(0.2);
  
  job.responsibilities.forEach((resp) => {
    doc.fillColor(textColor).fontSize(8.5).font('Helvetica').text(`•  ${resp}`, { indent: 8, lineGap: 1.5 });
  });
  doc.moveDown(0.4);
});

// Education
renderSectionTitle('Education');
doc.fillColor(primaryColor).fontSize(10).font('Helvetica-Bold').text("Bachelor's Degree in Metallurgy & Materials Engineering");
doc.fillColor(mutedColor).fontSize(8.5).font('Helvetica').text('University of the Punjab — Lahore, Pakistan  |  2017 – 2021  |  CGPA: 3.64 / 4.00');

doc.end();

stream.on('finish', () => {
  console.log('Resume successfully generated at:', destPath);
});
