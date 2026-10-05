import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowRight, 
  Filter, 
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';

// Dual-Color Vector Outline Icons matching the brand color palette (#154377 Navy & #98C340 Accent Lime Green)
export const DualColorSpecialtyIcons = {
  Cardiology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 29s-12-7.5-12-15a6 6 0 0 1 12-2 6 6 0 0 1 12 2c0 7.5-12 15-12 15z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M4 18h7l2-5 3 10 3-7 2 2h11" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  Dermatology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M11 6c2.5 5 3.5 10 4.5 14" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M19 4c-1 5.5-2 10.5-3 16" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 21c4-1 8 1 12 0s8-1 12 0 3 .8 4 1" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="8" cy="26" r="1.3" fill="#98C340" />
      <circle cx="13" cy="28" r="1.3" fill="#98C340" />
      <circle cx="19" cy="27" r="1.3" fill="#98C340" />
      <circle cx="25" cy="29" r="1.3" fill="#98C340" />
      <circle cx="29" cy="26" r="1.3" fill="#98C340" />
      <path d="M4 31h28" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="1 3" />
    </svg>
  ),

  MentalHealth: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M12 30v-4c0-2 2-3 4-3h1a9 9 0 0 0 9-9 9 9 0 0 0-14-7.4A9 9 0 0 0 8 15c0 4 2 6 4 8" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 13c-1.2-1.5-3-.5-3 1 0 1.8 3 4 3 4s3-2.2 3-4c0-1.5-1.8-2.5-3-1z" stroke="#98C340" fill="#98C340" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),

  InternalMedicine: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M9 4v7a6 6 0 0 0 12 0V4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 17v5a5 5 0 0 0 10 0v-4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="25" cy="15" r="3.5" stroke="#98C340" strokeWidth="2.2" />
      <circle cx="9" cy="4" r="1.5" fill="#154377" />
      <circle cx="21" cy="4" r="1.5" fill="#154377" />
    </svg>
  ),

  FamilyMedicine: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="13" cy="10" r="4" stroke="#154377" strokeWidth="2" />
      <path d="M6 25v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="12" r="3" stroke="#154377" strokeWidth="2" />
      <path d="M20 25v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 19v6M15 22h6" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  Orthopedic: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M8 8a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28 8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M12 18h12" stroke="#154377" strokeWidth="2.2" />
      <circle cx="18" cy="18" r="3.5" stroke="#98C340" strokeWidth="2" fill="#98C340" fillOpacity="0.15" />
      <path d="M18 13v10" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  PhysicalTherapy: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="8" r="3" stroke="#154377" strokeWidth="2.2" />
      <path d="M14 17l4-3 4 3-2 6 4 6M16 23l-3 6" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 15a13 13 0 0 0 0 8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28 15a13 13 0 0 1 0 8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  Podiatry: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M10 8c1 4 2 8 2 12 0 5 4 8 9 8h4c2 0 3-2 3-4 0-4-3-6-6-6-2 0-3-1-3-3V8" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <rect x="18" y="16" width="12" height="15" rx="2" fill="white" stroke="#154377" strokeWidth="1.8" />
      <path d="M21 16v-2h6v2" stroke="#154377" strokeWidth="1.5" />
      <path d="M24 21v5M21.5 23.5h5" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Gastroenterology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M15 5v5c0 4-4 6-6 10-2 5 1 11 7 11 8 0 12-6 12-13 0-5-3-8-8-8h-2" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 12c3 2 5 5 5 9 0 3-2 6-5 6" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  UrgentCare: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <rect x="5" y="7" width="26" height="22" rx="5" stroke="#154377" strokeWidth="2.2" />
      <path d="M18 12v12M12 18h12" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M15 15l6 6M21 15l-6 6" stroke="#98C340" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="18" cy="18" r="4.5" stroke="#98C340" strokeWidth="1.5" />
    </svg>
  ),

  ASC: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M6 30V12l12-7 12 7v18" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 30v-7h8v7" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 10v6M15 13h6" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="10" cy="19" r="1.5" fill="#154377" />
      <circle cx="26" cy="19" r="1.5" fill="#154377" />
    </svg>
  ),

  Laboratory: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M12 6l8 10M10 8l2-2 7 6-2 2" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 16c3 1 7 4 7 8a5 5 0 0 1-5 5H10" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6 31h20" stroke="#154377" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="17" cy="22" r="1.5" fill="#98C340" />
      <path d="M10 24h6" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Pathology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="12" stroke="#154377" strokeWidth="2.2" />
      <circle cx="15" cy="15" r="3" stroke="#98C340" strokeWidth="2" fill="#98C340" fillOpacity="0.2" />
      <circle cx="22" cy="17" r="2" fill="#98C340" />
      <circle cx="17" cy="23" r="2.5" stroke="#154377" strokeWidth="1.8" />
      <path d="M18 6v2M18 28v2M6 18h2M28 18h2" stroke="#98C340" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  Radiology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="4" stroke="#98C340" strokeWidth="2.2" fill="#98C340" fillOpacity="0.2" />
      <path d="M18 6v5M18 25v5M6 18h5M25 18h5" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9.5 9.5l3.5 3.5M23 23l3.5 3.5M9.5 26.5l3.5-3.5M23 13l3.5-3.5" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  OBGYN: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="15" cy="11" r="4" stroke="#154377" strokeWidth="2.2" />
      <path d="M8 29v-5a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v5" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="23" cy="22" r="3" stroke="#98C340" strokeWidth="2" />
      <path d="M22 25c1 1.5 3 2 4.5 1.5" stroke="#98C340" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 15c1-1 3-1 4 0s1 3 0 4l-2 2-2-2c-1-1-1-3 0-4z" fill="#98C340" />
    </svg>
  ),

  Pediatric: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="13" r="6" stroke="#154377" strokeWidth="2.2" />
      <circle cx="15.5" cy="12" r="1.2" fill="#154377" />
      <circle cx="20.5" cy="12" r="1.2" fill="#154377" />
      <path d="M15.5 16c1 1 4 1 5 0" stroke="#98C340" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 29v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="26" cy="10" r="1.5" fill="#98C340" />
      <circle cx="9" cy="11" r="1.5" fill="#98C340" />
    </svg>
  ),

  Chiropractic: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <rect x="13" y="6" width="10" height="4" rx="2" stroke="#154377" strokeWidth="2" />
      <rect x="11" y="13" width="14" height="4" rx="2" stroke="#154377" strokeWidth="2" />
      <rect x="12" y="20" width="12" height="4" rx="2" stroke="#154377" strokeWidth="2" />
      <rect x="14" y="27" width="8" height="4" rx="2" stroke="#154377" strokeWidth="2" />
      <path d="M18 4v28" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M8 15l3 0M25 15l3 0M7 22l4 0M25 22l4 0" stroke="#98C340" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  PainManagement: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M6 18h6l3-6 4 12 3-8 2 2h6" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="13" stroke="#154377" strokeWidth="1.8" strokeDasharray="3 3" />
      <path d="M25 10l3-3M28 10l-3-3" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
      <circle cx="15" cy="12" r="2" fill="#98C340" />
    </svg>
  ),

  DME: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="21" cy="7" r="3" stroke="#154377" strokeWidth="2.2" />
      <path d="M17 13l4-2 3 5-5 5h-4" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="25" r="6" stroke="#154377" strokeWidth="2.2" />
      <circle cx="15" cy="25" r="2" fill="#98C340" />
      <path d="M15 25l6-4M24 25h3" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Ophthalmology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M4 18c4-8 10-11 14-11s10 3 14 11c-4 8-10 11-14 11s-10-3-14-11z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="5" stroke="#154377" strokeWidth="2" />
      <circle cx="18" cy="18" r="2.5" fill="#98C340" />
      <path d="M14 15a4 4 0 0 1 4-2" stroke="#98C340" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  Neurology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 7v22M18 7a7 7 0 0 0-7 7c0 2 1 3 1 5a5 5 0 0 1-2 4 4 4 0 0 0 4 4c2 0 3-1 4-2M18 7a7 7 0 0 1 7 7c0 2-1 3-1 5a5 5 0 0 0 2 4 4 4 0 0 1-4 4c-2 0-3-1-4-2" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 14a3 3 0 0 1 3 3M23 14a3 3 0 0 0-3 3" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  HomeHealth: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M6 16L18 6l12 10v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V16z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 17c-1.8-2.2-4.5-.8-4.5 1.5 0 2.5 4.5 5.5 4.5 5.5s4.5-3 4.5-5.5c0-2.3-2.7-3.7-4.5-1.5z" stroke="#98C340" fill="#98C340" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),

  Hospice: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <rect x="5" y="14" width="26" height="8" rx="4" transform="rotate(-45 18 18)" stroke="#154377" strokeWidth="2.2" />
      <rect x="5" y="14" width="26" height="8" rx="4" transform="rotate(45 18 18)" stroke="#154377" strokeWidth="2.2" />
      <circle cx="18" cy="18" r="1.5" fill="#98C340" />
      <circle cx="15" cy="18" r="1.2" fill="#98C340" />
      <circle cx="21" cy="18" r="1.2" fill="#98C340" />
    </svg>
  ),

  Endocrinology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M16 19c-3-5-6-9-10-8-3 1-3 9-1 13 3 5 8 4 11 1" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M20 19c3-5 6-9 10-8 3 1 3 9 1 13-3 5-8 4-11 1" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M16 23h4" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="9" cy="17" r="1.3" fill="#98C340" />
      <circle cx="10" cy="22" r="1.3" fill="#98C340" />
      <circle cx="27" cy="17" r="1.3" fill="#98C340" />
      <circle cx="26" cy="22" r="1.3" fill="#98C340" />
    </svg>
  ),

  Nephrology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M13 10c-4 0-7 3.5-7 8s3 8 7 8c2 0 3-2 3-4 0-3-1-4-1-4s1-1 1-4c0-2-1-4-3-4z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M23 10c4 0 7 3.5 7 8s-3 8-7 8c-2 0-3-2-3-4 0-3 1-4 1-4s-1-1-1-4c0-2 1-4 3-4z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M14 17h2M14 19h2M20 17h2M20 19h2" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Rheumatology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M13 5c0 3 2 5 2 8h6c0-3 2-5 2-8h-10z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M15 23c0 3-2 5-2 8h10c0-3-2-5-2-8h-6z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <ellipse cx="18" cy="18" rx="4" ry="2.5" stroke="#154377" strokeWidth="2" />
      <path d="M7 16l3 1M7 20l3-1M29 16l-3 1M29 20l-3-1" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  GeriatricMedicine: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="11" r="5" stroke="#154377" strokeWidth="2.2" />
      <circle cx="16" cy="11" r="1.5" stroke="#154377" strokeWidth="1.5" />
      <circle cx="20" cy="11" r="1.5" stroke="#154377" strokeWidth="1.5" />
      <path d="M17.5 11h1" stroke="#154377" strokeWidth="1.5" />
      <path d="M10 29v-5a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v5" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M26 21v8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  WoundCare: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <rect x="7" y="13" width="22" height="10" rx="3" stroke="#154377" strokeWidth="2.2" />
      <path d="M18 15v6M15 18h6" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="10" cy="18" r="1.2" fill="#154377" />
      <circle cx="26" cy="18" r="1.2" fill="#154377" />
    </svg>
  ),

  Anesthesia: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M12 24l8-8M17 19l4 4M21 15l4 4M9 27l-3 3" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="16" y="9" width="11" height="5" rx="1.5" transform="rotate(-45 16 9)" stroke="#154377" strokeWidth="2" />
      <path d="M26 6l4-4M24 8l2 2" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="22" r="1.5" fill="#98C340" />
    </svg>
  ),

  GeneralSurgery: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="10" cy="26" r="3.5" stroke="#154377" strokeWidth="2" />
      <circle cx="26" cy="26" r="3.5" stroke="#154377" strokeWidth="2" />
      <path d="M12.5 23.5L25 7M23.5 23.5L11 7" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="15.5" r="2" fill="#98C340" />
    </svg>
  ),

  PlasticSurgery: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M8 28c4-4 8-12 12-20l4 2c-4 8-8 16-12 20H8z" stroke="#154377" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 10l-2-2M25 13l-2-2" stroke="#154377" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 7l2-2M27 10l2-2M28 6l-4 4" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="18" r="1.5" fill="#98C340" />
    </svg>
  ),

  Oncology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M13 29c0-6 5-11 5-16a4 4 0 0 0-8 0c0 5 5 10 5 16z" stroke="#154377" strokeWidth="2.2" />
      <path d="M23 29c0-6-5-11-5-16a4 4 0 0 1 8 0c0 5-5 10-5 16z" stroke="#154377" strokeWidth="2.2" />
      <circle cx="18" cy="13" r="2.5" fill="#98C340" />
      <path d="M12 28l6-6M24 28l-6-6" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  Pulmonology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 5v14M14 10l4 3M22 10l-4 3" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 19c-4 0-8 3-8 8s3 4 8 4h1v-12h-1z" stroke="#154377" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 19c4 0 8 3 8 8s-3 4-8 4h-1v-12h-1z" stroke="#154377" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="11" cy="25" r="1.5" fill="#98C340" />
      <circle cx="25" cy="25" r="1.5" fill="#98C340" />
    </svg>
  ),

  AllergyImmunology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 5L7 9v10c0 8 11 12 11 12s11-4 11-12V9l-11-4z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 12v10M13 17h10" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  InfectiousDisease: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <circle cx="18" cy="18" r="8" stroke="#154377" strokeWidth="2.2" />
      <path d="M18 4v6M18 26v6M4 18h6M26 18h6M8 8l4 4M24 24l4 4M8 28l4-4M24 12l4-4" stroke="#154377" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="18" r="3" stroke="#98C340" strokeWidth="2" fill="#98C340" fillOpacity="0.25" />
    </svg>
  ),

  Dental: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M10 7c2-2 6-1 8 1 2-2 6-3 8-1 3 2 4 6 3 10-1 6-3 14-6 14s-3-6-5-6-2 6-5 6-5-8-6-14c-1-4 0-8 3-10z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 13v8M14 17h8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  Urology: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M18 7v7c-4 0-8 4-8 9s4 8 8 8 8-3 8-8-4-9-8-9" stroke="#154377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="23" r="3.5" stroke="#98C340" strokeWidth="2" fill="#98C340" fillOpacity="0.2" />
      <path d="M18 27v4" stroke="#98C340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  EmergencyMedicine: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <rect x="5" y="10" width="18" height="17" rx="3" stroke="#154377" strokeWidth="2.2" />
      <path d="M23 15h6l3 5v7h-9V15z" stroke="#154377" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="11" cy="27" r="3" stroke="#154377" strokeWidth="2" />
      <circle cx="27" cy="27" r="3" stroke="#154377" strokeWidth="2" />
      <path d="M14 15v6M11 18h6" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  ),

  NursingHome: ({ className = "w-7 h-7" }: { className?: string }) => (
    <svg viewBox="0 0 36 36" fill="none" className={className}>
      <path d="M6 16L18 6l12 10v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V16z" stroke="#154377" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="18" cy="18" r="4" stroke="#154377" strokeWidth="2" />
      <path d="M18 14v8M14 18h8" stroke="#98C340" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M14 32v-6h8v6" stroke="#154377" strokeWidth="1.8" />
    </svg>
  ),
};

