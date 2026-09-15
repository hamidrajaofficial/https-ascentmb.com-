import { useState, useEffect } from 'react';
import { Play, Youtube, Star, ChevronLeft, ChevronRight, Activity } from 'lucide-react';

const videos = [
  {
    id: "GbZE0FItLq4",
    title: "Client Feedback: Private Practice Physician Testimonial",
  },
  {
    id: "Q7eobSHN9ow",
    title: "Physician Client Review: Practice Billing Testimonial",
  },
  {
    id: "tCzvilVMZlI",
    title: "Healthcare Provider & Clinic Practice Testimonial",
  },
  {
    id: "pZEPIXMq_Hg",
    title: "Medical Team Client Feedback & Practice Experience",
  }
];

const googleReviews = [
  {
    id: 1,
    name: "Dr. Helen K",
    location: "Chicago, IL",
    text: "We chose Ascent Medical Billing for accounts receivable management. They rationalized our entire billing process, and we get paid faster than ever.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. James L",
    location: "New York, NY",
    text: "Their proactive approach to medical billing and coding has significantly reduced our claim denials. Highly recommended for any growing practice.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Robert V",
    location: "Houston, TX",
    text: "Outstanding communication and expertise. Claims are submitted error-free and compliance is always top tier.",
    rating: 5,
  }
];

const trustpilotReviews = [
  {
    id: 1,
    name: "Dr. Laura M",
    location: "Miami, FL",
    text: "The urgent care telehealth and billing support has been invaluable. Your professionally high spirited team has made it so easy for us.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Sarah J",
    location: "Dallas, TX",
    text: "Exceptional RCM service! Our practice saw a 25% increase in collected revenue within the first 90 days.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. David M",
    location: "Seattle, WA",
    text: "Seamless EHR integration and reliable billing assistants. Ascent Medical Billing transformed our workflow completely.",
    rating: 5,
  }
];

