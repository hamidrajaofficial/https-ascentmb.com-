import React from 'react';
import { HandCoins, Stethoscope, ArrowRight, Activity } from 'lucide-react';

export function RcmCompanySection() {
  return (
    <section className="py-[80px] bg-[#F7F8FA] relative">
      <div className="max-w-[1250px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* Eyebrow */}
          <div className="flex flex-col items-center mb-5">
             <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
               <HandCoins className="w-4 h-4 mr-2 text-[#98C340]" />
               End-to-End RCM Excellence
             </div>
             <div className="w-12 h-[2px] bg-[#98C340]"></div>
          </div>

          <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight">
            <span className="text-[#98C340]">RCM Medical</span> Billing Company
          </h2>
          <p className="text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto text-[17px]">
            A reliable and dedicated success partner that offers quality revenue cycle management services to boost your medical practices&apos; revenue.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Enhance Your Profitability */}
          <div className="bg-[#154377] text-white rounded-[12px] p-8 flex flex-col items-center text-center shadow-md border border-[#154377] hover:shadow-xl hover:border-[#98C340]/40 transition-all duration-300 group">
            {/* Icon */}
            <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-white/10 text-[#98C340] group-hover:bg-[#98C340] group-hover:text-[#154377] transition-colors duration-300">
              <HandCoins className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-[#98C340] transition-colors duration-300 mb-3 font-outfit">
              Enhance Your Profitability
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-[13.5px] leading-relaxed mb-8 flex-grow font-normal">
              We have years of experience in the healthcare industry and know exactly how to get the most out of...
            </p>

            {/* Button */}
            <button className="flex items-center gap-2 bg-[#98C340] hover:bg-white hover:text-[#154377] text-[#154377] font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm group/btn">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

          {/* Center Column: Handshake Image */}
          <div className="rounded-[12px] overflow-hidden shadow-sm border border-gray-100/80 h-full min-h-[320px] flex items-center justify-center bg-white group">
            <img 
              src="/src/assets/images/doctor_handshake_rcm_1786720921645.jpg" 
              alt="Medical doctor shaking hands with client" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 2: Full-Service Medical Billing Company */}
          <div className="bg-[#154377] text-white rounded-[12px] p-8 flex flex-col items-center text-center shadow-md border border-[#154377] hover:shadow-xl hover:border-[#98C340]/40 transition-all duration-300 group">
            {/* Icon */}
            <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-white/10 text-[#98C340] group-hover:bg-[#98C340] group-hover:text-[#154377] transition-colors duration-300">
              <Stethoscope className="w-8 h-8 stroke-[1.75]" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-[#98C340] transition-colors duration-300 mb-3 font-outfit">
              Full-Service Medical Billing Company
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-[13.5px] leading-relaxed mb-8 flex-grow font-normal">
              We are a full-service medical billing company that delivers end-to-end healthcare management services...
            </p>

            {/* Button */}
            <button className="flex items-center gap-2 bg-[#98C340] hover:bg-white hover:text-[#154377] text-[#154377] font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm group/btn">
              <span>Read more</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
