import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ShieldCheck, Heart, Leaf, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { OILS_IMAGE, TRUST_INDICATORS } from '../data/spaData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const [activePhilosophy, setActivePhilosophy] = useState<'touch' | 'botanicals' | 'atmosphere'>('touch');
  const sectionRef = useRef<HTMLDivElement>(null);
  const inlineTargetRef = useRef<HTMLSpanElement>(null);

  // Bounds state
  const [bounds, setBounds] = useState({ top: 50, bottom: 50, left: 50, right: 50, radius: 16 });
  const [isMeasured, setIsMeasured] = useState(false);

  // Scroll controller
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const text = "At Orchid Aura, every therapeutic touch is tailored to harmonize mind and body, utilizing pure organic botanicals, deep neuromuscular release, and a serene sanctuary atmosphere designed for cellular restoration.";
  const words = text.split(" ");

  const botanicalsIndex = words.findIndex((w) => w.includes("botanicals"));
  const firstHalf = words.slice(0, botanicalsIndex + 1);
  const secondHalf = words.slice(botanicalsIndex + 1);

  // Measure position relative to viewport
  useLayoutEffect(() => {
    const measure = () => {
      if (!inlineTargetRef.current) return;
      const rect = inlineTargetRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const top = (rect.top / vh) * 100;
      const bottom = ((vh - rect.bottom) / vh) * 100;
      const left = (rect.left / vw) * 100;
      const right = ((vw - rect.right) / vw) * 100;

      setBounds({ top, bottom, left, right, radius: 16 });
      setIsMeasured(true);
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Text Fade Controls (Fades out phase 1 text)
  const textOpacity = useTransform(scrollYProgress, [0.22, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.22, 0.35], [0, -20]);

  // CLIP PATH TRANSFORMATIONS (Hold at 0% all the way to end of scroll [1.0])
  const currentTop = useTransform(scrollYProgress, [0.25, 0.55, 1.0], [bounds.top, 0, 0]);
  const currentBottom = useTransform(scrollYProgress, [0.25, 0.55, 1.0], [bounds.bottom, 0, 0]);
  const currentLeft = useTransform(scrollYProgress, [0.25, 0.55, 1.0], [bounds.left, 0, 0]);
  const currentRight = useTransform(scrollYProgress, [0.25, 0.55, 1.0], [bounds.right, 0, 0]);
  const currentRadius = useTransform(scrollYProgress, [0.25, 0.45, 1.0], [16, 0, 0]);

  // Canvas stays visible from 0.25 to the end (1.0)
  const canvasOpacity = useTransform(scrollYProgress, [0.24, 0.25, 1.0], [0, 1, 1]);

  const clipPath = useTransform(
    [currentTop, currentRight, currentBottom, currentLeft, currentRadius],
    ([t, r, b, l, rad]) => `inset(${t}% ${r}% ${b}% ${l}% round ${rad}px)`
  );

  const innerImageScale = useTransform(scrollYProgress, [0.25, 0.55, 1.0], [1.15, 1.0, 1.0]);

  // Content Overlay Fade Controls (Stays fully opaque at 1 until end of scroll)
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.68, 1.0], [0, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0.55, 0.68, 1.0], [30, 0, 0]);

  return (
    <section id="about" ref={sectionRef} className="relative h-[400vh] bg-[#FAF8F5]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-16 pb-8 px-4 sm:px-6 md:px-10">
        
        {/* EXPANDING FULLSCREEN CANVAS - HOLDS FULLSCREEN UNTIL SCROLL END */}
        <motion.div
          style={{ 
            clipPath,
            opacity: isMeasured ? canvasOpacity : 0 
          }}
          className="absolute inset-0 w-full h-full z-20 overflow-hidden pointer-events-none will-change-[clip-path]"
        >
          <motion.img
            style={{ scale: innerImageScale }}
            src={OILS_IMAGE}
            alt="Organic spa botanicals full screen"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/50 z-10" />
        </motion.div>

        {/* PHASE 1: INITIAL TEXT REVEAL SECTION */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center z-10 w-full my-auto">
          
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F2ECE4] border border-[#C6A473]/30 text-[#A37B57] text-[11px] sm:text-xs font-jakarta font-medium tracking-wide mb-4 sm:mb-6 pointer-events-none shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Sanctuary Philosophy</span>
          </motion.div>

          <h2 className="font-playfair text-xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.4] sm:leading-[1.3] text-center flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2.5 gap-y-1.5 sm:gap-y-2">
            
            {firstHalf.map((word, i) => {
              const start = (i / words.length) * 0.20;
              const end = start + (1 / words.length) * 0.20;
              const color = useTransform(scrollYProgress, [start, end], ["#A37B57", "#222222"]);

              return (
                <motion.span
                  key={`first-${i}`}
                  style={{ opacity: textOpacity, color }}
                  className="inline-block transition-colors duration-150"
                >
                  {word}
                </motion.span>
              );
            })}

            {/* VISIBLE INLINE THUMBNAIL */}
            <motion.span
              ref={inlineTargetRef}
              style={{ opacity: textOpacity }}
              className="inline-block w-[90px] sm:w-[130px] lg:w-[150px] h-[28px] sm:h-[36px] lg:h-[42px] mx-1 align-middle shrink-0 rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={OILS_IMAGE}
                alt="Spa oils thumbnail"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.span>

            {secondHalf.map((word, i) => {
              const globalIndex = firstHalf.length + i;
              const start = (globalIndex / words.length) * 0.20;
              const end = start + (1 / words.length) * 0.20;
              const color = useTransform(scrollYProgress, [start, end], ["#A37B57", "#222222"]);

              return (
                <motion.span
                  key={`second-${i}`}
                  style={{ opacity: textOpacity, color }}
                  className="inline-block transition-colors duration-150"
                >
                  {word}
                </motion.span>
              );
            })}

          </h2>
        </div>

        {/* PHASE 2: OVERLAY CONTENT - REMAINS VISIBLE TO THE END */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 z-30 flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-y-auto pointer-events-auto"
        >
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto max-h-[88vh] overflow-y-auto lg:overflow-visible pr-1 sm:pr-0">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-jakarta font-medium tracking-wide">
                <Leaf className="w-3.5 h-3.5 text-white" />
                <span>Sanctuary Story & Craft</span>
              </div>

              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
                "In silence and intention, the body remembers how to heal itself."
              </h3>

              <p className="font-inter text-white/80 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                At Orchid Aura, we reject cookie-cutter spa menus. Before any therapist lays hands on your body, we assess posture, muscle tension vectors, stress breathing cycles, and skin hydration to craft a bio-individual journey.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-3 sm:pt-4 border-t border-white/15">
                {TRUST_INDICATORS.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <p className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-[#C6A473]">
                      {stat.value}
                    </p>
                    <p className="font-inter text-[11px] sm:text-xs text-white/70 font-light">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl text-white">
              
              <div className="flex flex-wrap items-center gap-2 border-b border-white/15 pb-4">
                {[
                  { id: 'touch', label: 'Mindful touch', icon: Heart },
                  { id: 'botanicals', label: 'Botanical purity', icon: Leaf },
                  { id: 'atmosphere', label: 'Sanctuary design', icon: ShieldCheck }
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activePhilosophy === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActivePhilosophy(item.id as any)}
                      className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-jakarta font-medium transition-all ${
                        isActive
                          ? 'bg-[#C6A473] text-black shadow-lg font-semibold'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2 sm:space-y-3 min-h-[75px] sm:min-h-[85px]">
                {activePhilosophy === 'touch' && (
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-jakarta text-sm sm:text-base font-semibold text-white">
                      Targeted myofascial & neuromuscular release
                    </h4>
                    <p className="font-inter text-xs sm:text-sm text-white/80 leading-relaxed">
                      Our master therapists undergo 500+ hours of physical biomechanics training. Every stroke is synchronized with your respiratory rhythm for maximum muscle melt.
                    </p>
                  </div>
                )}

                {activePhilosophy === 'botanicals' && (
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-jakarta text-sm sm:text-base font-semibold text-white">
                      100% Organic, zero synthetic preservatives
                    </h4>
                    <p className="font-inter text-xs sm:text-sm text-white/80 leading-relaxed">
                      We formulate small-batch botanical infusions daily using organic arnica, rose quartz micro-minerals, damask rose hydrosol, and therapeutic magnesium.
                    </p>
                  </div>
                )}

                {activePhilosophy === 'atmosphere' && (
                  <div className="space-y-1.5 sm:space-y-2">
                    <h4 className="font-jakarta text-sm sm:text-base font-semibold text-white">
                      Acoustic isolation & circadian lighting
                    </h4>
                    <p className="font-inter text-xs sm:text-sm text-white/80 leading-relaxed">
                      Every suite features acoustic sound dampening, heated travertine massage tables, and warm circadian lighting calibrated to reduce cortisol levels.
                    </p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                {[
                  "Certified holistic master therapists",
                  "Private soundproof treatment suites",
                  "Bespoke bio-individual consultation",
                  "Heated travertine & linen beds"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-inter">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C6A473] flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C6A473] hover:bg-[#b08e5e] text-black font-jakarta text-xs sm:text-sm font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
                >
                  <span>Reserve your sanctuary experience</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};