import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, X, RefreshCw } from 'lucide-react';
import { TREATMENTS } from '../data/spaData';
import { Treatment } from '../types';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatment: (treatment: Treatment) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, onSelectTreatment }) => {
  const [step, setStep] = useState(1);
  const [focus, setFocus] = useState('');
  const [pressure, setPressure] = useState('');
  const [duration, setDuration] = useState('');
  const [recommendedTreatment, setRecommendedTreatment] = useState<Treatment | null>(null);

  if (!isOpen) return null;

  const handleFinishQuiz = () => {
    // Select best treatment based on focus
    let match = TREATMENTS[0];
    if (focus.includes('Skin') || focus.includes('luminosity')) {
      match = TREATMENTS.find((t) => t.category === 'facials') || TREATMENTS[1];
    } else if (focus.includes('detox') || focus.includes('steam')) {
      match = TREATMENTS.find((t) => t.category === 'rituals') || TREATMENTS[3];
    } else if (pressure.includes('Heated')) {
      match = TREATMENTS.find((t) => t.category === 'thermal') || TREATMENTS[2];
    }
    setRecommendedTreatment(match);
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setFocus('');
    setPressure('');
    setDuration('');
    setRecommendedTreatment(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#F2ECE4] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#FAF8F5] text-[#666666] hover:text-[#222222] flex items-center justify-center font-bold"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2ECE4] text-[#A37B57] text-xs font-jakarta font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A473]" />
            <span>Personalized wellness concierge</span>
          </div>

          <h3 className="font-playfair text-2xl text-[#222222] font-normal">
            {step < 4 ? 'Find your bespoke sanctuary ritual' : 'Your recommended treatment match'}
          </h3>
        </div>

        {/* Step Indicator Bar */}
        {step < 4 && (
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  step >= i ? 'bg-[#A37B57]' : 'bg-[#F2ECE4]'
                }`}
              />
            ))}
          </div>
        )}

        {/* Step 1: Focus */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="font-jakarta text-sm font-semibold text-[#222222]">
              1. What is your primary physical or mental goal today?
            </p>
            <div className="space-y-2.5">
              {[
                "Targeted muscle tension & posture relief",
                "Deep nervous system reset & stress reduction",
                "Skin luminosity, hydration & bio-sculpting",
                "Full-body botanical steam & thermal detox"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFocus(option);
                    setStep(2);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-inter ${
                    focus === option
                      ? 'bg-[#F2ECE4] border-[#A37B57] text-[#222222] font-medium'
                      : 'bg-[#FAF8F5] border-[#F2ECE4] text-[#666666] hover:border-[#C6A473]'
                  }`}
                >
                  <span>{option}</span>
                  <ArrowRight className="w-4 h-4 text-[#A37B57]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Pressure */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="font-jakarta text-sm font-semibold text-[#222222]">
              2. What bodywork intensity do you prefer?
            </p>
            <div className="space-y-2.5">
              {[
                "Firm neuromuscular & deep muscle pressure",
                "Medium therapeutic glide with warm herbal compresses",
                "Heated volcanic basalt stones & rhythmic soothing touch"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setPressure(option);
                    setStep(3);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-inter ${
                    pressure === option
                      ? 'bg-[#F2ECE4] border-[#A37B57] text-[#222222] font-medium'
                      : 'bg-[#FAF8F5] border-[#F2ECE4] text-[#666666] hover:border-[#C6A473]'
                  }`}
                >
                  <span>{option}</span>
                  <ArrowRight className="w-4 h-4 text-[#A37B57]" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs text-[#666666] underline pt-2"
            >
              ← Back to step 1
            </button>
          </div>
        )}

        {/* Step 3: Duration */}
        {step === 3 && (
          <div className="space-y-4">
            <p className="font-jakarta text-sm font-semibold text-[#222222]">
              3. How much time do you want to dedicate to your session?
            </p>
            <div className="space-y-2.5">
              {[
                "60 minutes — Focused rejuvenation",
                "75 minutes — Ideal balance of bodywork & recovery",
                "90 minutes — Deep immersive sanctuary journey"
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setDuration(option);
                    handleFinishQuiz();
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-inter ${
                    duration === option
                      ? 'bg-[#F2ECE4] border-[#A37B57] text-[#222222] font-medium'
                      : 'bg-[#FAF8F5] border-[#F2ECE4] text-[#666666] hover:border-[#C6A473]'
                  }`}
                >
                  <span>{option}</span>
                  <ArrowRight className="w-4 h-4 text-[#A37B57]" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="text-xs text-[#666666] underline pt-2"
            >
              ← Back to step 2
            </button>
          </div>
        )}

        {/* Step 4: Recommendation Result */}
        {step === 4 && recommendedTreatment && (
          <div className="space-y-6 pt-2 animate-fadeIn">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#F2ECE4] flex items-center gap-4">
              <img
                src={recommendedTreatment.image}
                alt={recommendedTreatment.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-jakarta uppercase font-bold text-[#A37B57]">
                  98% Match for your needs
                </span>
                <h4 className="font-playfair text-lg text-[#222222] font-semibold truncate">
                  {recommendedTreatment.name}
                </h4>
                <p className="text-xs font-jakarta text-[#666666]">
                  ${recommendedTreatment.price} • {recommendedTreatment.durationMinutes} mins
                </p>
              </div>
            </div>

            <p className="font-inter text-xs sm:text-sm text-[#666666] leading-relaxed">
              Based on your selection of <span className="text-[#222222] font-medium">"{focus}"</span>, our head practitioner recommends this formula for optimal physical restoration and tension release.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#F2ECE4] text-xs font-jakarta font-medium text-[#666666] hover:bg-[#FAF8F5]"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Retake quiz</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectTreatment(recommendedTreatment);
                }}
                className="flex-1 bg-[#A37B57] hover:bg-[#8c6746] text-white font-jakarta text-xs sm:text-sm font-medium py-3 rounded-full text-center shadow-md transition-all"
              >
                Book this recommended ritual ↗
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
