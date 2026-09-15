import React from 'react';
import { Phone, FileText, Calendar, Plus } from 'lucide-react';

interface ReliableBillingSectionProps {
  onBookCall?: () => void;
  onConsultation?: () => void;
}

export function ReliableBillingSection({
  onBookCall,
  onConsultation,
}: ReliableBillingSectionProps) {
  return (
    <section className="w-full bg-white pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraph, and Action Bar */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-[1.18] tracking-tight mb-6">
              Reliable{' '}
              <span className="text-[#98C340]">
                Medical Billing<br className="hidden sm:inline" /> Services
              </span>
              {' '}That Reduce Claim Denials.
            </h2>

            {/* Description Paragraph */}
            <p className="text-[#4A5D78] text-[15px] sm:text-[16px] leading-[1.7] mb-8 font-normal">
              Managing billing in-house can increase administrative work and delay payments. Our medical billing services combine experienced professionals, efficient workflows, and customized insurance billing solutions to help healthcare practices submit cleaner claims, reduce denials, and get paid faster. Whether you need ongoing billing support or guidance from a trusted medical billing consultant, we provide reliable solutions tailored to healthcare providers, physicians, clinics and hospitals. Let&apos;s talk with our medical billing consultant.
            </p>

            {/* Action Bar with 3 Buttons */}
            <div className="w-full sm:w-max bg-[#154377] p-2 sm:p-2.5 rounded-[10px] shadow-lg flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-2.5">
              
              {/* Button 1: Call Us Now */}
              <a
                href="tel:6307013986"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-[6px] border border-white/20 hover:border-white/40 text-white font-semibold text-xs sm:text-sm transition-all hover:bg-white/10"
              >
                <Phone className="w-4 h-4 text-[#98C340]" />
                <span>Call Us Now</span>
              </a>

              {/* Button 2: Free Consultation */}
              <button
                onClick={onConsultation}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-[6px] bg-[#98C340] hover:bg-[#85ab36] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Free Consultation</span>
              </button>

              {/* Button 3: Book Appointment */}
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-[6px] bg-white hover:bg-gray-100 text-[#154377] font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#154377]" />
                <span>Book Appointment</span>
              </button>

            </div>

          </div>

          {/* Right Column: Stylized Doctor/Specialist Image Container with Custom Frame */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Outer Frame Wrapper */}
            <div className="relative w-full max-w-[560px] pb-6 pr-6">
              
              {/* Accent background tab / shelf */}
              <div className="absolute top-6 right-0 bottom-0 left-6 bg-[#154377] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[24px] rounded-bl-[24px] -z-0" />

              {/* Main Photo Card */}
              <div className="relative z-10 bg-white rounded-tl-[36px] rounded-br-[12px] rounded-tr-[16px] rounded-bl-[16px] overflow-hidden shadow-2xl border-4 border-white mr-2 mb-2">
                <img
                  src="/src/assets/images/medical_billing_desk_1787690184246.jpg"
                  alt="Medical Billing Consultants & Specialists"
                  className="w-full h-auto object-cover max-h-[380px] sm:max-h-[420px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Circular Plus Badge on bottom right corner */}
              <div className="absolute -bottom-2 -right-2 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-xl flex items-center justify-center p-1.5">
                <div className="w-full h-full rounded-full bg-[#98C340] flex items-center justify-center text-white">
                  <Plus className="w-8 h-8 sm:w-9 sm:h-9 stroke-[3]" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
