import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronDown, ChevronRight } from 'lucide-react';

export interface UsStateData {
  name: string;
  id: string; // ISO 3166-2 for flagcdn, e.g. "us-ca"
  description: string;
  locations: string[];
}

// 9 Major US States with flagcdn ISO codes, medical billing 1-sentence descriptions & Top 10 cities
const usStates: UsStateData[] = [
  { 
    name: "California", 
    id: "us-ca", 
    description: "Medi-Cal, Noridian MAC compliance, and sub-30 day AR for California medical practices.",
    locations: [
      "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", 
      "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"
    ] 
  },
  { 
    name: "Texas", 
    id: "us-tx", 
    description: "Novitas MAC Medicare guidelines & Texas commercial payer collections optimization.",
    locations: [
      "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", 
      "El Paso", "Arlington", "Corpus Christi", "Plano", "Lubbock"
    ] 
  },
  { 
    name: "Florida", 
    id: "us-fl", 
    description: "First Coast MAC claims scrubbing, Medicare Advantage, and Florida specialty billing.",
    locations: [
      "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", 
      "Hialeah", "Port St. Lucie", "Cape Coral", "Tallahassee", "Fort Lauderdale"
    ] 
  },
  { 
    name: "New York", 
    id: "us-ny", 
    description: "NY Medicaid Managed Care, NGS MAC rules, and NYC multi-specialty RCM workflows.",
    locations: [
      "New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", 
      "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica"
    ] 
  },
  { 
    name: "Illinois", 
    id: "us-il", 
    description: "NGS Medicare MAC expertise, BCBS Illinois protocols, and clean claim turnaround.",
    locations: [
      "Chicago", "Aurora", "Joliet", "Naperville", "Rockford", 
      "Elgin", "Springfield", "Peoria", "Waukegan", "Champaign"
    ] 
  },
  { 
    name: "Pennsylvania", 
    id: "us-pa", 
    description: "Novitas Solutions MAC, Highmark, UPMC billing & Pennsylvania provider credentialing.",
    locations: [
      "Philadelphia", "Pittsburgh", "Allentown", "Reading", "Erie", 
      "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York"
    ] 
  },
  { 
    name: "Ohio", 
    id: "us-oh", 
    description: "CGS Administrators MAC, Ohio Medicaid MCOs, and hospital-affiliated clinic billing.",
    locations: [
      "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", 
      "Dayton", "Parma", "Canton", "Lorain", "Hamilton"
    ] 
  },
  { 
    name: "Georgia", 
    id: "us-ga", 
    description: "Palmetto GBA MAC guidelines, Georgia Medicaid, and Atlanta multi-provider RCM.",
    locations: [
      "Atlanta", "Augusta", "Columbus", "Macon", "Savannah", 
      "Athens", "Sandy Springs", "South Fulton", "Roswell", "Johns Creek"
    ] 
  },
  { 
    name: "North Carolina", 
    id: "us-nc", 
    description: "Palmetto GBA Medicare, NC Medicaid direct, and State Health Plan billing precision.",
    locations: [
      "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", 
      "Fayetteville", "Cary", "Wilmington", "High Point", "Concord"
    ] 
  },
];

interface NationwideAvailabilityProps {
  onFindNearYou?: () => void;
}

