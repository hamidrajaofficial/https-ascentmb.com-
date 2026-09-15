import React from 'react';
import { MapPin, Mail, Phone, Facebook, Linkedin, Instagram, Twitter, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/images/cropped-cropped-AA-300x178-1-2-removebg-preview.png';

interface FooterProps {
  onNavigateToMedicalBilling?: () => void;
  onNavigateHome?: () => void;
}

export function Footer({ onNavigateToMedicalBilling, onNavigateHome }: FooterProps = {}) {
  return (
    <footer className="bg-[#154377] text-white pt-16 pb-8 border-t border-white/10 relative z-10">
      <div className="max-w-[1250px] mx-auto px-4">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-6">
            <div 
              onClick={onNavigateHome} 
              className={`bg-white px-3.5 py-1.5 rounded-xl inline-flex items-center mb-6 shadow-sm ${onNavigateHome ? 'cursor-pointer hover:opacity-95' : ''}`}
            >
              <img 
                src={logoImg} 
                alt="Ascent Medical Billing" 
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6">
              Ascent Medical Billing is a premier HIPAA-compliant medical billing and revenue cycle management (RCM) company. We streamline healthcare billing, reduce claim denials, and accelerate cash flow for medical practices across the USA.
            </p>

            {/* HIPAA Compliance Badge */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 mb-6 w-full max-w-sm">
              <ShieldCheck className="w-8 h-8 text-[#98C340] shrink-0" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">100% HIPAA Compliant</div>
                <div className="text-[12px] text-gray-300">Bank-Grade 256-bit Encrypted Data Security</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98C340] hover:text-[#154377] flex items-center justify-center text-white transition-colors">
                <Facebook size={16} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98C340] hover:text-[#154377] flex items-center justify-center text-white transition-colors">
                <Linkedin size={16} fill="currentColor" className="stroke-none" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98C340] hover:text-[#154377] flex items-center justify-center text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98C340] hover:text-[#154377] flex items-center justify-center text-white transition-colors">
                <Twitter size={16} fill="currentColor" className="stroke-none" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative pb-2 border-b-2 border-[#98C340] inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><button onClick={onNavigateHome} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><ArrowRight className="w-3 h-3 text-[#98C340]" /> About Us</button></li>
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><ArrowRight className="w-3 h-3 text-[#98C340]" /> RCM Services</button></li>
              <li><a href="#contact" className="hover:text-[#98C340] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#98C340]" /> Specialties</a></li>
              <li><a href="#contact" className="hover:text-[#98C340] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#98C340]" /> EHR Expertise</a></li>
              <li><a href="#contact" className="hover:text-[#98C340] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#98C340]" /> Virtual Assistants</a></li>
              <li><a href="#contact" className="hover:text-[#98C340] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#98C340]" /> Blog & Insights</a></li>
              <li><a href="#contact" className="hover:text-[#98C340] transition-colors flex items-center gap-1.5"><ArrowRight className="w-3 h-3 text-[#98C340]" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: RCM Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative pb-2 border-b-2 border-[#98C340] inline-block">
              RCM Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" /> Medical Billing & Coding</button></li>
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" /> Accounts Receivable (A/R)</button></li>
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" /> Denial Management</button></li>
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" /> Eligibility Verification</button></li>
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" /> Provider Credentialing</button></li>
              <li><button onClick={onNavigateToMedicalBilling} className="hover:text-[#98C340] transition-colors flex items-center gap-1.5 cursor-pointer text-left"><CheckCircle2 className="w-3.5 h-3.5 text-[#98C340]" /> Patient Billing & Support</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 relative pb-2 border-b-2 border-[#98C340] inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#98C340] shrink-0 mt-0.5" />
                <span>California, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#98C340] shrink-0" />
                <a href="tel:6307013986" className="hover:text-[#98C340] transition-colors">630-701-3986</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#98C340] shrink-0" />
                <a href="mailto:info@ascentmb.com" className="hover:text-[#98C340] transition-colors">
                  info@ascentmb.com
                </a>
              </li>
            </ul>

            {/* Operating Hours */}
            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
              <div className="font-semibold text-white mb-1">Business Hours:</div>
              <div>Mon - Fri: 8:00 AM - 6:00 PM EST</div>
              <div>24/7 Virtual Assistant Support</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Ascent Medical Billing LLC</span>. All Rights Reserved.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300">
            <a href="#" className="hover:text-[#98C340] transition-colors">Privacy Policy</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-[#98C340] transition-colors">Terms of Service</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-[#98C340] transition-colors">HIPAA Compliance</a>
            <span className="text-gray-500">•</span>
            <a href="#" className="hover:text-[#98C340] transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
