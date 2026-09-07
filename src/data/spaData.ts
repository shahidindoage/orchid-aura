import { Treatment, Testimonial, PressBrand } from '../types';
import heroImage from '../assets/images/hero_spa_massage_1785908885391.jpg';
import oilsImage from '../assets/images/spa_botanical_oils_1785908904948.jpg';

export const HERO_IMAGE = heroImage;
export const OILS_IMAGE = oilsImage;

export const PRESS_BRANDS: PressBrand[] = [
  { name: "THE OPRAH MAGAZINE" },
  { name: "WSJ" },
  { name: "Revoza" },
  { name: "NEW YORK", subtitle: "UNITED STATES OF AMERICA" },
  { name: "QUANTUM" },
  { name: "VOGUE" },
  { name: "Refinery29" }
];

// export const TREATMENTS: Treatment[] = [
//   {
//     id: "deep-tissue-restorative",
//     name: "Deep tissue bio-recovery massage",
//     category: "massages",
//     tagline: "Targeted neuromuscular release & posture alignment",
//     description: "Designed to penetrate deeper layers of muscle tissue, releasing chronic tension, melting stiffness, and restoring full physical mobility using warm herbal compress therapy.",
//     durationMinutes: 75,
//     price: 240,
//     ingredients: ["Arnica flower balm", "Wild marjoram", "Hypericum infusion", "Thermal basalt stone"],
//     benefits: ["Alleviates chronic spinal tension", "Accelerates muscle recovery", "Improves circulation & posture"],
//     image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
//     popular: true
//   },
//   {
//     id: "botanical-rose-quartz-facial",
//     name: "Rose quartz cellular radiance facial",
//     category: "facials",
//     tagline: "Lymphatic sculpting with micro-refined rose quartz",
//     description: "A transformative facial ritual utilizing cold-pressed damask rose essence, hyaluronic bio-peptides, and sculpted rose quartz stones to contour features and revive youthful luminosity.",
//     durationMinutes: 60,
//     price: 210,
//     ingredients: ["Organic Damask rose hydrosol", "Sea kelp bio-ferment", "Rose quartz rollers", "CoQ10 serum"],
//     benefits: ["Sculpts facial contouring", "Deeply hydrates skin matrix", "Reduces puffiness & fatigue"],
//     image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
//     popular: true
//   },
//   {
//     id: "thermal-basalt-stone-journey",
//     name: "Volcanic basalt thermal stone journey",
//     category: "thermal",
//     tagline: "Deep warmth infusion with volcanic mineral stones",
//     description: "Smooth heated volcanic stones are placed along key energy meridian centers, allowing soothing heat to melt deep muscular contraction while nourishing essential oils calm the nervous system.",
//     durationMinutes: 90,
//     price: 280,
//     ingredients: ["Basalt stone matrix", "Sandlewood oil", "Warm coconut lipid nectar", "Vetiver mist"],
//     benefits: ["Calms parasympathetic nervous system", "Melts severe muscle stiffness", "Enhances restorative sleep"],
//     image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
//     popular: false
//   },
//   {
//     id: "sacred-himalayan-steam-awakening",
//     name: "Himalayan salt & cedar steam ritual",
//     category: "rituals",
//     tagline: "Full-body botanical exfoliation & aromatherapy bath",
//     description: "An immersive multi-sensory journey featuring hand-harvested pink salt exfoliation, aromatic cedarwood hydrotherapy steam, and a calming warm oil scalp massage.",
//     durationMinutes: 90,
//     price: 310,
//     ingredients: ["Pink Himalayan salt crystal", "Atlas cedarwood oil", "Warm jojoba oil", "Chamomile steam"],
//     benefits: ["Purifies skin & respiratory channels", "Stimulates lymphatic detox", "Induces profound stillness"],
//     image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80",
//     popular: true
//   },
//   {
//     id: "cbd-herbal-muscle-soothe",
//     name: "Organic CBD & magnesium therapeutic massage",
//     category: "massages",
//     tagline: "Anti-inflammatory pain relief & nervous system reset",
//     description: "Infused with full-spectrum organic CBD and concentrated magnesium oil, this massage dissipates joint discomfort, calms nerve firing, and promotes cellular restoration.",
//     durationMinutes: 75,
//     price: 260,
//     ingredients: ["Full-spectrum organic CBD 1000mg", "Magnesium chloride", "Eucalyptus leaf extract", "Lavender"],
//     benefits: ["Relieves targeted localized pain", "Promotes muscle relaxation", "Reduces stress cortisol levels"],
//     image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
//     popular: false
//   },
//   {
//     id: "sound-bath-vibrational-therapy",
//     name: "Acoustic sound bath & restorative alignment",
//     category: "rituals",
//     tagline: "Resonant quartz bowl therapy & subtle body tune",
//     description: "Immerse in pure vibrational frequencies produced by alchemy crystal bowls and gong resonance, combined with delicate cranial-sacral touch to clear mental overload.",
//     durationMinutes: 60,
//     price: 190,
//     ingredients: ["Alchemy quartz bowl resonance", "Frankincense resin vapor", "Silk weighted eye pillows"],
//     benefits: ["Synchronizes brainwave states (Theta)", "Relieves mental exhaustion", "Enhances deep clarity"],
//     image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
//     popular: false
//   }
// ];


