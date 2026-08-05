export interface Treatment {
  id: string;
  name: string;
  category: 'massages' | 'facials' | 'thermal' | 'rituals';
  tagline: string;
  description: string;
  durationMinutes: number;
  price: number;
  ingredients: string[];
  benefits: string[];
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string;
  avatar: string;
  treatmentTaken: string;
  rating: number;
  verified: boolean;
}

export interface PressBrand {
  name: string;
  subtitle?: string;
}

export interface BookingFormData {
  treatmentId: string;
  date: string;
  time: string;
  guests: number;
  therapistPreference: string;
  fullName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

export interface WellnessQuizState {
  primaryGoal: string;
  pressurePreference: string;
  durationPreference: string;
  sensoryPreference: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  tags: string[];
  featured?: boolean;
}

