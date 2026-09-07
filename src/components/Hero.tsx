import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_CARD_ITEMS } from '../data/spaData';
import { FaWhatsapp } from 'react-icons/fa';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Auto slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % HERO_CARD_ITEMS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [activeCardIndex]);

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % HERO_CARD_ITEMS.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + HERO_CARD_ITEMS.length) % HERO_CARD_ITEMS.length);
  };

  const currentCard = HERO_CARD_ITEMS[activeCardIndex];

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 sm:pb-24 bg-[#222222] flex flex-col justify-center overflow-hidden">
      {/* Background Images with Smooth Cross-Fade Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_CARD_ITEMS.map((item, index) => (
          <img
            key={item.id}
            src={item.bgImage || item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-90 saturate-[1.05] transition-all duration-1000 ease-in-out ${
              index === activeCardIndex
                ? 'opacity-100 scale-105 z-10'
                : 'opacity-0 scale-100 z-0 pointer-events-none'
            }`}
          />
        ))}
        {/* Soft Vignette & Warm Lighting Overlays */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/75 via-black/50 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-transparent to-black/45 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 z-20 w-96 h-96 bg-[#C6A473]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Overlay Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Hero Main Content */}
          <div className="lg:col-span-8 space-y-8 max-w-2xl">
            
            {/* Display Headline - Sentence case only as requested */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] tracking-tight drop-shadow-sm">
              Restore balance. Awaken vitality. Realign within.
            </h1>

            {/* Subtitle Body Text */}
            <p className="font-inter text-white/85 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Personalized therapeutic massage designed to reduce pain, relieve stress, and restore your body's natural balance—delivered by highly trained therapists.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://wa.me/971554690739" target="_blank" 
                // onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white  font-jakarta text-sm sm:text-base font-medium px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-white/20 active:scale-95"
              >
                Book Your Session <FaWhatsapp className="w-7 h-7 fill-current" />
              </a>

              <button
                onClick={onExploreTreatments}
                className="group flex items-center justify-between gap-3 sm:gap-4 bg-black/25 hover:bg-black/35 text-white border border-white/40 backdrop-blur-md font-jakarta text-sm sm:text-base font-medium pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-lg active:scale-95"
              >
                <span className="tracking-wide">Explore Treatments</span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFFDF9] hover:bg-white flex items-center justify-center text-[#1c1917] shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#1c1917] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 sm:pt-8 border-t border-white/20 flex flex-wrap items-center gap-5 sm:gap-7">
              {/* Stat Counter */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-jakarta text-2xl sm:text-3xl font-bold tracking-tight">15k+</span>
                </div>
                <span className="text-white/80 text-xs sm:text-sm font-jakarta font-medium whitespace-nowrap">
                  Satisfied Guests
                </span>
              </div>

              {/* Vertical Line Divider */}
              <div className="h-9 w-px bg-white/25 hidden sm:block flex-shrink-0" />

              {/* Rating & Avatar Stack Block */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-2.5 p-0.5">
                    <img
                      className="inline-block h-8 w-8 shrink-0 aspect-square rounded-full ring-2 ring-white/90 object-cover shadow-md"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="Satisfied guest"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      className="inline-block h-8 w-8 shrink-0 aspect-square rounded-full ring-2 ring-white/90 object-cover shadow-md"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                      alt="Satisfied guest"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      className="inline-block h-8 w-8 shrink-0 aspect-square rounded-full ring-2 ring-white/90 object-cover shadow-md"
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                      alt="Satisfied guest"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      className="inline-block h-8 w-8 shrink-0 aspect-square rounded-full ring-2 ring-white/90 object-cover shadow-md"
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80"
                      alt="Satisfied guest"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Rating Badge */}
                  <span className="text-white text-xs font-bold font-jakarta px-2 py-0.5 rounded-md bg-white/15 border border-white/20 backdrop-blur-sm">
                    4.9 / 5.0
                  </span>
                </div>

                {/* Stars + Subtitle */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 text-[#C6A473]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C6A473] stroke-none" />
                    ))}
                  </div>
                  <span className="text-white/80 text-xs font-inter font-light tracking-wide">
                    2,400+ verified reviews
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Floating Glass Showcase Card */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="relative w-full max-w-[380px] group">
              {/* Frosted Glass Main Card */}
              <div className="relative bg-white/20 backdrop-blur-xl border border-white/35 rounded-[22px] p-3.5 sm:p-4 shadow-2xl text-white transition-all duration-300 hover:border-white/50">
                <div className="flex items-start gap-3.5 pr-2">
                  {/* Card Thumbnail */}
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden flex-shrink-0 border border-white/25 shadow-md">
                    {HERO_CARD_ITEMS.map((item, index) => (
                      <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                          index === activeCardIndex
                            ? 'opacity-100 scale-100 z-10'
                            : 'opacity-0 scale-105 z-0 pointer-events-none'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Card Content & Navigation */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5 h-20 sm:h-22">
                    <p className="text-white/95 text-xs sm:text-[13px] font-inter leading-snug line-clamp-3 font-normal transition-opacity duration-500">
                      {currentCard.description}
                    </p>

                    <div className="flex items-center gap-1.5 pt-1">
                      <button
                        onClick={handlePrevCard}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 border border-white/25 flex items-center justify-center text-white transition-all active:scale-95 shadow-sm"
                        aria-label="Previous showcase"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleNextCard}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 border border-white/25 flex items-center justify-center text-white transition-all active:scale-95 shadow-sm"
                        aria-label="Next showcase"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
