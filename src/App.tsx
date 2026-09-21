import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Twitter, ChevronDown, ChevronUp, Activity, Calendar, Headphones, Menu, X, ShieldCheck, FileText, Send, RotateCcw, BarChart3, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ServicesSection } from './components/ServicesSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { HighPerformanceSection } from './components/HighPerformanceSection';
import { SolutionsCardsSection } from './components/SolutionsCardsSection';
import { NationwideAvailability } from './components/NationwideAvailability';
import { FutureInnovationSection } from './components/FutureInnovationSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { SpecialtiesMegaMenu, specialtiesList } from './components/SpecialtiesMegaMenu';
import { RcmCompanySection } from './components/RcmCompanySection';
import { RcmMegaMenu, rcmMegaMenuData } from './components/RcmMegaMenu';
import { VirtualAssistantPackagesSection } from './components/VirtualAssistantPackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactUsSection } from './components/ContactUsSection';
import { FastOnboardingSection, OnboardingStep } from './components/FastOnboardingSection';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';
import { FasterReimbursementsSection } from './components/FasterReimbursementsSection';
import { MedicalBillingPage } from './pages/MedicalBillingPage';
import { SpecialtyTemplatePage } from './pages/SpecialtyTemplatePage';
import AboutUsPage from './pages/AboutUsPage';
import logoImg from './assets/images/cropped-cropped-AA-300x178-1-2-removebg-preview.png';
import heroHomeImg from './assets/images/End-to-End-Medical-Licensing-2026.webp';

