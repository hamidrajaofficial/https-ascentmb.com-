import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const servicesData = [
  {
    id: "billing",
    title: "Medical Billing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    ),
    contentTitle: "Medical Billing",
    description: "Optimize every aspect of your CRM billing with our professional, affordable, and accurate healthcare billing solutions. Our medical billing agency reduces denials and accelerates payments, improving your revenue flow.",
    bullets: [
      "Certified medical billing professionals provide full billing service from registration to claims for maximum reimbursements.",
      "Advanced tech software and automated medical billing.",
      "A data-driven approach to reduce denials.",
      "Dedicated account managers for each client."
    ]
  },
  {
    id: "coding",
    title: "Medical Coding",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    ),
    contentTitle: "Medical Coding",
    description: "Our certified medical coders ensure maximum accuracy and compliance, minimizing the risk of audits while optimizing your revenue potential through precise code mapping.",
    bullets: [
      "Certified and experienced coding specialists",
      "Up-to-date with ICD-10, CPT, and HCPCS changes",
      "Regular coding audits and feedback",
      "Specialty-specific coding expertise"
    ]
  },
  {
    id: "credentialing",
    title: "Medical Credentialing",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><circle cx="9" cy="12" r="3"></circle><path d="M15 10h4"></path><path d="M15 14h4"></path></svg>
    ),
    contentTitle: "Medical Credentialing",
    description: "Credentialing is where delays often start. Missing documents keep providers out of networks for weeks. We handle credentialing with active tracking and consistent follow-ups so applications don't get stuck, allowing you to start billing without delays.",
    bullets: [
      "Faster provider enrollment with insurance networks",
      "Fewer delays from incomplete or incorrect submissions",
      "Regular follow-ups so applications keep moving",
      "Reduced risk of billing without active credentials"
    ]
  },
  {
    id: "ar-management",
    title: "AR Management",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
    ),
    contentTitle: "Accounts Receivable Management",
    description: "Don't let aged accounts impact your cash flow. Our AR management team diligently follows up on outstanding claims, ensuring you collect what you are owed in a timely manner.",
    bullets: [
      "Systematic follow-up on aging accounts",
      "Resolution of unpaid, underpaid, and rejected claims",
      "Reduction of days in accounts receivable (DAR)",
      "Detailed AR aging reports"
    ]
  },
  {
    id: "denial-management",
    title: "Denial Management",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line><line x1="12" y1="12" x2="12" y2="18"></line></svg>
    ),
    contentTitle: "Denial Management",
    description: "Turn denials into revenue. We identify the root causes of denied claims, correct them, and appeal promptly, preventing future occurrences and recovering lost income.",
    bullets: [
      "Thorough analysis of root causes for denials",
      "Prompt handling of claim corrections and appeals",
      "Continuous process improvements to prevent reoccurrences",
      "Detailed tracking of recovered revenue"
    ]
  },
  {
    id: "payment-posting",
    title: "Payment Posting Service",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
    ),
    contentTitle: "Payment Posting Service",
    description: "Accurate payment posting is critical for a smooth revenue cycle. We ensure every payment is posted correctly and promptly, providing a clear picture of your financial health.",
    bullets: [
      "Accurate logging of ERAs and manual EOBs",
      "Identification of underpayments or overpayments",
      "Reconciliation of daily deposits",
      "Clear tracking of patient balances"
    ]
  },
  {
    id: "eligibility",
    title: "Insurance Eligibility Verification",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="9 15 11 17 15 13"></polyline></svg>
    ),
    contentTitle: "Insurance Eligibility Verification",
    description: "Prevent denials before they happen by verifying patient coverage upfront. We confirm eligibility, benefits, and authorization requirements so you know exactly what to expect.",
    bullets: [
      "Pre-visit coverage confirmation",
      "Verification of copays, co-insurance, and deductibles",
      "Reduction in claim rejections due to inactivity",
      "Clear patient financial responsibility estimates"
    ]
  },
  {
    id: "patient-statements",
    title: "Patient Statement Services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="12" cy="14" r="3"></circle></svg>
    ),
    contentTitle: "Patient Statement Services",
    description: "Provide clear, easy-to-understand billing statements to your patients. We manage the entire patient statement generation and mailing process efficiently.",
    bullets: [
      "Clear and professional statement designs",
      "Automated statement generation and mailing",
      "Online payment portal integration options",
      "Handling of patient billing inquiries"
    ]
  },
  {
    id: "audit",
    title: "Medical Billing Audit",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="14" r="2"></circle><line x1="11.5" y1="15.5" x2="14" y2="18"></line></svg>
    ),
    contentTitle: "Medical Billing Audit",
    description: "Ensure your practice is fully compliant and optimized. Our comprehensive audits identify revenue leaks, coding errors, and compliance risks within your current processes.",
    bullets: [
      "Thorough review of coding accuracy and documentation",
      "Identification of revenue leakage opportunities",
      "Compliance checks against updated regulations",
      "Actionable recommendations for process improvement"
    ]
  },
  {
    id: "transcription",
    title: "Medical Transcription Services",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M8 9h8"></path><path d="M8 13h6"></path></svg>
    ),
    contentTitle: "Medical Transcription Services",
    description: "High-quality, accurate transcription services that integrate seamlessly into your workflow. Save time on administrative tasks and focus more on your patients.",
    bullets: [
      "Accurate and timely transcriptions of dictated reports",
      "HIPAA-compliant and secure handling of data",
      "Flexible turnaround times",
      "Seamless integration with EHR/EMR systems"
    ]
  }
];