export function NationwideAvailability({ onFindNearYou }: NationwideAvailabilityProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [tappedCardId, setTappedCardId] = useState<string | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.near-you-dropdown-wrapper')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdown(prev => (prev === id ? null : id));
  };

  const handleCardClick = (id: string) => {
    // Toggling flip for mobile or touch devices
    setTappedCardId(prev => (prev === id ? null : id));
  };

  const handleScrollToContact = () => {
    if (onFindNearYou) {
      onFindNearYou();
      return;
    }
    const el = document.getElementById('contact-section') || document.getElementById('consultation-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="nationwide-availability" className="py-[80px] bg-white overflow-hidden relative border-t border-gray-100">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#154377]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#98C340]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:w-1/2 space-y-6 w-full text-center lg:text-left">
            <div className="space-y-4">
              
              {/* Section Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#154377]/20 bg-[#154377]/5 text-[#154377] text-xs sm:text-[13px] font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#98C340]" />
                <span>Nationwide Medical Billing Services</span>
              </div>
              
              {/* Two-Tone Title (h2) */}
              <h2 className="!m-0 text-[#154377] font-outfit font-bold text-2xl md:text-3xl lg:text-[2.45rem] leading-tight">
                Medical Billing Services Trusted by Healthcare Practices{' '}
                <span className="text-[#98C340]">Across All 50 US States</span>
              </h2>

              {/* Descriptive Copy */}
              <div className="text-[#556987] leading-relaxed text-sm md:text-[15.5px] space-y-4 font-normal">
                <p>
                  Ascent Medical Billing provides specialized revenue cycle management tailored to state-specific Medicaid rules, regional Medicare Administrative Contractor (MAC) jurisdictions, and local commercial payer fee schedules. From California and Texas to New York, Florida, and Illinois, our certified medical coders and billing specialists ensure your claims comply with localized payer rules from day one.
                </p>
                <p>
                  Whether your practice operates as a solo specialty clinic, an urgent care facility, or a multi-provider ambulatory surgical center, our nationwide infrastructure ensures 98%+ first-pass clean claim rates and keeps Accounts Receivable (AR) strictly under 30 days. Partner with dedicated, AAPC/AHIMA-certified billing professionals who understand the regional healthcare landscape of your home state.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: States Flip Grid & Button */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-end gap-6">
            
            {/* Grid of 9 States with 3D Flip Card Animation on Hover or Tap */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-[580px]">
              {usStates.map((state) => {
                const isDropdownOpen = openDropdown === state.id;
                const isFlipped = tappedCardId === state.id || isDropdownOpen;

                return (
                  <div 
                    key={state.id} 
                    onClick={() => handleCardClick(state.id)}
                    className={`relative w-full h-[170px] sm:h-[180px] [perspective:1000px] group cursor-pointer select-none ${
                      isDropdownOpen ? 'z-50' : isFlipped ? 'z-30' : 'z-10 hover:z-20'
                    }`}
                  >
                    {/* Flippable Card Container */}
                    <div 
                      className={`w-full h-full relative transition-transform duration-500 [transform-style:preserve-3d] rounded-[4px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] ${
                        isFlipped 
                          ? '[transform:rotateY(180deg)]' 
                          : 'group-hover:[transform:rotateY(180deg)]'
                      } ${isDropdownOpen ? 'z-50' : ''}`}
                    >
                      
                      {/* --- FRONT OF CARD (Normal state: Flag top half edge-to-edge, divider, state name below) --- */}
                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-[4px] border border-slate-200 flex flex-col overflow-hidden transition-colors hover:border-[#154377]/40">
                        
                        {/* State Flag: touches top, left, right borders; height is half of card */}
                        <div className="w-full h-1/2 overflow-hidden bg-slate-100 relative shrink-0">
                          <img 
                            src={`https://flagcdn.com/w160/${state.id}.png`} 
                            alt={`Flag of ${state.name}`} 
                            width={160}
                            height={110}
                            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Divider between flag and state name */}
                        <div className="w-full border-b border-slate-200 shrink-0" />

                        {/* State Name in bottom half */}
                        <div className="flex-1 flex items-center justify-center p-2.5 sm:p-3 text-center bg-white">
                          <h3 className="font-bold text-[#154377] text-[15px] sm:text-[16px] leading-snug font-outfit truncate">
                            {state.name}
                          </h3>
                        </div>

                      </div>

                      {/* --- BACK OF CARD (Flipped on Hover or Tap) --- */}
                      <div 
                        className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#154377] via-[#123b69] to-[#0f3460] text-white rounded-[4px] p-3.5 flex flex-col justify-between border border-[#154377] shadow-[0_4px_16px_rgba(21,67,119,0.2)] overflow-visible"
                        onClick={(e) => e.stopPropagation()}
                      >
                        
                        {/* 1. State Name as h3 */}
                        <div>
                          <h3 className="font-bold text-white text-[15px] sm:text-[16px] leading-tight font-outfit border-b border-white/15 pb-1.5 mb-1.5 flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#98C340] shrink-0" />
                            <span className="truncate">{state.name}</span>
                          </h3>

                          {/* 2. One sentence description with p tag */}
                          <p className="text-[11px] sm:text-[11.5px] text-blue-100/90 leading-relaxed font-normal">
                            {state.description}
                          </p>
                        </div>

                        {/* 3. Near you Dropdown for Top 10 Cities */}
                        <div className="relative pt-1 border-t border-white/15 near-you-dropdown-wrapper">
                          
                          {/* Near You Trigger Button */}
                          <button 
                            type="button"
                            onClick={(e) => toggleDropdown(state.id, e)}
                            className="w-full flex items-center justify-between gap-1.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white px-2.5 py-1.5 rounded-[4px] text-[12px] font-semibold transition-all cursor-pointer border border-white/10"
                          >
                            <span className="flex items-center gap-1.5">
                              <MapPin size={12} className="text-[#98C340]" />
                              <span>Near you</span>
                            </span>
                            <ChevronDown 
                              size={14} 
                              className={`transition-transform duration-200 text-[#98C340] ${isDropdownOpen ? 'rotate-180' : ''}`} 
                            />
                          </button>

                          {/* Top 10 Cities Dropdown Menu (Rendered with <ul> and <li>) */}
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -6, scale: 0.96 }}
                                animate={{ opacity: 1, y: 4, scale: 1 }}
                                exit={{ opacity: 0, y: -6, scale: 0.96 }}
                                transition={{ duration: 0.15 }}
                                className="absolute z-50 left-0 right-0 top-full mt-1 bg-white text-slate-800 border border-slate-200 rounded-[4px] shadow-[0_20px_45px_rgba(0,0,0,0.35)] py-2 min-w-[200px] max-h-[220px] overflow-y-auto"
                                style={{ transform: 'translateZ(100px)' }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <div className="px-3 py-1 text-[10px] font-bold text-[#154377] uppercase tracking-wider border-b border-slate-100 mb-1 flex items-center justify-between">
                                  <span>Top 10 Cities in {state.name}</span>
                                </div>
                                
                                {/* Cities list strictly rendered with <ul> and <li> tags */}
                                <ul className="py-0.5 m-0 p-0 list-none">
                                  {state.locations.map((city, idx) => (
                                    <li key={idx}>
                                      <a
                                        href="#contact-section"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setOpenDropdown(null);
                                          handleScrollToContact();
                                        }}
                                        className="flex items-center justify-between px-3.5 py-1.5 text-[12px] text-slate-700 hover:bg-[#154377]/5 hover:text-[#154377] transition-colors whitespace-nowrap cursor-pointer group/item"
                                      >
                                        <span className="flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#98C340] shrink-0" />
                                          <span className="font-medium">{city}</span>
                                        </span>
                                        <span className="text-[10px] text-slate-400 group-hover/item:text-[#154377] font-semibold opacity-0 group-hover/item:opacity-100 transition-opacity">
                                          Select →
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>

                                <div className="px-2.5 pt-1.5 mt-1 border-t border-slate-100">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setOpenDropdown(null);
                                      handleScrollToContact();
                                    }}
                                    className="w-full text-center text-[11px] font-bold text-[#154377] hover:text-[#98C340] py-1 cursor-pointer"
                                  >
                                    Get Practice Audit in {state.name} →
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>

            {/* Custom Location Button: "Find Us Near You" with angled split badge */}
            <div className="w-full flex justify-center max-w-[580px] pt-2">
              <button 
                type="button"
                onClick={handleScrollToContact}
                className="group relative inline-flex items-center bg-white h-[52px] rounded-full shadow-md border-2 border-[#154377] overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
              >
                {/* Left side: Icon */}
                <div className="relative h-full flex items-center pl-4 pr-2">
                  <MapPin size={22} className="text-[#154377] fill-[#154377]/10 group-hover:text-[#98C340] group-hover:fill-[#98C340]/10 transition-colors" strokeWidth={2.5} />
                </div>
                
                {/* Center text */}
                <div className="px-2">
                  <span className="text-[#154377] font-bold text-[16px] sm:text-[17px] font-outfit tracking-tight whitespace-nowrap group-hover:text-[#0f3460] transition-colors">
                    Find Us Near You
                  </span>
                </div>

                {/* Right side: Angled Cut with Chevron */}
                <div className="relative h-full flex items-center pr-4 pl-6">
                  <div 
                    className="absolute inset-0 bg-[#154377] transition-all duration-300 group-hover:bg-[#98C340]" 
                    style={{ 
                      clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
                      left: '-12px'
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-center">
                    <ChevronRight size={22} className="text-white stroke-[3]" />
                  </div>
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default NationwideAvailability;
