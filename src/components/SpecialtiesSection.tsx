import React, { useState } from 'react';
import { 
  HeartPulse, 
  Brain, 
  FlaskConical, 
  Eye, 
  Microscope, 
  PersonStanding, 
  Footprints,
  Accessibility,
  Activity,
  Ambulance,
  Users,
  Stethoscope,
  Plus,
  Minus,
  Syringe,
  Bone,
  Baby,
  Radiation,
  Bandage,
  Scissors,
  Shield,
  Bug,
  Hospital,
  TestTubes,
  Wind,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface SpecialtyItem {
  name: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

export interface SpecialtiesSectionProps {
  badge?: string;
  highlightedTitle?: string;
  titleSuffix?: string;
  description?: string;
  customSpecialties?: SpecialtyItem[];
  id?: string;
  onSelectSpecialty?: (specialtyName: string) => void;
}

export const defaultSpecialties: SpecialtyItem[] = [
  { name: 'Dental', icon: Stethoscope },
  { name: 'DME', icon: Accessibility },
  { name: 'Mental Health / Behavioral Health', icon: Brain },
  { name: 'Cardiology', icon: HeartPulse },
  { name: 'Laboratory', icon: FlaskConical },
  { name: 'Urgent Care', icon: Activity },
  { name: 'Ophthalmology', icon: Eye },
  { name: 'Pain Management', icon: Activity },
  { name: 'Pathology', icon: Microscope },
  { name: 'Ambulatory Surgery Center (ASC)', icon: Ambulance },
  { name: 'Physical Therapy', icon: PersonStanding },
  { name: 'Family Medicine', icon: Users },
  { name: 'Anesthesia', icon: Syringe },
  { name: 'Chiropractic', icon: Bone },
  { name: 'Dermatology', icon: Activity },
  { name: 'OBGYN', icon: Baby },
  { name: 'Podiatry', icon: Footprints },
  { name: 'Radiology', icon: Radiation },
  { name: 'Rehab', icon: PersonStanding },
  { name: 'Wound Care', icon: Bandage },
  { name: 'Pediatric', icon: Baby },
  { name: 'Oncology', icon: Activity },
  { name: 'Endocrinology', icon: Activity },
  { name: 'Gastroenterology', icon: Activity },
  { name: 'General Surgery', icon: Scissors },
  { name: 'Plastic Surgery', icon: Scissors },
  { name: 'Emergency Medicine', icon: Ambulance },
  { name: 'Internal Medicine', icon: Stethoscope },
  { name: 'Geriatrics', icon: Users },
  { name: 'Gynecology', icon: Baby },
  { name: 'Hepatology', icon: Activity },
  { name: 'Allergy & Immunology', icon: Shield },
  { name: 'Infectious Disease', icon: Bug },
  { name: 'Medical Clinics', icon: Hospital },
  { name: 'Hematology', icon: TestTubes },
  { name: 'Orthopedic', icon: Bone },
  { name: 'Pulmonology', icon: Wind },
  { name: 'Neurosurgery', icon: Brain },
  { name: 'Nursing Home', icon: Home },
  { name: 'Urology', icon: Activity }
];

export function SpecialtiesSection({
  badge,
  highlightedTitle = 'Certified Medical Billing and Coding Company',
  titleSuffix = 'Specialized At',
  description = 'Ascent Medical Billing offers a world where you can say goodbye to administrative headaches and costly billing errors. With our advanced automated medical billing systems and expert knowledge, we ensure faster reimbursements and improved cash flow while guaranteeing strict adherence to regulatory standards, including HIPAA compliance.',
  customSpecialties,
  id = 'specialties-section',
  onSelectSpecialty,
}: SpecialtiesSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const specialties = customSpecialties || defaultSpecialties;

  // Find index of Chiropractic to show cards up to Chiropractic inclusive initially
  const chiropracticIndex = specialties.findIndex(s => s.name === 'Chiropractic');
  const initialCount = chiropracticIndex !== -1 ? chiropracticIndex + 1 : 14;
  const initialItems = specialties.slice(0, initialCount);
  const displayedItems = showAll ? specialties : initialItems;

  return (
    <section id={id} className="relative py-[80px] bg-[#25547e] overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Light #214B71 Brand Overlay */}
        <div className="absolute inset-0 bg-[#214B71]/55 backdrop-brightness-110 z-10 transition-all duration-300"></div>
        <img 
          src="https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/specialities-bg.webp" 
          alt="Healthcare Specialties" 
          className="w-full h-full object-cover object-center opacity-90" 
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1250px] mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] text-white">
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-5">
              <div className="eyebrow flex items-center text-white font-bold text-[13px] tracking-wider mb-3">
                <Stethoscope className="w-4 h-4 mr-2 text-[#98C340]" />
                {badge || "Specialty Coverage"}
              </div>
              <div className="w-12 h-[2px] bg-[#98C340]"></div>
            </div>
            
            <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit mb-6 leading-[1.1] tracking-tight text-white">
              <span className="text-[#98C340]">{highlightedTitle}</span> {titleSuffix}
            </h2>
            
            <p className="text-gray-200 text-[17px] leading-relaxed mb-6 font-normal">
              {description}
            </p>
          </div>

          {/* Right Content - Grid */}
          <div className="w-full lg:w-[55%]">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <AnimatePresence mode="popLayout">
                {displayedItems.map((specialty) => {
                  const Icon = specialty.icon;
                  return (
                    <motion.div 
                      key={specialty.name}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => onSelectSpecialty?.(specialty.name)}
                      className="w-[110px] h-[110px] flex flex-col justify-center items-center gap-2 bg-[#154377]/80 border border-transparent rounded-[8px] p-2 text-white hover:bg-[#98C340] transition duration-300 group cursor-pointer text-center flex-shrink-0 backdrop-blur-xs"
                    >
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                      <span className="font-semibold text-[11px] leading-[1.2]">{specialty.name}</span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {/* View All / Less Button */}
              {specialties.length > initialCount && (
                <motion.div
                  layout
                  onClick={() => setShowAll(!showAll)}
                  className="w-[110px] h-[110px] flex flex-col justify-center items-center gap-2 bg-[#98C340] border border-[#98C340] rounded-[8px] p-2 text-white hover:bg-[#85ab36] transition duration-300 group cursor-pointer text-center flex-shrink-0 shadow-md"
                >
                  {!showAll ? (
                    <>
                      <Plus className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                      <span className="font-semibold text-[11px] leading-[1.2]">View All Specialties</span>
                    </>
                  ) : (
                    <>
                      <Minus className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                      <span className="font-semibold text-[11px] leading-[1.2]">Show Less</span>
                    </>
                  )}
                </motion.div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
