import { Activity, TrendingUp, Clock, Heart, Award, CheckCircle2, Users, Network, BarChart } from 'lucide-react';

export function PartnerSection() {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          {/* Left Side - Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4f9eb] border border-[#98C340]/30 text-[#154377] mb-6">
              <Award className="w-4 h-4 text-[#98C340]" />
              <span className="text-[14px] font-medium">No. 1 Trusted Revenue Cycle Billing Partner</span>
            </div>

            <h2 className="text-[36px] md:text-[42px] font-bold text-[#154377] font-outfit leading-tight mb-6">
              More Than a Medical Billing Company. <span className="text-[#98C340]">A Partner in Revenue Growth</span>
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed text-[16px]">
              Ascent Medical Billing follows a modern 2026 billing approach, unlike traditional billing companies that still rely on outdated 1990s methods centered on claim volume instead of payment outcomes. We work on a different approach. We don't emphasize the number of claims, instead, we make sure that each claim we submit gets paid and avoids all errors.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8F3FD] flex items-center justify-center shrink-0 mt-1">
                  <Activity className="w-5 h-5 text-[#154377]" />
                </div>
                <p className="text-gray-700 text-[15px] pt-1">
                  Proactive approach assisted with AI to verify that every claim goes out without gaps.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f4f9eb] flex items-center justify-center shrink-0 mt-1">
                  <Users className="w-5 h-5 text-[#98C340]" />
                </div>
                <p className="text-gray-700 text-[15px] pt-1">
                  Specialty-specific RCM experts assigned that align well with your practice.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F0EEFF] flex items-center justify-center shrink-0 mt-1">
                  <Network className="w-5 h-5 text-[#5143C2]" />
                </div>
                <p className="text-gray-700 text-[15px] pt-1">
                  Hassle-free integration with your existing EHR/EMR system, no delays.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFEBF0] flex items-center justify-center shrink-0 mt-1">
                  <BarChart className="w-5 h-5 text-[#FF5F8E]" />
                </div>
                <p className="text-gray-700 text-[15px] pt-1">
                  Every month, a real-time analytics dashboard with transparent reporting is shared.
                </p>
              </div>
            </div>

            <button className="bg-[#154377] hover:bg-[#0f3259] text-white px-8 py-4 rounded-[8px] font-bold hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              Schedule a Free Audit
            </button>
          </div>

          {/* Right Side - Dashboard Graphic */}
          <div className="w-full lg:w-1/2">
            <div className="text-[#154377] w-full py-4">
              <h3 className="text-[18px] font-bold text-[#154377] mb-12">Activity Overview</h3>
              
              <div className="flex justify-between items-end mb-20 gap-2">
                <div className="text-center flex-1">
                  <p className="text-[10px] sm:text-[12px] text-gray-500 mb-2 uppercase tracking-wider h-8 flex items-center justify-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#FF8C42]"></span>Recovered denial claims</p>
                  <h4 className="text-[24px] sm:text-[32px] font-bold text-[#154377]">$110k</h4>
                  <p className="text-[11px] sm:text-[12px] text-gray-400 mt-1">40 days</p>
                </div>
                
                <div className="text-center flex-1 bg-gradient-to-br from-[#154377] to-[#1c5391] rounded-[16px] p-4 shadow-[0_10px_30px_rgba(21,67,119,0.3)] transform -translate-y-4">
                  <p className="text-[10px] sm:text-[12px] text-white/90 mb-2 uppercase tracking-wider font-medium h-8 flex items-center justify-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white"></span>Reduce revenue leakage</p>
                  <h4 className="text-[24px] sm:text-[32px] font-bold text-white">23%</h4>
                  <p className="text-[11px] sm:text-[12px] text-white/80 mt-1">30 days</p>
                </div>
                
                <div className="text-center flex-1">
                  <p className="text-[10px] sm:text-[12px] text-gray-500 mb-2 uppercase tracking-wider h-8 flex items-center justify-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#98C340]"></span>Revenue growth</p>
                  <h4 className="text-[24px] sm:text-[32px] font-bold text-[#154377]">41%</h4>
                  <p className="text-[11px] sm:text-[12px] text-gray-400 mt-1">in 90 days</p>
                </div>
              </div>

              {/* Line Chart SVG Mockup */}
              <div className="relative h-[220px] w-full border-b border-l border-gray-200 ml-8 pb-2">
                {/* Y Axis Labels */}
                <div className="absolute -left-10 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-400 pb-2 text-right w-8">
                  <span>120k</span>
                  <span>90k</span>
                  <span>60k</span>
                  <span>30k</span>
                  <span>0</span>
                </div>
                
                {/* X Axis Labels */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-gray-400 px-2">
                  <span>0 Days</span>
                  <span>30 Days</span>
                  <span>60 Days</span>
                  <span>90 Days</span>
                </div>

                {/* The Line */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible pt-4">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#154377" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#154377" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Line 1 - Recovered Claims (Orange) */}
                  <polyline 
                    points="0,85 10,80 20,70 30,75 40,55 50,45 60,50 70,30 80,25 90,30 100,10" 
                    fill="none" 
                    stroke="#FF8C42" 
                    strokeWidth="2.5" 
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Line 3 - Revenue Growth (Green) */}
                  <polyline 
                    points="0,95 15,90 30,85 45,65 60,60 75,40 90,30 100,15" 
                    fill="none" 
                    stroke="#98C340" 
                    strokeWidth="2.5" 
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <polygon 
                    points="0,100 0,90 10,85 20,60 30,70 40,50 50,45 60,30 70,35 80,15 90,20 100,5 100,100" 
                    fill="url(#lineGradient)" 
                  />
                  <polyline 
                    points="0,90 10,85 20,60 30,70 40,50 50,45 60,30 70,35 80,15 90,20 100,5" 
                    fill="none" 
                    stroke="#154377" 
                    strokeWidth="3" 
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
