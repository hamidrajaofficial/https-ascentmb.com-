import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Award,
  ChevronDown,
  Send,
  MapPin,
  Sparkles
} from 'lucide-react';
import heroDoctorsTeamImg from '../assets/images/hero_doctors_team_1787328070635.jpg';

interface DomainAreasHeroSectionProps {
  onBookCall?: () => void;
  onAuditClick?: () => void;
  onBrowseCards?: () => void;
}

export function DomainAreasHeroSection({ 
  onBookCall, 
  onAuditClick,
  onBrowseCards 
}: DomainAreasHeroSectionProps) {
  const [provider, setProvider] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleScrollToCards = () => {
    if (onBrowseCards) {
      onBrowseCards();
      return;
    }
    const el = document.getElementById('domain-areas-cards-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBook = () => {
    const el = document.getElementById('location-appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (onBookCall) {
      onBookCall();
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#EBF2F8] border-b border-[#154377]/10 pt-10 sm:pt-14 pb-16 lg:pb-20">
      {/* Background Subtle Photo Pattern */}
      <div 
        className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-[0.06] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url(${heroDoctorsTeamImg})` }}
      />
      {/* Ambient Radial Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#EBF2F8]/98 via-[#F3F7FC]/92 to-[#E6EFF8]/98 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#98C340]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#154377]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Content Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#154377]/20 shadow-xs backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#98C340] animate-pulse" />
                <span className="text-[#154377] font-bold text-xs sm:text-[13px] tracking-wide uppercase font-outfit flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#98C340]" />
                  Nationwide Medical Billing &amp; Coding Coverage
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#154377] font-outfit leading-[1.15] tracking-tight mb-5">
              Medical Billing Services Trusted By Practices Across{' '}
              <span className="text-[#98C340]">
                All 50 US States
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-700 text-base sm:text-[16.5px] leading-relaxed mb-8 max-w-xl font-normal">
              State-specific Medicaid rules, regional Medicare Administrative Contractor (MAC) jurisdictions, and localized commercial payer contracts demand localized billing expertise. Ascent Medical Billing assigns certified billing specialists and AAPC coders versed in your home state&apos;s exact payer guidelines—ensuring 98.5% first-pass clean claims and sub-30 day AR.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-9">
              <button 
                onClick={handleScrollToBook}
                className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book State Strategy Call</span>
              </button>
              
              <button 
                onClick={handleScrollToCards}
                className="bg-[#154377] hover:bg-[#0f3259] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse All State Locations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Feature Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#154377]/15">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#98C340] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#154377]">98.5% Clean Claims</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#98C340] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#154377]">&lt; 30 Days in AR</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#98C340] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#154377]">Regional MAC Mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#98C340] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#154377]">All 50 States Licensed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Appointment Form (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div 
              id="location-appointment-form"
              className="w-full max-w-[490px] bg-white rounded-2xl shadow-[0_12px_40px_rgba(21,67,119,0.12)] border border-[#154377]/10 p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Form Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#154377] via-[#98C340] to-[#154377]" />

              <div className="mb-5 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-2 border border-[#d4ebb3]">
                  <Sparkles className="w-3.5 h-3.5 text-[#98C340]" />
                  <span>Free State Billing Audit</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#154377] font-outfit">
                  Request a Regional Billing Audit
                </h2>
                <p className="text-gray-500 text-xs sm:text-[13.5px] mt-1">
                  Connect with a senior billing specialist experienced in your state&apos;s payer landscape.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 px-4 text-center bg-[#f4f9eb] rounded-xl border border-[#98C340]/30">
                  <div className="w-14 h-14 bg-[#98C340] text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-[#154377] font-outfit mb-1">
                    Audit Request Received!
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 max-w-sm mx-auto">
                    Thank you, <span className="font-semibold text-[#154377]">{fullName || provider || 'Doctor'}</span>. A regional billing director for <span className="font-semibold text-[#154377]">{selectedState || 'your state'}</span> will contact you within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-[#154377] hover:text-[#98C340] underline cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                  {/* Provider / Practice Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1 font-outfit">
                      Practice / Clinic Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Metro Health Partners"
                      value={provider}
                      onChange={(e) => setProvider(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800"
                    />
                  </div>

                  {/* Full Name & Phone in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1 font-outfit">
                        Doctor / Contact Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="Dr. Michael Chang"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1 font-outfit">
                        Direct Phone *
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800"
                      />
                    </div>
                  </div>

                  {/* Email & State in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1 font-outfit">
                        Work Email *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="billing@practice.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1 font-outfit">
                        Select Your State *
                      </label>
                      <div className="relative">
                        <select 
                          required
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all text-gray-800 appearance-none bg-white pr-8"
                        >
                          <option value="">Select State</option>
                          <option value="California">California (CA)</option>
                          <option value="Texas">Texas (TX)</option>
                          <option value="Florida">Florida (FL)</option>
                          <option value="New York">New York (NY)</option>
                          <option value="Illinois">Illinois (IL)</option>
                          <option value="Pennsylvania">Pennsylvania (PA)</option>
                          <option value="Ohio">Ohio (OH)</option>
                          <option value="Georgia">Georgia (GA)</option>
                          <option value="North Carolina">North Carolina (NC)</option>
                          <option value="Michigan">Michigan (MI)</option>
                          <option value="New Jersey">New Jersey (NJ)</option>
                          <option value="Virginia">Virginia (VA)</option>
                          <option value="Washington">Washington (WA)</option>
                          <option value="Arizona">Arizona (AZ)</option>
                          <option value="Massachusetts">Massachusetts (MA)</option>
                          <option value="Tennessee">Tennessee (TN)</option>
                          <option value="Indiana">Indiana (IN)</option>
                          <option value="Missouri">Missouri (MO)</option>
                          <option value="Maryland">Maryland (MD)</option>
                          <option value="Colorado">Colorado (CO)</option>
                          <option value="Other">Other US State</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Preferred Time Window */}
                  <div>
                    <label className="block text-xs font-bold text-[#154377] uppercase tracking-wider mb-1 font-outfit">
                      Preferred Call Time Window
                    </label>
                    <div className="relative">
                      <select 
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all text-gray-800 appearance-none bg-white pr-8"
                      >
                        <option value="">Select convenient time window</option>
                        <option value="Morning (9:00 AM - 12:00 PM Local)">Morning (9:00 AM - 12:00 PM Local)</option>
                        <option value="Early Afternoon (12:00 PM - 3:00 PM Local)">Early Afternoon (12:00 PM - 3:00 PM Local)</option>
                        <option value="Late Afternoon (3:00 PM - 6:00 PM Local)">Late Afternoon (3:00 PM - 6:00 PM Local)</option>
                        <option value="Anytime during practice hours">Anytime during practice hours</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider font-outfit"
                    >
                      <span>Request Free State Billing Audit</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center pt-1">
                    Confidential Practice Review. HIPAA compliant with zero data sharing.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
