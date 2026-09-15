import React from 'react';
import { Phone, FileText, Calendar, Activity, ShieldCheck, Award, TrendingUp } from 'lucide-react';

export function HighPerformanceSection() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1250px] mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-16 lg:mb-20">
          {/* Left Content Area */}
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0">
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-5">
               <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
                 <Activity className="w-4 h-4 mr-2 text-[#98C340]" />
                 Medical Practice Success
               </div>
               <div className="w-12 h-[2px] bg-[#98C340]"></div>
            </div>
            
            {/* Title */}
            <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight">
              High-Performance <span className="text-[#98C340]">Medical Billing Solutions</span> To Protect and Grow Revenue
            </h2>

            {/* Description */}
            <p className="text-gray-500 font-normal leading-relaxed mb-8" style={{ fontSize: '17px' }}>
              Leading medical billing company offering trusted medical billing and revenue cycle management services for healthcare providers dealing with delayed claims, denied reimbursements, and administrative overload. As a medical billing agency, we understand how quickly small billing gaps can turn into serious revenue loss.
            </p>

            {/* Buttons Bottom Row */}
            <div className="flex flex-row flex-wrap xl:flex-nowrap items-center gap-3 lg:gap-4 mt-2">
               <button className="flex items-center whitespace-nowrap bg-[#154377] hover:bg-[#10345d] transition-colors rounded-full text-white pr-4 lg:pr-6 p-1 relative overflow-hidden group w-fit">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 shrink-0 bg-[#98C340] rounded-full flex items-center justify-center mr-2 lg:mr-3 text-white transition-transform duration-300 group-hover:bg-white group-hover:text-[#154377]">
                     <Phone size={16} fill="currentColor" strokeWidth={0} />
                  </div>
                  <span className="font-bold text-[13px] lg:text-[14px]">Call Us Now</span>
               </button>
               
               <button className="flex items-center whitespace-nowrap bg-[#98C340] hover:bg-[#85ab36] transition-colors rounded-full text-white pr-4 lg:pr-6 p-1 relative overflow-hidden group w-fit">
                  <div className="w-9 h-9 lg:w-10 lg:h-10 shrink-0 bg-white rounded-full flex items-center justify-center mr-2 lg:mr-3 text-[#154377] transition-transform duration-300 group-hover:bg-[#154377] group-hover:text-white">
                     <FileText size={16} />
                  </div>
                  <span className="font-bold text-[13px] lg:text-[14px]">Free Consultation</span>
               </button>

               <button className="flex items-center whitespace-nowrap bg-transparent border-2 border-[#98C340] hover:bg-[#98C340] transition-colors rounded-full text-[#154377] hover:text-white pr-4 lg:pr-6 p-1 relative overflow-hidden group w-fit h-[45px] lg:h-[48px]">
                  <div className="w-8 h-8 lg:w-9 lg:h-9 shrink-0 rounded-full flex items-center justify-center mr-1 lg:mr-2 text-[#98C340] group-hover:text-white transition-colors duration-300">
                     <Calendar size={16} />
                  </div>
                  <span className="font-bold text-[13px] lg:text-[14px]">Book Appointment</span>
               </button>
            </div>
            
          </div>

          {/* Right Stats Area */}
          <div className="w-full lg:w-[48%] relative pt-4 lg:pt-0 flex flex-col justify-center lg:mt-2">
            <div className="w-full max-w-[620px] flex flex-col gap-3">
              
              {/* Row 1: 2 Main Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Card 1: 100% HIPAA COMPLIANT */}
                <div className="bg-[#98C340] hover:bg-[#85ab36] transition-all duration-300 rounded-[8px] p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-0.5">
                  <span className="text-white text-2xl sm:text-[28px] lg:text-[30px] font-bold tracking-tight mb-1">
                    100%
                  </span>
                  <span className="text-white/95 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider leading-tight">
                    HIPAA COMPLIANT
                  </span>
                </div>

                {/* Card 2: 7 YEARS INDUSTRY EXPERIENCE */}
                <div className="bg-[#154377] hover:bg-[#113761] transition-all duration-300 rounded-[8px] p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-md hover:-translate-y-0.5">
                  <span className="text-white text-2xl sm:text-[28px] lg:text-[30px] font-bold tracking-tight mb-1">
                    7 YEARS
                  </span>
                  <span className="text-gray-200 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wider leading-tight">
                    INDUSTRY EXPERIENCE
                  </span>
                </div>
              </div>

              {/* Row 2: 3 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Card 3: ≥ 95% FIRST-PASS ACCEPTANCE */}
                <div className="bg-[#0f2e52] hover:bg-[#154377] transition-all duration-300 rounded-[8px] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-0.5">
                  <span className="text-white text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight mb-1">
                    ≥ 95%
                  </span>
                  <span className="text-gray-200 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider leading-tight">
                    FIRST-PASS ACCEPTANCE
                  </span>
                </div>

                {/* Card 4: 24–48 HRS TURNAROUND TIME */}
                <div className="bg-[#1d538f] hover:bg-[#2364ab] transition-all duration-300 rounded-[8px] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-0.5">
                  <span className="text-white text-base sm:text-lg lg:text-[20px] font-bold tracking-tight mb-1">
                    24–48 HRS
                  </span>
                  <span className="text-blue-100 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider leading-tight">
                    TURNAROUND TIME
                  </span>
                </div>

                {/* Card 5: ≥ 95% NET COLLECTION RATE */}
                <div className="bg-[#98C340] hover:bg-[#85ab36] transition-all duration-300 rounded-[8px] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-0.5">
                  <span className="text-white text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight mb-1">
                    ≥ 95%
                  </span>
                  <span className="text-white/95 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider leading-tight">
                    NET COLLECTION RATE
                  </span>
                </div>
              </div>

              {/* Row 3: 3 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Card 6: 3% AR REJECTION RATE */}
                <div className="bg-[#1d538f] hover:bg-[#2364ab] transition-all duration-300 rounded-[8px] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-0.5">
                  <span className="text-white text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight mb-1">
                    3%
                  </span>
                  <span className="text-blue-100 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider leading-tight">
                    AR REJECTION RATE
                  </span>
                </div>

                {/* Card 7: TIMELY FILING */}
                <div className="bg-[#154377] hover:bg-[#113761] transition-all duration-300 rounded-[8px] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-0.5">
                  <span className="text-white text-base sm:text-lg lg:text-[20px] font-bold tracking-tight mb-1">
                    TIMELY
                  </span>
                  <span className="text-gray-200 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider leading-tight">
                    FILING
                  </span>
                </div>

                {/* Card 8: 98%+ COLLECTION RATIO */}
                <div className="bg-[#0f2e52] hover:bg-[#154377] transition-all duration-300 rounded-[8px] p-3.5 sm:p-4 flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-0.5">
                  <span className="text-white text-lg sm:text-xl lg:text-[22px] font-bold tracking-tight mb-1">
                    98%+
                  </span>
                  <span className="text-gray-200 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider leading-tight">
                    COLLECTION RATIO
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