export interface SpecialtyDirectoryItem {
  name: string;
  category: 'primary' | 'surgical' | 'mental' | 'rehab' | 'diagnostic' | 'specialized';
  categoryLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export const allDirectorySpecialties: SpecialtyDirectoryItem[] = [
  {
    name: 'Cardiology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Cardiology,
    description: 'Expert coding for echocardiograms, catheterizations, stress tests, Holter monitoring, and cardiovascular modifiers 26/TC.',
  },
  {
    name: 'Dermatology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Dermatology,
    description: 'Biopsies, Mohs micrographic surgery, lesion excisions, pathology cross-coding, and cosmetic vs. medical necessity appeals.',
  },
  {
    name: 'Mental Health / Behavioral Health',
    category: 'mental',
    categoryLabel: 'Behavioral & Mental',
    icon: DualColorSpecialtyIcons.MentalHealth,
    description: 'Psychiatric evaluations, psychotherapy sessions, crisis intervention, tele-mental health parity, and complex pre-authorizations.',
  },
  {
    name: 'Internal Medicine',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.InternalMedicine,
    description: 'Comprehensive adult E/M documentation, chronic care management (CCM), transitional care (TCM), and annual wellness visits.',
  },
  {
    name: 'Family Medicine',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.FamilyMedicine,
    description: 'Multi-generational primary care, preventative medicine, pediatric vaccines, preventive G-codes, and high-volume billing.',
  },
  {
    name: 'Orthopedic',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.Orthopedic,
    description: 'Fracture care, arthroscopic surgery, joint injections, durable medical equipment (DME), and global surgical fee periods.',
  },
  {
    name: 'Physical Therapy',
    category: 'rehab',
    categoryLabel: 'Rehab & Therapy',
    icon: DualColorSpecialtyIcons.PhysicalTherapy,
    description: 'Timed 8-minute rule documentation, GP modifiers, functional reporting, neuromuscular re-education, and PT cap tracking.',
  },
  {
    name: 'Podiatry',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Podiatry,
    description: 'Routine foot care guidelines, diabetic shoe program verification, nail avulsions, Q-modifiers, and localized debridement.',
  },
  {
    name: 'Gastroenterology',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.Gastroenterology,
    description: 'Colonoscopy screening vs. diagnostic modifier 33/PT, upper endoscopies, biopsies, polypectomies, and anesthesia coordination.',
  },
  {
    name: 'Urgent Care',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.UrgentCare,
    description: 'Fast-paced walk-in claim generation, S-codes vs. E/M codes, rapid insurance eligibility checks, and point-of-care lab tests.',
  },
  {
    name: 'Ambulatory Surgery Center (ASC)',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.ASC,
    description: 'Facility fee billing, CMS ASC approved list cross-referencing, multi-procedure packaging discounts, and implant carve-outs.',
  },
  {
    name: 'Laboratory',
    category: 'diagnostic',
    categoryLabel: 'Diagnostics & Lab',
    icon: DualColorSpecialtyIcons.Laboratory,
    description: 'CLIA compliance, panel vs. individual tests, medical necessity LCD/NCD diagnosis link, molecular diagnostics, and toxic screens.',
  },
  {
    name: 'Pathology',
    category: 'diagnostic',
    categoryLabel: 'Diagnostics & Lab',
    icon: DualColorSpecialtyIcons.Pathology,
    description: 'Surgical pathology level II-VI coding, immunohistochemistry, special stains, and technical vs. professional component billing.',
  },
  {
    name: 'Radiology',
    category: 'diagnostic',
    categoryLabel: 'Diagnostics & Lab',
    icon: DualColorSpecialtyIcons.Radiology,
    description: 'X-Ray, MRI, CT scans, mammography, interventional radiology, pre-authorization, and technical/professional fee splitting.',
  },
  {
    name: 'OBGYN',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.OBGYN,
    description: 'Global obstetric packages, antepartum/postpartum breakdown, colposcopy, ultrasound, hysteroscopy, and contraceptive counseling.',
  },
  {
    name: 'Pediatric',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.Pediatric,
    description: 'Early and Periodic Screening (EPSDT), childhood vaccine counseling and administration, growth assessments, and Medicaid EPSDT.',
  },
  {
    name: 'Chiropractic',
    category: 'rehab',
    categoryLabel: 'Rehab & Therapy',
    icon: DualColorSpecialtyIcons.Chiropractic,
    description: 'Spinal manipulation regions (1-2, 3-4, 5 regions), AT modifiers for active treatment, maintenance denials, and secondary diagnosis.',
  },
  {
    name: 'Pain Management',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.PainManagement,
    description: 'Epidural steroid injections, facet joint blocks, radiofrequency ablation, fluoroscopic guidance, and strict pre-authorization tracking.',
  },
  {
    name: 'DME (Durable Medical Equipment)',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.DME,
    description: 'HCPCS coding, certificate of medical necessity (CMN), standard written orders (SWO), rental vs. purchase, and payer cap limits.',
  },
  {
    name: 'Ophthalmology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Ophthalmology,
    description: 'Eye codes (92002-92014) vs. E/M codes, cataract surgery, intravitreal injections, visual fields, and optical modifier handling.',
  },
  {
    name: 'Neurology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Neurology,
    description: 'EEG monitoring, EMG/nerve conduction studies, sleep studies, botulinum toxin for chronic migraine, and complex neuropathy coding.',
  },
  {
    name: 'Home Health',
    category: 'rehab',
    categoryLabel: 'Rehab & Therapy',
    icon: DualColorSpecialtyIcons.HomeHealth,
    description: 'Patient-Driven Groupings Model (PDGM), Notice of Admission (NOA), Low Utilization Payment Adjustment (LUPA) mitigation.',
  },
  {
    name: 'Hospice',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Hospice,
    description: 'Routine home care, general inpatient care, continuous home care, respite care, election statement audits, and aggregate cap calculation.',
  },
  {
    name: 'Endocrinology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Endocrinology,
    description: 'Continuous glucose monitor (CGM) interpretation, insulin pump training, thyroid biopsies, and complex diabetic multi-tier E/M.',
  },
  {
    name: 'Nephrology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Nephrology,
    description: 'Monthly capitation payment (MCP) codes for dialysis, home peritoneal dialysis follow-ups, and CKD stage documentation compliance.',
  },
  {
    name: 'Rheumatology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Rheumatology,
    description: 'Biologic medication infusions (J-codes), arthrocentesis, bone density DEXA scans, and autoimmune diagnosis linking.',
  },
  {
    name: 'Geriatric Medicine',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.GeriatricMedicine,
    description: 'Medicare Annual Wellness Visits (AWV), cognitive assessments, home visits, multi-morbidity care, and transitional care management.',
  },
  {
    name: 'Wound Care',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.WoundCare,
    description: 'Surgical debridement of tissue/muscle/bone, skin substitutes, hyperbaric oxygen therapy (HBOT), and cellular tissue product Q-codes.',
  },
  {
    name: 'Anesthesia',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.Anesthesia,
    description: 'Base units plus exact time calculation, physical status modifiers (P1-P6), concurrency limits, and CRNA supervision billing.',
  },
  {
    name: 'General Surgery',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.GeneralSurgery,
    description: 'Pre-operative and post-operative global surgical periods, co-surgery modifier 62, assist at surgery (80/82), and laparoscopic unbundling.',
  },
  {
    name: 'Plastic Surgery',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.PlasticSurgery,
    description: 'Reconstructive vs. cosmetic differentiation, prior authorization packages, breast reconstruction stages, and scar revisions.',
  },
  {
    name: 'Oncology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Oncology,
    description: 'Chemotherapy administration, concurrent vs. sequential infusions, high-cost biologic J-codes, and clinical trial Q-modifiers.',
  },
  {
    name: 'Pulmonology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Pulmonology,
    description: 'Spirometry, full pulmonary function testing (PFT), bronchoscopy, sleep apnea CPAP titration, and critical care management.',
  },
  {
    name: 'Allergy & Immunology',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.AllergyImmunology,
    description: 'Percutaneous allergy prick tests, venom immunotherapy, allergen immunotherapy vial preparation (95165), and food challenges.',
  },
  {
    name: 'Infectious Disease',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.InfectiousDisease,
    description: 'Complex inpatient consultations, outpatient parenteral antimicrobial therapy (OPAT), HIV management, and travel medicine.',
  },
  {
    name: 'Dental (Medical Cross-Coding)',
    category: 'specialized',
    categoryLabel: 'Specialized Care',
    icon: DualColorSpecialtyIcons.Dental,
    description: 'Dental-to-medical billing cross-coding for trauma, sleep apnea appliances, TMJ disorder treatments, and maxillofacial surgery.',
  },
  {
    name: 'Urology',
    category: 'surgical',
    categoryLabel: 'Surgical & Procedural',
    icon: DualColorSpecialtyIcons.Urology,
    description: 'Cystoscopy, prostate biopsies, urodynamic testing, lithotripsy, and complex pelvic floor therapy coding.',
  },
  {
    name: 'Emergency Medicine',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.EmergencyMedicine,
    description: 'High-acuity ED level 1-5 facility & professional coding, critical care 99291/99292, fractures, and laceration repairs.',
  },
  {
    name: 'Nursing Home & Assisted Living',
    category: 'primary',
    categoryLabel: 'Primary & Internal',
    icon: DualColorSpecialtyIcons.NursingHome,
    description: 'Skilled nursing facility (SNF) Part B billing, POS 31/32 modifier handling, monthly follow-up E/M, and physician orders.',
  }
];

interface SpecialtiesCardsDirectoryProps {
  id?: string;
  onSelectSpecialty?: (specialtyName: string) => void;
}

export function SpecialtiesCardsDirectory({ 
  id = "specialties-directory-section", 
  onSelectSpecialty 
}: SpecialtiesCardsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties (40+)' },
    { id: 'primary', label: 'Primary & Internal Care' },
    { id: 'surgical', label: 'Surgical & Procedural' },
    { id: 'mental', label: 'Behavioral & Mental' },
    { id: 'rehab', label: 'Rehab & Therapy' },
    { id: 'diagnostic', label: 'Diagnostics & Lab' },
    { id: 'specialized', label: 'Specialized Care' },
  ];

