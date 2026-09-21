import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export interface SpecialtyMenuItem {
  name: string;
  id: string;
  icon: (props: { className?: string }) => React.ReactElement;
}

// 15 Vector Outline Icons matching the brand color palette (#154377 Navy & #98C340 Accent Green)
export const SpecialtyIcons = {
  // 1. Internal Medicine - Stethoscope
  InternalMedicine: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M9 4v7a6 6 0 0 0 12 0V4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 17v5a5 5 0 0 0 10 0v-4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="25" cy="15" r="3.5" stroke="#98C340" strokeWidth="2.2" />
      <circle cx="9" cy="4" r="1.5" fill="#154377" />
      <circle cx="21" cy="4" r="1.5" fill="#154377" />
    </svg>
  ),

  // 2. Dermatology - Skin layers & hair follicle with brand green pores
  Dermatology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M11 6c2.5 5 3.5 10 4.5 14" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19 4c-1 5.5-2 10.5-3 16" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 21c4-1 8 1 12 0s8-1 12 0 3 .8 4 1" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="8" cy="26" r="1.3" fill="#98C340" />
      <circle cx="13" cy="28" r="1.3" fill="#98C340" />
      <circle cx="19" cy="27" r="1.3" fill="#98C340" />
      <circle cx="25" cy="29" r="1.3" fill="#98C340" />
      <circle cx="29" cy="26" r="1.3" fill="#98C340" />
      <path d="M4 31h28" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="1 3" />
    </svg>
  ),

  // 3. Hospice - Crossed medical bandages with brand green accents
  Hospice: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <rect x="5" y="14" width="26" height="8" rx="4" transform="rotate(-45 18 18)" stroke="#154377" strokeWidth="2.2" />
      <rect x="5" y="14" width="26" height="8" rx="4" transform="rotate(45 18 18)" stroke="#154377" strokeWidth="2.2" />
      <circle cx="18" cy="18" r="1.5" fill="#98C340" />
      <circle cx="15" cy="18" r="1.2" fill="#98C340" />
      <circle cx="21" cy="18" r="1.2" fill="#98C340" />
    </svg>
  ),

  // 4. Rheumatology - Joint bone with brand green pain markers
  Rheumatology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M13 5c0 3 2 5 2 8h6c0-3 2-5 2-8h-10z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M15 23c0 3-2 5-2 8h10c0-3-2-5-2-8h-6z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <ellipse cx="18" cy="18" rx="4" ry="2.5" stroke="#154377" strokeWidth="2" />
      <path d="M7 16l3 1M7 20l3-1M29 16l-3 1M29 20l-3-1" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 5. Laboratory - Microscope with brand green indicator
  Laboratory: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M12 6l8 10M10 8l2-2 7 6-2 2" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 16c3 1 7 4 7 8a5 5 0 0 1-5 5H10" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6 31h20" stroke="#154377" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="17" cy="22" r="1.5" fill="#98C340" />
      <path d="M10 24h6" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 6. Home Health - House with brand green heart
  HomeHealth: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M6 16L18 6l12 10v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V16z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 17c-1.8-2.2-4.5-.8-4.5 1.5 0 2.5 4.5 5.5 4.5 5.5s4.5-3 4.5-5.5c0-2.3-2.7-3.7-4.5-1.5z" stroke="#98C340" fill="#98C340" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),

  // 7. Mental Health - Head profile with brand green heart brain
  MentalHealth: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M12 30v-4c0-2 2-3 4-3h1a9 9 0 0 0 9-9 9 9 0 0 0-14-7.4A9 9 0 0 0 8 15c0 4 2 6 4 8" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 13c-1.2-1.5-3-.5-3 1 0 1.8 3 4 3 4s3-2.2 3-4c0-1.5-1.8-2.5-3-1z" stroke="#98C340" fill="#98C340" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),

  // 8. Physical Therapy - Active figure with brand green motion arcs
  PhysicalTherapy: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="8" r="3" stroke="#154377" strokeWidth="2.2" />
      <path d="M14 17l4-3 4 3-2 6 4 6M16 23l-3 6" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15a13 13 0 0 0 0 8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28 15a13 13 0 0 1 0 8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  // 9. Geriatric Medicine - Senior figure with brand green cane
  GeriatricMedicine: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="11" r="5" stroke="#154377" strokeWidth="2.2" />
      <circle cx="16" cy="11" r="1.5" stroke="#154377" strokeWidth="1.5" />
      <circle cx="20" cy="11" r="1.5" stroke="#154377" strokeWidth="1.5" />
      <path d="M17.5 11h1" stroke="#154377" strokeWidth="1.5" />
      <path d="M10 29v-5a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v5" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M26 21v8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  // 10. Podiatry - Foot outline with chart & brand green cross
  Podiatry: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M10 8c1 4 2 8 2 12 0 5 4 8 9 8h4c2 0 3-2 3-4 0-4-3-6-6-6-2 0-3-1-3-3V8" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="16" width="12" height="15" rx="2" fill="white" stroke="#154377" strokeWidth="1.8" />
      <path d="M21 16v-2h6v2" stroke="#154377" strokeWidth="1.5" />
      <path d="M24 21v5M21.5 23.5h5" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 11. Cardiology - Heart outline with brand green ECG pulse wave
  Cardiology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 29s-12-7.5-12-15a6 6 0 0 1 12-2 6 6 0 0 1 12 2c0 7.5-12 15-12 15z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M4 18h7l2-5 3 10 3-7 2 2h11" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // 12. Neurology - Brain hemispheres and neural folds with brand green accents
  Neurology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 7v22M18 7a7 7 0 0 0-7 7c0 2 1 3 1 5a5 5 0 0 1-2 4 4 4 0 0 0 4 4c2 0 3-1 4-2M18 7a7 7 0 0 1 7 7c0 2-1 3-1 5a5 5 0 0 0 2 4 4 4 0 0 1-4 4c-2 0-3-1-4-2" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 14a3 3 0 0 1 3 3M23 14a3 3 0 0 0-3 3" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 13. Nephrology - Kidneys with brand green vessels
  Nephrology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M13 10c-4 0-7 3.5-7 8s3 8 7 8c2 0 3-2 3-4 0-3-1-4-1-4s1-1 1-4c0-2-1-4-3-4z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M23 10c4 0 7 3.5 7 8s-3 8-7 8c-2 0-3-2-3-4 0-3 1-4 1-4s-1-1-1-4c0-2 1-4 3-4z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M14 17h2M14 19h2M20 17h2M20 19h2" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // 14. Gastroenterology - Stomach organ with brand green gastric curve
  Gastroenterology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M15 5v5c0 4-4 6-6 10-2 5 1 11 7 11 8 0 12-6 12-13 0-5-3-8-8-8h-2" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 12c3 2 5 5 5 9 0 3-2 6-5 6" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  // 15. Endocrinology - Thyroid gland with brand green follicular dots
  Endocrinology: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M16 19c-3-5-6-9-10-8-3 1-3 9-1 13 3 5 8 4 11 1" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M20 19c3-5 6-9 10-8 3 1 3 9 1 13-3 5-8 4-11 1" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 23h4" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="9" cy="17" r="1.3" fill="#98C340" />
      <circle cx="10" cy="22" r="1.3" fill="#98C340" />
      <circle cx="27" cy="17" r="1.3" fill="#98C340" />
      <circle cx="26" cy="22" r="1.3" fill="#98C340" />
    </svg>
  ),
};

