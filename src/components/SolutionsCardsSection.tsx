import React from 'react';
import { ArrowRight, Laptop, Calendar, ShieldCheck, Stethoscope, Building2, User } from 'lucide-react';
import { motion } from 'motion/react';

const softwareLogos = [
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/advanced-md-logo.webp",
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/cerner-logo.webp",
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/citrix-logo.webp",
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/collaboratemd-logo.webp",
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/curemd-logo.webp",
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/eclinical-logo.webp",
  "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/kareo-logo.webp",
  "https://starbillingsolutions.com/wp-content/uploads/2025/12/webpt-logo.webp",
  "https://starbillingsolutions.com/wp-content/uploads/2025/12/office-ally-logo.webp",
  "https://starbillingsolutions.com/wp-content/uploads/2025/12/Simplepractice-logo.webp",
  "https://starbillingsolutions.com/wp-content/uploads/2025/12/Athenahealth-logo.webp",
  "https://starbillingsolutions.com/wp-content/uploads/2025/12/care-cloud-logo.webp",
  "https://starbillingsolutions.com/wp-content/uploads/2025/12/medent-logo.webp"
];

export interface SolutionsCardsSectionProps {
  specialtyName?: string;
  onCheckDetails?: () => void;
}

export function SolutionsCardsSection({ specialtyName, onCheckDetails }: SolutionsCardsSectionProps = {}) {
  return (
    <section className="relative overflow-hidden bg-[#154377]/[0.03] py-[80px]">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[55%] z-0">
         <div className="absolute inset-0 bg-[#154377]/90 z-10"></div>
         <img src="https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/why-choose-img.webp" alt="Background" className="w-full h-full object-cover object-[center_20%]" />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 relative z-10">

        {/* Software Logos Slider Top Section */}
        <div className="text-center mb-16 pt-4 text-white z-20 relative">
          {/* Eyebrow */}
          <div className="flex flex-col items-center mb-5">
             <div className="eyebrow flex items-center text-white font-bold text-[13px] tracking-wider mb-3">
               <Laptop className="w-4 h-4 mr-2 text-[#98C340]" />
               Software &amp; EHR Compatibility
             </div>
             <div className="w-12 h-[2px] bg-[#98C340]"></div>
          </div>

          <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit mb-6 leading-[1.1] tracking-tight drop-shadow-md text-white">
            Medical Billing Software <span className="text-[#98C340]">We Are Experts In</span>
          </h2>
          <p className="text-[17px] opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            {specialtyName 
              ? `Our certified ${specialtyName.toLowerCase()} billing experts are proficient in leading Electronic Health Record (EHR) and Practice Management systems. We seamlessly integrate with your existing technology to ensure accuracy, compliance, and accelerated reimbursements without disrupting your daily workflow.`
              : 'Our certified billing experts are proficient in leading Electronic Health Record (EHR) and Practice Management systems. We seamlessly integrate with your existing technology to ensure accuracy, compliance, and accelerated reimbursements without disrupting your daily workflow.'}
          </p>
          
          <div className="relative w-full overflow-hidden flex items-center py-4">
            {/* Fade overlays for the slider */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#154377]/90 to-transparent z-10 pointer-events-none fade-left-mask"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#154377]/90 to-transparent z-10 pointer-events-none fade-right-mask"></div>
            
            <motion.div
              className="flex gap-8 items-center w-max pr-8 opacity-100"
              animate={{ x: ["0%", "-33.333333%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
               {[...softwareLogos, ...softwareLogos, ...softwareLogos].map((src, i) => (
                  <div key={i} className="bg-white rounded-md shadow-sm flex items-center justify-center p-3 w-[150px] h-[55px]">
                    <img 
                      src={src} 
                      alt={`Software Provider`} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
               ))}
            </motion.div>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[8px] border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex flex-col items-center text-center h-full z-20">
             <h3 className="text-[22px] font-bold text-[#154377] mb-4">Cloud-Based Software Management</h3>
             <p className="text-gray-500 font-normal leading-relaxed text-[16px] flex-grow">
               Access and manage your practice anytime, anywhere with our secure cloud-based software solutions. Benefit from enhanced data security, seamless scalability, and real-time collaboration, ensuring your operations run efficiently and securely.
             </p>
             <User className="absolute -bottom-4 -right-4 w-32 h-32 text-gray-50 opacity-[0.05] pointer-events-none" />
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[8px] border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex flex-col items-center text-center h-full z-20">
             <h3 className="text-[22px] font-bold text-[#154377] mb-4">EHR Management</h3>
             <p className="text-gray-500 font-normal leading-relaxed text-[16px] flex-grow">
               Our integrated Electronic Health Records (EHR) system streamlines patient record management through accurate documentation, secure data handling, HIPAA compliance, and adherence to industry regulations. Improve workflow efficiency while maintaining the highest standards of patient care.
             </p>
             <Building2 className="absolute -bottom-4 -right-4 w-32 h-32 text-gray-50 opacity-[0.05] pointer-events-none" />
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[8px] border border-gray-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex flex-col items-center text-center h-full z-20">
             <h3 className="text-[22px] font-bold text-[#154377] mb-4">
               {specialtyName ? `${specialtyName} Software Management` : 'Specialty-Specific Software Management'}
             </h3>
             <p className="text-gray-500 font-normal leading-relaxed text-[16px] flex-grow">
               {specialtyName 
                 ? `We provide customized software solutions tailored to the unique clinical workflows and billing nuances of your ${specialtyName.toLowerCase()} practice. Beyond optimizing practice operations, our systems are designed to support your workflow, improve efficiency, and help you achieve better clinical and financial outcomes.`
                 : 'We provide customized software solutions tailored to the unique needs of your medical specialty. Beyond optimizing practice operations, our systems are designed to support your workflow, improve efficiency, and help you achieve better clinical and financial outcomes.'}
             </p>
             <Calendar className="absolute -bottom-4 -right-4 w-32 h-32 text-gray-50 opacity-[0.05] pointer-events-none" />
          </div>

        </div>
        
        {/* Check Details Button */}
        <div className="flex justify-center mt-12 mb-4 relative z-20">
           <button 
             onClick={onCheckDetails || (() => {
               const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
               el?.scrollIntoView({ behavior: 'smooth' });
             })}
             className="bg-[#98C340] text-white font-bold px-8 py-3.5 rounded flex items-center justify-center gap-2 transition hover:bg-[#85ab36] shadow-md hover:shadow-lg cursor-pointer"
           >
              Check details
              <ArrowRight className="w-5 h-5 ml-1" />
           </button>
        </div>

      </div>
    </section>
  );
}
