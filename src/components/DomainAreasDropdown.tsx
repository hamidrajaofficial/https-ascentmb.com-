import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export interface DomainAreasDropdownProps {
  onClose: () => void;
  onExploreAll: () => void;
  onSelectLocation: (stateName: string) => void;
}

export function DomainAreasDropdown({
  onClose,
  onExploreAll,
  onSelectLocation
}: DomainAreasDropdownProps) {
  const featuredLocation = {
    name: 'Illinois',
    title: 'Illinois Medical Billing Company',
    desc: 'Full-service revenue cycle management, BCBS Illinois protocols, and HealthChoice Medicaid claim resolution for Illinois practices.',
    flagCode: 'us-il'
  };

  const keyStates = [
    { name: 'Texas', label: 'Texas Medical Billing', code: 'us-tx' },
    { name: 'California', label: 'California Medical Billing', code: 'us-ca' },
    { name: 'Florida', label: 'Florida Medical Billing', code: 'us-fl' },
    { name: 'New York', label: 'New York Medical Billing', code: 'us-ny' },
    { name: 'Pennsylvania', label: 'Pennsylvania Medical Billing', code: 'us-pa' },
    { name: 'Georgia', label: 'Georgia Medical Billing', code: 'us-ga' },
    { name: 'Ohio', label: 'Ohio Medical Billing', code: 'us-oh' },
    { name: 'North Carolina', label: 'North Carolina Medical Billing', code: 'us-nc' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 text-left cursor-default mt-1"
    >
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#98C340]">
            Nationwide Coverage
          </span>
          <h3 className="text-lg font-bold text-[#154377] font-outfit">
            Medical Billing Domain Areas &amp; Locations
          </h3>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            onExploreAll();
          }}
          className="text-xs font-bold text-[#154377] hover:text-[#98C340] flex items-center gap-1.5 transition-colors cursor-pointer group"
        >
          <span>View All 50 States</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Column: Featured Child Page (Illinois) */}
        <div className="md:col-span-6 bg-gradient-to-br from-[#FAFCFF] to-[#EBF2F8] border border-[#154377]/15 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#98C340]/20 text-[#154377] text-[10px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#7fa334]" />
                Featured Location
              </span>
              <img 
                src="https://flagcdn.com/w40/us-il.png" 
                alt="Illinois Flag" 
                className="w-6 h-4 object-cover rounded shadow-2xs"
              />
            </div>

            <h4 className="text-[17px] font-bold text-[#154377] font-outfit leading-snug mb-2">
              {featuredLocation.title}
            </h4>

            <p className="text-gray-600 text-xs leading-relaxed mb-4">
              {featuredLocation.desc}
            </p>

            <ul className="space-y-1.5 text-xs text-gray-700 font-medium mb-5">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#98C340] shrink-0" />
                <span>BCBS Illinois &amp; HealthChoice Medicaid</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#98C340] shrink-0" />
                <span>Sub-25 Day AR Turnaround</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#98C340] shrink-0" />
                <span>AAPC-Certified Illinois Coders</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectLocation('Illinois');
            }}
            className="w-full bg-[#154377] hover:bg-[#0e2f54] text-white py-2.5 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer font-outfit uppercase tracking-wider"
          >
            <span>Explore Illinois Billing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Column: Other Key State Locations */}
        <div className="md:col-span-6 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
              Key State Operations
            </div>

            <div className="grid grid-cols-1 gap-1.5">
              {keyStates.map((st) => (
                <button
                  key={st.name}
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectLocation(st.name);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 text-left transition-colors group cursor-pointer border border-transparent hover:border-gray-200"
                >
                  <div className="flex items-center gap-2.5">
                    <img 
                      src={`https://flagcdn.com/w20/${st.code}.png`} 
                      alt={`${st.name} Flag`} 
                      className="w-4 h-3 object-cover rounded shadow-2xs"
                    />
                    <span className="text-xs font-semibold text-gray-800 group-hover:text-[#154377] transition-colors">
                      {st.label}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#98C340] group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-gray-100 mt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onExploreAll();
              }}
              className="w-full py-2 px-3 text-center text-xs font-bold text-[#154377] hover:text-[#98C340] transition-colors cursor-pointer bg-gray-50 hover:bg-[#f4f9eb] rounded-lg"
            >
              Browse All State Billing Solutions →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DomainAreasDropdown;
