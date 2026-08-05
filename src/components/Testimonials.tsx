import React, { useState } from 'react';
import { Sparkles, Star, Quote, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/spaData';

export const Testimonials: React.FC = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const total = TESTIMONIALS.length;

  // Calculate position offset relative to active story (-2, -1, 0, 1, 2)
  const getCardOffset = (index: number) => {
    let offset = index - activeStoryIndex;
    if (offset < -Math.floor(total / 2)) offset += total;
    if (offset > Math.floor((total - 1) / 2)) offset -= total;
    return offset;
  };

  return (
    <section id="testimonials" className="py-12 lg:py-16 bg-[#FAF6F0] relative overflow-hidden select-none">
      {/* Subtle organic ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C6A473]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#A37B57]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C6A473]/30 text-[#A37B57] text-xs font-jakarta font-medium tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A473]" />
            <span>Guest reflections</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal leading-[1.2]">
            Endorsements from leaders & creative thinkers.
          </h2>

          <p className="font-inter text-[#666666] text-sm sm:text-base font-light leading-relaxed">
            Discover how tailored bio-individual bodywork elevates clarity, physical performance, and daily vitality.
          </p>
        </div>

        {/* STACKED CARDS CONTAINER */}
        <div className="relative w-full max-w-3xl mx-auto h-[460px] sm:h-[380px] lg:h-[350px] flex items-center justify-center">
          {TESTIMONIALS.map((story, index) => {
            const offset = getCardOffset(index);
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            // Determine dynamic classes based on offset
            let styleClasses = '';
            let zIndex = 0;

            if (isCenter) {
              styleClasses = 'translate-x-0 scale-100 rotate-0 opacity-100 shadow-2xl border-white z-30 pointer-events-auto';
              zIndex = 30;
            } else if (isLeft) {
              styleClasses = '-translate-x-[18%] sm:-translate-x-[26%] md:-translate-x-[30%] translate-y-3 sm:translate-y-4 scale-[0.91] -rotate-3 sm:-rotate-5 opacity-75 hover:opacity-95 shadow-xl border-[#F2ECE4] z-20 cursor-pointer';
              zIndex = 20;
            } else if (isRight) {
              styleClasses = 'translate-x-[18%] sm:translate-x-[26%] md:translate-x-[30%] translate-y-3 sm:translate-y-4 scale-[0.91] rotate-3 sm:rotate-5 opacity-75 hover:opacity-95 shadow-xl border-[#F2ECE4] z-20 cursor-pointer';
              zIndex = 20;
            } else if (isFarLeft) {
              styleClasses = '-translate-x-[35%] sm:-translate-x-[48%] translate-y-6 scale-[0.80] -rotate-10 opacity-30 shadow-md border-[#F2ECE4] z-10 cursor-pointer';
              zIndex = 10;
            } else if (isFarRight) {
              styleClasses = 'translate-x-[35%] sm:translate-x-[48%] translate-y-6 scale-[0.80] rotate-10 opacity-30 shadow-md border-[#F2ECE4] z-10 cursor-pointer';
              zIndex = 10;
            } else {
              styleClasses = 'scale-50 opacity-0 pointer-events-none z-0';
            }

            return (
              <div
                key={story.id}
                onClick={() => !isCenter && setActiveStoryIndex(index)}
                style={{ zIndex }}
                className={`absolute inset-0 m-auto w-[88%] sm:w-[480px] lg:w-[540px] h-fit bg-white rounded-3xl p-6 sm:p-8 border transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) transform-gpu ${styleClasses}`}
              >
                {/* Decorative Quote mark */}
                <div className="absolute top-5 right-5 text-[#C6A473]/15 pointer-events-none">
                  <Quote className="w-14 h-14 sm:w-16 sm:h-16" />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  {/* Avatar & Verified Badge */}
                  <div className="shrink-0 flex flex-col items-center text-center">
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 border-[#F2ECE4] shadow-md">
                      <img
                        src={story.avatar}
                        alt={story.clientName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {story.verified && (
                      <div className="inline-flex items-center gap-1 bg-[#FAF8F5] px-2 py-0.5 rounded-full border border-[#F2ECE4] text-[10px] text-[#222222] font-jakarta font-medium mt-2 shadow-2xs">
                        <ShieldCheck className="w-3 h-3 text-[#C6A473]" />
                        <span>Verified Guest</span>
                      </div>
                    )}
                  </div>

                  {/* Content: Name, Rating, Quote & Treatment */}
                  <div className="flex-1 space-y-2.5 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div>
                        <h3 className="font-playfair text-lg sm:text-xl text-[#222222] font-semibold leading-tight">
                          {story.clientName}
                        </h3>
                        <p className="font-jakarta text-[11px] text-[#A37B57] font-medium mt-0.5">
                          {story.clientTitle}
                        </p>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex items-center justify-center sm:justify-start gap-1 text-[#C6A473]">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#C6A473] stroke-none" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="font-playfair text-sm sm:text-base text-[#333333] font-normal leading-relaxed italic pt-0.5">
                      "{story.quote}"
                    </blockquote>

                    {/* Treatment Tag */}
                    <div className="pt-1">
                      <span className="inline-block text-[10px] font-jakarta font-medium text-[#A37B57] bg-[#FAF8F5] border border-[#F2ECE4] px-2.5 py-0.5 rounded-full">
                        {story.treatmentTaken}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ELEGANT PAGINATION DOTS BELOW STACK */}
        <div className="mt-10 lg:mt-14 flex justify-center items-center">
          <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-[#F2ECE4] shadow-sm">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStoryIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  activeStoryIndex === idx
                    ? 'w-8 bg-[#A37B57] shadow-xs'
                    : 'w-2.5 bg-[#E5DDD3] hover:bg-[#A37B57]/60'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

