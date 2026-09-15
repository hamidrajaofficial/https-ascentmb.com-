import React from 'react';
import { User, Users, Building, Landmark, Headset, LucideIcon } from 'lucide-react';

export interface PackageItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface VirtualAssistantPackagesSectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  packages?: PackageItem[];
  className?: string;
}

export function VirtualAssistantPackagesSection({
  eyebrow = "Perfect Match For Every Practice",
  title,
  subtitle = "We provide affordable virtual healthcare assistants specialized in managing administrative tasks from scheduling to billing, reducing overhead with scalable support.",
  packages: customPackages,
  className = ""
}: VirtualAssistantPackagesSectionProps) {
  const defaultPackages: PackageItem[] = [
    {
      icon: User,
      title: 'Solo Practices',
      description: 'Focus on your patients while we handle every administrative detail, from answering calls to filing claims.',
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Scale your operations without the overhead of additional in-house staff or office space requirements.',
    },
    {
      icon: Building,
      title: 'Large Clinics',
      description: 'Streamline high-volume workflows with dedicated assistants who integrate seamlessly into your existing team.',
    },
    {
      icon: Landmark,
      title: 'Health Systems',
      description: 'Customized enterprise solutions designed to reduce system-wide administrative burden and optimize revenue.',
    },
  ];

  const packages = customPackages && customPackages.length > 0 ? customPackages : defaultPackages;

  return (
    <section 
      className={`relative py-[80px] bg-cover bg-center bg-no-repeat overflow-hidden ${className}`}
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYdfWFLXABdJqy8EwRiRbuZJvM1c7EacpaXtMhb1IsRW4Ylkb6KrxIDK_&s=10')`
      }}
    >
      {/* Brand Color Overlay */}
      <div className="absolute inset-0 bg-white/75 bg-gradient-to-r from-[#154377]/10 via-white/70 to-[#98C340]/15 pointer-events-none" />

      <div className="relative z-10 max-w-[1250px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Eyebrow */}
          <div className="flex flex-col items-center mb-5">
             <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
               <Headset className="w-4 h-4 mr-2 text-[#98C340]" />
               {eyebrow}
             </div>
             <div className="w-12 h-[2px] bg-[#98C340]"></div>
          </div>
          
          <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold font-outfit text-[#154377] mb-6 leading-[1.1] tracking-tight">
            {title ? title : (
              <>Superior Healthcare <span className="text-[#98C340]">Virtual Assistant Packages</span> for Every Organization</>
            )}
          </h2>
          
          <p className="text-gray-500 font-normal leading-relaxed text-[17px] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-start text-left bg-white/90 backdrop-blur-sm p-6 rounded-[16px] border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[50px] h-[50px] rounded-[10px] bg-[#f4f9eb] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#98C340]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#154377] text-[20px] font-bold font-outfit">
                    {pkg.title}
                  </h3>
                </div>
                <p className="text-[#4b5563] text-[15px] leading-[1.6]">
                  {pkg.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
