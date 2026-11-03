import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';

export interface LocationCardState {
  name: string;
  id: string; // flagcdn ISO code, e.g. "us-ca"
  description: string;
  topCities: string[];
}

export const domainLocationsList: LocationCardState[] = [
  { 
    name: "California", 
    id: "us-ca", 
    description: "Medi-Cal compliance, local payer fee schedules, and sub-30 day AR for California medical groups, private practices, and surgical centers.",
    topCities: [
      "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento"
    ] 
  },
  { 
    name: "Texas", 
    id: "us-tx", 
    description: "Texas Medicare guidelines & commercial payer collections optimization across hospital systems and solo clinics statewide.",
    topCities: [
      "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso"
    ] 
  },
  { 
    name: "Florida", 
    id: "us-fl", 
    description: "Medicare Advantage HMO/PPO plans claims scrubbing and dedicated Florida multi-specialty medical billing workflows.",
    topCities: [
      "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah"
    ] 
  },
  { 
    name: "New York", 
    id: "us-ny", 
    description: "NY Medicaid Managed Care, Empire BCBS, and NYC multi-specialty RCM workflows and audit defense for private practices.",
    topCities: [
      "New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany"
    ] 
  },
  { 
    name: "Illinois", 
    id: "us-il", 
    description: "Medicare billing expertise, BCBS Illinois protocols, HealthChoice Illinois Medicaid, and clean claim turnaround.",
    topCities: [
      "Chicago", "Aurora", "Joliet", "Naperville", "Rockford", "Elgin"
    ] 
  },
  { 
    name: "Pennsylvania", 
    id: "us-pa", 
    description: "Highmark, UPMC Health Plan billing, and Pennsylvania provider credentialing and revenue recovery enrollment.",
    topCities: [
      "Philadelphia", "Pittsburgh", "Allentown", "Reading", "Erie", "Scranton"
    ] 
  },
  { 
    name: "Ohio", 
    id: "us-oh", 
    description: "Ohio Medicaid MCOs, Medical Mutual, and hospital-affiliated clinic billing precision with accelerated cash flow.",
    topCities: [
      "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton"
    ] 
  },
  { 
    name: "Georgia", 
    id: "us-ga", 
    description: "Georgia Medicaid Pathways, Anthem BCBS, and Atlanta multi-provider RCM services and denial mitigation.",
    topCities: [
      "Atlanta", "Augusta", "Columbus", "Macon", "Savannah", "Athens"
    ] 
  },
  { 
    name: "North Carolina", 
    id: "us-nc", 
    description: "NC Medicaid Direct & Standard Plans, and State Health Plan billing precision with comprehensive claim audit workflows.",
    topCities: [
      "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville"
    ] 
  },
  { 
    name: "Michigan", 
    id: "us-mi", 
    description: "Blue Cross Blue Shield of Michigan trust guidelines and Michigan Medicaid health plans with dedicated billing specialists.",
    topCities: [
      "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing"
    ] 
  },
  { 
    name: "New Jersey", 
    id: "us-nj", 
    description: "Horizon BCBS of New Jersey and NJ FamilyCare Medicaid managed care billing optimization with sub-25 day AR.",
    topCities: [
      "Newark", "Jersey City", "Paterson", "Elizabeth", "Lakewood", "Edison"
    ] 
  },
  { 
    name: "Virginia", 
    id: "us-va", 
    description: "Anthem Blue Cross Virginia, Cardinal Care Medicaid, and Northern Virginia healthcare clinic revenue cycle solutions.",
    topCities: [
      "Virginia Beach", "Chesapeake", "Norfolk", "Richmond", "Newport News", "Alexandria"
    ] 
  },
  { 
    name: "Washington", 
    id: "us-wa", 
    description: "Premera Blue Cross, Regence, and Washington Apple Health Medicaid managed care billing workflows with 98%+ clean claims.",
    topCities: [
      "Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent"
    ] 
  },
  { 
    name: "Arizona", 
    id: "us-az", 
    description: "AHCCCS Arizona Medicaid program, Blue Cross Blue Shield of Arizona, and Phoenix multi-specialty RCM management.",
    topCities: [
      "Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Gilbert"
    ] 
  },
  { 
    name: "Colorado", 
    id: "us-co", 
    description: "Health First Colorado Medicaid, Anthem Colorado, and Denver-Boulder medical practice billing and coding accuracy.",
    topCities: [
      "Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton"
    ] 
  },
];

