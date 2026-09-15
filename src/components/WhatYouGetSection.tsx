import React from 'react';
import { ShieldCheck, Layers, Power, Rocket, Users, BarChart2, RefreshCw, TrendingUp, Activity } from 'lucide-react';

export function WhatYouGetSection() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 auto-rows-[auto] gap-3">
          
          {/* Text Area */}
          <div className="md:col-span-3 lg:col-span-2 lg:row-span-2 pr-6 md:pr-10 lg:pr-12 pt-0 pb-8 flex flex-col justify-start">
            {/* Eyebrow */}
            <div className="flex flex-col items-start mb-5">
               <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
                 <TrendingUp className="w-4 h-4 mr-2 text-[#98C340]" />
                 What You Will Get
               </div>
               <div className="w-12 h-[2px] bg-[#98C340]"></div>
            </div>
            
            <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight">
              Benefits of Our <span className="text-[#98C340]">Medical Billing Services</span> Company
            </h2>
            
            <div className="space-y-6 text-gray-500 font-normal leading-relaxed text-[17px]">
              <p>
                Indeed, choosing the right healthcare practice management services can make a world of difference for healthcare practitioners. Here are some key advantages for working with our medical billing service provider:
              </p>
            </div>
          </div>

          {/* Apps - Square */}
          <div className="bg-[#98C340] border border-[#98C340] rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(152,195,64,0.3)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                 <Layers size={22} strokeWidth={2} className="text-[#98C340]" />
              </div>
              <h3 className="text-[20px] font-bold">Software</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              Advanced medical billing software that integrates directly with your EHR for seamless claims processing.
            </p>
          </div>

          {/* Safe - Rectangle */}
          <div className="md:col-span-2 bg-[#154377] border border-white/10 rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-lg duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                <ShieldCheck size={22} strokeWidth={2} className="text-[#154377]" />
              </div>
              <h3 className="text-[20px] font-bold">Secure</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              Unleash the full potential of your practice with HIPAA-compliant data security and protected patient information across your organization.
            </p>
          </div>

          {/* Onboarding - Rectangle */}
          <div className="md:col-span-2 bg-[#1d538f] border border-[#1d538f] rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(29,83,143,0.25)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                 <Power size={22} strokeWidth={2} className="text-[#1d538f]" />
              </div>
              <h3 className="text-[20px] font-bold">Fast Onboarding</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              Our purpose is to unleash the potential of medical practices seamlessly. Be up and running fast with our dedicated transition teams.
            </p>
          </div>

          {/* Tech - Square */}
          <div className="bg-[#0e2c50] border border-gray-300 rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(14,44,80,0.25)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                <Rocket size={22} strokeWidth={2} className="text-[#0e2c50]" />
              </div>
              <h3 className="text-[20px] font-bold">Technology</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              Leverage AI-driven technology to reduce denials, accelerate billing cycles, and optimize revenue generation.
            </p>
          </div>

          {/* Social / Support - Square */}
          <div className="bg-[#85ab36] border border-gray-300 rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(133,171,54,0.25)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                <Users size={22} strokeWidth={2} className="text-[#85ab36]" />
              </div>
              <h3 className="text-[20px] font-bold">Support</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              24/7 dedicated support from certified billing experts to address your queries and resolve issues fast.
            </p>
          </div>

          {/* Miner / Analytics - Rectangle */}
          <div className="md:col-span-2 bg-[#154377] border border-gray-300 rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(21,67,119,0.25)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                 <BarChart2 size={22} strokeWidth={2} className="text-[#154377]" />
              </div>
              <h3 className="text-[20px] font-bold">Advanced Analytics</h3>
            </div>
            <p className="text-[14px] opacity-80 leading-snug">
              One of the toughest parts of managing revenue is visibility. Gain insights into your financial health with interactive custom dashboards.
            </p>
          </div>

          {/* Exchanges / Network - Square */}
          <div className="bg-[#245899] border border-gray-300 rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(36,88,153,0.25)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                <RefreshCw size={22} strokeWidth={2} className="text-[#245899]" />
              </div>
              <h3 className="text-[20px] font-bold">Network</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              Connect with a vast network of payers and providers for faster credentialing and seamless reimbursements.
            </p>
          </div>

          {/* About / Growth - Square */}
          <div className="bg-[#98C340] border border-gray-300 rounded-[5px] text-white p-[25px] flex flex-col justify-start text-left transition-transform hover:-translate-y-1 shadow-[2px_0px_10px_0px_rgba(152,195,64,0.25)] duration-300 h-full">
            <div className="flex items-center mb-3">
              <div className="w-[40px] h-[40px] bg-white rounded-[8px] flex items-center justify-center mr-3 flex-shrink-0 shadow-sm">
                <TrendingUp size={22} strokeWidth={2} className="text-[#98C340]" />
              </div>
              <h3 className="text-[20px] font-bold">Growth</h3>
            </div>
            <p className="text-[14px] opacity-90 leading-snug">
              Scale your practice confidently with data-driven insights, optimized coding, and strategic financial planning.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
