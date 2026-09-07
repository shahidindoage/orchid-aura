import React, { useState } from 'react';
import { Sparkles, Instagram, Facebook, Twitter, Mail, Check, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#161412] border-t border-[#2B2621] pt-20 pb-12 relative overflow-hidden text-white">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A473]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A37B57]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="inline-block group transition-transform hover:scale-105 active:scale-95">
              <img 
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/OR.png" 
                alt="ORCHID AURA logo"
                referrerPolicy="no-referrer"
                className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-md"
              />
            </a>

            <p className="font-inter text-sm text-[#B0A89C] font-light leading-relaxed max-w-sm">
              A bespoke luxury spa & wellness sanctuary dedicated to body alignment, nervous system reset, and organic cellular rejuvenation.
            </p>

            <div className="space-y-1.5 text-xs font-jakarta text-[#8E867A]">
              <p>742 Serenity Way, Beverly Hills Sanctuary District, CA</p>
              <p>concierge@orchidaura.com • +971 55 469 0739</p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-jakarta text-xs font-semibold uppercase tracking-wider text-[#D4B384]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-inter text-[#B0A89C]">
              <li>
                <a href="#about" className="hover:text-[#D4B384] transition-colors">About our sanctuary</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4B384] transition-colors">Treatments & rituals</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D4B384] transition-colors">Guest reflections</a>
              </li>
              <li>
                <a href="#sanctuary" className="hover:text-[#D4B384] transition-colors">Therapists & suites</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4B384] transition-colors">Sanctuary location</a>
              </li>
            </ul>
          </div>

          {/* Treatments Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-jakarta text-xs font-semibold uppercase tracking-wider text-[#D4B384]">
              Signature rituals
            </h4>
            <ul className="space-y-2.5 text-sm font-inter text-[#B0A89C]">
              <li><span className="cursor-default">Deep tissue bio-recovery</span></li>
              <li><span className="cursor-default">Rose quartz facial</span></li>
              <li><span className="cursor-default">Thermal stone journey</span></li>
              <li><span className="cursor-default">Himalayan steam ritual</span></li>
              <li><span className="cursor-default">Organic CBD massage</span></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-jakarta text-xs font-semibold uppercase tracking-wider text-[#D4B384]">
              Sanctuary journal & invitations
            </h4>
            <p className="font-inter text-xs text-[#B0A89C] leading-relaxed">
              Subscribe to receive private invitations for seasonal wellness retreats and botanical skincare releases.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-[#24201C] border border-[#38322C] rounded-full px-4 py-2.5 text-xs font-jakarta text-white placeholder-[#8E867A] focus:outline-none focus:ring-2 focus:ring-[#D4B384] flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#A37B57] hover:bg-[#C6A473] text-white p-2.5 rounded-full transition-all shadow-sm"
                  title="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="bg-[#24201C] p-3 rounded-2xl flex items-center gap-2 text-xs font-jakarta text-[#D4B384] border border-[#38322C]">
                <Check className="w-4 h-4 text-[#C6A473]" />
                <span>Thank you for subscribing to our journal.</span>
              </div>
            )}

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { name: 'Instagram', icon: Instagram },
                { name: 'Facebook', icon: Facebook },
                { name: 'Twitter', icon: Twitter }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href="#"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-full bg-[#24201C] border border-[#38322C] hover:bg-[#A37B57] hover:border-[#A37B57] text-[#B0A89C] hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-[#2B2621] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-[#8E867A]">
          <p>© {new Date().getFullYear()} ORCHID AURA Spa & Wellness Sanctuary. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D4B384] transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-[#D4B384] transition-colors">Terms of sanctuary</a>
            <a href="#" className="hover:text-[#D4B384] transition-colors">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
