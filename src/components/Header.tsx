import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenQuiz?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo - Standalone on Left */}
        <a href="#" className="flex items-center group transition-transform hover:scale-105 active:scale-95 shrink-0">
          <img 
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/OR.png" 
            alt="ORCHID AURA logo"
            referrerPolicy="no-referrer"
            className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-lg"
          />
        </a>

        {/* Right Side Container: Nav Links + Book Your Session CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Nav Links - Glassy Pill container ONLY around nav menus */}
          <nav className="hidden md:flex items-center gap-6 px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium tracking-wide bg-black/25 backdrop-blur-md border border-white/20 text-white shadow-md">
            {[
            
              { label: 'About us', href: '#about' },
              { label: 'Treatments', href: '#services' },
              { label: 'Pricing', href: '#' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Journal', href: '#journal' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Book Your Session Button - Hidden on mobile, visible on sm+ screens */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:flex items-center gap-2.5 bg-white hover:bg-[#FAF8F5] text-[#222222] text-xs sm:text-sm font-semibold pl-4 sm:pl-5 pr-2 sm:pr-2.5 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform active:scale-95 border border-[#C6A473]/30 group"
          >
            <span>Book your session</span>
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full transition-colors bg-black/30 backdrop-blur-md border border-white/20 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 bg-[#FAF8F5]/95 backdrop-blur-xl border border-[#C6A473]/30 rounded-3xl p-6 shadow-2xl space-y-4 font-jakarta animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#222222] font-medium py-2 border-b border-[#F2ECE4]"
            >
              About us
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#222222] font-medium py-2 border-b border-[#F2ECE4]"
            >
              Treatments & services
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#222222] font-medium py-2 border-b border-[#F2ECE4]"
            >
              Guest stories
            </a>
            <a
              href="#journal"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#222222] font-medium py-2 border-b border-[#F2ECE4]"
            >
              Sanctuary journal
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#222222] font-medium py-2 border-b border-[#F2ECE4]"
            >
              Location & contact
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center py-3 bg-[#A37B57] text-white font-medium text-sm rounded-full shadow-md hover:bg-[#8c6746] transition-colors"
            >
              Book your session ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
