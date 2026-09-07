import React, { useState } from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight, Send, Check, Calendar, Compass, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Swedish Massage', // Changed default to match your options
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage(null);

    try {
      const response = await fetch('send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormSubmitted(true);
      } else {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-[#FAF6F0] relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-[#C6A473]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A37B57]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C6A473]/30 text-[#A37B57] text-xs font-jakarta font-medium tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A473]" />
            <span>Sanctuary concierge & reservations</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal leading-[1.18] tracking-tight">
            Begin your journey to restored vitality.
          </h2>

          <p className="font-inter text-[#666666] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Our dedicated concierge team is available seven days a week to curate bespoke appointments, private suite reservations, and bio-individual therapy inquiries.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Sanctuary Details Card */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#F2ECE4] shadow-sm space-y-7 hover:shadow-md transition-shadow duration-300">
              
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#F2ECE4] text-[#A37B57] flex items-center justify-center shrink-0 group-hover:bg-[#A37B57] group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-jakarta uppercase tracking-wider text-[#A37B57] font-semibold">
                    Sanctuary Address
                  </span>
                  <p className="font-playfair text-lg text-[#222222] font-medium leading-snug">
                    742 Serenity Way
                  </p>
                  <p className="font-inter text-xs text-[#666666] leading-relaxed">
                    Beverly Hills Sanctuary District, CA 90210
                  </p>
                  <div className="inline-flex items-center gap-1.5 pt-1.5 text-[11px] font-jakarta text-[#A37B57] font-medium">
                    <Compass className="w-3.5 h-3.5 text-[#C6A473]" />
                    <span>Complimentary private valet parking</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#F2ECE4]" />

              {/* Hours */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#F2ECE4] text-[#A37B57] flex items-center justify-center shrink-0 group-hover:bg-[#A37B57] group-hover:text-white transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-2 w-full">
                  <span className="text-[11px] font-jakarta uppercase tracking-wider text-[#A37B57] font-semibold">
                    Operating Hours
                  </span>
                  <div className="space-y-2 text-xs font-inter text-[#555555]">
                    <div className="flex justify-between items-center bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#F2ECE4]">
                      <span>Monday – Friday</span>
                      <span className="font-semibold text-[#222222] font-jakarta">09:00 AM – 10:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#FAF8F5] px-3.5 py-2 rounded-xl border border-[#F2ECE4]">
                      <span>Saturday – Sunday</span>
                      <span className="font-semibold text-[#222222] font-jakarta">08:30 AM – 10:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#F2ECE4]" />

              {/* Direct Contacts */}
              <a href="https://wa.me/971554690739" target="_blank" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#F2ECE4] text-[#A37B57] flex items-center justify-center shrink-0 group-hover:bg-[#A37B57] group-hover:text-white transition-all duration-300">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-jakarta uppercase tracking-wider text-[#A37B57] font-semibold">
                    Direct Concierge Desk
                  </span>
                  <p className="font-jakarta text-sm font-semibold text-[#222222]">
                    +971 55 469 0739
                  </p>
                </div>
              </a>

            </div>

            {/* Quick Reservation Banner Card */}
            <div className="bg-gradient-to-br from-[#222222] via-[#2B2621] to-[#1A1816] text-white rounded-3xl p-8 shadow-xl space-y-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6A473]/15 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#D4B384] text-[11px] font-jakarta font-medium backdrop-blur-md">
                <Calendar className="w-3.5 h-3.5" />
                <span>Instant Online Reservation</span>
              </div>

              <h3 className="font-playfair text-2xl font-normal text-white leading-tight">
                Ready to experience pure stillness?
              </h3>

              <p className="font-inter text-xs text-white/75 font-light leading-relaxed">
                Reserve your preferred suite, ritual, and therapist online in less than two minutes with real-time availability.
              </p>

              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#A37B57] hover:bg-[#C6A473] text-white font-jakarta text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-98"
              >
                <span>Book your appointment</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#F2ECE4] shadow-sm space-y-8 relative">
            <div className="space-y-2">
              <span className="text-[11px] font-jakarta uppercase tracking-widest text-[#A37B57] font-semibold">
                Direct Inquiry
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl text-[#222222] font-medium">
                Send a message to our concierge
              </h3>
              <p className="font-inter text-xs sm:text-sm text-[#666666] font-light leading-relaxed">
                Whether you have questions about custom therapy packages, private membership, or corporate wellness retreats, we invite you to connect.
              </p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-jakarta font-semibold text-[#222222]">
                      Your full name <span className="text-[#A37B57]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#F2ECE4] focus:border-[#A37B57] focus:bg-white rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-jakarta text-[#222222] placeholder-[#888888]/60 focus:outline-none focus:ring-2 focus:ring-[#A37B57]/20 transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-jakarta font-semibold text-[#222222]">
                      Email address <span className="text-[#A37B57]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#F2ECE4] focus:border-[#A37B57] focus:bg-white rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-jakarta text-[#222222] placeholder-[#888888]/60 focus:outline-none focus:ring-2 focus:ring-[#A37B57]/20 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-jakarta font-semibold text-[#222222]">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#F2ECE4] focus:border-[#A37B57] focus:bg-white rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-jakarta text-[#222222] placeholder-[#888888]/60 focus:outline-none focus:ring-2 focus:ring-[#A37B57]/20 transition-all duration-200"
                    />
                  </div>

                  {/* Interest Area */}
                  <div className="space-y-2">
                    <label className="block text-xs font-jakarta font-semibold text-[#222222]">
                      Type of Service
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#F2ECE4] focus:border-[#A37B57] focus:bg-white rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-jakarta text-[#222222] focus:outline-none focus:ring-2 focus:ring-[#A37B57]/20 transition-all duration-200 cursor-pointer"
                    >
                      <option value="Swedish Massage">Swedish Massage</option>
                      <option value="Thai Massage">Thai Massage</option>
                      <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                      <option value="Sports Massage">Sports Massage</option>
                      <option value="Lymphatic Drainage Massage">Lymphatic Drainage Massage</option>
                      <option value="Aromatherapy Massage">Aromatherapy Massage</option>
                      <option value="Madero Therapy Massage">Madero Therapy Massage</option>
                      <option value="Foot Reflexology Massage">Foot Reflexology Massage</option>
                      <option value="Back & Shoulder Massage">Back & Shoulder Massage</option>
                      <option value="Prenatal Massage">Prenatal Massage</option>
                      <option value="Postnatal Massage">Postnatal Massage</option>
                      <option value="Camrose Signature Massage">Camrose Signature Massage</option>
                      <option value="Hot Stone Massage">Hot Stone Massage</option>
                      <option value="Couple Massage">Couple Massage</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-jakarta font-semibold text-[#222222]">
                    How may our concierge assist you? <span className="text-[#A37B57]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your wellness goals, preferred dates, or special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#F2ECE4] focus:border-[#A37B57] focus:bg-white rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-jakarta text-[#222222] placeholder-[#888888]/60 focus:outline-none focus:ring-2 focus:ring-[#A37B57]/20 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Error Message Display */}
                {errorMessage && (
                  <div className="text-xs text-red-500 font-jakarta">
                    {errorMessage}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#222222] hover:bg-[#A37B57] text-white font-jakarta text-xs sm:text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-4 h-4 text-[#C6A473]" />
                      </>
                    )}
                  </button>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-jakarta text-[#888888]">
                    <ShieldCheck className="w-4 h-4 text-[#A37B57]" />
                    <span>Your privacy is strictly honored</span>
                  </div>
                </div>
              </form>
            ) : (
              <div className="py-14 px-8 text-center space-y-5 bg-[#FAF8F5] rounded-3xl border border-[#F2ECE4]">
                <div className="w-14 h-14 bg-[#A37B57] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="font-playfair text-2xl text-[#222222] font-medium">
                  Inquiry received with gratitude
                </h4>
                <p className="font-inter text-xs sm:text-sm text-[#666666] leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#222222]">{formData.name}</span>. Our concierge team will review your message regarding <span className="text-[#A37B57] font-medium">{formData.serviceInterest}</span> and respond within four business hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', serviceInterest: 'Swedish Massage', message: '' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-jakarta text-[#A37B57] hover:text-[#222222] font-semibold transition-colors"
                  >
                    <span>Send another inquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};