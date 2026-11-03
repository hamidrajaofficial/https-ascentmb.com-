import React from 'react';
import { 
  Cloud, 
  ShieldCheck, 
  Lock, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  KeyRound, 
  Settings2, 
  FileCheck2,
  TrendingUp
} from 'lucide-react';

interface EhrIntegrationFeaturesProps {
  onGetAudit?: () => void;
}

export function EhrIntegrationFeatures({ onGetAudit }: EhrIntegrationFeaturesProps) {
  const steps = [
    {
      step: '01',
      title: 'Secure Credential Handshake',
      desc: 'We sign a comprehensive HIPAA Business Associate Agreement (BAA) and configure role-based billing staff access inside your EHR portal with two-factor authentication.',
      icon: KeyRound
    },
    {
      step: '02',
      title: 'Payer & Clearinghouse Mapping',
      desc: 'Our senior EDI specialists link your provider NPIs, clearinghouse SFTP connections (Change Healthcare, Waystar, Availity, TriZetto), and custom fee schedules.',
      icon: Settings2
    },
    {
      step: '03',
      title: 'Daily Coding & Claim Scrubbing',
      desc: 'Certified AAPC/AHIMA coders review charges daily, link ICD-10 medical necessity codes, apply modifiers (25, 59, 79), and eliminate rejections before transmission.',
      icon: FileCheck2
    },
    {
      step: '04',
      title: 'Automated Posting & AR Appeals',
      desc: 'Electronic Remittance Advices (ERAs) post automatically with real-time patient balance calculation. Denied claims are analyzed, corrected, and appealed within 48 hours.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-3 border border-[#d4ebb3]">
            <Workflow className="w-3.5 h-3.5 text-[#98C340]" />
            <span>Seamless Integration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-tight tracking-tight mb-4">
            How We Work Inside Your <span className="text-[#98C340]">Existing EHR System</span>
          </h2>

          <p className="text-[#556987] text-[15.5px] sm:text-[16.5px] leading-relaxed">
            Changing EHR platforms is expensive and disruptive to patient appointments. Ascent Medical Billing works inside your current software infrastructure—delivering high-velocity billing without requiring you to switch systems.
          </p>
        </div>

        {/* 4 Step Process Cards with Connector */}
        <div className="relative mb-16">
          {/* Desktop Horizontal Connector Line behind cards */}
          <div 
            className="hidden lg:block absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[2px] bg-[#154377]/25 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div 
                  key={st.title}
                  className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 flex flex-col justify-start hover:border-[#154377]/40 hover:shadow-xl transition-all duration-300 relative z-10 group"
                >
                  {/* 1 Row: Icon + H3 Card Title */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAFCFF] border border-[#154377]/15 flex items-center justify-center text-[#154377] shrink-0 shadow-xs group-hover:bg-[#154377] group-hover:text-white group-hover:border-[#154377] transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-[#154377] font-outfit leading-snug">
                      {st.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-[13.5px] leading-relaxed">
                    {st.desc}
                  </p>

                  {/* Connecting Line / Arrow Indicator between cards on desktop */}
                  {idx < steps.length - 1 && (
                    <div 
                      className="hidden lg:flex absolute -right-3.5 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-7 h-7 items-center justify-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <div className="w-6 h-6 rounded-full bg-white border border-[#154377]/30 shadow-xs flex items-center justify-center text-[#154377]">
                        <ArrowRight className="w-3 h-3 text-[#154377]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pillars Section Header: H2 and content before the 3 feature cards */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 pt-8 border-t border-gray-100">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-3 border border-[#d4ebb3]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#98C340]" />
            <span>Practice-First Technology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#154377] font-outfit leading-tight tracking-tight mb-4">
            Enterprise Infrastructure &amp; <span className="text-[#98C340]">Compliance Standards</span>
          </h2>

          <p className="text-[#556987] text-[15px] sm:text-[16px] leading-relaxed">
            We combine real-time cloud transparency, strict HIPAA and SOC-2 security protocols, and specialty-specific coding rules to accelerate cash flow while protecting practice integrity.
          </p>
        </div>

        {/* 3 Core Pillars (h3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#154377] to-[#0d2e53] text-white rounded-2xl p-8 sm:p-9 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#98C340]/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#98C340] mb-5 border border-white/15">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3 text-white">
                Cloud-Based Software Management
              </h3>
              <p className="text-blue-100/90 text-sm leading-relaxed mb-6">
                Access and manage your revenue cycle metrics anywhere with our secure web portals. Real-time billing dashboards, KPI tracking, and automated reporting deliver 100% transparency into claims and cash flow.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#98C340] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>24/7 Portal Transparency</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAFCFF] border border-gray-200 rounded-2xl p-8 sm:p-9 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EBF2F8] text-[#154377] flex items-center justify-center mb-5 border border-[#154377]/10">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#154377] font-outfit mb-3">
                100% HIPAA &amp; BAA Security
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Patient health information (PHI) is safeguarded with multi-factor authentication, encrypted VPN connections, role-based access tiers, and end-to-end audit logging compliant with HITECH and SOC-2 guidelines.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#154377] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#98C340]" />
              <span>Full BAA &amp; Audit Trail</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAFCFF] border border-gray-200 rounded-2xl p-8 sm:p-9 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#f4f9eb] text-[#85ab36] flex items-center justify-center mb-5 border border-[#d4ebb3]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#154377] font-outfit mb-3">
                Specialty-Specific Rules Engine
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Every clinical specialty operates with distinct billing guidelines. We inject specialty-specific CPT bundling rules, LCD/NCD diagnosis linkages, and modifier validations directly into your EHR claim scrubber.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#154377] uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#98C340]" />
              <span>Sub-25 Day AR Guaranteed</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#f4f9eb] via-white to-[#EBF2F8] border border-[#d4ebb3] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#154377] font-outfit mb-1">
              Want us to audit your current EHR billing performance?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Get an expert revenue review highlighting billing errors, unbilled charges, and denial patterns in your software.
            </p>
          </div>

          <button
            type="button"
            onClick={onGetAudit}
            className="shrink-0 bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3 px-6 rounded-lg text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <span>Request Free EHR Billing Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

export default EhrIntegrationFeatures;
