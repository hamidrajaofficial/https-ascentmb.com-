import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Building2, 
  Award, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Calendar, 
  Sparkles, 
  FileText,
  Clock,
  Briefcase,
  Layers,
  Star,
  TrendingUp,
  Activity,
  WalletCards
} from 'lucide-react';
import { StatsSection } from '../components/StatsSection';
import { FaqSection } from '../components/FaqSection';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onNavigateToMedicalBilling: () => void;
}

export default function AboutUsPage({ onBackToHome, onNavigateToMedicalBilling }: AboutUsPageProps) {
  const scrollToContact = () => {
    onNavigateToMedicalBilling();
    setTimeout(() => {
      document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      
      {/* 1. HERO BANNER - ASCENT BRANDED WITH GEOMETRIC DIAMONDS */}
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
            <div className="lg:col-span-6 py-2 sm:py-4 z-10">
              <nav className="inline-flex items-center text-xs sm:text-sm text-blue-200/90 font-medium mb-4">
                <button 
                  onClick={onBackToHome}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <ChevronRight className="w-3.5 h-3.5 mx-2 text-blue-300" />
                <span className="text-[#98C340] font-bold">About Us</span>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-outfit tracking-tight text-white mb-5 leading-tight">
                About <span className="text-[#98C340]">Us</span>
              </h1>

              <p className="text-blue-50/95 text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal max-w-xl mb-6">
                Ascent Medical Billing is more than a medical billing company. We are your collaborator in the art of health care. Our expert staff sculpts the fine details of your billing process, from coding and denial management to fast reimbursement and follow-up. We wield the tools and techniques to shape any billing challenge, regardless of the scale or specialty of your practice. With Ascent Medical Billing, you can drop the mic on billing woes and bask in the spotlight of patient care.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold py-3 px-7 rounded-full text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-lime-600/25 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <span>Get A Free Practice Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Diamond Photo Collage (Geometric Rhombus Mosaic with Crisp White Borders - Fully Visible) */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[400px] lg:h-[440px] flex items-center justify-center overflow-visible">
              
              {/* Outer Diamond Framework */}
              <div className="relative w-full h-full max-w-[480px] max-h-[440px] flex items-center justify-center overflow-visible">
                
                {/* 1. Center / Left Main Diamond: Corporate Facility Building */}
                <div className="absolute left-[2%] sm:left-[4%] lg:left-[5%] top-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] lg:w-[280px] lg:h-[280px] rotate-45 rounded-[30px] sm:rounded-[38px] lg:rounded-[44px] overflow-hidden border-[3.5px] sm:border-[4px] border-white shadow-2xl z-20 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                    alt="Ascent Medical Corporate Headquarters" 
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover"
                  />
                </div>

                {/* 2. Top-Right Diamond: Multi-story Modern Facade */}
                <div className="absolute right-[4%] sm:right-[6%] lg:right-[8%] top-[2%] sm:top-[3%] lg:top-[4%] w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[195px] lg:h-[195px] rotate-45 rounded-[22px] sm:rounded-[28px] lg:rounded-[34px] overflow-hidden border-[3px] sm:border-[3.5px] border-white shadow-xl z-10 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80" 
                    alt="Healthcare Operations Building" 
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover"
                  />
                </div>

                {/* 3. Bottom-Right Diamond: Certified Medical Billers Working at Multi-Screen Desks */}
                <div className="absolute right-[4%] sm:right-[6%] lg:right-[8%] bottom-[2%] sm:bottom-[3%] lg:bottom-[4%] w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[195px] lg:h-[195px] rotate-45 rounded-[22px] sm:rounded-[28px] lg:rounded-[34px] overflow-hidden border-[3px] sm:border-[3.5px] border-white shadow-xl z-10 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Medical Billing Workspace and Specialist Staff" 
                    className="-rotate-45 scale-[1.55] w-full h-full object-cover"
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING STATS SECTION (Matches Home Page & Medical Billing Pages) */}
      <StatsSection 
        title="Transform your financial performance"
        description="With up to 98% fewer denials, 30% increased revenue within 60 days, and 45% savings in operational expenses."
        className="relative w-full z-20 flex justify-center px-4 -mt-[70px] sm:-mt-[80px] lg:-mt-[85px] -mb-[70px] sm:-mb-[80px] lg:-mb-[85px] pointer-events-none"
        stats={[
          { value: '25', unit: 'Days', label: 'Rapid Revenue Recovery' },
          { value: '2', unit: '%', label: 'Rejections' },
          { value: '98', unit: '%', label: 'Electronic Payment' },
          { value: '100', unit: '%', label: 'Client Retention' },
        ]}
      />

      {/* 3. SECTION: A COMPANY TO CHANGE THE HEALTHCARE BILLING LANDSCAPE */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Overlapping Photos with 9+ Years Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[480px] lg:max-w-none">
                {/* Back Arch Photo */}
                <div className="w-[82%] rounded-t-[120px] rounded-b-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-100 h-[380px] sm:h-[430px]">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                    alt="Ascent Medical Headquarters Building" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Overlapping Front Photo (Doctor - Full head and face visible, thin border) */}
                <div className="absolute -bottom-8 right-0 w-[58%] h-[270px] sm:h-[310px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" 
                    alt="Doctor and Medical Billing Specialist" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Experience Badge - Vertical Orientation as highlighted */}
                <div className="absolute top-[46%] left-[42%] sm:left-[43%] -translate-x-1/2 -translate-y-1/2 z-20 bg-[#98C340] text-white py-4 px-3 sm:py-5 sm:px-3.5 rounded-xl sm:rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border-2 border-white min-w-[78px] sm:min-w-[88px]">
                  <span className="text-2xl sm:text-3xl font-extrabold font-outfit leading-none tracking-tight">9+</span>
                  <div className="w-5 h-[1.5px] bg-white/75 my-2 rounded-full"></div>
                  <div className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase leading-tight">
                    YEARS<br />
                    OF<br />
                    EXPERIENCE
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 lg:pl-6 mt-8 lg:mt-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[#98C340] font-semibold text-sm mb-3">
                <Building2 className="w-4 h-4 text-[#98C340]" />
                <span className="tracking-wide uppercase text-xs font-bold">About Ascent Medical Billing</span>
              </div>
              <div className="w-12 h-0.5 bg-[#98C340] mb-4"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit text-[#154377] leading-tight mb-6">
                A Company To Change The <span className="text-[#98C340]">Healthcare Billing Landscape.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed mb-4">
                Serving healthcare practices since inception, Ascent Medical Billing is a US-based medical billing and revenue cycle management company delivering compliant, results-driven revenue cycle solutions to healthcare providers across the United States. We combine deep industry expertise with nationally recognized credentials to help practices regain financial control with confidence.
              </p>

              <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed mb-8">
                We continue to innovate our services and add value to help practices improve patient care by being a more efficient and transparent practice. It is that dream that drives us and guides the spirit of constant innovation, making Ascent Medical Billing a trusted partner for physicians, specialty clinics, and healthcare organizations nationwide.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button 
                  onClick={scrollToContact}
                  className="bg-[#154377] hover:bg-[#98C340] text-white font-semibold pl-7 pr-3 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-md flex items-center gap-3 group cursor-pointer"
                >
                  <span>Learn More About Our Team</span>
                  <span className="w-8 h-8 rounded-full bg-[#98C340] group-hover:bg-[#154377] text-white flex items-center justify-center group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION: WHO WE ARE */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text & Button */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-[#154377] mb-6">
                Who <span className="text-[#98C340]">We Are</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed mb-4">
                Ascent Medical Billing is one of the fastest-growing medical billing companies in the USA. We have dedicated our careers to transforming the healthcare industry. We patiently listen to our clients and feel proud that they consider us their partners. All of our employees are working towards a common cause of providing technologically innovative solutions for today and tomorrow.
              </p>

              <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed mb-8">
                We shape the future of your practice by building meaningful RCM healthcare solutions. Our expertly crafted medical billing services make your care more personalized, informed, interactive, and adaptable. Our staff is driven by the desire to ensure office efficiency, improve patient care, and boost profitability for your practices.
              </p>

              <button 
                onClick={scrollToContact}
                className="bg-[#98C340] hover:bg-[#86ad35] text-white font-bold pl-7 pr-3 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-md inline-flex items-center gap-4 group cursor-pointer"
              >
                <span>BOOK APPOINTMENT NOW</span>
                <span className="w-9 h-9 rounded-full bg-[#154377] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Right: Modern Facility Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Ascent Medical Modern Operations Center" 
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION: HISTORY */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Dual Overlapping Photos */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-[480px] lg:max-w-none">
                {/* Main Upper Image */}
                <div className="w-[85%] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" 
                    alt="Ascent Medical Facility" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Lower Image */}
                <div className="absolute -bottom-10 right-0 w-[65%] h-[240px] sm:h-[270px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80" 
                    alt="Ascent Medical Billing Team at Work" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: History Content */}
            <div className="lg:col-span-6 lg:pl-6 mt-12 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-[#154377] mb-6">
                Our <span className="text-[#98C340]">History</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-[16px] leading-relaxed mb-4">
                Since inception, Ascent Medical Billing has been helping healthcare facilities grow sustainably by offering a comprehensive suite of solutions that combines practice management, electronic health records, revenue cycle management, patient portals, and specialized coding. From day one, our focus has been clear: to improve the financial health of healthcare practices. We built Ascent Medical Billing as a performance-based model, where our success is tied directly to our clients' success.
              </p>

              <p className="text-slate-600 text-base sm:text-[16px] leading-relaxed mb-4">
                Every claim we submit, every denial we resolve, and every provider we credential is handled with accountability and precision — ensuring that our clients never have to worry about revenue management again.
              </p>

              <p className="text-slate-600 text-base sm:text-[16px] leading-relaxed">
                We continue to innovate our services and add products to help practices improve patient care by being a more efficient and transparent practice. It is that dream that does not let us sleep, that drives us, and guides the spirit of constant innovation, and that has made Ascent Medical Billing a leader in the healthcare industry.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION: OUR VISION */}
      <section className="relative py-20 bg-gradient-to-r from-[#0e3057] via-[#154377] to-[#1c5594] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80" 
            alt="Medical background texture" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-white mb-6">
              Our <span className="text-[#98C340]">Vision</span>
            </h2>

            <p className="text-blue-100 text-base sm:text-[17px] leading-relaxed mb-8 font-light">
              We look forward to adopting a consultative and flexible approach to technology-enabled solutions for growing healthcare facilities and organizations. It is one of our top priorities to improve practice management, boost revenue growth, and improve the bottom line. We introduce modern communication tools to ensure a modern patient experience, transforming the interaction with the patient and healthcare providers. For that purpose, we create tools to bridge the gaps between patients and healthcare providers, private practice, hospitals, healthcare facilities, and payers. We offer a suite of complementary solutions that include the release of information services, group purchasing organization, and other business services.
            </p>

            <button 
              onClick={scrollToContact}
              className="bg-[#98C340] hover:bg-[#86ad35] text-white font-bold pl-7 pr-3 py-2.5 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg inline-flex items-center gap-4 group cursor-pointer"
            >
              <span>CONTACT US NOW</span>
              <span className="w-9 h-9 rounded-full bg-[#154377] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. SECTION: OUR MISSION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Mission Text */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-[#154377] mb-6">
                Our <span className="text-[#98C340]">Mission</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed mb-5">
                Founded to empower healthcare providers nationwide, Ascent Medical Billing helps simplify billing operations, eliminate paperwork, and streamline connections with labs, pharmacies, and supply chains. By combining industry expertise with advanced cloud-based technology, we help practices improve efficiency, strengthen communication, and achieve greater financial stability.
              </p>

              <p className="text-slate-600 text-base sm:text-[16.5px] leading-relaxed">
                Our mission is to reduce errors, control costs, and simplify the complexities of medical billing and coding. We provide reliable, compliant, and innovative solutions that help providers avoid billing challenges, audits, and penalties—allowing them to focus on what matters most: delivering exceptional patient care.
              </p>
            </div>

            {/* Right: Framed Image with Accent Outline */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[420px] p-4">
                {/* Brand Green Outer Accent Line */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#98C340]/60 translate-x-3 translate-y-3 pointer-events-none"></div>
                {/* Main Card Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                    alt="Ascent Healthcare Care Mission" 
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. MID-PAGE CTA BANNER: BOOST YOUR PRACTICE'S REVENUE GROWTH UP TO 30% */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0d2a4d] via-[#154377] to-[#1c5594] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-outfit text-white mb-4 leading-tight">
            Boost Your Practice's Revenue Growth <span className="text-[#98C340]">Up to 30%</span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light">
            Many healthcare facilities have achieved a record revenue growth of up to 30% with Ascent Medical Billing in the first 90 days.
          </p>

          <button 
            onClick={scrollToContact}
            className="bg-[#98C340] hover:bg-[#86ad35] text-white font-bold pl-8 pr-3 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-xl inline-flex items-center gap-4 group cursor-pointer"
          >
            <span>START A FREE ASSESSMENT</span>
            <span className="w-9 h-9 rounded-full bg-[#154377] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>

      {/* 9. SECTION: LEADERSHIP & FOUNDER PROFILE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6">
          
          {/* Section Sub-badge */}
          <div className="flex items-center gap-2 text-[#98C340] font-semibold text-sm mb-3">
            <Building2 className="w-4 h-4 text-[#98C340]" />
            <span className="tracking-wide uppercase text-xs font-bold">Leadership</span>
          </div>
          <div className="w-12 h-0.5 bg-[#98C340] mb-6"></div>

          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-[#154377] mb-12">
            Executive Leadership &amp; <span className="text-[#98C340]">Advisory</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Founder Arch Photo & Quote */}
            <div className="lg:col-span-5">
              <div className="mx-auto max-w-[380px]">
                {/* Arch Top Photo */}
                <div className="w-full rounded-t-[140px] rounded-b-2xl overflow-hidden shadow-xl border-2 border-white bg-slate-100 h-[400px] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80" 
                    alt="Muhammad Shakeel Alvi - Founder & CEO, Ascent Medical Billing" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Quote Box Below */}
                <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed mb-3">
                    "Our promise is simple: we'll take care of the entire revenue cycle so you can focus on what truly matters — caring for your patients."
                  </p>
                  <p className="text-[#154377] font-bold text-xs uppercase tracking-wider">
                    Executive Leadership, <span className="text-[#98C340]">Ascent Medical Billing</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Bullets & Statement */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-[#154377] mb-6">
                Muhammad Shakeel Alvi – <span className="text-[#98C340]">Founder & CEO</span>
              </h3>

              {/* Bullet Points */}
              <div className="space-y-3.5 mb-8">
                {[
                  'Over 10 years of RCM expertise, specializing in multi-specialty practices, primary care, and clinical operations.',
                  'Serial healthcare executive with proven track record in revenue cycle management and business automation.',
                  'Advocate for performance-based business models, aligning billing success directly with client collections.',
                  'Known for a hands-on, client-first leadership style, combining strategic vision with operational excellence.',
                  'Recognized for building a culture of accountability, transparency, and clinical billing precision.'
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#98C340]/20 text-[#154377] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <ArrowRight className="w-3.5 h-3.5 text-[#98C340]" />
                    </span>
                    <p className="text-slate-700 text-sm sm:text-base leading-snug">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sub-heading and Statement */}
              <h4 className="text-xl font-bold font-outfit text-[#154377] mb-3">
                Affordable Pricing & Transparent Partnership
              </h4>
              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed mb-4">
                "When we launched Ascent Medical Billing, our vision was to build a company where providers never have to worry about their revenue cycle again. Too many practices were losing valuable time and money due to denied claims, credentialing delays, and unpredictable cash flow. We take immense pride in serving healthcare providers nationwide, upholding the highest standards of integrity, compliance, and mutual trust."
              </p>
              <p className="text-slate-600 text-sm sm:text-[15.5px] leading-relaxed mb-8">
                "At Ascent Medical Billing, we treat your success as our own. Our performance-based model means we only win when you win. Every provider we credential, every claim we process, and every patient billing question we handle is done with precision and accountability. We are not just your billing company — we are your partner in financial health."
              </p>

              {/* 3 Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#154377] flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 fill-[#154377]" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    10+ years RCM expertise
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#98C340]/20 text-[#154377] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#98C340]" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Performance-based advocate
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#154377] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    Client-first leadership
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 10. SECTION: THE HONEST TRUTH ABOUT RCM */}
      <section className="py-20 bg-[#0d2a4d] text-white relative overflow-hidden">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#98C340] text-xs font-semibold uppercase tracking-wider mb-6">
            <Building2 className="w-3.5 h-3.5 text-[#98C340]" />
            <span>The Honest Truth About RCM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-outfit text-white mb-6 max-w-4xl mx-auto leading-tight">
            We Know The Real <span className="text-[#98C340]">Frustrations Of Running RCM</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Claim delays, shifting payer rules, repeated denials, and scattered billing workflows pull your team away from patient care. Our specialists step in with the right systems, the right people, and steady follow-through so your cash flow stays predictable.
          </p>

          <button 
            onClick={scrollToContact}
            className="bg-[#98C340] hover:bg-[#86ad35] text-white font-bold pl-8 pr-3 py-3 rounded-full text-sm sm:text-base transition-all duration-300 shadow-xl inline-flex items-center gap-4 group cursor-pointer"
          >
            <span>BOOK APPOINTMENT</span>
            <span className="w-9 h-9 rounded-full bg-[#154377] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>

      {/* 11. FAQ SECTION - REUSING HOMEPAGE COMPONENT */}
      <FaqSection />

    </div>
  );
}
