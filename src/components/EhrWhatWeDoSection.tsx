import React from 'react';
import { 
  FileText, 
  ShieldCheck, 
  Cpu, 
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhatWeDoCard {
  id: string;
  title: string;
  description: string;
  image: string;
  glowIcon: React.ReactNode;
  accentColor: string;
}

const whatWeDoCards: WhatWeDoCard[] = [
  {
    id: 'fast-claim-submission',
    title: 'Fast Claim Submission',
    description: 'Your claims are sent to the payers within 24 hours.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    accentColor: '#38bdf8',
    glowIcon: (
      <div className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-[#0e274a]/85 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.4)]">
        <FileText className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <div className="absolute -bottom-1 -right-1 bg-cyan-400 text-[#091b33] rounded-full p-0.5">
          <CheckCircle2 className="w-4 h-4 stroke-[3]" />
        </div>
      </div>
    )
  },
  {
    id: 'instant-eligibility-check',
    title: 'Instant Eligibility Check',
    description: "Advanced algorithms verify the patient's insurance coverage in a few seconds.",
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    accentColor: '#98C340',
    glowIcon: (
      <div className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-[#0e274a]/85 border border-[#98C340]/50 backdrop-blur-md shadow-[0_0_25px_rgba(152,195,64,0.4)]">
        <ShieldCheck className="w-10 h-10 text-[#98C340] drop-shadow-[0_0_10px_rgba(152,195,64,0.8)]" />
        <div className="absolute -top-1 -right-1 bg-[#98C340] text-white rounded-full p-0.5">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  },
  {
    id: 'seamless-integration',
    title: 'Seamless Integration',
    description: 'Compatible with all medical billing systems.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    accentColor: '#818cf8',
    glowIcon: (
      <div className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-[#0e274a]/85 border border-indigo-400/40 backdrop-blur-md shadow-[0_0_25px_rgba(129,140,248,0.4)]">
        <Cpu className="w-10 h-10 text-indigo-300 drop-shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
        <div className="absolute -bottom-1 -left-1 bg-indigo-400 text-white rounded-full p-0.5">
          <CheckCircle2 className="w-4 h-4 stroke-[3]" />
        </div>
      </div>
    )
  },
  {
    id: 'claim-quality-control',
    title: 'Claim Quality Control',
    description: 'Our software performs the QC of claims to prevent possible denials.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    accentColor: '#38bdf8',
    glowIcon: (
      <div className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-[#0e274a]/85 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.4)]">
        <Award className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        <div className="absolute -top-1 -left-1 bg-cyan-400 text-[#091b33] rounded-full p-0.5">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>
    )
  }
];

interface EhrWhatWeDoSectionProps {
  onBookCall?: () => void;
}

export function EhrWhatWeDoSection({ onBookCall }: EhrWhatWeDoSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFCFF]">
      
      {/* Top Banner with Dark Indigo/Navy Background matching screenshot */}
      <div className="w-full bg-[#154377] pt-16 sm:pt-20 pb-36 lg:pb-44 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        
        {/* Subtle Decorative Ambient Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#98C340]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Eyebrow Label: Medical EDI Solutions */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-white/90 text-xs sm:text-[13px] font-semibold uppercase tracking-wider mb-4 border border-white/15 backdrop-blur-sm shadow-xs">
            <span>Medical EDI Solutions</span>
          </div>

          {/* Headline exactly matching screenshot text and style */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white font-outfit leading-tight tracking-tight mb-5">
            Clear the way for Better Healthcare with our Clearinghouse Solutions.
          </h2>

          {/* Subtitle paragraph matching screenshot copy */}
          <p className="text-slate-200 text-[14px] sm:text-[15.5px] leading-relaxed max-w-3xl mx-auto font-normal">
            If you&apos;re sick and tired of dealing with messy healthcare bills and claims, you need a dose of our clearinghouse solutions. From checking your patients&apos; coverage to getting paid faster, our medical clearinghouse software does it all. Try FusionEDI today and see the difference!
          </p>

        </div>
      </div>

      {/* 4 Cards Floating / Overlapping Grid matching screenshot */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 lg:-mt-32 relative z-20 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDoCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100/90 overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Card Image with Holographic Glow Badge matching screenshot */}
              <div className="relative h-[190px] w-full overflow-hidden bg-slate-900 shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                  loading="lazy"
                />
                
                {/* Tech Dark Navy Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d223d]/90 via-[#0d223d]/45 to-transparent pointer-events-none" />

                {/* Floating Holographic Glow Icon in center */}
                <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {card.glowIcon}
                  </div>
                </div>
              </div>

              {/* Card Body: Title & Paragraph */}
              <div className="p-6 flex flex-col items-center justify-between flex-1 text-center bg-white">
                <div>
                  <h3 className="text-[17px] font-bold text-[#154377] font-outfit mb-2.5 leading-snug group-hover:text-[#98C340] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {onBookCall && (
                  <button
                    onClick={onBookCall}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#154377] group-hover:text-[#98C340] transition-colors cursor-pointer pt-2 border-t border-gray-100 w-full justify-center"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default EhrWhatWeDoSection;