// 15 specialties matching the user's uploaded image
export const specialtiesList: SpecialtyMenuItem[] = [
  { name: 'Internal Medicine', id: 'internal-medicine', icon: SpecialtyIcons.InternalMedicine },
  { name: 'Home Health', id: 'home-health', icon: SpecialtyIcons.HomeHealth },
  { name: 'Cardiology', id: 'cardiology', icon: SpecialtyIcons.Cardiology },
  { name: 'Dermatology', id: 'dermatology', icon: SpecialtyIcons.Dermatology },
  { name: 'Mental Health', id: 'mental-health', icon: SpecialtyIcons.MentalHealth },
  { name: 'Neurology', id: 'neurology', icon: SpecialtyIcons.Neurology },
  { name: 'Hospice', id: 'hospice', icon: SpecialtyIcons.Hospice },
  { name: 'Physical Therapy', id: 'physical-therapy', icon: SpecialtyIcons.PhysicalTherapy },
  { name: 'Nephrology', id: 'nephrology', icon: SpecialtyIcons.Nephrology },
  { name: 'Rheumatology', id: 'rheumatology', icon: SpecialtyIcons.Rheumatology },
  { name: 'Geriatric Medicine', id: 'geriatric-medicine', icon: SpecialtyIcons.GeriatricMedicine },
  { name: 'Gastroenterology', id: 'gastroenterology', icon: SpecialtyIcons.Gastroenterology },
  { name: 'Laboratory', id: 'laboratory', icon: SpecialtyIcons.Laboratory },
  { name: 'Podiatry', id: 'podiatry', icon: SpecialtyIcons.Podiatry },
  { name: 'Endocrinology', id: 'endocrinology', icon: SpecialtyIcons.Endocrinology },
];

export interface SpecialtiesMegaMenuProps {
  onClose?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
  onViewAllSpecialties?: () => void;
}

