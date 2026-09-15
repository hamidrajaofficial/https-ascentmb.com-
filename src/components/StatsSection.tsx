import React from 'react';

export interface StatItem {
  value: string;
  unit?: string;
  label: React.ReactNode;
}

export interface TrustBadge {
  src: string;
  alt: string;
}

export interface StatsSectionProps {
  title?: string;
  description?: string;
  stats?: StatItem[];
  badgesTitle?: string;
  badges?: TrustBadge[];
  className?: string;
}

const defaultStats: StatItem[] = [
  { value: '25', unit: 'Days', label: 'Rapid Revenue Recovery' },
  { value: '2', unit: '%', label: 'Rejections' },
  { value: '98', unit: '%', label: 'Electronic Payment' },
  { value: '100', unit: '%', label: 'Client Retention' },
];

const defaultBadges: TrustBadge[] = [
  { src: "https://bellmedex.com/wp-content/uploads/2023/11/google-rating.svg", alt: "Google Rating" },
  { src: "https://hcmsus.com/assets/img/badge-pilot.svg", alt: "Trustpilot Rating" },
  { src: "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/clutch-logo.webp", alt: "Clutch Rating" },
  { src: "https://starbillingsolutions.com/wp-content/themes/sbs/assets/images/goodfirms-logo.webp", alt: "Goodfirms Rating" },
];

export function StatsSection({
  title = "Transform your financial performance",
  description = "With up to 98% fewer denials, 30% increased revenue within 60 days, and 45% savings in operational expenses.",
  stats = defaultStats,
  badgesTitle = "Find us on:",
  badges = defaultBadges,
  className = "relative w-full z-20 flex justify-center px-4 -mt-[130px] -mb-[80px] lg:-mb-[120px] pointer-events-none",
}: StatsSectionProps) {
  return (
    <section className={className}>
      <div className="w-full max-w-[1250px] flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch pointer-events-auto">
        
        {/* Left Info Area */}
        <div className="w-full md:w-[260px] lg:w-[285px] bg-[#154377] text-white rounded-xl shadow-xl flex flex-col justify-center px-5 py-4">
          <h3 className="text-[19px] lg:text-[20px] font-bold mb-1.5 leading-snug">{title}</h3>
          <p className="text-[13px] text-blue-50 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Stats Area */}
        <div className="flex-1 bg-white px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center justify-between gap-2.5 sm:gap-3 relative">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 items-stretch">
            {stats.map((item, idx) => (
              <div key={idx} className="flex-1 px-1 sm:px-2 py-1.5 sm:py-1 flex flex-col items-center justify-start text-center h-full">
                <div className="h-9 sm:h-10 flex items-baseline justify-center gap-1 mb-1">
                  <span className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#98C340] font-outfit leading-none">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="text-sm sm:text-base lg:text-[17px] font-semibold text-[#98C340]">
                      {item.unit}
                    </span>
                  )}
                </div>
                <h4 className="text-[12px] sm:text-[12.5px] md:text-[13px] lg:text-[14px] font-medium font-outfit text-[#154377] leading-tight whitespace-nowrap tracking-tight">
                  {item.label}
                </h4>
              </div>
            ))}
          </div>
          
          <div className="w-full flex flex-col items-start justify-center pt-1 px-1">
            <span className="font-bold text-[#154377] mb-1.5 text-[13px] sm:text-[14px] uppercase tracking-wide">
              {badgesTitle}
            </span>
            <div className="flex flex-row items-center justify-between w-full gap-2">
              {badges.map((badge, bIdx) => (
                <img 
                  key={bIdx}
                  src={badge.src} 
                  alt={badge.alt} 
                  className="w-[125px] sm:w-[135px] h-[36px] sm:h-[40px] object-contain min-w-0"
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

