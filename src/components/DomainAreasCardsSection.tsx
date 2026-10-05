import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface LocationCardState {
  name: string;
  id: string; // flagcdn ISO code, e.g. "us-ca"
  region: 'west' | 'south' | 'northeast' | 'midwest' | 'southeast';
  regionLabel: string;
  macContractor: string;
  description: string;
  keyMetric: string;
  locations: string[];
}

export const domainLocationsList: LocationCardState[] = [
  { 
    name: "California", 
    id: "us-ca", 
    region: "west",
    regionLabel: "West Coast",
    macContractor: "Noridian MAC (JE)",
    description: "Medi-Cal, Noridian MAC compliance, and sub-30 day AR for California private practices, medical groups, and clinics.",
    keyMetric: "98.7% Clean Claims",
    locations: [
      "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", 
      "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"
    ] 
  },
  { 
    name: "Texas", 
    id: "us-tx", 
    region: "south",
    regionLabel: "South & Southwest",
    macContractor: "Novitas MAC (JH)",
    description: "Novitas MAC Medicare guidelines & Texas commercial payer collections optimization across hospital systems and solo clinics.",
    keyMetric: "Sub-24 Day AR",
    locations: [
      "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", 
      "El Paso", "Arlington", "Corpus Christi", "Plano", "Lubbock"
    ] 
  },
  { 
    name: "Florida", 
    id: "us-fl", 
    region: "southeast",
    regionLabel: "Southeast",
    macContractor: "First Coast MAC (JN)",
    description: "First Coast MAC claims scrubbing, Medicare Advantage HMO/PPO plans, and Florida multi-specialty billing workflows.",
    keyMetric: "99% Clean Rate",
    locations: [
      "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", 
      "Hialeah", "Port St. Lucie", "Cape Coral", "Tallahassee", "Fort Lauderdale"
    ] 
  },
  { 
    name: "New York", 
    id: "us-ny", 
    region: "northeast",
    regionLabel: "Northeast",
    macContractor: "NGS MAC (JK)",
    description: "NY Medicaid Managed Care, NGS MAC rules, Empire BCBS, and NYC multi-specialty RCM workflows and audit defense.",
    keyMetric: "Sub-26 Day AR",
    locations: [
      "New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", 
      "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica"
    ] 
  },
  { 
    name: "Illinois", 
    id: "us-il", 
    region: "midwest",
    regionLabel: "Midwest",
    macContractor: "NGS MAC (J6)",
    description: "NGS Medicare MAC expertise, BCBS Illinois protocols, HealthChoice Illinois Medicaid, and clean claim turnaround.",
    keyMetric: "98.5% Clean Claims",
    locations: [
      "Chicago", "Aurora", "Joliet", "Naperville", "Rockford", 
      "Elgin", "Springfield", "Peoria", "Waukegan", "Champaign"
    ] 
  },
  { 
    name: "Pennsylvania", 
    id: "us-pa", 
    region: "northeast",
    regionLabel: "Northeast",
    macContractor: "Novitas MAC (JL)",
    description: "Novitas Solutions MAC, Highmark, UPMC Health Plan billing & Pennsylvania provider credentialing and enrollment.",
    keyMetric: "98.9% Clean Claims",
    locations: [
      "Philadelphia", "Pittsburgh", "Allentown", "Reading", "Erie", 
      "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "York"
    ] 
  },
  { 
    name: "Ohio", 
    id: "us-oh", 
    region: "midwest",
    regionLabel: "Midwest",
    macContractor: "CGS Administrators (J15)",
    description: "CGS Administrators MAC, Ohio Medicaid MCOs, Medical Mutual, and hospital-affiliated clinic billing precision.",
    keyMetric: "Sub-25 Day AR",
    locations: [
      "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", 
      "Dayton", "Parma", "Canton", "Lorain", "Hamilton"
    ] 
  },
  { 
    name: "Georgia", 
    id: "us-ga", 
    region: "southeast",
    regionLabel: "Southeast",
    macContractor: "Palmetto GBA (JM)",
    description: "Palmetto GBA MAC guidelines, Georgia Medicaid Pathways, Anthem BCBS, and Atlanta multi-provider RCM services.",
    keyMetric: "98.6% Clean Rate",
    locations: [
      "Atlanta", "Augusta", "Columbus", "Macon", "Savannah", 
      "Athens", "Sandy Springs", "South Fulton", "Roswell", "Johns Creek"
    ] 
  },
  { 
    name: "North Carolina", 
    id: "us-nc", 
    region: "southeast",
    regionLabel: "Southeast",
    macContractor: "Palmetto GBA (JJ)",
    description: "Palmetto GBA Medicare, NC Medicaid Direct & Standard Plans, and State Health Plan billing precision.",
    keyMetric: "98.8% Clean Claims",
    locations: [
      "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", 
      "Fayetteville", "Cary", "Wilmington", "High Point", "Concord"
    ] 
  },
  { 
    name: "Michigan", 
    id: "us-mi", 
    region: "midwest",
    regionLabel: "Midwest",
    macContractor: "WPS Health (J8)",
    description: "WPS Medicare MAC, Blue Cross Blue Shield of Michigan trust guidelines, and Michigan Medicaid health plans.",
    keyMetric: "98.5% Clean Claims",
    locations: [
      "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", 
      "Lansing", "Dearborn", "Livonia", "Troy", "Westland"
    ] 
  },
  { 
    name: "New Jersey", 
    id: "us-nj", 
    region: "northeast",
    regionLabel: "Northeast",
    macContractor: "Novitas MAC (JL)",
    description: "Novitas MAC jurisdiction, Horizon BCBS of New Jersey, and NJ FamilyCare Medicaid managed care billing.",
    keyMetric: "Sub-23 Day AR",
    locations: [
      "Newark", "Jersey City", "Paterson", "Elizabeth", "Lakewood", 
      "Edison", "Woodbridge", "Toms River", "Hamilton", "Trenton"
    ] 
  },
  { 
    name: "Virginia", 
    id: "us-va", 
    region: "southeast",
    regionLabel: "Southeast",
    macContractor: "Palmetto GBA (JJ)",
    description: "Palmetto GBA MAC, Anthem Blue Cross Virginia, Cardinal Care Medicaid, and Northern Virginia healthcare clinics.",
    keyMetric: "98.7% Clean Claims",
    locations: [
      "Virginia Beach", "Chesapeake", "Norfolk", "Richmond", "Newport News", 
      "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk"
    ] 
  },
  { 
    name: "Washington", 
    id: "us-wa", 
    region: "west",
    regionLabel: "West Coast",
    macContractor: "Noridian MAC (JF)",
    description: "Noridian MAC (JF), Premera Blue Cross, Regence, and Washington Apple Health Medicaid managed care billing.",
    keyMetric: "Sub-24 Day AR",
    locations: [
      "Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", 
      "Kent", "Everett", "Renton", "Spokane Valley", "Federal Way"
    ] 
  },
  { 
    name: "Arizona", 
    id: "us-az", 
    region: "south",
    regionLabel: "South & Southwest",
    macContractor: "Noridian MAC (JF)",
    description: "Noridian MAC, AHCCCS Arizona Medicaid program, Blue Cross Blue Shield of Arizona, and Phoenix multi-specialty RCM.",
    keyMetric: "98.6% Clean Claims",
    locations: [
      "Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", 
      "Gilbert", "Glendale", "Tempe", "Peoria", "Surprise"
    ] 
  },
  { 
    name: "Colorado", 
    id: "us-co", 
    region: "west",
    regionLabel: "West Coast",
    macContractor: "Novitas MAC (JH)",
    description: "Novitas MAC, Health First Colorado Medicaid, Anthem Colorado, and Denver-Boulder medical practice billing.",
    keyMetric: "99% Clean Rate",
    locations: [
      "Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", 
      "Thornton", "Arvada", "Westminster", "Pueblo", "Greeley"
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
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [openCitiesState, setOpenCitiesState] = useState<string | null>(null);

  const regionTabs = [
    { id: 'all', label: 'All State Locations' },
    { id: 'west', label: 'West Coast' },
    { id: 'south', label: 'South & Southwest' },
    { id: 'southeast', label: 'Southeast' },
    { id: 'northeast', label: 'Northeast' },
    { id: 'midwest', label: 'Midwest' },
  ];

  const filteredStates = useMemo(() => {
    return domainLocationsList.filter((item) => {
      const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) || 
        item.macContractor.toLowerCase().includes(q) ||
        item.locations.some(loc => loc.toLowerCase().includes(q));
      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  const handleStateClick = (stateName: string) => {
    if (onSelectState) {
      onSelectState(stateName);
      return;
    }
    const el = document.getElementById('location-appointment-form') || document.getElementById('consultation-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleCities = (stateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenCitiesState(prev => prev === stateId ? null : stateId);
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
            Ascent Medical Billing provides dedicated billing and coding teams aligned with your state&apos;s Medicare Administrative Contractor (MAC), Medicaid Managed Care Organizations, and regional commercial payers. Select your home state below to explore localized workflows.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Top Search Input */}
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

          {/* Region Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {regionTabs.map((tab) => {
              const active = selectedRegion === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRegion(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#154377] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#98C340] hover:text-[#154377]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Result Count Indicator */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 px-1">
            <span>
              Showing <strong className="text-[#154377]">{filteredStates.length}</strong> {filteredStates.length === 1 ? 'state' : 'states'} with full localized coverage
            </span>
            {(searchQuery || selectedRegion !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion('all');
                }}
                className="text-[#98C340] hover:underline font-bold cursor-pointer"
              >
                Reset Filters
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
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold px-5 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Clear Search &amp; Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
            {filteredStates.map((state, idx) => {
              const isCitiesOpen = openCitiesState === state.id;

              return (
                <motion.div
                  key={state.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
                  className="bg-white rounded-2xl border border-gray-200/80 hover:border-[#98C340]/60 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
                >
                  {/* Top: State Flag Banner */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Floating Badges on top of Flag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#154377] shadow-sm backdrop-blur-xs">
                        {state.regionLabel}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#154377]/90 text-white shadow-sm border border-white/20 backdrop-blur-xs flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#98C340]" />
                        <span>{state.keyMetric}</span>
                      </span>
                    </div>

                    {/* State Name overlay at bottom of flag */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
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
                      {/* MAC Contractor Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EBF2F8] text-[#154377] text-xs font-bold mb-3 border border-[#154377]/10">
                        <Building2 className="w-3.5 h-3.5 text-[#154377]" />
                        <span>{state.macContractor}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-[13.5px] leading-relaxed mb-4">
                        {state.description}
                      </p>

                      {/* Top Cities Preview */}
                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-[#154377] uppercase tracking-wider">
                            Top Cities Served:
                          </span>
                          <button
                            type="button"
                            onClick={(e) => toggleCities(state.id, e)}
                            className="text-xs font-semibold text-[#98C340] hover:text-[#85ab36] flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <span>{isCitiesOpen ? 'Hide Cities' : `All 10 Cities`}</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCitiesOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>

                        {/* Top 4 Cities Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {state.locations.slice(0, 4).map((city, cIdx) => (
                            <span 
                              key={cIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200/70 text-gray-700 text-xs font-medium"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#98C340]" />
                              <span>{city}</span>
                            </span>
                          ))}
                        </div>

                        {/* Expandable All Cities Drawer */}
                        <AnimatePresence>
                          {isCitiesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pt-2 pb-1"
                            >
                              <div className="p-3 bg-[#F8FAF3] rounded-xl border border-[#98C340]/20">
                                <div className="text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-2">
                                  Top 10 Delivery Hubs in {state.name}:
                                </div>
                                <div className="grid grid-cols-2 gap-1.5">
                                  {state.locations.map((loc, lIdx) => (
                                    <div 
                                      key={lIdx} 
                                      className="flex items-center gap-1.5 text-xs text-gray-700 font-medium"
                                    >
                                      <CheckCircle2 className="w-3 h-3 text-[#98C340] shrink-0" />
                                      <span className="truncate">{loc}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                        <ArrowRight className="w-3.5 h-3.5" />
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