export function SpecialtiesMegaMenu({ 
  onClose, 
  onSelectSpecialty, 
  onViewAllSpecialties 
}: SpecialtiesMegaMenuProps) {
  
  const handleItemClick = (name: string) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(name);
    } else if (onViewAllSpecialties) {
      onViewAllSpecialties();
    }
    if (onClose) onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className="absolute top-full left-0 w-full bg-[#F8FAF3] shadow-[0_18px_40px_rgba(21,67,119,0.08)] border-t border-[#98C340]/20 z-50 pointer-events-auto"
    >
      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-8 pt-4 pb-6">
        
        {/* 3 Columns Layout of the Mega Menu */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* 1. Left Column: Brand Highlight Box (3 cols) */}
          <div className="lg:col-span-3 xl:col-span-3 bg-[#154377] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md h-full min-h-[310px]">
            <div>
              <h3 className="text-2xl font-semibold font-outfit leading-tight tracking-tight mb-3">
                Specialty Billing <br />
                <span className="text-[#98C340]">Excellence</span>
              </h3>
              
              <p className="text-white/90 text-[13px] leading-relaxed mb-6 font-normal">
                AAPC &amp; AHIMA certified billing and coding tailored specifically to clinical workflows, specialized CPT modifiers, and clean claim compliance.
              </p>
            </div>

            <div>
              <a
                href="#specialties-section"
                onClick={() => {
                  if (onViewAllSpecialties) onViewAllSpecialties();
                  if (onClose) onClose();
                }}
                className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#98C340] hover:bg-[#85ab36] transition-all duration-200 cursor-pointer shadow-sm text-center"
              >
                Explore All Specialties
              </a>
            </div>
          </div>

          {/* 2. Middle Column: "Specialties We Serve" (6 cols) - 3 Columns Listing, No Scrollbar */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col">
            <div className="pb-2 mb-2 border-b border-[#98C340]/20 flex items-center justify-between">
              <h3 className="text-[17px] font-semibold text-[#154377] font-outfit tracking-tight">
                Specialties We <span className="text-[#98C340]">Serve</span>
              </h3>
              <span className="text-xs text-gray-500 font-medium">
                {specialtiesList.length} Specialties Available
              </span>
            </div>

            {/* 3 Columns Listing: 15 items fit perfectly in 5 rows with compact gap between name & arrow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0.5">
              {specialtiesList.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    onClick={() => handleItemClick(item.name)}
                    className="group flex items-center justify-between gap-1.5 py-2 px-1 border-b border-gray-100 hover:border-[#98C340]/40 transition-colors duration-150 cursor-pointer"
                  >
                    {/* Left Icon & Specialty Name */}
                    <div className="flex items-center gap-2 min-w-0 pr-1">
                      <div className="w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[12.5px] font-bold text-[#154377] group-hover:text-[#98C340] font-outfit tracking-tight transition-colors duration-150 truncate">
                        {item.name}
                      </span>
                    </div>

                    {/* Right Circular Arrow Outline (Positioned close to name without wide gap) */}
                    <div className="w-4.5 h-4.5 rounded-full border-[1.4px] border-[#154377] group-hover:border-[#98C340] flex items-center justify-center shrink-0 transition-colors duration-150">
                      <ArrowRight 
                        className="w-2.5 h-2.5 text-[#154377] group-hover:text-[#98C340] group-hover:translate-x-0.5 transition-all duration-150" 
                        strokeWidth={2.4} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Right Column: Promo Card (3 cols) - "Billing Services As Low As 2.99%" */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col h-full min-h-[310px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md flex flex-col items-center justify-between text-center p-6 bg-gradient-to-b from-[#F2F8E7] via-[#EEF7DE] to-[#E4F2CC] border border-[#98C340]/40">
              {/* Checkerboard subtle pattern overlay */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #98C340 25%, transparent 25%), linear-gradient(-45deg, #98C340 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #98C340 75%), linear-gradient(-45deg, transparent 75%, #98C340 75%)`,
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px'
                }}
              />

              {/* Main Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <h3 className="text-[#154377] text-[20px] font-extrabold font-outfit leading-tight tracking-tight max-w-[240px]">
                  Billing Services As Low As
                </h3>

                <div className="text-[50px] font-extrabold text-[#528114] font-outfit tracking-tight leading-none my-2.5 drop-shadow-xs">
                  2.99%
                </div>

                <div className="w-[75%] h-[2.5px] bg-[#98C340]/60 rounded-full my-2.5" />

                <p className="text-[#154377]/85 text-[12.5px] font-medium leading-relaxed max-w-[240px] text-center">
                  Boost the revenue of your healthcare practice with our Professional Medical Billing Solutions.
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 w-full pt-3">
                <button
                  type="button"
                  onClick={() => {
                    if (onClose) onClose();
                    handleItemClick('Cardiology');
                  }}
                  className="w-full inline-flex items-center justify-center py-3 px-5 bg-[#98C340] hover:bg-[#85ab36] text-white text-[15px] font-bold rounded-[6px] border border-[#7ea72d] shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Get Benefit Now!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
