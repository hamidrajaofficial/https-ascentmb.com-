import React, { useState } from 'react';
import { Check, CheckCircle2 } from 'lucide-react';

interface SoundFamiliarSectionProps {
  specialtyName?: string;
  className?: string;
}

export function SoundFamiliarSection({ 
  className = "" 
}: SoundFamiliarSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const problems = [
    "Claims and payments slip through the cracks",
    "AR keeps aging and nobody has a clear view of it",
    "Patient balances pile up and start to hurt cash flow",
    "You can't tell what's happening week to week in your reports",
    "Collections are sliding and you're not sure why"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section 
      id="sound-familiar-section"
      className={`relative w-full bg-white pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 border-b border-gray-100 ${className}`}
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Subtitle & 5 Problems - Starts at Top */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            
            {/* Category Eyebrow Pill */}
            <div>
              <span className="text-xs font-bold text-[#154377] bg-[#154377]/10 border border-[#154377]/20 px-3.5 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                COMMON CHALLENGES
              </span>
            </div>

            {/* Main Heading (SemiBold 600 Outfit with Brand Dual-Color) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#154377] font-outfit tracking-tight leading-[1.2]">
              <span className="block">Sound Familiar? Five Problems We</span>
              <span className="block mt-1 text-[#98C340]">
                Fix Every Week.
              </span>
            </h2>

            {/* Subtitle Description */}
            <p className="mt-5 text-[#556987] text-base sm:text-[17px] leading-relaxed max-w-xl font-normal">
              These are the issues we hear about in nearly every first call with a new practice. You don't 
              need new software to fix them. You need cleaner work, a dedicated account manager, and 
              consistent follow-up.
            </p>

            {/* 5 Checklist Items */}
            <div className="mt-8 space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3.5 group">
                  <div className="w-5 h-5 rounded-[4px] bg-[#98C340] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs transition-transform group-hover:scale-105">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 text-[15px] sm:text-[16px] font-medium leading-normal">
                    {problem}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: "Let's Get Started" Form Card - Starts at Equal Height */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-start">
            <div 
              id="consultation-form"
              className="w-full max-w-[480px] bg-white rounded-2xl border border-gray-200/90 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-9 transition-all"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-[26px] font-semibold font-outfit text-[#154377] tracking-tight">
                  Let's Get <span className="text-[#98C340]">Started</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] mt-1.5 leading-normal">
                  Share your details below, and our team will get back to you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#98C340]" />
                  <h4 className="text-lg font-bold text-[#154377]">Thank You!</h4>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Your details have been received. One of our senior billing specialists will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label 
                      htmlFor="client-name" 
                      className="block text-sm font-semibold text-[#154377] mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#98C340] focus:ring-2 focus:ring-[#98C340]/20 outline-none transition text-gray-800 text-sm placeholder-gray-400 bg-white"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="client-email" 
                      className="block text-sm font-semibold text-[#154377] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#98C340] focus:ring-2 focus:ring-[#98C340]/20 outline-none transition text-gray-800 text-sm placeholder-gray-400 bg-white"
                      placeholder=""
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="client-message" 
                      className="block text-sm font-semibold text-[#154377] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="client-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-[#98C340] focus:ring-2 focus:ring-[#98C340]/20 outline-none transition text-gray-800 text-sm placeholder-gray-400 bg-white resize-none"
                      placeholder=""
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#98C340] hover:bg-[#85ab36] text-white font-bold text-base transition-colors duration-200 shadow-sm hover:shadow cursor-pointer active:scale-[0.99] disabled:opacity-70 mt-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