export function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState("billing");

  const activeService = servicesData.find(s => s.id === activeServiceId) || servicesData[0];

  return (
    <section className="w-full relative z-10 overflow-hidden bg-[#F6F7FB] py-[80px]">
      {/* Split Background Effect */}
      <div className="absolute top-0 left-0 right-0 h-[50%] lg:h-[65%] bg-[#F6F7FB] z-0 px-4"></div>

      <div className="max-w-[1250px] w-full mx-auto px-4 relative flex flex-col xl:flex-row items-stretch justify-between z-10">
        
        {/* Left Side: Dark Card with 25px top and bottom margins so right card extends 25px equally above and below */}
        <div className="w-full xl:w-[60%] bg-[#154377] rounded-[8px] border border-[#1c5596] overflow-hidden relative shadow-none flex flex-col justify-center pb-10 pt-[10px] px-8 lg:pb-12 lg:pt-[10px] lg:px-12 xl:pr-[6%] z-0 xl:my-[25px]">
          {/* Background image roughly mimicking the professionals with blue overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.15] mix-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2669&auto=format&fit=crop')" }}
          ></div>
          
          <div className="relative z-10 w-full">
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-5 mt-4">
              <div className="eyebrow flex items-center text-white font-bold text-[13px] tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 mr-2 text-[#98C340]" />
                Full Service Medical Billing Company
              </div>
              <div className="w-12 h-[2px] bg-[#98C340]"></div>
            </div>

            <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-white mb-6 leading-[1.1] tracking-tight text-left">
              HIPAA-Compliant <span className="text-[#98C340]">Medical Billing</span><br />
              <span className="text-[#98C340]">Services</span> and Solutions
            </h2>

            <p className="text-blue-50 font-normal leading-[1.3] max-w-2xl mb-10 text-left opacity-90 pr-0 lg:pr-8 mt-2" style={{ fontSize: '17px' }}>
              Navigating the complexities of healthcare revenue cycle management requires expertise, precision, and adherence to ever-changing regulations. Our comprehensive medical billing services are designed to alleviate the administrative burden on your practice, allowing you to focus entirely on delivering exceptional patient care.
            </p>
            
            <ul className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {servicesData.map((service) => {
                const isActive = activeServiceId === service.id;
                return (
                  <li key={service.id} className="block h-full">
                    <button
                      onClick={() => setActiveServiceId(service.id)}
                      className={`group w-full h-[110px] flex flex-col items-center justify-center p-3 rounded-[8px] text-center transition-all duration-300 border ${
                        isActive 
                          ? "bg-[#98C340] border-[#98C340] text-white shadow-none transform -translate-y-1" 
                          : "bg-white border-gray-300 text-[#154377] hover:border-[#98C340] hover:shadow-none hover:-translate-y-1"
                      }`}
                    >
                      <div className={`mb-3 transition-transform duration-300 ${isActive ? 'scale-110 drop-shadow-md text-white' : 'text-[#98C340] group-hover:scale-110'}`}>
                        {service.icon}
                      </div>
                      <span className="text-[12px] font-bold leading-tight tracking-wide px-1">
                        {service.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Side: Overlapping Services Details Card - Radius 1px, extending 25px top and bottom beyond left card */}
        <div className="w-full xl:w-[44%] bg-white rounded-[1px] shadow-lg p-8 lg:p-10 z-10 mt-8 xl:mt-0 xl:-ml-[4%] border border-gray-300 flex flex-col relative self-stretch justify-start xl:my-0 min-h-[550px] lg:min-h-[600px]">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#154377] mb-6">
              {activeService.contentTitle}
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {activeService.description}
            </p>
            <ul className="space-y-4 mb-10">
              {activeService.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start text-gray-700 text-[14px] leading-relaxed">
                  <div className="flex-shrink-0 mt-1 mr-3 w-5 h-5 rounded-full bg-[#f4f9eb] flex items-center justify-center border border-[#d6ebb4]">
                    <div className="w-2 h-2 rounded-full bg-[#98C340]"></div>
                  </div>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto flex flex-row gap-2 sm:gap-3">
            <button className="group flex-1 flex flex-row items-stretch h-[45px] rounded-[4px] overflow-hidden text-white font-bold text-[11px] sm:text-[13px] tracking-widest uppercase transition-all duration-300 shadow-md">
              <div className="flex-1 bg-[#154377] group-hover:bg-[#98C340] px-2 flex items-center justify-center transition-colors duration-300">
                VIEW DETAILS
              </div>
              <div className="bg-[#98C340] w-[45px] sm:w-[55px] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </div>
            </button>
            <button className="flex-1 bg-transparent hover:bg-[#98C340] text-[#154377] hover:text-white font-semibold px-3 sm:px-6 h-[45px] rounded-[4px] text-[14px] sm:text-[16px] transition-colors flex items-center justify-center border-2 border-[#98C340] shadow-sm text-center group">
              Get a Quote
              <svg className="w-5 h-5 ml-2 flex-shrink-0 text-[#98C340] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"></path></svg>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
