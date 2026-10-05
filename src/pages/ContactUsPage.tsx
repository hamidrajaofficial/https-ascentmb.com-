import React, { useState } from 'react';
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GotQuestionsAuditSection } from '../components/GotQuestionsAuditSection';

export interface ContactUsPageProps {
  onBackToHome?: () => void;
  onNavigateToSpecialties?: () => void;
  onNavigateToServices?: () => void;
}

export function ContactUsPage({ 
  onBackToHome, 
  onNavigateToSpecialties, 
  onNavigateToServices 
}: ContactUsPageProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [practiceType, setPracticeType] = useState('');
  const [monthlyBilling, setMonthlyBilling] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMap = () => {
    const el = document.getElementById('google-map-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-white text-slate-800 font-sans">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Simple Hero Section Like About Us Page) */}
      {/* ======================================================== */}
      <section className="relative w-full bg-gradient-to-r from-[#0a2749] via-[#154377] to-[#1a4f8b] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        {/* Subtle decorative background wave */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
            <path d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,213.3C960,235,1056,213,1152,181.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Subtext */}
            <div className="lg:col-span-7 py-2 sm:py-4 z-10">
              <nav className="inline-flex items-center text-xs sm:text-sm text-blue-200/90 font-medium mb-4">
                <button 
                  onClick={onBackToHome}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <ChevronRight className="w-3.5 h-3.5 mx-2 text-blue-300" />
                <span className="text-[#98C340] font-bold">Contact Us</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#98C340] text-xs font-bold uppercase tracking-wider mb-4 border border-[#98C340]/30 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>One-on-One Revenue Consultation</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit tracking-tight text-white mb-5 leading-tight">
                Contact <span className="text-[#98C340]">Us</span>
              </h1>

              <p className="text-blue-50/95 text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal max-w-2xl mb-8">
                Ready to accelerate cash flow, eliminate front-end denials, and achieve 98.5%+ first-pass clean claims? Speak directly with our senior revenue cycle consultants and certified coders. Schedule your one-on-one Game Plan Call or submit your practice inquiry below.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3.5 px-8 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-lime-600/25 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Game Plan Call</span>
                </button>

                <a
                  href="tel:8005550199"
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-3.5 px-7 rounded-full text-sm sm:text-base transition-all duration-200 backdrop-blur-xs flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#98C340]" />
                  <span>+1 (800) 555-0199</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/15 max-w-xl">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-[#98C340] shrink-0" />
                  <span>98.5% Clean Claims</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                  <ShieldCheck className="w-4 h-4 text-[#98C340] shrink-0" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100">
                  <Award className="w-4 h-4 text-[#98C340] shrink-0" />
                  <span>Free Practice Audit</span>
                </div>
              </div>
            </div>

            {/* Right Column: Diamond Photo Framework Matching About Us Page */}
            <div className="lg:col-span-5 relative w-full h-[340px] sm:h-[380px] lg:h-[420px] flex items-center justify-center overflow-visible">
              <div className="relative w-full h-full max-w-[440px] max-h-[420px] flex items-center justify-center overflow-visible">
                
                {/* 1. Center / Left Main Diamond: Consultation & Medical Billing Center */}
                <div className="absolute left-[3%] top-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[260px] lg:h-[260px] rotate-45 rounded-[30px] sm:rounded-[38px] lg:rounded-[42px] overflow-hidden border-[3.5px] border-white shadow-2xl z-20 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80" 
                    alt="Medical Billing Consultant at Work" 
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover"
                  />
                </div>

                {/* 2. Top-Right Diamond: Modern Medical Center Facility */}
                <div className="absolute right-[4%] top-[3%] w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] rotate-45 rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden border-[3px] border-white shadow-xl z-10 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                    alt="Ascent Medical Corporate Headquarters" 
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover"
                  />
                </div>

                {/* 3. Bottom-Right Diamond: Certified Coders Working Together */}
                <div className="absolute right-[4%] bottom-[3%] w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] rotate-45 rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden border-[3px] border-white shadow-xl z-10 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Billing Specialist Consultation Team" 
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SCREENSHOT DESIGN: GET IN TOUCH + SEND US A MESSAGE */}
      {/* ======================================================== */}
      <section 
        id="contact-form-section"
        className="relative w-full bg-[#0a1829] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-white/10"
      >
        {/* Subtle background ambient lights */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#154377]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#98C340]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Column: Heading, Subtitle & 3 Info Cards */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              
              {/* Eyebrow matching screenshot */}
              <div className="mb-2">
                <span className="text-[#98C340] font-bold text-xs sm:text-[13px] tracking-[0.18em] uppercase font-outfit">
                  GET IN TOUCH
                </span>
              </div>

              {/* Main Heading matching screenshot design */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white font-outfit leading-[1.2] mb-4">
                We Are Ready To Maximize Your Practice Revenue
              </h2>

              {/* Subtitle */}
              <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed mb-8">
                Visit our corporate delivery centers or reach out to our dedicated revenue cycle consultants. We invite you for a personal practice fee schedule review, billing workflow audit, and customized revenue roadmap.
              </p>

              {/* 3 Dark Contact Cards Matching Screenshot */}
              <div className="space-y-4">
                
                {/* Card 1: Venue / Office Address */}
                <div className="bg-[#0f243a]/80 hover:bg-[#0f243a] border border-white/10 hover:border-[#98C340]/40 rounded-xl p-5 sm:p-6 transition-all duration-200 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#98C340] flex items-center justify-center shrink-0 bg-[#98C340]/10">
                      <MapPin className="w-5 h-5 text-[#98C340]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white font-outfit mb-1">
                        Corporate Headquarters
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-2.5">
                        Ascent Medical Billing, 1200 Avenue of the Americas, Suite 1400, New York, NY 10036, USA
                      </p>
                      <button 
                        type="button"
                        onClick={scrollToMap}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#98C340] hover:text-[#b4e253] uppercase tracking-wider cursor-pointer group"
                      >
                        <span>OPEN IN GOOGLE MAPS</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2: Phone & WhatsApp */}
                <div className="bg-[#0f243a]/80 hover:bg-[#0f243a] border border-white/10 hover:border-[#98C340]/40 rounded-xl p-5 sm:p-6 transition-all duration-200 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#98C340] flex items-center justify-center shrink-0 bg-[#98C340]/10">
                      <Phone className="w-5 h-5 text-[#98C340]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white font-outfit mb-1">
                        Phone &amp; Direct Support
                      </h3>
                      <div className="text-xs sm:text-sm text-gray-300 space-y-1">
                        <p>
                          <strong className="text-white font-semibold">Direct Consultation:</strong>{' '}
                          <a href="tel:8005550199" className="text-gray-200 hover:text-[#98C340] transition-colors">+1 (800) 555-0199</a>
                        </p>
                        <p>
                          <strong className="text-white font-semibold">Practice Inquiries:</strong>{' '}
                          <a href="tel:6307013986" className="text-gray-200 hover:text-[#98C340] transition-colors">+1 (630) 701-3986</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Visiting & Consultation Hours */}
                <div className="bg-[#0f243a]/80 hover:bg-[#0f243a] border border-white/10 hover:border-[#98C340]/40 rounded-xl p-5 sm:p-6 transition-all duration-200 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#98C340] flex items-center justify-center shrink-0 bg-[#98C340]/10">
                      <Clock className="w-5 h-5 text-[#98C340]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-white font-outfit mb-1">
                        Consultation Hours
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        Monday – Friday: 8:00 AM – 7:00 PM EST
                      </p>
                      <p className="text-[11px] text-[#98C340] font-semibold mt-1">
                        Dedicated billing managers available 24/7 for urgent claims
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Crisp White "Send Us A Message" Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-7 sm:p-9 lg:p-10 shadow-2xl text-slate-800 border border-slate-100">
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#154377] font-outfit mb-2">
                  Send Us A Message
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-7">
                  Fill in your practice details below and our senior revenue cycle consultants will get back to you with custom package quotes, free audit roadmap, and date availability.
                </p>

                {isSubmitted ? (
                  <div className="py-12 px-6 text-center bg-[#f4f9eb] rounded-xl border border-[#98C340]/40">
                    <div className="w-16 h-16 bg-[#98C340] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#154377] font-outfit mb-2">
                      Booking Inquiry Received!
                    </h4>
                    <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#154377]">{fullName || 'Doctor'}</strong>. Our senior revenue cycle director will review your requirements and reach out within 24 business hours with your personalized Game Plan.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-[#154377] hover:bg-[#0f3259] text-white text-xs font-bold py-2.5 px-6 rounded-lg transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                          FULL NAME *
                        </label>
                        <input 
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                          PHONE NUMBER *
                        </label>
                        <input 
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800 bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Practice Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                          EMAIL ADDRESS *
                        </label>
                        <input 
                          type="email"
                          required
                          placeholder="email@example.com"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                          PRACTICE SPECIALTY / SERVICE *
                        </label>
                        <select 
                          required
                          value={practiceType}
                          onChange={(e) => setPracticeType(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all text-gray-800 bg-white"
                        >
                          <option value="">Select Specialty / Service</option>
                          <option value="Primary Care / Internal Medicine">Primary Care / Internal Medicine</option>
                          <option value="Cardiology">Cardiology</option>
                          <option value="Dermatology">Dermatology</option>
                          <option value="Mental & Behavioral Health">Mental &amp; Behavioral Health</option>
                          <option value="Orthopedic & Physical Therapy">Orthopedic &amp; Physical Therapy</option>
                          <option value="Ambulatory Surgery Center (ASC)">Ambulatory Surgery Center (ASC)</option>
                          <option value="Laboratory & Pathology">Laboratory &amp; Pathology</option>
                          <option value="Full Revenue Cycle Management">Full End-to-End RCM</option>
                          <option value="Credentialing & Enrollment">Medical Credentialing</option>
                          <option value="Denial Recovery & AR Audit">Denial Recovery &amp; AR</option>
                          <option value="Other Medical Specialty">Other Healthcare Specialty</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Monthly Billing Volume & Preferred Call Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                          ESTIMATED MONTHLY BILLING
                        </label>
                        <select 
                          value={monthlyBilling}
                          onChange={(e) => setMonthlyBilling(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all text-gray-800 bg-white"
                        >
                          <option value="">Select Monthly Volume</option>
                          <option value="$25,000 - $75,000 / month">$25,000 - $75,000 / month</option>
                          <option value="$75,000 - $150,000 / month">$75,000 - $150,000 / month</option>
                          <option value="$150,000 - $350,000 / month">$150,000 - $350,000 / month</option>
                          <option value="$350,000 - $750,000 / month">$350,000 - $750,000 / month</option>
                          <option value="$750,000+ / month">$750,000+ / month (Enterprise)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                          PREFERRED CONSULTATION DATE
                        </label>
                        <input 
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all text-gray-800 bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 4: Practice Requirements & Message */}
                    <div>
                      <label className="block text-[11px] font-bold text-[#154377] uppercase tracking-wider mb-1.5 font-outfit">
                        PRACTICE REQUIREMENTS &amp; MESSAGE
                      </label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your practice, current EHR/EMR software, denial bottlenecks, or specific billing questions..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-3 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] transition-all placeholder:text-gray-400 text-gray-800 bg-white resize-y"
                      />
                    </div>

                    {/* Submit Button matching screenshot gold/lime CTA button */}
                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-4 px-6 rounded-lg text-sm sm:text-base uppercase tracking-wider font-outfit shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <span>SUBMIT BOOKING INQUIRY</span>
                        <Send className="w-4 h-4 ml-1" />
                      </button>
                    </div>

                    <p className="text-[11px] text-gray-400 text-center pt-1">
                      100% Confidential Practice Assessment. HIPAA compliant with zero data sharing.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. GOOGLE MAPS SECTION (Screenshot Bottom Map Component) */}
      {/* ======================================================== */}
      <section 
        id="google-map-section"
        className="relative w-full bg-[#071320] text-white py-16 sm:py-20 overflow-hidden border-b border-white/10"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Eyebrow & Heading matching screenshot */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#98C340] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase font-outfit block mb-2">
              LOCATION MAP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-outfit">
              Find Ascent Medical Billing on Google Maps
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Serving healthcare providers nationwide across all 50 states with regional delivery centers.
            </p>
          </div>

          {/* Interactive Google Map Container with Floating Card */}
          <div className="relative w-full h-[400px] sm:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900">
            
            {/* Real Google Maps Embed Iframe (1200 Avenue of the Americas, New York) */}
            <iframe
              title="Ascent Medical Billing Corporate Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0620869680373!2d-73.98485292358316!3d40.758444334636655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ffb4e85749%3A0xa19bf9ebfafe25e0!2s1200%20Avenue%20of%20the%20Americas%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Floating Info Badge matching screenshot layout */}
            <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md text-slate-800 p-3.5 sm:p-4 rounded-xl shadow-xl border border-slate-200 max-w-[280px] sm:max-w-[320px]">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="font-bold text-sm sm:text-[15px] text-[#154377] font-outfit leading-tight">
                    Ascent Medical Billing
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    1200 Ave of the Americas, New York, NY
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#154377] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#98C340]" />
                </div>
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                <span className="text-[#98C340] font-bold">Open Monday – Friday</span>
                <a
                  href="https://maps.google.com/?q=1200+Avenue+of+the+Americas+New+York+NY+10036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#154377] hover:text-[#98C340] font-semibold flex items-center gap-1"
                >
                  <span>View larger map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. REVIEWS SECTION (From Services Page)                 */}
      {/* ======================================================== */}
      <TestimonialsSection />

      {/* ======================================================== */}
      {/* 5. FAQ SECTION WITH AUDIT (From Services Page)           */}
      {/* ======================================================== */}
      <GotQuestionsAuditSection />

    </div>
  );
}

export default ContactUsPage;
