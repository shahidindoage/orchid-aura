import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Blogs } from './components/Blogs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QuizModal } from './components/QuizModal';
import { Treatment, BookingFormData } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const handleOpenBooking = (treatment?: Treatment) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    setIsBookingOpen(true);
  };

  const handleBookingConfirmed = (details: BookingFormData) => {
    console.log('Booking details submitted:', details);
  };

  const handleExploreTreatments = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#222222] font-inter antialiased selection:bg-[#C6A473]/30">
      
      {/* Top Floating Glass Pill Navigation Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Sanctuary Content */}
      <main>
        {/* Hero Section matching exact composition of reference image */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreTreatments={handleExploreTreatments}
        />

        {/* Editorial Brand Story & Philosophy */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* Bespoke Treatment Menu & Editorial Service Layouts */}
        <Services
          onSelectTreatment={(t) => handleOpenBooking(t)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Editorial Guest Reflections & Reviews */}
        <Testimonials />

        {/* Sanctuary Journal & Educational Blogs */}
        <Blogs onOpenBooking={() => handleOpenBooking()} />

        {/* Sanctuary Location, Concierge & Welcoming Inquiry Form */}
        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Minimal Elegant Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedTreatment={selectedTreatment}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Interactive Wellness Matcher Quiz Modal */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectTreatment={(t) => handleOpenBooking(t)}
      />

      {/* Floating Icon-Only Treatment Quiz Action Button */}
      <button
        onClick={() => setIsQuizOpen(true)}
        aria-label="Take treatment quiz"
        title="Take treatment quiz"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#A37B57] hover:bg-[#8c6746] text-white shadow-2xl shadow-black/20 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40 backdrop-blur-md group"
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAF8F5] group-hover:rotate-12 transition-transform duration-300 fill-[#C6A473]/40" />
      </button>

    </div>
  );
}