interface DomainAreasCardsSectionProps {
  id?: string;
  onSelectState?: (stateName: string) => void;
}

export function DomainAreasCardsSection({
  id = "domain-areas-cards-section",
  onSelectState
}: DomainAreasCardsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStates = useMemo(() => {
    return domainLocationsList.filter((item) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) || 
        item.topCities.some(loc => loc.toLowerCase().includes(q));
      return matchesSearch;
    });
  }, [searchQuery]);

  const handleStateClick = (stateName: string) => {
    if (onSelectState) {
      onSelectState(stateName);
      return;
    }
    const el = document.getElementById('location-appointment-form') || document.getElementById('consultation-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={id} className="py-20 lg:py-24 bg-[#FAFCFF] border-b border-gray-100 relative overflow-hidden">
      {/* Background Subtle Circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#154377]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#98C340]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-3 border border-[#d4ebb3]">
            <Sparkles className="w-3.5 h-3.5 text-[#98C340]" />
            <span>Ascent Nationwide Directory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-tight tracking-tight mb-4">
            State-by-State Medical Billing <span className="text-[#98C340]">&amp; Coding Coverage</span>
          </h2>

          <p className="text-[#556987] text-[15.5px] sm:text-[16.5px] leading-relaxed">
            Ascent Medical Billing provides dedicated billing and coding teams aligned with your state&apos;s Medicare guidelines, Medicaid Managed Care Organizations, and regional commercial payers. Select your home state below to explore localized workflows.
          </p>
        </div>

        {/* Search Bar (Clean without the region filter tags) */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by state or city (e.g. California, Texas, Dallas, Miami, Chicago, New York...)"
              className="w-full pl-12 pr-10 py-3.5 bg-white rounded-xl border border-gray-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-gray-800 placeholder:text-gray-400 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Result Count Indicator */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-1 px-1 max-w-xl mx-auto">
            <span>
              Showing <strong className="text-[#154377]">{filteredStates.length}</strong> {filteredStates.length === 1 ? 'state' : 'states'} with full localized coverage
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#98C340] hover:underline font-bold cursor-pointer"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>

        {/* State Cards Grid with Flags */}
        {filteredStates.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg mx-auto shadow-xs">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#154377] font-outfit mb-1">No locations found</h3>
            <p className="text-sm text-gray-500 mb-5">
              We couldn&apos;t find any state matching &quot;{searchQuery}&quot;. Ascent Medical Billing is licensed and operates nationwide across all 50 US States.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold px-5 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Clear Search &amp; Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {filteredStates.map((state, idx) => {
              return (
                <motion.div
                  key={state.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
                  className="bg-white rounded-2xl border border-gray-200/80 hover:border-[#98C340]/60 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                >
                  {/* Top: Clean State Flag Banner (Tags removed) */}
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={`https://flagcdn.com/w320/${state.id}.png`}
                      alt={`Flag of ${state.name}`}
                      width={320}
                      height={180}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient Overlay for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                    {/* State Name overlay at bottom of flag */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#98C340] shrink-0 drop-shadow" />
                        <h3 className="text-xl sm:text-2xl font-bold font-outfit drop-shadow-md text-white">
                          {state.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Description */}
                      <p className="text-gray-600 text-[13.5px] leading-relaxed mb-4">
                        {state.description}
                      </p>

                      {/* Top Populated Cities Served (Clean Pills of Top Populated Cities) */}
                      <div className="pt-3 border-t border-gray-100">
                        <span className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-2.5">
                          Top Populated Cities Served:
                        </span>

                        <div className="flex flex-wrap gap-1.5">
                          {state.topCities.map((city, cIdx) => (
                            <span 
                              key={cIdx}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200/70 text-gray-700 text-xs font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#98C340]" />
                              <span>{city}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="pt-5 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleStateClick(state.name)}
                        className="w-full bg-[#154377] hover:bg-[#0f3259] text-white text-xs sm:text-[13px] font-bold py-2.5 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer font-outfit uppercase tracking-wider"
                      >
                        <span>Audit Practice in {state.name}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
