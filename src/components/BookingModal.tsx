import React, { useState } from 'react';
import { X, Calendar, Clock, User, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { TREATMENTS } from '../data/spaData';
import { Treatment, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTreatment: Treatment | null;
  onBookingConfirmed: (details: BookingFormData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedTreatment,
  onBookingConfirmed,
}) => {
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>(
    selectedTreatment ? selectedTreatment.id : TREATMENTS[0].id
  );
  const [date, setDate] = useState<string>('2026-08-10');
  const [time, setTime] = useState<string>('14:00');
  const [guests, setGuests] = useState<number>(1);
  const [therapist, setTherapist] = useState<string>('No preference — Senior Master Therapist');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentTreatment = TREATMENTS.find((t) => t.id === activeTreatmentId) || TREATMENTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: BookingFormData = {
      treatmentId: currentTreatment.id,
      date,
      time,
      guests,
      therapistPreference: therapist,
      fullName,
      email,
      phone,
      specialRequests,
    };
    setIsSubmitted(true);
    onBookingConfirmed(data);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 space-y-6 shadow-2xl border border-[#F2ECE4] relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#FAF8F5] text-[#666666] hover:text-[#222222] flex items-center justify-center font-bold"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Modal Title */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2ECE4] text-[#A37B57] text-xs font-jakarta font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reserve your sanctuary suite</span>
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#222222]">
                Book your session
              </h3>
            </div>

            {/* Treatment Selector */}
            <div className="space-y-2">
              <label className="block font-jakarta text-xs font-semibold text-[#222222]">
                Select treatment
              </label>
              <select
                value={activeTreatmentId}
                onChange={(e) => setActiveTreatmentId(e.target.value)}
                className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} (${t.price} • {t.durationMinutes} mins)
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Treatment Preview Box */}
            <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#F2ECE4] flex items-center justify-between text-xs font-jakarta">
              <div className="space-y-0.5">
                <p className="font-semibold text-[#222222]">{currentTreatment.name}</p>
                <p className="text-[#666666]">{currentTreatment.tagline}</p>
              </div>
              <div className="text-right">
                <p className="font-playfair text-base font-bold text-[#A37B57]">${currentTreatment.price}</p>
                <p className="text-[#666666]">{currentTreatment.durationMinutes} mins</p>
              </div>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-jakarta text-xs font-semibold text-[#222222]">
                  Preferred date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-jakarta text-xs font-semibold text-[#222222]">
                  Preferred time slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                >
                  {['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM'].map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Guests & Therapist Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block font-jakarta text-xs font-semibold text-[#222222]">
                  Number of guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                >
                  <option value={1}>1 Guest (Solo Sanctuary Suite)</option>
                  <option value={2}>2 Guests (Couples Sanctuary Suite)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-jakarta text-xs font-semibold text-[#222222]">
                  Therapist preference
                </label>
                <select
                  value={therapist}
                  onChange={(e) => setTherapist(e.target.value)}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                >
                  <option value="No preference — Senior Master Therapist">First available Senior Master</option>
                  <option value="Female Practitioner">Female practitioner</option>
                  <option value="Male Practitioner">Male practitioner</option>
                  <option value="Elena Rostova (Master Somatic)">Elena Rostova (Master Somatic)</option>
                  <option value="David Vance (Neuromuscular Specialist)">David Vance (Neuromuscular)</option>
                </select>
              </div>
            </div>

            {/* Guest Personal Information */}
            <div className="space-y-4 pt-2 border-t border-[#F2ECE4]">
              <h4 className="font-jakarta text-xs font-semibold text-[#222222] uppercase tracking-wider">
                Guest contact details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name *"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone number *"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                />
                <input
                  type="text"
                  placeholder="Special requests or health notes (optional)"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-[#F2ECE4] border border-[#C6A473]/30 rounded-2xl px-4 py-3 text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-[#666666] font-inter">
                <ShieldCheck className="w-4 h-4 text-[#C6A473]" />
                <span>Zero charge today • Pay at sanctuary</span>
              </div>

              <button
                type="submit"
                className="bg-[#A37B57] hover:bg-[#8c6746] text-white font-jakarta text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Confirm reservation ↗
              </button>
            </div>

          </form>
        ) : (
          /* Confirmation Success View */
          <div className="py-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 bg-[#F2ECE4] text-[#A37B57] rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-playfair text-3xl text-[#222222]">
                Reservation confirmed!
              </h3>
              <p className="font-inter text-sm text-[#666666] max-w-md mx-auto">
                Thank you, <span className="font-semibold text-[#222222]">{fullName}</span>. Your sanctuary suite has been reserved for <span className="font-semibold text-[#A37B57]">{currentTreatment.name}</span>.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#F2ECE4] text-left max-w-md mx-auto space-y-3 font-jakarta text-xs text-[#666666]">
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span>Date & time</span>
                <span className="font-semibold text-[#222222]">{date} at {time}</span>
              </div>
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span>Sanctuary suite</span>
                <span className="font-semibold text-[#222222]">{guests > 1 ? 'Couples Suite' : 'Solo Sanctuary Suite'}</span>
              </div>
              <div className="flex justify-between border-b border-[#F2ECE4] pb-2">
                <span>Therapist</span>
                <span className="font-semibold text-[#222222]">{therapist}</span>
              </div>
              <div className="flex justify-between pt-1 font-semibold text-sm text-[#A37B57]">
                <span>Total amount (payable at spa)</span>
                <span>${currentTreatment.price * guests}</span>
              </div>
            </div>

            <p className="text-xs text-[#666666] font-inter">
              A confirmation summary has been sent to <span className="font-medium text-[#222222]">{email}</span>. Our concierge team will contact you prior to arrival.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#A37B57] text-white font-jakarta text-xs sm:text-sm font-medium px-8 py-3 rounded-full hover:bg-[#8c6746] transition-all"
            >
              Back to sanctuary homepage
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