export function TestimonialsSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeGoogleIndex, setActiveGoogleIndex] = useState(0);
  const [activeTrustpilotIndex, setActiveTrustpilotIndex] = useState(0);

  useEffect(() => {
    const googleTimer = setInterval(() => {
      setActiveGoogleIndex((prev) => (prev + 1) % googleReviews.length);
    }, 3500);

    const trustpilotTimer = setInterval(() => {
      setActiveTrustpilotIndex((prev) => (prev + 1) % trustpilotReviews.length);
    }, 4000);

    return () => {
      clearInterval(googleTimer);
      clearInterval(trustpilotTimer);
    };
  }, []);

  return (
    <section className="relative py-[80px] bg-white overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Eyebrow */}
          <div className="flex flex-col items-center mb-5">
             <div className="eyebrow flex items-center text-[#154377] font-bold text-[13px] tracking-wider mb-3">
               <Star className="w-4 h-4 mr-2 text-[#98C340] fill-[#98C340]/30" />
               Client Testimonials &amp; Success Stories
             </div>
             <div className="w-12 h-[2px] bg-[#98C340]"></div>
          </div>
          
          <h2 className="text-[32px] md:text-[40px] lg:text-[40px] font-bold text-[#154377] font-outfit mb-6 leading-[1.1] tracking-tight">
            How We Became a Top Priority Savior of <br />
            <span className="text-[#98C340]">Healthcare Practitioners?</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
          
          {/* Left Column - Video */}
          <div className="w-full lg:w-[380px] shrink-0 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <Youtube className="w-6 h-6 text-[#FF0000]" fill="currentColor" />
              <h3 className="text-[#154377] font-semibold text-xl">Customer Reviews on Youtube</h3>
            </div>
            
            <div className="w-full max-w-[380px] h-[280px] relative rounded-[2px] overflow-hidden bg-black shadow-lg">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[activeVideoIndex].id}?rel=0`} 
                title={videos[activeVideoIndex].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Navigation Header */}
            <div className="flex items-center justify-between mt-6 mb-4">
              <h3 className="text-gray-600 font-medium text-[14px]">More Success Stories</h3>
              <button 
                onClick={() => setActiveVideoIndex((prev) => (prev + 1) % videos.length)}
                className="bg-[#98C340] hover:bg-[#85ab36] text-white text-[12px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1 transition-colors cursor-pointer"
              >
                Next Video <Play className="w-3 h-3 fill-current" />
              </button>
            </div>

            {/* Thumbnails Row */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`relative w-[65px] h-[95px] rounded-[2px] overflow-hidden shrink-0 border-2 transition-all ${
                    activeVideoIndex === index 
                      ? 'border-[#98C340] scale-100 shadow-md' 
                      : 'border-transparent opacity-70 hover:opacity-100 hover:scale-95'
                  }`}
                >
                  <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover" />
                  {/* Tiny Play Button on Thumbnail */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity group-hover:bg-black/10">
                    <div className="w-5 h-5 bg-[#98C340] rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-2.5 h-2.5 text-white ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonials (2 Separate Sliders: Google & Trustpilot) wrapped in a #FCFCFC background container card with radius 2 */}
          <div className="flex-1 w-full flex flex-col bg-[#FCFCFC] rounded-[2px] p-6 sm:p-8 border border-gray-100/90 shadow-sm">
            <h3 className="text-[#154377] font-semibold text-xl mb-6">What Our Customers Say?</h3>

            <div className="flex flex-col sm:flex-row gap-6 items-start justify-start">
              
              {/* Google Reviews Card & Slider (Width 360px) */}
              <div className="w-full sm:w-[360px] shrink-0 flex flex-col">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span className="text-[#154377] font-semibold text-sm">Google Reviews</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setActiveGoogleIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length)}
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-[#98C340] hover:text-white text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous Google review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setActiveGoogleIndex((prev) => (prev + 1) % googleReviews.length)}
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-[#98C340] hover:text-white text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next Google review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="w-full sm:w-[360px] overflow-hidden rounded-[2px]">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeGoogleIndex * 100}%)` }}
                  >
                    {googleReviews.map((review) => (
                      <div 
                        key={review.id}
                        className="w-full sm:w-[360px] shrink-0 min-h-[280px] bg-[#154377]/[0.06] rounded-[2px] p-6 flex flex-col justify-between shadow-xs border border-[#154377]/20"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-[#154377] text-[18px] font-bold leading-tight">{review.name}</h4>
                              <p className="text-gray-500 text-[13px] mt-0.5">{review.location}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-amber-200 shadow-xs">
                              <Star className="w-3.5 h-3.5 text-[#FFBD2E]" fill="currentColor" />
                              <span className="text-xs font-bold text-amber-800">5.0</span>
                            </div>
                          </div>
                          <p className="text-slate-700 text-[14px] leading-relaxed">
                            "{review.text}"
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#154377]/15 flex items-center justify-between">
                          <span className="text-[12px] text-gray-500 font-medium">Verified Google Review</span>
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-3 h-3 text-[#FFBD2E]" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots for Google */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {googleReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveGoogleIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeGoogleIndex === index ? 'w-5 bg-[#4285F4]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to Google review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Trustpilot Reviews Card & Slider (Width 360px) */}
              <div className="w-full sm:w-[360px] shrink-0 flex flex-col">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#00B67A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.708 7.513 8.292 1.205-6 5.848 1.416 8.258-7.416-3.899-7.416 3.899 1.416-8.258-6-5.848 8.292-1.205z" />
                    </svg>
                    <span className="text-[#154377] font-semibold text-sm">Trustpilot Reviews</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => setActiveTrustpilotIndex((prev) => (prev - 1 + trustpilotReviews.length) % trustpilotReviews.length)}
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-[#98C340] hover:text-white text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous Trustpilot review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setActiveTrustpilotIndex((prev) => (prev + 1) % trustpilotReviews.length)}
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-[#98C340] hover:text-white text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next Trustpilot review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="w-full sm:w-[360px] overflow-hidden rounded-[2px]">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeTrustpilotIndex * 100}%)` }}
                  >
                    {trustpilotReviews.map((review) => (
                      <div 
                        key={review.id}
                        className="w-full sm:w-[360px] shrink-0 min-h-[280px] bg-[#98C340]/15 rounded-[2px] p-6 flex flex-col justify-between shadow-xs border border-[#98C340]/35"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-[#154377] text-[18px] font-bold leading-tight">{review.name}</h4>
                              <p className="text-gray-500 text-[13px] mt-0.5">{review.location}</p>
                            </div>
                            <div className="flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-full border border-emerald-200 shadow-xs">
                              <Star className="w-3.5 h-3.5 text-[#00B67A]" fill="currentColor" />
                              <span className="text-xs font-bold text-emerald-800">5.0</span>
                            </div>
                          </div>
                          <p className="text-slate-700 text-[14px] leading-relaxed">
                            "{review.text}"
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#98C340]/25 flex items-center justify-between">
                          <span className="text-[12px] text-gray-600 font-medium">Trustpilot Verified</span>
                          <div className="flex gap-0.5 bg-[#00B67A] p-1 rounded-[2px]">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-2.5 h-2.5 text-white" fill="currentColor" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots for Trustpilot */}
                <div className="flex justify-center gap-1.5 mt-3">
                  {trustpilotReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTrustpilotIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeTrustpilotIndex === index ? 'w-5 bg-[#00B67A]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to Trustpilot review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
            {/* FIND US ON Section placed directly under the reviews card in the right column */}
            <div className="mt-8 pt-6 border-t border-gray-200/80 w-full">
              <h4 className="text-[#154377] text-[14px] font-bold uppercase tracking-wider mb-3">
                FIND US ON:
              </h4>
              <div className="bg-white rounded-[16px] p-4 sm:p-5 shadow-md flex flex-wrap items-center justify-between gap-4 border border-gray-100">
                
                {/* Google Rating */}
                <div className="flex items-center gap-3">
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <div>
                    <div className="text-[#2D3748] font-bold text-[13px] leading-tight">Google Rating</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[#2D3748] font-extrabold text-[13px]">4.8</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 text-[#FFBD2E]" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-px h-7 bg-gray-200" />

                {/* Trustpilot Rating */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 bg-[#00B67A] rounded flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-[#2D3748] font-bold text-[13px] leading-tight">Trustpilot Rating</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[#2D3748] font-extrabold text-[13px]">4.9</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 text-[#00B67A]" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block w-px h-7 bg-gray-200" />

                {/* Clutch */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[#0C2340] font-black text-[20px] tracking-tight font-sans flex items-center">
                    Cl<span className="inline-block w-2 h-2 bg-[#FF5252] rounded-full mx-0.5"></span>utch
                  </span>
                </div>

                <div className="hidden lg:block w-px h-7 bg-gray-200" />

                {/* GoodFirms */}
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#2563EB] rounded-sm flex items-center justify-center text-white font-extrabold text-[11px]">
                    GF
                  </div>
                  <span className="text-[#2563EB] font-bold text-[17px] tracking-tight">GoodFirms</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

