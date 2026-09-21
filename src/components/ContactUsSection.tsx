import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, AlertTriangle } from 'lucide-react';

export interface ContactUsSectionProps {
  specialtyName?: string;
}

export function ContactUsSection({ specialtyName }: ContactUsSectionProps = {}) {
  return (
    <section 
      id="contact-section"
      className="relative py-[80px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYdfWFLXABdJqy8EwRiRbuZJvM1c7EacpaXtMhb1IsRW4Ylkb6KrxIDK_&s=10')`
      }}
    >
      {/* Brand Color Overlay */}
      <div className="absolute inset-0 bg-white/75 bg-gradient-to-r from-[#154377]/10 via-white/70 to-[#98C340]/15 pointer-events-none" />

      <div className="relative z-10 max-w-[1250px] mx-auto px-4 w-full">
        <div className="flex flex-col xl:flex-row items-stretch justify-center relative min-h-[760px]">
          
          {/* Left Dark Box - Stretches top to bottom matching section height */}
          <div className="w-full xl:w-[480px] 2xl:w-[500px] shrink-0 bg-[#1c508a] text-white p-7 sm:p-8 lg:p-10 shadow-2xl z-20 relative flex flex-col justify-between my-0 rounded-[1px] border border-[#235d9e]/30">
            <div>
              <h2 className="text-[28px] leading-tight font-bold font-outfit mb-3 text-white">
                Let's Talk About Your <span className="text-[#98C340]">{specialtyName ? `${specialtyName} ` : ''}Revenue Cycle</span>
              </h2>
              <p className="text-[14px] text-gray-200 mb-6 leading-relaxed">
                {specialtyName 
                  ? `Our certified ${specialtyName} billing specialists are ready to analyze your practice and show you exactly how much revenue you can recover.`
                  : 'Our billing specialists are ready to analyze your practice and show you exactly how much revenue you can recover.'}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 mb-6">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#98C340] shrink-0" />
                  <a href="mailto:info@ascentmb.com" className="text-[14px] text-gray-200 hover:text-white transition-colors">info@ascentmb.com</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#98C340] shrink-0" />
                  <a href="tel:6307013986" className="text-[14px] text-gray-200 hover:text-white transition-colors">630-701-3986</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 bg-[#143d6c] rounded-[1px] overflow-hidden shadow-md border border-white/10 mt-1">
              <div className="h-36 sm:h-40 bg-gray-200 relative overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=400" alt="Map" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-[#98C340] fill-white filter drop-shadow-md" />
                </div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col items-center text-center flex-1 justify-between">
                <div className="pt-2">
                  <span className="inline-block px-3 py-0.5 border border-[#98C340]/60 rounded-full text-[11px] font-semibold text-[#98C340] mb-2">Head Office</span>
                  <h4 className="text-[22px] font-bold text-white mb-1 font-outfit">California</h4>
                  <span className="text-[13px] text-white/90 leading-relaxed block mb-2">
                    California, USA
                  </span>
                </div>
                <div className="flex flex-col gap-2 w-full mt-auto">
                  <button className="w-full bg-[#98C340] hover:bg-[#85ab36] text-[#154377] text-[13px] font-bold py-2 px-4 rounded-full transition-colors shadow-none mb-1.5 cursor-pointer">Get Directions</button>
                  
                  <div className="pt-2 border-t border-white/15 w-full">
                    <p className="text-[11px] text-white/90 mb-2 text-center font-medium">Connect with us through your favourite social media</p>
                    <div className="flex gap-2.5 justify-center">
                      <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-none">
                        <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                      </a>
                      <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-none">
                        <Twitter className="w-3.5 h-3.5 text-[#1DA1F2]" />
                      </a>
                      <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-none">
                        <Instagram className="w-3.5 h-3.5 text-[#E4405F]" />
                      </a>
                      <a href="#" className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-none">
                        <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Box - Reduced height and compact spacing centered vertically */}
          <div className="w-full xl:flex-1 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-2xl rounded-l-[12px] rounded-r-[1px] p-5 sm:p-6 lg:p-7 xl:py-7 xl:pr-8 xl:pl-[270px] 2xl:pl-[300px] xl:-ml-[180px] 2xl:-ml-[200px] relative z-10 flex flex-col justify-center my-6 xl:my-auto self-center">
            <div className="w-full max-w-[490px] mx-auto xl:mx-0 xl:ml-8 2xl:ml-12">
              <h3 className="text-[24px] sm:text-[26px] font-bold text-[#154377] font-outfit mb-1">
                Schedule a Call Back with Our {specialtyName ? `${specialtyName} ` : ''}Billing Team
              </h3>
              <p className="text-gray-500 mb-4 text-[14px]">Feel free to drop us a line below!</p>
              
              <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-[11px] font-bold text-[#8FA4C5] mb-1 uppercase tracking-wider">Full Name*</label>
                    <input 
                      type="text" 
                      placeholder="John Smith" 
                      className="w-full border border-gray-200 rounded-[6px] px-3.5 py-2.5 bg-white shadow-sm focus:outline-none focus:border-[#98C340] focus:ring-1 focus:ring-[#98C340] transition-all text-[#154377] text-[14px] placeholder:text-gray-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-[11px] font-bold text-[#8FA4C5] mb-1 uppercase tracking-wider">Email*</label>
                    <input 
                      type="email" 
                      placeholder="doctor@clinic.com" 
                      className="w-full border border-gray-200 rounded-[6px] px-3.5 py-2.5 bg-white shadow-sm focus:outline-none focus:border-[#98C340] focus:ring-1 focus:ring-[#98C340] transition-all text-[#154377] text-[14px] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <div className="w-full sm:w-1/2">
                    <label className="block text-[11px] font-bold text-[#8FA4C5] mb-1 uppercase tracking-wider">Practice Name*</label>
                    <input 
                      type="text" 
                      placeholder="Your Practice Name" 
                      className="w-full border border-gray-200 rounded-[6px] px-3.5 py-2.5 bg-white shadow-sm focus:outline-none focus:border-[#98C340] focus:ring-1 focus:ring-[#98C340] transition-all text-[#154377] text-[14px] placeholder:text-gray-400"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label className="block text-[11px] font-bold text-[#8FA4C5] mb-1 uppercase tracking-wider">Phone Number*</label>
                    <input 
                      type="tel" 
                      placeholder="Your Phone Number" 
                      className="w-full border border-gray-200 rounded-[6px] px-3.5 py-2.5 bg-white shadow-sm focus:outline-none focus:border-[#98C340] focus:ring-1 focus:ring-[#98C340] transition-all text-[#154377] text-[14px] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#8FA4C5] mb-1 uppercase tracking-wider">Please Select*</label>
                  <div className="relative">
                    <select defaultValue={specialtyName ? "specialty-billing" : ""} className="w-full border border-gray-200 rounded-[6px] px-3.5 py-2.5 bg-white shadow-sm focus:outline-none focus:border-[#98C340] focus:ring-1 focus:ring-[#98C340] transition-all text-gray-400 focus:text-[#154377] text-[14px] appearance-none cursor-pointer">
                      <option value="" disabled>Please Select Specialty</option>
                      {specialtyName && (
                        <option value="specialty-billing" className="text-[#154377]">{specialtyName} Billing & Coding</option>
                      )}
                      <option value="medical-billing" className="text-[#154377]">Medical Billing</option>
                      <option value="medical-coding" className="text-[#154377]">Medical Coding</option>
                      <option value="credentialing" className="text-[#154377]">Credentialing</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#8FA4C5] mb-1 uppercase tracking-wider">Message*</label>
                  <textarea 
                    placeholder={specialtyName ? `Tell us about your ${specialtyName.toLowerCase()} billing challenges...` : "Tell us about your billing challenges..."}
                    rows={2}
                    className="w-full border border-gray-200 rounded-[6px] px-3.5 py-2 bg-white shadow-sm focus:outline-none focus:border-[#98C340] focus:ring-1 focus:ring-[#98C340] transition-all text-[#154377] text-[14px] placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2.5 my-1.5 p-2.5 bg-yellow-50/50 rounded-[6px] border border-yellow-100/50">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    By providing your phone number to Ascent Medical Billing, you agree and acknowledge that Ascent Medical Billing may send text messages to your wireless phone number for any purpose.
                  </p>
                </div>
                
                <div className="flex justify-center w-full pt-1">
                  <button 
                    type="submit" 
                    className="w-fit bg-[#98C340] hover:bg-[#85ab36] text-white px-9 py-2.5 rounded-[6px] font-bold transition-colors shadow-none tracking-wide text-[15px] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="opacity-70 text-[12px]">»</span> Let's Get Digital Now <span className="opacity-70 text-[12px]">«</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