const homeOnboardingSteps: OnboardingStep[] = [
  {
    step: 1,
    title: 'Eligibility & Pre-Auth',
    desc: 'Verify patient coverage, co-pays, and prior authorizations upfront to eliminate front-end denials.',
    icon: <ShieldCheck className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 2,
    title: 'Accurate Coding & Entry',
    desc: 'AAPC-certified coders review clinical charts, applying accurate CPT, ICD-10, and modifier codes with 98% precision.',
    icon: <FileText className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 3,
    title: 'Claim Scrubbing & Submission',
    desc: 'Multi-layer rules engine scrubs claims and submits electronically within 24–48 hours for first-pass approvals.',
    icon: <Send className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 4,
    title: 'Denial & AR Management',
    desc: 'Proactive follow-up on unpaid claims, rapid appeal turnaround, and keeping AR days strictly under 30.',
    icon: <RotateCcw className="w-6 h-6 text-white stroke-[2.2]" />,
  },
  {
    step: 5,
    title: 'Payment Posting & Analytics',
    desc: 'Prompt ERA/EOB payment reconciliations, patient invoicing, and transparent monthly financial analytics.',
    icon: <BarChart3 className="w-6 h-6 text-white stroke-[2.2]" />,
  },
];

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const savedSpecialty = localStorage.getItem('ascent_active_specialty');
      if (savedSpecialty) return savedSpecialty;
    }
    return 'Cardiology';
  });

  const [currentPage, setCurrentPage] = useState<'home' | 'medical-billing' | 'specialty' | 'about'>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname.replace(/\/+$/, '');
      if (pathname === '/medical-billing' || pathname === '/services') return 'medical-billing';
      if (pathname === '/about' || pathname === '/about-us') return 'about';
      if (pathname.startsWith('/specialties') || pathname.startsWith('/specialty')) return 'specialty';

      const hash = window.location.hash.replace('#', '');
      if (hash === 'medical-billing' || hash === 'services') return 'medical-billing';
      if (hash === 'about' || hash === 'about-us') return 'about';
      if (hash.startsWith('specialt')) return 'specialty';
      if (hash === 'home') return 'home';

      const saved = localStorage.getItem('ascent_active_page');
      if (saved === 'home' || saved === 'medical-billing' || saved === 'specialty' || saved === 'about') return saved;
    }
    return 'home';
  });
  const [isRcmMenuOpen, setIsRcmMenuOpen] = useState(false);
  const [isSpecialtiesMenuOpen, setIsSpecialtiesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRcmAccordion, setMobileRcmAccordion] = useState(false);
  const [mobileSpecialtiesAccordion, setMobileSpecialtiesAccordion] = useState(false);
  const rcmTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const specialtiesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('ascent_active_page', currentPage);
      localStorage.setItem('ascent_active_specialty', selectedSpecialty);
      
      let targetPath = '/';
      if (currentPage === 'medical-billing') {
        targetPath = '/medical-billing';
      } else if (currentPage === 'about') {
        targetPath = '/about';
      } else if (currentPage === 'specialty') {
        const slug = selectedSpecialty.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        targetPath = `/specialties/${slug}`;
      }
      
      // Clean up any old hash and keep clean pathname
      if (window.location.hash.startsWith('#medical-billing') || window.location.hash.startsWith('#services') || window.location.hash === '#home') {
        window.history.replaceState({ page: currentPage, specialty: selectedSpecialty }, '', targetPath);
      } else if (window.location.pathname !== targetPath) {
        window.history.replaceState({ page: currentPage, specialty: selectedSpecialty }, '', targetPath);
      }
    }
  }, [currentPage, selectedSpecialty]);

  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname.replace(/\/+$/, '');
      const hash = window.location.hash.replace('#', '');

      if (pathname === '/medical-billing' || pathname === '/services' || hash === 'medical-billing' || hash === 'services') {
        setCurrentPage('medical-billing');
        if (window.location.hash) {
          window.history.replaceState({ page: 'medical-billing' }, '', '/medical-billing');
        }
      } else if (pathname === '/about' || pathname === '/about-us' || hash === 'about' || hash === 'about-us') {
        setCurrentPage('about');
        if (window.location.hash) {
          window.history.replaceState({ page: 'about' }, '', '/about');
        }
      } else if (pathname.startsWith('/specialties') || pathname.startsWith('/specialty')) {
        const parts = pathname.split('/');
        const slug = parts[parts.length - 1];
        if (slug && slug !== 'specialties' && slug !== 'specialty') {
          // match specialty title from list or unslugify
          const matched = specialtiesList.find(s => 
            s.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
          );
          if (matched) {
            setSelectedSpecialty(matched.name);
          } else {
            const formatted = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            setSelectedSpecialty(formatted);
          }
        }
        setCurrentPage('specialty');
      } else if (pathname === '' || pathname === '/' || hash === 'home') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (page: 'home' | 'medical-billing' | 'about') => {
    setCurrentPage(page);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ascent_active_page', page);
      const targetPath = page === 'medical-billing' ? '/medical-billing' : page === 'about' ? '/about' : '/';
      if (window.location.pathname !== targetPath || window.location.hash) {
        window.history.pushState({ page }, '', targetPath);
      }
    }
    setIsRcmMenuOpen(false);
    setIsSpecialtiesMenuOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSpecialty = (specialtyName: string) => {
    setSelectedSpecialty(specialtyName);
    setCurrentPage('specialty');
    if (typeof window !== 'undefined') {
      localStorage.setItem('ascent_active_page', 'specialty');
      localStorage.setItem('ascent_active_specialty', specialtyName);
      const slug = specialtyName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const targetPath = `/specialties/${slug}`;
      window.history.pushState({ page: 'specialty', specialty: specialtyName }, '', targetPath);
    }
    setIsRcmMenuOpen(false);
    setIsSpecialtiesMenuOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRcmMouseEnter = () => {
    if (rcmTimeoutRef.current) clearTimeout(rcmTimeoutRef.current);
    if (specialtiesTimeoutRef.current) clearTimeout(specialtiesTimeoutRef.current);
    setIsSpecialtiesMenuOpen(false);
    setIsRcmMenuOpen(true);
  };

  const handleRcmMouseLeave = () => {
    rcmTimeoutRef.current = setTimeout(() => {
      setIsRcmMenuOpen(false);
    }, 150);
  };

  const handleSpecialtiesMouseEnter = () => {
    if (specialtiesTimeoutRef.current) clearTimeout(specialtiesTimeoutRef.current);
    if (rcmTimeoutRef.current) clearTimeout(rcmTimeoutRef.current);
    setIsRcmMenuOpen(false);
    setIsSpecialtiesMenuOpen(true);
  };

  const handleSpecialtiesMouseLeave = () => {
    specialtiesTimeoutRef.current = setTimeout(() => {
      setIsSpecialtiesMenuOpen(false);
    }, 150);
  };

  const handleHeaderMouseLeave = () => {
    handleRcmMouseLeave();
    handleSpecialtiesMouseLeave();
  };

  const scrollToSpecialties = () => {
    setIsSpecialtiesMenuOpen(false);
    setIsRcmMenuOpen(false);
    setMobileMenuOpen(false);
    
    const el = document.getElementById('specialties-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigateTo('home');
      setTimeout(() => {
        document.getElementById('specialties-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      {/* --- Pre-Header --- */}
      <div className="bg-[#154377] text-white text-[11px] lg:text-[13px] min-h-[31px] flex items-center">
        <div className="max-w-[1250px] w-full mx-auto px-4 py-1 md:py-0 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 divide-none sm:divide-x sm:divide-gray-500">
            <div className="flex items-center space-x-2 px-2">
              <MapPin size={14} className="text-white" />
              <span>California, USA</span>
            </div>
            <div className="flex items-center space-x-2 px-2 sm:pl-4">
              <Mail size={14} className="text-white fill-white stroke-[#154377]" />
              <a href="mailto:info@ascentmb.com" className="hover:text-[#98C340] transition-colors">
                info@ascentmb.com
              </a>
            </div>
            <div className="flex items-center space-x-2 px-2 sm:pl-4">
              <Phone size={14} className="text-white fill-white stroke-[#154377]" />
              <a href="tel:6307013986" className="hover:text-[#98C340] transition-colors">
                630-701-3986
              </a>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="bg-[#FCFCFC] text-[#154377] p-[3px] rounded-full hover:bg-gray-200 transition-colors">
              <Facebook size={12} className="fill-current stroke-none" />
            </a>
            <a href="#" className="bg-[#FCFCFC] text-[#154377] p-[3px] rounded-full hover:bg-gray-200 transition-colors">
              <Linkedin size={12} className="fill-current stroke-none" />
            </a>
            <a href="#" className="bg-[#FCFCFC] text-[#154377] p-[3px] rounded-full hover:bg-gray-200 transition-colors">
              <Instagram size={12} />
            </a>
            <a href="#" className="bg-[#FCFCFC] text-[#154377] p-[3px] rounded-full hover:bg-gray-200 transition-colors">
              <Twitter size={12} className="fill-current stroke-none" />
            </a>
          </div>
        </div>
      </div>

      {/* --- Main Header --- */}
      <header 
        className="bg-[#FCFCFC] shadow-sm sticky top-0 z-50 h-[65px] flex items-center relative"
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className="max-w-[1250px] w-full mx-auto px-4 flex justify-between items-center h-full">
          {/* Logo linked to Home */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center cursor-pointer group py-1 border-0 bg-transparent text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#98C340] rounded-md"
            title="Ascent Medical Billing - Return to Home"
            aria-label="Ascent Medical Billing Homepage"
          >
            <img 
              src={logoImg} 
              alt="Ascent Medical Billing" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-5 text-[11px] font-bold text-[#233559] uppercase tracking-wide ml-auto mr-6 h-full">
            <button 
              onClick={() => navigateTo('about')}
              className={`hover:text-[#98C340] transition-colors py-4 cursor-pointer ${currentPage === 'about' ? 'text-[#98C340] border-b-2 border-[#98C340]' : ''}`}
            >
              ABOUT
            </button>
            
            {/* RCM Services Dropdown with Mega Menu */}
            <div 
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={handleRcmMouseEnter}
            >
              <div className={`flex items-center space-x-1 transition-colors py-4 ${isRcmMenuOpen || currentPage === 'medical-billing' ? 'text-[#98C340]' : 'hover:text-[#98C340]'}`}>
                <span>RCM SERVICES</span>
                <ChevronDown size={14} strokeWidth={3} className={`transition-transform duration-200 ${isRcmMenuOpen ? 'rotate-180 text-[#98C340]' : 'text-[#7ea1c4]'}`} />
              </div>
            </div>

            {/* Specialties Dropdown with Mega Menu */}
            <div 
              className="h-full flex items-center cursor-pointer"
              onMouseEnter={handleSpecialtiesMouseEnter}
            >
              <div className={`flex items-center space-x-1 transition-colors py-4 ${isSpecialtiesMenuOpen ? 'text-[#98C340]' : 'hover:text-[#98C340]'}`}>
                <span>SPECIALITIES</span>
                <ChevronDown size={14} strokeWidth={3} className={`transition-transform duration-200 ${isSpecialtiesMenuOpen ? 'rotate-180 text-[#98C340]' : 'text-[#7ea1c4]'}`} />
              </div>
            </div>

            <DropdownItem label="DOMAIN AREAS" />
            <DropdownItem label="OUR EHR EXPERTISE" />
            
            <a href="#" className="hover:text-[#98C340] transition-colors py-4">BLOG</a>
            
            <DropdownItem label="HIRE NOW" />
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex ml-4 h-full">
            <button 
              onClick={() => {
                navigateTo('medical-billing');
                setTimeout(() => {
                  document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-[#98C340] hover:bg-[#85ab36] text-white px-5 h-full rounded-none text-[15px] font-semibold transition-colors flex items-center shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Your Game Plan Call
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden bg-[#154377] text-white p-2 rounded cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* RCM Mega Menu Dropdown */}
        <AnimatePresence>
          {isRcmMenuOpen && (
            <div 
              onMouseEnter={handleRcmMouseEnter}
              onMouseLeave={handleRcmMouseLeave}
            >
              <RcmMegaMenu 
                onClose={() => setIsRcmMenuOpen(false)} 
                onSelectService={(serviceId) => {
                  navigateTo('medical-billing');
                }}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Specialties Mega Menu Dropdown */}
        <AnimatePresence>
          {isSpecialtiesMenuOpen && (
            <div 
              onMouseEnter={handleSpecialtiesMouseEnter}
              onMouseLeave={handleSpecialtiesMouseLeave}
            >
              <SpecialtiesMegaMenu 
                onClose={() => setIsSpecialtiesMenuOpen(false)} 
                onViewAllSpecialties={scrollToSpecialties}
                onSelectSpecialty={(name) => {
                  navigateToSpecialty(name);
                }}
              />
            </div>
          )}
        </AnimatePresence>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-200 overflow-y-auto max-h-[80vh] z-50 p-5"
            >
              <div className="flex flex-col space-y-4 text-sm font-bold text-[#233559]">
                <button 
                  onClick={() => navigateTo('about')}
                  className={`py-2 text-left hover:text-[#98C340] border-b border-gray-100 uppercase cursor-pointer ${currentPage === 'about' ? 'text-[#98C340] font-bold' : ''}`}
                >
                  ABOUT
                </button>
                
                {/* Mobile RCM SERVICES Accordion */}
                <div>
                  <button 
                    onClick={() => setMobileRcmAccordion(!mobileRcmAccordion)}
                    className="w-full flex justify-between items-center py-2 text-[#154377] font-bold border-b border-gray-100 uppercase"
                  >
                    <span>RCM SERVICES</span>
                    {mobileRcmAccordion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileRcmAccordion && (
                    <div className="pl-3 py-3 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 rounded-lg mt-2 p-3">
                      {rcmMegaMenuData.map((item, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => navigateTo('medical-billing')}
                          className="mb-2 cursor-pointer hover:opacity-80"
                        >
                          <div className="text-[14px] font-bold text-[#154377] hover:text-[#98C340] mb-1">{item.title}</div>
                          <ul className="space-y-1 pl-2">
                            {item.items.map((sub, sIdx) => (
                              <li key={sIdx} className="text-xs font-normal text-gray-600">
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile SPECIALITIES Accordion */}
                <div>
                  <button 
                    onClick={() => setMobileSpecialtiesAccordion(!mobileSpecialtiesAccordion)}
                    className="w-full flex justify-between items-center py-2 text-[#154377] font-bold border-b border-gray-100 uppercase"
                  >
                    <span>SPECIALITIES</span>
                    {mobileSpecialtiesAccordion ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileSpecialtiesAccordion && (
                    <div className="pl-2 py-3 bg-[#F8FAF3] rounded-lg mt-2 p-3 border border-[#98C340]/20">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                        {specialtiesList.map((item, idx) => {
                          const IconComp = item.icon;
                          return (
                            <div 
                              key={idx} 
                              onClick={() => navigateToSpecialty(item.name)}
                              className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-gray-100 shadow-xs cursor-pointer hover:border-[#98C340] active:bg-[#F8FAF3]"
                            >
                              <div className="w-8 h-8 rounded-md bg-[#EDF2F7] flex items-center justify-center shrink-0">
                                <IconComp className="w-4 h-4 text-[#154377]" />
                              </div>
                              <span className="text-xs font-semibold text-[#154377] truncate">{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                      <button
                        onClick={() => scrollToSpecialties()}
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#98C340] hover:bg-[#85ab36] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-sm"
                      >
                        <span>View All Specialties</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>

                <a href="#" className="py-2 hover:text-[#98C340] border-b border-gray-100">DOMAIN AREAS</a>
                <a href="#" className="py-2 hover:text-[#98C340] border-b border-gray-100">OUR EHR EXPERTISE</a>
                <a href="#" className="py-2 hover:text-[#98C340] border-b border-gray-100">BLOG</a>
                <a href="#" className="py-2 hover:text-[#98C340] border-b border-gray-100">HIRE NOW</a>

                <button 
                  onClick={() => navigateTo('medical-billing')}
                  className="w-full mt-4 bg-[#98C340] hover:bg-[#85ab36] text-white py-3 rounded text-sm font-semibold flex items-center justify-center cursor-pointer shadow-sm transition-colors"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Your Game Plan Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- Page Content Router --- */}
      {currentPage === 'medical-billing' ? (
        <MedicalBillingPage onBackToHome={() => navigateTo('home')} />
      ) : currentPage === 'specialty' ? (
        <SpecialtyTemplatePage 
          specialtyName={selectedSpecialty} 
          onBackToHome={() => navigateTo('home')} 
          onSelectSpecialty={(name) => navigateToSpecialty(name)}
        />
      ) : currentPage === 'about' ? (
        <AboutUsPage 
          onBackToHome={() => navigateTo('home')}
          onNavigateToMedicalBilling={() => navigateTo('medical-billing')}
        />
      ) : (
        <>
          {/* --- Hero Section --- */}
          <section className="relative w-full overflow-hidden bg-[#EBF2F8] p-0 m-0 border-b border-[#154377]/10">
            {/* Background Image with subtle opacity */}
            <div 
              className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-[0.07] mix-blend-multiply pointer-events-none"
              style={{ backgroundImage: `url('/src/assets/images/hero_doctors_team_1787328070635.jpg')` }}
            />
            {/* Light secondary gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#EBF2F8]/95 via-[#F3F7FC]/90 to-[#E4EFF8]/95 backdrop-blur-[0.5px] pointer-events-none" />

            <div className="max-w-[1250px] mx-auto px-4 w-full h-full flex flex-col lg:flex-row items-center relative z-10 pt-[36px] pb-[250px] sm:pb-[200px] md:pb-[180px]">
              
              {/* Left Content Area */}
              <HeroText />

              {/* Right Visual Area */}
              <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end mt-16 lg:mt-0 relative z-10">
                <img 
                  src={heroHomeImg} 
                  alt="Ascent Medical Billing Professional" 
                  className="w-full max-w-[300px] sm:max-w-[450px] lg:max-w-lg object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </section>

          <StatsSection />
          
          <FasterReimbursementsSection />
          
          <ServicesSection />
          
          <VirtualAssistantPackagesSection />
          
          <WhatYouGetSection />
          
          <FutureInnovationSection />
          
          <SpecialtiesSection 
            onSelectSpecialty={(name) => navigateToSpecialty(name)}
          />
          
          <FastOnboardingSection 
            titlePrefix="How We Work in"
            titleHighlight="Medical Billing Services"
            subtitle="Our proven 5-stage medical billing workflow is built to eliminate denials, accelerate reimbursements, and ensure seamless revenue cycle management without long-term contracts."
            steps={homeOnboardingSteps}
            bannerBadgeValue="98%"
            bannerBadgeLabel="Clean"
            bannerTitlePrefix="98% Clean Claim Rate"
            bannerTitleHighlight="With Faster Reimbursements"
            bannerDesc="Ascent Medical Billing eliminates cash flow gaps and minimizes denials with dedicated specialty billing experts and month-to-month freedom."
            bannerButtonText="Claim Your Free Billing Audit"
            onCalculateSavings={() => {
              const el = document.getElementById('contact-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onStrategyCall={() => {
              const el = document.getElementById('contact-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
          
          <ContactUsSection />
          
          <HighPerformanceSection />
          
          <SolutionsCardsSection />
          
          <NationwideAvailability />
          
          <RcmCompanySection />
          
          <TestimonialsSection />
          
          <FaqSection />
        </>
      )}

      {/* --- Footer --- */}
      <Footer 
        onNavigateToMedicalBilling={() => navigateTo('medical-billing')}
        onNavigateHome={() => navigateTo('home')}
        onNavigateToAbout={() => navigateTo('about')}
        onSelectSpecialty={(name) => navigateToSpecialty(name)}
      />
    </div>
  );
}

function DropdownItem({ label }: { label: string }) {
  return (
    <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#98C340] transition-colors">
      <span>{label}</span>
      <ChevronDown size={14} strokeWidth={3} className="text-[#7ea1c4] group-hover:text-[#98C340] transition-colors" />
    </div>
  );
}

export function EyebrowBadge({ text, icon }: { text: string, icon?: React.ReactNode }) {
  return (
    <div className="inline-flex flex-wrap items-center space-x-2 bg-[#154377]/10 border border-[#154377]/20 px-4 py-2 rounded-full shadow-xs backdrop-blur-xs">
      {icon && <span className="text-[#98C340] mr-1">{icon}</span>}
      <span className="eyebrow text-[#154377] font-bold text-xs sm:text-[13px] tracking-wide break-words whitespace-normal text-center leading-tight">
        {text}
      </span>
    </div>
  );
}

function HeroText() {
  const [index, setIndex] = useState(0);
  const phrases = ["Maximizes Revenue", "Reduces Claim Losses", "Built to Deliver Results"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lg:w-3/5 text-[#154377] pr-0 lg:pr-12 md:text-left z-20">
      <div className="mb-6">
        <EyebrowBadge 
          text="HIPAA-Compliant Medical Billing Company" 
          icon={<Activity size={16} strokeWidth={2.5} />} 
        />
      </div>
      
      <h1 className="mb-4 flex flex-col items-start font-outfit">
        <span className="text-[#154377] font-bold text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.1]">
          Medical Billing <span className="text-[#98C340]">Company</span>
        </span>
        <span className="text-[#154377] font-normal mt-0.5 w-full flex items-center h-[1.3em] overflow-hidden whitespace-nowrap text-[26px] sm:text-[34px] md:text-[38px] leading-tight">
          <span className="text-[#98C340] font-bold mr-2.5">That</span>
          <span className="relative flex-1 h-full block">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 top-0 flex items-center h-full text-[#154377] font-semibold leading-tight"
              >
                {phrases[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
      </h1>
      
      <p className="mb-8 max-w-2xl font-normal leading-relaxed text-gray-700 text-[16px] sm:text-[17px] mt-1">
        It's time to move beyond outdated billing processes that quietly drain revenue. At Ascent Medical Billing, 
        we deliver reliable healthcare billing solutions, streamline workflows, reduce denials, and help 
        healthcare professionals maintain consistent cash flow without operational delays.
      </p>
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="w-full sm:w-auto bg-[#98C340] hover:bg-[#85ab36] text-white font-semibold py-3.5 px-8 rounded-md text-[15px] sm:text-base transition-colors cursor-pointer shadow-md flex justify-center items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Book Your Game Plan Call
        </button>
        <button className="w-full sm:w-auto bg-[#154377] hover:bg-[#0f3259] text-white font-bold py-3.5 px-8 rounded-md uppercase tracking-wide text-sm transition-colors cursor-pointer shadow-md flex justify-center items-center">
          CONTACT US
        </button>
      </div>
    </div>
  );
}