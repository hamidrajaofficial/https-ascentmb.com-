import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Award,
  ChevronDown,
  Send
} from 'lucide-react';
import heroDoctorsTeamImg from '../assets/images/hero_doctors_team_1787328070635.jpg';

interface RcmHeroSectionProps {
  onBookCall?: () => void;
  onAuditClick?: () => void;
}

export function RcmHeroSection({ onBookCall, onAuditClick }: RcmHeroSectionProps) {
  const [provider, setProvider] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [commPreference, setCommPreference] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleScrollToAudit = () => {
    if (onAuditClick) {
      onAuditClick();
      return;
    }
    const el = document.getElementById('consultation-form') || document.getElementById('contact-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBook = () => {
    const el = document.getElementById('rcm-appointment-form');
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
                <span className="text-[#154377] font-bold text-xs sm:text-[13px] tracking-wide uppercase font-outfit">
                  All-in-One Revenue Cycle Management
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#154377] font-outfit leading-[1.14] tracking-tight mb-5">
              Comprehensive{' '}
              <span className="text-[#98C340]">
                RCM Services
              </span>{' '}
              That Maximize Cash Flow &amp; Eliminate Denials
            </h1>

            {/* Subtext */}
            <p className="text-gray-700 text-base sm:text-[16.5px] leading-relaxed mb-8 max-w-xl font-normal">
              Managing healthcare revenue shouldn&apos;t slow down patient care. Ascent Medical Billing delivers end-to-end Revenue Cycle Management services—from front-end patient eligibility and certified coding to claims scrubbing, denial management, and aging AR recovery. We help clinics and medical practices achieve a 98.5% clean claim rate and sub-30 day AR.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-9">
              <button 
                onClick={handleScrollToBook}
                className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Game Plan Call</span>
              </button>
              
              <button 
                onClick={handleScrollToAudit}
                className="bg-[#154377] hover:bg-[#0f3259] text-white font-bold py-3.5 px-6 rounded-lg text-sm sm:text-[15px] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Free Practice RCM Audit</span>
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
                <span className="text-xs sm:text-sm font-semibold text-[#154377]">40+ Specialties</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#98C340] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#154377]">100% HIPAA Secure</span>
              </div>
            </div>

          </div>

          {/* Right Column: Book An Appointment Form (Sample Match) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative w-full">
            
            <div 
              id="rcm-appointment-form"
              className="w-full max-w-[530px] bg-white rounded-2xl p-6 sm:p-8 lg:p-9 shadow-2xl border border-gray-100 relative"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-[#154377] via-[#98C340] to-[#154377] rounded-b-full" />

              {/* Form Title matching sample layout */}
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#154377] font-outfit text-center mb-6 pt-1">
                Book An Appointment
              </h3>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 font-outfit">
                    Appointment Scheduled!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Thank you, <span className="font-semibold">{fullName || 'Doctor'}</span>. Your appointment request has been received. Our senior RCM billing consultant will contact you via your preferred communication method.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setProvider('');
                      setCommPreference('');
                      setPreferredTime('');
                    }}
                    className="inline-block mt-2 px-5 py-2 bg-[#154377] text-white text-xs font-bold rounded-lg hover:bg-[#0f3259] transition-colors cursor-pointer"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Choose Provider & Full Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Choose Provider Select */}
                    <div className="relative">
                      <select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        required
                        className="w-full h-12 px-4 bg-[#E9ECEF] border border-transparent focus:border-[#98C340] focus:bg-white text-sm text-[#154377] font-medium rounded-md appearance-none cursor-pointer focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Choose Provider</option>
                        <option value="physician-billing">Physician Billing Specialist</option>
                        <option value="specialty-coding">Specialty Medical Coder</option>
                        <option value="credentialing">Provider Credentialing Consultant</option>
                        <option value="denial-recovery">Denial &amp; AR Recovery Lead</option>
                        <option value="general-rcm">General Practice RCM Lead</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Full Name Input */}
                    <div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full h-12 px-4 bg-[#E9ECEF] border border-transparent focus:border-[#98C340] focus:bg-white text-sm text-[#154377] font-medium rounded-md placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number Input */}
                    <div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone Number"
                        className="w-full h-12 px-4 bg-[#E9ECEF] border border-transparent focus:border-[#98C340] focus:bg-white text-sm text-[#154377] font-medium rounded-md placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email Address Input */}
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full h-12 px-4 bg-[#E9ECEF] border border-transparent focus:border-[#98C340] focus:bg-white text-sm text-[#154377] font-medium rounded-md placeholder-gray-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Communication Preferences & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Communication Preferences Select */}
                    <div className="relative">
                      <select
                        value={commPreference}
                        onChange={(e) => setCommPreference(e.target.value)}
                        required
                        className="w-full h-12 px-4 bg-[#E9ECEF] border border-transparent focus:border-[#98C340] focus:bg-white text-sm text-[#154377] font-medium rounded-md appearance-none cursor-pointer focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Communication Preferences</option>
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="zoom">Video Meeting (Zoom / Teams)</option>
                        <option value="sms">SMS / Text Message</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Preferred Time Select */}
                    <div className="relative">
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        required
                        className="w-full h-12 px-4 bg-[#E9ECEF] border border-transparent focus:border-[#98C340] focus:bg-white text-sm text-[#154377] font-medium rounded-md appearance-none cursor-pointer focus:outline-none transition-colors"
                      >
                        <option value="" disabled>Preferred Time</option>
                        <option value="morning">Morning (9:00 AM - 12:00 PM EST)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 3:00 PM EST)</option>
                        <option value="evening">Evening (3:00 PM - 6:00 PM EST)</option>
                        <option value="flexible">Flexible / Any Time</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Get Started Button */}
                  <div className="pt-2 flex justify-center">
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-w-[200px] px-10 py-3.5 bg-[#154377] hover:bg-[#0f3259] text-white font-bold text-[15px] sm:text-base rounded-md transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Get Started</span>
                      <Send className="w-4 h-4 text-[#98C340]" />
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default RcmHeroSection;
