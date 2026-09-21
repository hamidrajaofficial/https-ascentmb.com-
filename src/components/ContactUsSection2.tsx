import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export function ContactUsSection2() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#8A7BFF] to-[#6355D8] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#4B3DB5]/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16 flex flex-col md:flex-row gap-16 relative">
          
          {/* Decorative Edge Shapes to mimic the image */}
          <div className="absolute top-24 -left-8 w-16 h-12 bg-white rounded-l-full hidden xl:block"></div>
          <div className="absolute top-48 -left-12 w-24 h-10 bg-white rounded-l-full hidden xl:block"></div>
          <div className="absolute bottom-32 -left-10 w-20 h-14 bg-white rounded-l-full hidden xl:block"></div>
          
          <div className="absolute top-16 -right-10 w-20 h-10 bg-white rounded-r-full hidden xl:block"></div>
          <div className="absolute top-40 -right-16 w-32 h-14 bg-white rounded-r-full hidden xl:block"></div>
          <div className="absolute bottom-24 -right-12 w-24 h-12 bg-white rounded-r-full hidden xl:block"></div>

          {/* Left Form Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[42px] font-semibold text-[#154377] font-outfit mb-4">
              Let's <span className="text-[#98C340]">Talk</span>
            </h2>
            <p className="text-gray-500 mb-8 text-[15px] leading-relaxed max-w-[400px]">
              To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-[#F5F6FA] placeholder:text-[#A0AABF] text-[#5143C2] font-medium border-none rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#8A7BFF] transition-all text-[15px]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-[#F5F6FA] placeholder:text-[#A0AABF] text-[#5143C2] font-medium border-none rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#8A7BFF] transition-all text-[15px]"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Type something if you want..."
                  rows={5}
                  className="w-full bg-[#F5F6FA] placeholder:text-[#A0AABF] text-[#5143C2] font-medium border-none rounded-[24px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#8A7BFF] transition-all text-[15px] resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#8A7BFF] to-[#6355D8] hover:from-[#7667eb] hover:to-[#5042c4] text-white px-10 py-4 rounded-full font-medium transition-all shadow-[0_10px_20px_rgba(99,85,216,0.3)] mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Info Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center pt-8 md:pt-0">
            {/* Illustration Placeholder */}
            <div className="w-full max-w-[350px] aspect-square relative mb-10 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=600&h=600" 
                alt="Contact Illustration" 
                className="w-full h-full object-contain rounded-full opacity-0"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-48 h-48 bg-[#F0EEFF] rounded-full flex items-center justify-center relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#8A7BFF] rounded-xl flex items-center justify-center shadow-lg transform -rotate-12">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute -top-2 right-4 w-10 h-10 bg-[#00D2FF] rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                    </div>
                    <div className="absolute top-10 -right-8 w-12 h-12 bg-[#8A7BFF] transform rotate-45 flex items-center justify-center">
                       <svg className="w-6 h-6 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </div>
                    {/* Envelope Base */}
                    <div className="w-28 h-20 bg-[#6355D8] rounded-lg relative overflow-hidden flex items-end justify-center z-10 mt-10">
                       <div className="absolute top-0 w-0 h-0 border-l-[56px] border-r-[56px] border-t-[40px] border-l-transparent border-r-transparent border-t-[#8A7BFF]"></div>
                    </div>
                    {/* Letter inside */}
                    <div className="absolute top-8 w-24 h-28 bg-white rounded shadow-sm z-0 flex flex-col p-3 gap-2">
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                      <div className="w-4/5 h-2 bg-gray-200 rounded"></div>
                      <div className="w-full h-2 bg-gray-200 rounded"></div>
                      <div className="w-3/5 h-2 bg-gray-200 rounded"></div>
                    </div>

                    {/* Small decorations */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-2 border-yellow-400 rounded-full"></div>
                    <div className="absolute bottom-4 right-10 w-4 h-4 border-2 border-[#00D2FF] rounded-full"></div>
                    <div className="absolute top-1/2 -left-6 w-3 h-3 bg-[#8A7BFF] rounded-full"></div>
                    <div className="absolute bottom-0 -left-2 w-8 h-2 bg-pink-400 rounded-full transform rotate-45"></div>
                 </div>
              </div>
            </div>

            <div className="space-y-6 text-[#7E8BA0] w-full max-w-[350px] mx-auto md:ml-0 pl-4 md:pl-0">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#8A7BFF]" />
                <p className="text-[14px]">
                  California, USA
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 shrink-0 text-[#8A7BFF]" />
                <a href="tel:6307013986" className="text-[14px] hover:underline">630-701-3986</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 shrink-0 text-[#8A7BFF]" />
                <a href="mailto:info@ascentmb.com" className="text-[14px] hover:underline">info@ascentmb.com</a>
              </div>
            </div>

            <div className="flex gap-4 mt-10 justify-center md:justify-start w-full max-w-[350px] mx-auto md:ml-0 pl-4 md:pl-0">
              <a href="#" className="w-10 h-10 rounded-full bg-[#5C79FF] flex items-center justify-center hover:bg-[#4a66e5] transition-colors text-white">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#00D2FF] flex items-center justify-center hover:bg-[#00bcee] transition-colors text-white">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFC107] via-[#F44336] to-[#9C27B0] flex items-center justify-center hover:opacity-90 transition-opacity text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