  const filteredSpecialties = useMemo(() => {
    return allDirectorySpecialties.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id={id} className="py-20 lg:py-24 bg-[#FAFCFF] border-b border-gray-100 relative overflow-hidden">
      {/* Background Subtle Circles */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#154377]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#98C340]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f4f9eb] text-[#154377] text-xs font-bold uppercase tracking-wider mb-3 border border-[#d4ebb3]">
            <Sparkles className="w-3.5 h-3.5 text-[#98C340]" />
            <span>Ascent Specialty Network</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#154377] font-outfit leading-tight tracking-tight mb-4">
            Certified Medical Billing for <span className="text-[#98C340]">Every Healthcare Specialty</span>
          </h2>

          <p className="text-[#556987] text-[15.5px] sm:text-[16.5px] leading-relaxed">
            Every clinical specialty operates with distinct payer contracts, documentation guidelines, and CPT modifiers. Browse our specialties below or search your clinical domain to see how our certified billing teams eliminate revenue leakage.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Top Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search specialties (e.g. Cardiology, Dermatology, Mental Health, DME, Pediatrics...)"
              className="w-full pl-12 pr-10 py-3.5 bg-white rounded-xl border border-gray-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#98C340] focus:border-[#98C340] text-sm text-gray-800 placeholder:text-gray-400 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#154377] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#98C340] hover:text-[#154377]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Result Count Indicator */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 px-1">
            <span>
              Showing <strong className="text-[#154377]">{filteredSpecialties.length}</strong> {filteredSpecialties.length === 1 ? 'specialty' : 'specialties'}
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#98C340] hover:underline font-bold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Cards Grid */}
        {filteredSpecialties.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-lg mx-auto shadow-xs">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#154377] font-outfit mb-1">No specialties found</h3>
            <p className="text-sm text-gray-500 mb-5">
              We couldn&apos;t find any specialties matching &quot;{searchQuery}&quot;. We bill for all 40+ healthcare specialties nationwide.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#98C340] hover:bg-[#85ab36] text-white font-bold px-5 py-2.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Clear Search &amp; Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {filteredSpecialties.map((specialty, idx) => {
              const IconComp = specialty.icon;
              return (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
                  onClick={() => onSelectSpecialty?.(specialty.name)}
                  className="bg-white rounded-2xl border border-gray-200/80 hover:border-[#98C340]/60 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle Top Hover Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#98C340] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* 1 Row: Dual-Color Icon & Specialty Name */}
                    <div className="flex items-center gap-3.5 mb-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#EBF2F8] group-hover:bg-[#f4f9eb] border border-[#154377]/10 group-hover:border-[#98C340]/40 flex items-center justify-center shrink-0 p-2 transition-colors duration-300 shadow-2xs">
                        <IconComp className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#154377] font-outfit leading-tight group-hover:text-[#98C340] transition-colors">
                        {specialty.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-[14px] leading-relaxed mb-6 font-normal">
                      {specialty.description}
                    </p>
                  </div>

                  {/* Clean Bottom Action: Explore Specialty Billing with inline arrow */}
                  <div className="pt-2 flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#98C340] group-hover:text-[#85ab36] transition-colors uppercase tracking-wider font-outfit">
                    <span>Explore Specialty Billing</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
