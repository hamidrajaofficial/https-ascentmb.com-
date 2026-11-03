import React from 'react';
import { Check, Calendar, ArrowRight, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

interface EhrExpertiseHeroSectionProps {
  onBookCall?: () => void;
  onBrowseSoftware?: () => void;
}

const ehrSoftwareLogos = [
  { name: 'Athenahealth', logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/Athenahealth-logo.webp' },
  { name: 'eClinicalWorks', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/eclinical-logo.webp' },
  { name: 'Cerner', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/cerner-logo.webp' },
  { name: 'AdvancedMD', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/advanced-md-logo.webp' },
  { name: 'Kareo / Tebra', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/kareo-logo.webp' },
  { name: 'WebPT', logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/webpt-logo.webp' },
  { name: 'SimplePractice', logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/Simplepractice-logo.webp' },
  { name: 'CureMD', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/curemd-logo.webp' },
  { name: 'CollaborateMD', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/collaboratemd-logo.webp' },
  { name: 'Office Ally', logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/office-ally-logo.webp' },
  { name: 'CareCloud', logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/care-cloud-logo.webp' },
  { name: 'MEDENT', logo: 'https://starbillingsolutions.com/wp-content/uploads/2025/12/medent-logo.webp' },
  { name: 'Citrix', logo: 'https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/citrix-logo.webp' },
];

export function EhrExpertiseHeroSection({ 
  onBookCall, 
  onBrowseSoftware 
}: EhrExpertiseHeroSectionProps) {

  const scrollToDirectory = () => {
    if (onBrowseSoftware) {
      onBrowseSoftware();
      return;
    }
    const el = document.getElementById('ehr-software-directory');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden text-white bg-[#0a1e38]">
      
      {/* City Skyline Background with Deep Moody Navy Overlay - Exactly matching reference screenshot */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 transform"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=2000&q=85')`,
          filter: 'contrast(1.1) brightness(0.85)'
        }}
      />

      {/* Dark Navy / Indigo Transparent Overlay for high legibility */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0a1f3a]/92 via-[#0c2446]/88 to-[#0a1c33]/95 pointer-events-none" />

      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#154377]/35 rounded-full blur-3xl pointer-events-none z-1" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 text-center flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#98C340] text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-6 border border-[#98C340]/30 backdrop-blur-md shadow-sm">
          <Laptop className="w-4 h-4 text-[#98C340]" />
          <span>Universal EHR &amp; EMR Billing Compatibility</span>
        </div>

        {/* Main Headline - Styled with clean, modern Outfit typography exactly like the screenshot */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-light sm:font-normal font-outfit text-white tracking-normal leading-[1.18] max-w-5xl mx-auto mb-6 drop-shadow-md">
          Maximize Your Practice Revenue with Medical Billing Services in <span className="font-semibold text-white">Leading EHR &amp; EMR Systems</span>
        </h1>

        {/* Subtitle Paragraph matching screenshot tone & layout */}
        <p className="text-slate-200 text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed max-w-4xl mx-auto mb-9 drop-shadow">
          Every claim tells a story, and across leading EHR and practice management platforms, that story changes with every payer, policy, and update. Our specialized medical billing service team makes sure your practice stays one step ahead of denials and delays. From real-time eligibility checks to automated reporting, we bring accuracy, speed, and compliance to every transaction.
        </p>

        {/* 3 Circular Checkmarks Row - Exact replica of the screenshot layout */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-9 mb-10 text-white font-semibold text-sm sm:text-base">
          
          {/* Item 1 */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-white text-[#0a1e38] flex items-center justify-center shrink-0 shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3.5] text-[#0a1e38]" />
            </span>
            <span className="tracking-wide">Cost-Effective Solutions</span>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-white text-[#0a1e38] flex items-center justify-center shrink-0 shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3.5] text-[#0a1e38]" />
            </span>
            <span className="tracking-wide">Adopts Latest Technology</span>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-white text-[#0a1e38] flex items-center justify-center shrink-0 shadow-sm">
              <Check className="w-3.5 h-3.5 stroke-[3.5] text-[#0a1e38]" />
            </span>
            <span className="tracking-wide">Improves Collection Efficiency</span>
          </div>

        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button 
            type="button"
            onClick={onBookCall}
            className="w-full sm:w-auto bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-8 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-lg hover:shadow-lime-600/30 flex items-center justify-center gap-2.5 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Game Plan Call</span>
          </button>

          <button 
            type="button"
            onClick={scrollToDirectory}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-3.5 px-8 rounded-lg text-sm sm:text-[15px] transition-all duration-200 backdrop-blur-xs flex items-center justify-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
          >
            <span>Explore Supported EHRs</span>
            <ArrowRight className="w-4 h-4 text-[#98C340]" />
          </button>
        </div>

        {/* Continuous Software Logo Marquee (Right to Left) */}
        <div className="w-full pt-8 border-t border-white/15 relative">
          
          <div className="relative w-full overflow-hidden flex items-center py-2">
            
            {/* Fade Overlays on Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0a1f3a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a1f3a] to-transparent z-10 pointer-events-none" />
            
            {/* Animated Logo Track: Smooth right to left continuous loop */}
            <motion.div
              className="flex gap-6 sm:gap-7 items-center w-max pr-6 sm:pr-7"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 32 }}
            >
              {[...ehrSoftwareLogos, ...ehrSoftwareLogos].map((item, i) => (
                <div 
                  key={`${item.name}-${i}`} 
                  className="bg-white rounded-lg shadow-sm flex items-center justify-center px-4 py-2 w-[145px] sm:w-[160px] h-[52px] sm:h-[56px] shrink-0 border border-white/20 hover:scale-105 transition-transform"
                >
                  <img 
                    src={item.logo} 
                    alt={`${item.name} software logo`} 
                    className="max-h-7 sm:max-h-8 max-w-[125px] object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default EhrExpertiseHeroSection;
