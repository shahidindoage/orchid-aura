import React, { useState, useRef } from 'react';
import { Sparkles, Clock, ArrowUpRight, Check, ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { TREATMENTS } from '../data/spaData';
import { Treatment } from '../types';

interface ServicesProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onOpenQuiz: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectTreatment, onOpenQuiz }) => {
  const [previewTreatment, setPreviewTreatment] = useState<Treatment | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(TREATMENTS[0]?.id || null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement;
    const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 350;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(0, index), TREATMENTS.length - 1));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement;
    const cardAmount = firstCard ? firstCard.offsetWidth + 20 : 350;
    const targetScroll = sliderRef.current.scrollLeft + (direction === 'left' ? -cardAmount : cardAmount);
    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section id="services" className="py-12 lg:py-16 bg-[#fff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header - Sentence case only */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE4] border border-[#C6A473]/30 text-[#A37B57] text-xs font-jakarta font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke treatment menu</span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal leading-[1.2]">
              Curated treatments.
            </h2>

            <p className="font-inter text-[#666666] text-base font-light leading-relaxed">
              Every ritual combines certified organic plant elixirs, targeted bodywork science, and warm sensory immersion.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-[#F2ECE4] shadow-sm">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous treatments"
                className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#A37B57] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll('right')}
                aria-label="Next treatments"
                className="w-10 h-10 rounded-full bg-[#222222] hover:bg-[#A37B57] text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Treatment Cards Flip Slider */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-5 items-center overflow-x-auto scroll-smooth snap-x snap-mandatory py-16 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {TREATMENTS.map((treatment, index) => {
            const isFlipped = flippedCardId === treatment.id;

            return (
              <div
                key={treatment.id}
                onClick={() => setFlippedCardId(isFlipped ? null : treatment.id)}
                className={`snap-start shrink-0 w-[82vw] sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)] h-[430px] [perspective:1000px] group cursor-pointer ${
                  index % 2 === 0 ? '-translate-y-5 sm:-translate-y-7' : 'translate-y-5 sm:translate-y-7'
                }`}
              >
                <div
                  className={`relative w-full h-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:[transform:rotateY(180deg)]'
                  }`}
                >
                  {/* FRONT SIDE (FULL CARD IMAGE & OVERLAY) */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-[#24201C] border border-[#F2ECE4]/30 shadow-md [backface-visibility:hidden] [transform:translateZ(0px)] flex flex-col justify-between">
                    {/* Full Card Image */}
                    <img
                      src={treatment.image}
                      alt={treatment.name}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient overlay for max contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                    {/* Top Badges */}
                    <div className="relative top-3 inset-x-3 flex items-center justify-between px-3 z-10">
                      {treatment.popular ? (
                        <div className="bg-[#A37B57] text-white text-[10px] font-jakarta font-semibold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
                          Popular
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-white text-[10px] font-jakarta bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                          <Clock className="w-3 h-3 text-[#C6A473]" />
                          <span>{treatment.durationMinutes} mins</span>
                        </div>
                      )}

                      <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-jakarta font-bold text-[#222222] shadow-sm">
                        ${treatment.price}
                      </div>
                    </div>

                    {/* Bottom Content Overlay */}
                    <div className="relative mt-auto p-5 z-10 flex flex-col justify-end space-y-1.5">
                      <span className="text-[10px] font-jakarta uppercase tracking-widest text-[#C6A473] font-semibold block">
                        {treatment.category}
                      </span>
                      
                      <h3 className="font-playfair text-xl text-white font-medium leading-tight drop-shadow-md">
                        {treatment.name}
                      </h3>
                    </div>
                  </div>

                  {/* BACK SIDE (FULL DETAILS) */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden bg-[#24201C] text-white border border-[#3A332C] p-5 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between shadow-2xl">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <span className="text-[10px] font-jakarta uppercase tracking-widest text-[#C6A473] font-semibold">
                          {treatment.category}
                        </span>
                        <span className="text-xs font-jakarta font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-full">
                          ${treatment.price} • {treatment.durationMinutes}m
                        </span>
                      </div>

                      <h3 className="font-playfair text-lg text-white font-medium leading-snug">
                        {treatment.name}
                      </h3>

                      <p className="font-inter text-xs text-white/75 leading-relaxed line-clamp-4">
                        {treatment.description}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-jakarta uppercase tracking-wider text-[#C6A473] font-semibold block">
                          Key Benefits
                        </span>
                        {treatment.benefits.slice(0, 3).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-white/90 font-inter">
                            <Check className="w-3 h-3 text-[#C6A473] flex-shrink-0" />
                            <span className="truncate">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewTreatment(treatment);
                        }}
                        className="text-[11px] font-jakarta font-medium text-white/70 hover:text-white underline underline-offset-4"
                      >
                        Quick view
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setFlippedCardId(isFlipped ? null : treatment.id);
                          }}
                          className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white text-[11px] font-jakarta px-2.5 py-2 rounded-full transition-all"
                          title="Flip back"
                        >
                          <RotateCw className="w-3 h-3 text-[#C6A473]" />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTreatment(treatment);
                          }}
                          className="flex items-center gap-1 bg-[#A37B57] hover:bg-[#8c6746] text-white text-[11px] font-jakarta font-medium px-3.5 py-2 rounded-full transition-all duration-300 shadow-sm"
                        >
                          <span>Book now</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Quick View Treatment Details Modal */}
      {previewTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#F2ECE4] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewTreatment(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#FAF8F5] text-[#666666] hover:text-[#222222] flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img
                src={previewTreatment.image}
                alt={previewTreatment.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-jakarta font-bold text-[#222222]">
                ${previewTreatment.price} • {previewTreatment.durationMinutes} minutes
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-jakarta uppercase tracking-wider text-[#A37B57] font-semibold">
                {previewTreatment.category} ritual
              </span>
              <h3 className="font-playfair text-2xl text-[#222222]">
                {previewTreatment.name}
              </h3>
              <p className="font-inter text-sm text-[#666666] leading-relaxed">
                {previewTreatment.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-jakarta text-xs font-bold text-[#222222] uppercase tracking-wider">
                Key benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {previewTreatment.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#222222]">
                    <Check className="w-4 h-4 text-[#C6A473]" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE4] flex items-center justify-between">
              <div className="text-xs text-[#666666] font-inter">
                Includes private shower suite & organic tea ceremony.
              </div>
              <button
                onClick={() => {
                  const selected = previewTreatment;
                  setPreviewTreatment(null);
                  onSelectTreatment(selected);
                }}
                className="bg-[#A37B57] hover:bg-[#8c6746] text-white font-jakarta text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all shadow-md"
              >
                Proceed to booking ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

