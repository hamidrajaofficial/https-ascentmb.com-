import React from 'react';
import { 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { motion } from 'motion/react';

export interface EhrSoftwareItem {
  id: string;
  name: string;
  logo: string;
  description: string;
  keyFeatures: string[];
}

export const allEhrSoftwareList: EhrSoftwareItem[] = [
  {
    id: 'athenahealth',
    name: 'Athenahealth (athenaOne)',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/Athenahealth-logo.webp',
    description: 'Automated claim scrub rules, daily claim work queues, denial resolution, and claim hold mitigation inside athenaOne Collector.',
    keyFeatures: ['Collector Work Queues', 'Claim Hold Resolutions', 'Rules Engine Auditing']
  },
  {
    id: 'eclinicalworks',
    name: 'eClinicalWorks (eCW)',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/eclinical-logo.webp',
    description: 'Expertise across eCW RCM, Claim Scrubber, Registry reporting, ERA auto-posting, and custom E/M fee schedule mapping.',
    keyFeatures: ['eCW Claim Scrubber', 'ERA Auto-Posting', 'Registry & MIPS Sync']
  },
  {
    id: 'epic',
    name: 'Epic Systems (Cadence & Resolute)',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/citrix-logo.webp',
    description: 'Resolute Professional & Hospital Billing (PB/HB), Charge Router reconciliation, work queue clearance, and complex modifier 25/59 audits.',
    keyFeatures: ['Resolute PB/HB Work Queues', 'Charge Router Sync', 'Pre-Bill Error Scrubbing']
  },
  {
    id: 'cerner',
    name: 'Cerner / Oracle Health',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/cerner-logo.webp',
    description: 'Revenue cycle management for Oracle Cerner Millennium, SurgiNet facility fee billing, and inpatient-to-outpatient cross-coding.',
    keyFeatures: ['Millennium RCM Tools', 'Charge Capture Validation', 'CDI Physician Query Support']
  },
  {
    id: 'kareo',
    name: 'Kareo / Tebra',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/kareo-logo.webp',
    description: 'Streamlined billing management for Tebra/Kareo practices with automated patient statement delivery, credit card on file, and EDI clearinghouse tracking.',
    keyFeatures: ['Tebra Patient Portal Billing', 'Fast EDI Batch Filing', 'Custom Fee Schedules']
  },
  {
    id: 'advancedmd',
    name: 'AdvancedMD',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/advanced-md-logo.webp',
    description: 'AdvancedBilling work center management, automated clearinghouse cross-checks, claims inspector rules, and aging report follow-ups.',
    keyFeatures: ['AdvancedBilling Center', 'Claims Inspector Rules', 'Automated AR Workflows']
  },
  {
    id: 'webpt',
    name: 'WebPT',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/webpt-logo.webp',
    description: 'Physical, occupational, and speech therapy billing with 8-minute rule verification, GP/GO modifiers, and automated plan of care tracking.',
    keyFeatures: ['8-Minute Rule Validation', 'KX & GP Modifier Auditing', 'Plan of Care Tracking']
  },
  {
    id: 'simplepractice',
    name: 'SimplePractice',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/Simplepractice-logo.webp',
    description: 'Mental health parity billing, psychotherapy 90834/90837 time-based claims, telehealth modifier 95/GT, and patient responsibility collections.',
    keyFeatures: ['Telehealth Parity Audits', 'Superbill Reconciliation', 'Prior Auth Management']
  },
  {
    id: 'curemd',
    name: 'CureMD',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/curemd-logo.webp',
    description: 'All-in-one clinical and billing management with automated denial tracking, electronic remittance advice (ERA) matching, and clearinghouse rules.',
    keyFeatures: ['Integrated Clearinghouse', 'Real-time Eligibility', 'Denial Categorization']
  },
  {
    id: 'collaboratemd',
    name: 'CollaborateMD',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/collaboratemd-logo.webp',
    description: 'High-speed claim submission, claim generation with ClaimGen, real-time claim status 276/277, and fast payment batch reconciliation.',
    keyFeatures: ['ClaimGen Engine', 'Electronic Remit Matching', 'Section 508 Compliant']
  },
  {
    id: 'office-ally',
    name: 'Office Ally (Practice Mate)',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/office-ally-logo.webp',
    description: 'Direct clearinghouse integration with Service Center, CMS-1500 online forms, Medicaid and Medicare ANSI 837P claim scrub and submission.',
    keyFeatures: ['Service Center Clearinghouse', 'CMS-1500 & UB-04 Forms', 'Direct Payer Scrubbing']
  },
  {
    id: 'carecloud',
    name: 'CareCloud (Concierge & Central)',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/care-cloud-logo.webp',
    description: 'Modern cloud practice management, collective intelligence claim scrub rules, patient payment portal sync, and advanced financial analytics.',
    keyFeatures: ['Collective Intelligence Scrub', 'Breeze Patient Intake Sync', 'Predictive Denial Scoring']
  },
  {
    id: 'medent',
    name: 'MEDENT',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/medent-logo.webp',
    description: 'EHR and billing automation for regional medical practices, e-prescribing, electronic lab orders, and customized regional payer fee schedules.',
    keyFeatures: ['Lab Order Cross-Coding', 'E/M Medical Necessity Sync', 'Custom Fee Schedules']
  },
  {
    id: 'nextgen',
    name: 'NextGen Healthcare',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/nextgen-logo.webp',
    description: 'Enterprise EHR & PM billing, custom EHR macro coding, FQHC sliding scale sliding fee schedules, and complex multi-payer reimbursement tracking.',
    keyFeatures: ['FQHC Billing Protocols', 'NextGen Charge Entry', 'EDI Clearinghouse Management']
  },
  {
    id: 'drchrono',
    name: 'DrChrono (EverHealth)',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/kareo-logo.webp',
    description: 'iPad & mobile-first EHR billing, real-time patient eligibility checking, direct clearinghouse submission, and automated patient statement cycles.',
    keyFeatures: ['Mobile Charge Entry', 'Real-Time Benefits Check', 'Credit Card Batching']
  },
  {
    id: 'modmed',
    name: 'ModMed (EMA - Modernizing Medicine)',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/curemd-logo.webp',
    description: 'Adaptive specialty billing for Dermatology, Ophthalmology, Orthopedics, Plastic Surgery, and ENT. Automatic CPT modifier generation.',
    keyFeatures: ['Specialty CPT Automation', 'Mohs Surgery Cross-Coding', 'Pathology Component Billing']
  },
  {
    id: 'greenway',
    name: 'Greenway Health (Intergy & Prime Suite)',
    logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/advanced-md-logo.webp',
    description: 'Comprehensive ambulatory billing, Intergy EDI claims management, Prime Suite clinical note-to-charge matching, and automated clearinghouse reconciliation.',
    keyFeatures: ['Intergy Claims Scrubber', 'Charge Capture Reconciliation', 'Custom Payer Rule Set']
  },
  {
    id: 'practicefusion',
    name: 'Practice Fusion (Veradigm)',
    logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/office-ally-logo.webp',
    description: 'Cloud practice management integration, electronic superbill creation, direct clearinghouse submission, and automated patient statement delivery.',
    keyFeatures: ['Electronic Superbill Sync', 'Denial Tracking Workflows', 'Patient Balance Invoicing']
  }
];

interface EhrExpertiseCardsSectionProps {
  id?: string;
  onSelectEhr?: (ehrName: string) => void;
}

export function EhrExpertiseCardsSection({ 
  id = "ehr-software-directory",
  onSelectEhr 
}: EhrExpertiseCardsSectionProps) {
  return (
    <section id={id} className="py-16 lg:py-20 bg-[#FAFCFF] border-b border-gray-100 relative overflow-hidden">
      {/* Background Subtle Gradient Circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#154377]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#98C340]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-3 border border-[#d4ebb3]">
            <Sparkles className="w-3.5 h-3.5 text-[#98C340]" />
            <span>Ascent Universal Software Roster</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#154377] font-outfit leading-tight tracking-tight mb-4">
            EHR &amp; EMR Systems <span className="text-[#98C340]">We Work In Every Day</span>
          </h2>

          <p className="text-[#556987] text-[15px] sm:text-[16px] leading-relaxed">
            You don&apos;t have to switch your software or disrupt your clinical staff. Our certified billers and coders integrate seamlessly into your current EHR, clearinghouse, and practice management platform.
          </p>
        </div>

        {/* EHR Cards Flex Wrap Grid: strictly 280px width & 340px height */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1280px] mx-auto items-stretch">
          {allEhrSoftwareList.map((ehr, idx) => {
            return (
              <motion.div
                key={ehr.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.25) }}
                onClick={() => onSelectEhr && onSelectEhr(ehr.name)}
                className="w-[280px] h-[340px] shrink-0 bg-white rounded-2xl border border-gray-200/90 hover:border-[#98C340]/70 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group select-none cursor-pointer"
              >
                {/* Top header: Clean #154377 navy bar with crisp white h3 title (eliminates distorted rectangular logo artifacts) */}
                <div className="h-[76px] min-h-[76px] max-h-[76px] w-full px-4 py-2.5 flex items-center justify-center bg-[#154377] border-b border-[#0f325a] shrink-0 text-center">
                  <h3 className="text-[16px] font-bold text-white font-outfit text-center leading-snug line-clamp-2 px-1">
                    {ehr.name}
                  </h3>
                </div>

                {/* Rest of Card: Simple <p> tag, then its bullets */}
                <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden">
                  {/* Simple p tag paragraph */}
                  <p className="text-gray-600 text-[12.5px] leading-relaxed line-clamp-3">
                    {ehr.description}
                  </p>

                  {/* Bullet points with checkmarks */}
                  <div className="pt-3 border-t border-gray-100 mt-auto">
                    <ul className="space-y-2">
                      {ehr.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[12px] text-gray-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#98C340] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default EhrExpertiseCardsSection;