export const TREATMENTS: Treatment[] = [
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    category: "massages",
    tagline: "Gentle relaxation with flowing full-body techniques",
    description:
      "A relaxing full-body massage using flowing strokes and gentle-to-moderate pressure to ease everyday tension, encourage relaxation, and leave the body feeling refreshed.",
    durationMinutes: 60,
    price: 350,
    options: [
      { durationMinutes: 90, price: 450 }
    ],
    ingredients: [],
    benefits: [
      "Promotes deep relaxation",
      "Eases everyday muscle tension",
      "Leaves the body feeling refreshed"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-arina-krasnikova-6663371.jpg",
    popular: true
  },

  {
    id: "thai-massage",
    name: "Thai Massage",
    category: "massages",
    tagline: "Traditional assisted stretching and pressure techniques",
    description:
      "A traditional Thai-inspired massage combining focused pressure and assisted stretching techniques to help release tension and improve overall flexibility and relaxation.",
    durationMinutes: 60,
    price: 350,
    ingredients: [],
    benefits: [
      "Helps release muscle tension",
      "Supports flexibility",
      "Promotes relaxation"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-tima-miroshnichenko-6188042.jpg",
    popular: false
  },

  {
    id: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    category: "massages",
    tagline: "Focused pressure for deeper muscle tension",
    description:
      "A targeted massage using deeper pressure to work through areas of persistent muscle tension and stiffness, helping the body feel looser and more comfortable.",
    durationMinutes: 60,
    price: 400,
    options: [
      { durationMinutes: 90, price: 500 }
    ],
    ingredients: [],
    benefits: [
      "Targets deeper muscle tension",
      "Helps ease stiffness",
      "Supports muscle relaxation"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-koolshooters-6628690.jpg",
    popular: true
  },

  {
    id: "sports-massage",
    name: "Sports Massage",
    category: "massages",
    tagline: "Targeted massage for active bodies",
    description:
      "A focused massage designed for active lifestyles, concentrating on areas of muscular tightness and physical fatigue to support recovery and comfortable movement.",
    durationMinutes: 60,
    price: 400,
    options: [
      { durationMinutes: 90, price: 500 }
    ],
    ingredients: [],
    benefits: [
      "Helps relieve muscular tightness",
      "Supports post-activity recovery",
      "Promotes comfortable movement"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-arina-krasnikova-6663361.jpg",
    popular: false
  },

  {
    id: "lymphatic-drainage-massage",
    name: "Lymphatic Drainage Massage",
    category: "massages",
    tagline: "Gentle rhythmic techniques for a lighter feeling",
    description:
      "A gentle massage using light, rhythmic movements designed to encourage relaxation and support the body's natural lymphatic flow.",
    durationMinutes: 60,
    price: 450,
    options: [
      { durationMinutes: 90, price: 450 }
    ],
    ingredients: [],
    benefits: [
      "Encourages gentle relaxation",
      "Supports natural lymphatic flow",
      "Creates a lighter, refreshed feeling"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-anntarazevich-6560289.jpg",
    popular: false
  },

  {
    id: "aromatherapy-massage",
    name: "Aromatherapy Massage",
    category: "massages",
    tagline: "Relaxing massage enhanced with aromatic oils",
    description:
      "A soothing massage experience combining relaxing massage techniques with aromatic oils to create a calming and restorative spa experience.",
    durationMinutes: 60,
    price: 450,
    options: [
      { durationMinutes: 90, price: 450 }
    ],
    ingredients: [],
    benefits: [
      "Promotes relaxation",
      "Helps ease everyday tension",
      "Creates a calming sensory experience"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-alesiakozik-7795826.jpg",
    popular: true
  },

  {
    id: "madero-therapy-massage",
    name: "Madero Therapy Massage",
    category: "massages",
    tagline: "Wooden-tool massage for targeted bodywork",
    description:
      "A specialized body massage using traditional wooden massage tools and targeted techniques to work on areas of tension while creating a deeply relaxing treatment experience.",
    durationMinutes: 60,
    price: 450,
    ingredients: [],
    benefits: [
      "Provides targeted bodywork",
      "Helps release muscular tension",
      "Promotes relaxation"
    ],
    image:
      "http://camrose.ae/wp-content/uploads/2025/07/pexels-karolina-grabowska-6629611.jpg",
    popular: false
  },

  {
    id: "foot-reflexology-massage",
    name: "Foot Reflexology Massage",
    category: "massages",
    tagline: "Focused foot therapy for deep relaxation",
    description:
      "A focused foot treatment using pressure and massage techniques to help relieve foot tension and provide a relaxing sense of overall comfort.",
    durationMinutes: 60,
    price: 350,
    ingredients: [],
    benefits: [
      "Relieves foot tension",
      "Promotes relaxation",
      "Helps refresh tired feet"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-anete-lusina-5240641.jpg",
    popular: false
  },

  {
    id: "back-shoulder-massage",
    name: "Back & Shoulder Massage",
    category: "massages",
    tagline: "Focused relief for back and shoulder tension",
    description:
      "A targeted massage concentrating on the back, shoulders, and surrounding areas to help release built-up tension and restore a more relaxed feeling.",
    durationMinutes: 60,
    price: 350,
    ingredients: [],
    benefits: [
      "Targets back tension",
      "Relaxes tight shoulders",
      "Promotes upper-body comfort"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-dashamak-10894308.jpg",
    popular: false
  },

  {
    id: "prenatal-massage",
    name: "Prenatal Massage",
    category: "massages",
    tagline: "Gentle relaxation designed for pregnancy",
    description:
      "A gentle and comforting massage experience designed around the needs of expectant mothers, focusing on relaxation and areas of everyday muscular tension.",
    durationMinutes: 60,
    price: 450,
    ingredients: [],
    benefits: [
      "Promotes relaxation",
      "Helps ease everyday muscular tension",
      "Provides a comforting spa experience"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-jonathanborba-19666196.jpg",
    popular: false
  },

  {
    id: "postnatal-massage",
    name: "Postnatal Massage",
    category: "massages",
    tagline: "Restorative relaxation for new mothers",
    description:
      "A gentle, restorative massage created to provide comfort and relaxation during the postnatal period, focusing on areas affected by everyday physical strain.",
    durationMinutes: 60,
    price: 450,
    ingredients: [],
    benefits: [
      "Encourages relaxation",
      "Helps ease everyday body tension",
      "Provides restorative comfort"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-olly-3757657.jpg",
    popular: false
  },

  {
    id: "camrose-signature-massage",
    name: "Camrose Signature Massage",
    category: "massages",
    tagline: "Our signature full-body relaxation experience",
    description:
      "Camrose's signature massage experience, thoughtfully designed to combine relaxing full-body techniques into a soothing 90-minute wellness ritual delivered in the comfort of your home.",
    durationMinutes: 90,
    price: 650,
    ingredients: [],
    benefits: [
      "Full-body relaxation",
      "Helps release everyday tension",
      "A complete 90-minute wellness experience"
    ],
    image:
      "https://camrose.ae/wp-content/uploads/2025/07/pexels-cottonbro-3997995-768x1152.jpg",
    popular: true
  },

  {
    id: "hot-stone-massage",
    name: "Hot Stone Massage",
    category: "thermal",
    tagline: "Soothing warmth with heated therapeutic stones",
    description:
      "A deeply relaxing massage incorporating smooth heated stones to provide soothing warmth and help relax areas of muscular tension throughout the body.",
    durationMinutes: 90,
    price: 500,
    ingredients: [],
    benefits: [
      "Provides soothing warmth",
      "Helps relax muscle tension",
      "Promotes deep relaxation"
    ],
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    popular: true
  },

  {
    id: "couple-massage",
    name: "Couple Massage",
    category: "massages",
    tagline: "A shared 90-minute relaxation experience",
    description:
      "A relaxing massage experience designed for two, allowing couples to unwind together and enjoy a peaceful spa treatment in the comfort of their home.",
    durationMinutes: 90,
    price: 900,
    ingredients: [],
    benefits: [
      "Shared relaxation experience",
      "Helps ease everyday tension",
      "Perfect for couples"
    ],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
    popular: false
  }
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Wellnest completely redefined what a wellness sanctuary should feel like. After three sessions of the deep tissue bio-recovery massage, my chronic lower back stiffness vanished. The level of attentive care and atmosphere is unparalleled.",
    clientName: "Elena Rostova",
    clientTitle: "Creative Director & Architecture Critic",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    treatmentTaken: "Deep tissue bio-recovery massage",
    rating: 5,
    verified: true
  },
  {
    id: "2",
    quote: "The rose quartz facial left my skin glowing for weeks. Beyond the immediate aesthetic result, the mindful atmosphere and botanical aromas created a profound sense of inner stillness that carried into my entire work week.",
    clientName: "Marcus Vance",
    clientTitle: "Venture Partner & Executive",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    treatmentTaken: "Rose quartz cellular radiance facial",
    rating: 5,
    verified: true
  },
  {
    id: "3",
    quote: "From the moment you step into the sanctuary, every sense is catered to. The thermal stone journey melted away months of travel fatigue in 90 minutes. Unquestionably the finest spa experience in the world.",
    clientName: "Sophia Chen-Laurant",
    clientTitle: "Ballet Principal & Somatic Educator",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    treatmentTaken: "Volcanic basalt thermal stone journey",
    rating: 5,
    verified: true
  },
  {
    id: "4",
    quote: "The Himalayan steam and salt ritual restored clarity to my mind and body like nothing else. The craftsmanship of the therapists and the wildcrafted botanical scents are pure magic.",
    clientName: "David Sterling",
    clientTitle: "Performance Coach & Author",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    treatmentTaken: "Himalayan salt & cedar steam ritual",
    rating: 5,
    verified: true
  },
  {
    id: "5",
    quote: "An oasis of tranquility amidst a chaotic schedule. The acoustic sound bath therapy reset my focus and sleep quality instantly. Highly recommended for anyone seeking true bio-restoration.",
    clientName: "Aria Montgomery",
    clientTitle: "Tech Founder & Designer",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    treatmentTaken: "Acoustic sound bath & alignment",
    rating: 5,
    verified: true
  }
];

export const TRUST_INDICATORS = [
  { value: "15k+", label: "Satisfied guests welcomed" },
  { value: "4.9", label: "Average guest experience rating" },
  { value: "100%", label: "Organic wildcrafted botanicals" },
  { value: "14", label: "International wellness awards" }
];

export const HERO_CARD_ITEMS = [
  {
    id: 1,
    title: "Therapeutic massage mastery",
    description: "A premium wellness experience designed for your body, needs, and tranquility.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=300&q=80",
    bgImage: heroImage
  },
  {
    id: 2,
    title: "Botanical skincare elixirs",
    description: "Pure organic cold-pressed botanicals crafted for bio-cellular skin renewal.",
    image: oilsImage,
    bgImage: oilsImage
  },
  {
    id: 3,
    title: "Thermal mineral sanctuaries",
    description: "Heated volcanic basalt stone therapy paired with cedar steam infusion.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=300&q=80",
    bgImage: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&q=80"
  }
];
