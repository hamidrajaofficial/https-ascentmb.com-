import React from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Linkedin, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  RotateCcw
} from 'lucide-react';
import logoImg from '../assets/images/cropped-cropped-AA-300x178-1-2-removebg-preview.png';

interface FooterProps {
  onNavigateToMedicalBilling?: () => void;
  onNavigateHome?: () => void;
  onNavigateToAbout?: () => void;
  onSelectSpecialty?: (specialtyName: string) => void;
}

const coreServices = [
  'RCM Services',
  'Medical Billing',
  'Medical Coding',
  'Credentialing Services',
  'Insurance Eligibility',
  'Prior Authorization',
  'Denial Management',
  'Analytics and Reporting',
  'Patient Billing Services',
  'Payment Posting Services',
];

const topSpecialties = [
  'Internal Medicine',
  'Dermatology Practices',
  'Wound Care',
  'Rheumatology',
  'Laboratory',
  'Home Health',
  'Physical Therapy',
  'Geriatric Medicine',
  'Family Medicine',
  'Pediatrics',
];

export function Footer({ 
  onNavigateToMedicalBilling, 
  onNavigateHome, 
  onNavigateToAbout,
  onSelectSpecialty
}: FooterProps = {}) {

  const scrollToAudit = () => {
    if (onNavigateToMedicalBilling) {
      onNavigateToMedicalBilling();
      setTimeout(() => {
        const el = document.getElementById('consultation-form') || document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('consultation-form') || document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSpecialtyClick = (specialty: string) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(specialty);
    } else {
      scrollToAudit();
    }
  };

  return (
    <footer className="bg-[#071d36] text-white pt-16 pb-8 border-t border-white/10 relative z-10 font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
        
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Stats (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col pr-0 lg:pr-2">
            {/* Brand Logo */}
            <div 
              onClick={onNavigateHome} 
              className={`bg-white px-3.5 py-1.5 rounded-xl inline-flex items-center w-fit mb-5 shadow-sm ${onNavigateHome ? 'cursor-pointer hover:opacity-95' : ''}`}
            >
              <img 
                src={logoImg} 
                alt="Ascent Medical Billing" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>

            {/* Description matching reference */}
            <p className="text-slate-300 text-[13.5px] leading-relaxed mb-6">
              Ascent Medical Billing delivers medical billing, coding, credentialing, and revenue cycle management solutions for healthcare providers across the United States.
            </p>

            {/* Free Practice Audit Button */}
            <div className="mb-6">
              <button 
                onClick={scrollToAudit}
                className="bg-[#98C340] hover:bg-[#86ad35] text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center cursor-pointer"
              >
                Free Practice Audit
              </button>
            </div>

            {/* 3 Metric Cards matching reference */}
            <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#0a2749]/80 rounded-xl border border-blue-900/50 text-center">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-1.5">
                <ShieldCheck className="w-5 h-5 text-[#98C340] mb-1 shrink-0" />
                <div className="text-white font-extrabold text-[15px] leading-tight">99%</div>
                <div className="text-[11px] text-slate-300 leading-tight mt-0.5">Clean Claims</div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-1.5 border-x border-white/10">
                <TrendingUp className="w-5 h-5 text-[#98C340] mb-0.5 shrink-0" />
                <div className="text-[10px] text-slate-400 leading-none">Up to</div>
                <div className="text-white font-extrabold text-[15px] leading-tight">30%</div>
                <div className="text-[11px] text-slate-300 leading-tight mt-0.5">Revenue Increase</div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-1.5">
                <RotateCcw className="w-5 h-5 text-[#98C340] mb-1 shrink-0" />
                <div className="text-white font-extrabold text-[15px] leading-tight">50%</div>
                <div className="text-[11px] text-slate-300 leading-tight mt-0.5">AR Reduction</div>
              </div>
            </div>
          </div>

          {/* Col 2: Core Services (lg:col-span-2) */}
          <div className="lg:col-span-2 lg:pl-3">
            <h4 className="text-white font-bold text-base sm:text-lg mb-5 font-outfit">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-slate-300">
              {coreServices.map((service, idx) => (
                <li key={idx}>
                  <button 
                    onClick={onNavigateToMedicalBilling} 
                    className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Top Specialties (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base sm:text-lg mb-5 font-outfit">
              Top Specialties
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-slate-300">
              {topSpecialties.map((spec, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => handleSpecialtyClick(spec)} 
                    className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>{spec}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company & Resources (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base sm:text-lg mb-5 font-outfit">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-slate-300 mb-6">
              <li>
                <button 
                  onClick={onNavigateToAbout || onNavigateHome} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onNavigateToMedicalBilling} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Our Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSpecialtyClick('Cardiology')} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Specialties</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToAudit} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Blog</span>
                </button>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={scrollToAudit} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>

            {/* Resources Sub-group */}
            <h4 className="text-white font-bold text-base sm:text-lg mb-3 font-outfit">
              Resources
            </h4>
            <ul className="space-y-2.5 text-[13.5px] text-slate-300">
              <li>
                <button 
                  onClick={scrollToAudit} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Free Practice Audit</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={scrollToAudit} 
                  className="hover:text-white transition-colors flex items-center gap-2 cursor-pointer text-left group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#98C340] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Book Demo</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info (lg:col-span-3) */}
          <div className="lg:col-span-3 lg:pl-3">
            <h4 className="text-white font-bold text-base sm:text-lg mb-5 font-outfit">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm text-slate-200 mb-8">
              {/* Address */}
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#98C340]/60 bg-[#98C340]/15 flex items-center justify-center shrink-0 text-[#98C340]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[13.5px] leading-snug">
                  37 Grand Blvd, Brentwood, NY 11717
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#98C340]/60 bg-[#98C340]/15 flex items-center justify-center shrink-0 text-[#98C340]">
                  <Phone className="w-4 h-4" />
                </div>
                <a 
                  href="tel:6316523106" 
                  className="text-[13.5px] hover:text-white transition-colors"
                >
                  (631) 652-3106
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#98C340]/60 bg-[#98C340]/15 flex items-center justify-center shrink-0 text-[#98C340]">
                  <Mail className="w-4 h-4" />
                </div>
                <a 
                  href="mailto:info@ascentmb.com" 
                  className="text-[13.5px] hover:text-white transition-colors"
                >
                  info@ascentmb.com
                </a>
              </li>
            </ul>

            {/* Nationwide Serving Badge */}
            <div className="flex items-center gap-3 mb-7 pt-2">
              <div className="w-9 h-9 rounded-full bg-blue-900/60 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-300">
                {/* Stylized USA Map / States Icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <p className="text-[13.5px] text-slate-200">
                Serving healthcare practices in all <span className="text-[#98C340] font-bold">50 states</span>
              </p>
            </div>

            {/* Social Media Circular Buttons matching reference */}
            <div className="flex items-center gap-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn" 
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#98C340] hover:text-[#98C340] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <Linkedin size={18} fill="currentColor" className="stroke-none" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#98C340] hover:text-[#98C340] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <Facebook size={18} fill="currentColor" className="stroke-none" />
              </a>
              <a 
                href="mailto:info@ascentmb.com" 
                aria-label="Email" 
                className="w-10 h-10 rounded-full border border-white/20 hover:border-[#98C340] hover:text-[#98C340] flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <Mail size={18} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar with Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Ascent Medical Billing LLC</span>. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-600">•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span className="text-slate-600">•</span>
            <a href="#hipaa" className="hover:text-white transition-colors">HIPAA Compliance</a>
            <span className="text-slate-600">•</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
