import { SpaService, SkincareProduct, OperatingHoursDay, GalleryItem, Testimonial } from '../types';
import {
  IMAGE_LOGO,
  IMAGE_STOREFRONT,
  IMAGE_GOLDFACIAL,
  IMAGE_SKINCARE,
  IMAGE_FACIALFOAM,
  IMAGE_HAIRCUT,
  IMAGE_HAIRSTYLE,
  IMAGE_PRODUCTS,
  IMAGE_SKINCAREBOTTLES,
} from './embeddedImages';

export const SPA_ASSETS = {
  logo: IMAGE_LOGO,
  storefront: IMAGE_STOREFRONT,
  coverPhoto: IMAGE_STOREFRONT,
  goldFacial: IMAGE_GOLDFACIAL,
  hairBraids: IMAGE_HAIRSTYLE,
  hairstyle: IMAGE_HAIRSTYLE,
  facialFoam: IMAGE_FACIALFOAM,
  deepCleansing: IMAGE_SKINCARE,
  skincare: IMAGE_SKINCARE,
  skincareBottles: IMAGE_SKINCAREBOTTLES,
  products: IMAGE_PRODUCTS,
  product: IMAGE_PRODUCTS,
  whiteningCream: IMAGE_PRODUCTS,
  barbershop: IMAGE_HAIRCUT,
  haircut: IMAGE_HAIRCUT,
};

export const SPA_INFO = {
  name: "MagKay Spa & Salon",
  legalName: "MagKay Spa (Registered Sole Proprietorship)",
  registrationNumber: "BN-3380634",
  foundedYear: "2021",
  address: "KM 5, Ipaye Bus Stop, LASU-Isheri Road, Iba Ojo, Lagos, Nigeria",
  landmark: "Beside Ipaye Bus Stop, opposite Ojo Local Govt Area Corridor, LASU-Isheri Express",
  phoneCall: "08135923223",
  phoneCallFormatted: "0813 592 3223",
  phoneWhatsApp: "08091537732",
  phoneWhatsAppFormatted: "0809 153 7732",
  phonePrimary: "08135923223", // Call line (Line 1)
  phoneSecondary: "08091537732", // WhatsApp line (Line 2)
  phoneCallIntl: "+2348135923223",
  phoneWhatsAppIntl: "+2348091537732",
  phonePrimaryIntl: "+2348135923223",
  phoneSecondaryIntl: "+2348091537732",
  callUrl: "tel:08135923223",
  whatsappUrl: "https://wa.me/2348091537732",
  whatsappUrlPrimary: "https://wa.me/2348091537732",
  whatsappUrlSecondary: "https://wa.me/2348091537732",
  instagramHandle: "@magkayspa01",
  instagramUrl: "https://www.instagram.com/magkayspa01",
  tagline: "Self-care isn't a luxury ☺️ it's a necessity",
  subheadline: "Your premier unisex salon and wellness haven on the LASU-Isheri Expressway. Step in to relax, recharge, and glow in confidence.",
  rating: "4.9",
  reviewCount: "850+",
  yearsInBusiness: "4+",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=LASU-Isheri+Road+Lagos+Ipaye+Bus+Stop&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=KM+5+Ipaye+Bus+Stop+LASU-Isheri+Road+Lagos",
};

export const OPERATING_HOURS: OperatingHoursDay[] = [
  { day: "Monday", openTime: "8:00 AM", closeTime: "9:00 PM", openHour24: 8, closeHour24: 21 },
  { day: "Tuesday", openTime: "8:00 AM", closeTime: "9:00 PM", openHour24: 8, closeHour24: 21 },
  { day: "Wednesday", openTime: "8:00 AM", closeTime: "9:00 PM", openHour24: 8, closeHour24: 21 },
  { day: "Thursday", openTime: "10:00 AM", closeTime: "9:00 PM", openHour24: 10, closeHour24: 21, isSpecial: true },
  { day: "Friday", openTime: "8:00 AM", closeTime: "9:00 PM", openHour24: 8, closeHour24: 21 },
  { day: "Saturday", openTime: "8:00 AM", closeTime: "9:00 PM", openHour24: 8, closeHour24: 21 },
  { day: "Sunday", openTime: "12:00 PM", closeTime: "9:00 PM", openHour24: 12, closeHour24: 21, isSpecial: true },
];

export const SPA_SERVICES: SpaService[] = [
  // Skincare & Facials
  {
    id: "glow-24k-gold",
    name: "Glow Facial & 24K Gold Therapy",
    category: "skincare",
    categoryLabel: "Skincare & Facials",
    tagline: "Signature face syrup and 24K gold foil infusion for instant luminous glow",
    description: "Our world-class signature facial. Combines ultrasonic deep pore cleansing, microdermabrasion exfoliation, hyaluronic serum infusion, and 24K active gold mask therapy to rejuvenate tired skin and create a luminous mirror glow.",
    durationMinutes: 75,
    priceNaira: 28000,
    isPopular: true,
    isFeatured: true,
    benefits: [
      "Instant glass skin glow & even tone",
      "Reduces fine lines and dull hyperpigmentation",
      "Stimulates collagen & elastin renewal",
      "Includes lymphatic facial sculpt massage"
    ],
    image: SPA_ASSETS.goldFacial
  },
  {
    id: "deep-cleansing-facial",
    name: "Deep Cleansing & Extraction Facial",
    category: "skincare",
    categoryLabel: "Skincare & Facials",
    tagline: "Clarify, extract blackheads, and rebalance oily/acne-prone skin",
    description: "Intensive clarifying facial with steam therapy, enzyme peel, professional blackhead extraction, high-frequency antibacterial wand, and calming tea tree hydration mask.",
    durationMinutes: 60,
    priceNaira: 20000,
    isPopular: true,
    benefits: [
      "Unclogs deep pores and removes stubborn comedones",
      "Controls excess sebum and prevents breakouts",
      "Soothes active inflammation with high-frequency wand",
      "Refreshes and clarifies complexion"
    ],
    image: SPA_ASSETS.facialFoam
  },
  {
    id: "magkay-organic-skincare-therapy",
    name: "MagKay Botanical Skincare & Rejuvenating Facial Therapy",
    category: "skincare",
    categoryLabel: "Skincare & Facials",
    tagline: "Deep herbal pore cleanse, blackhead extraction, and instant radiance hydration",
    description: "An intensive skin rejuvenation and brightening facial utilizing MagKay's signature botanical formulas. Deeply purifies pores, extracts impurities, calms inflammation, and restores skin barrier health for a vibrant, spotless, and radiant complexion.",
    durationMinutes: 60,
    priceNaira: 22000,
    isPopular: true,
    benefits: [
      "Deep pore ultrasonic cleansing & botanical steam therapy",
      "Gentle extraction of blackheads, whiteheads & impurities",
      "Calms hyperpigmentation & restores even skin tone",
      "Nourishing herbal hydration mask & face massage"
    ],
    image: SPA_ASSETS.skincare
  },

  // Hair & Barbershop
  {
    id: "mens-haircut-fade-grooming",
    name: "Executive Precision Haircut & Beard Sculpting",
    category: "hair",
    categoryLabel: "Hair & Barbershop",
    tagline: "Sharp skin fade, razor edge line-up, beard shaping, and soothing aftershave finish",
    description: "Signature master haircut and precision grooming for gentlemen and boys. Performed with sterilized clippers, smooth gradient taper fade, razor-sharp edge-ups, beard oil nourishing treatment, and an invigorating hot towel finish.",
    durationMinutes: 45,
    priceNaira: 5000,
    isPopular: true,
    benefits: [
      "Razor-sharp edge-up & crisp hairline definition",
      "Surgical-grade sanitized clippers & fresh single-use blades",
      "Beard trimming, conditioning oil & bump-prevention aftershave",
      "Invigorating peppermint hot towel scalp refresh"
    ],
    image: SPA_ASSETS.haircut
  },
  {
    id: "african-hair-braiding-styling",
    name: "African Hair Braiding, Knotless Braids & Salon Styling",
    category: "hair",
    categoryLabel: "Hair & Barbershop",
    tagline: "Pain-free knotless box braids, goddess boho curls, cornrows, twists & salon styling",
    description: "Artisan hair braiding and modern salon styling tailored for elegance and edge protection. Features gentle zero-tension parting, clean knotless braids, bohemian curly ends, protective cornrows, deep conditioning wash, and hot water mousse sealing.",
    durationMinutes: 180,
    priceNaira: 18000,
    isPopular: true,
    benefits: [
      "Zero-tension technique protecting delicate baby hairs & edges",
      "Crisp, neat geometric parting with premium edge control",
      "Deep conditioning wash & moisturizing scalp treatment",
      "Hot water dip & lightweight mousse seal for high shine"
    ],
    image: SPA_ASSETS.hairstyle
  },

  // Home Services
  {
    id: "vip-home-spa",
    name: "VIP Home Spa & Wellness Service",
    category: "home",
    categoryLabel: "Home Services",
    tagline: "We bring the complete 5-star spa and salon experience to your doorstep in Lagos",
    description: "Enjoy luxurious massage treatments, facials, mani-pedi, bridal glam, and hairstyling right in the comfort and privacy of your residence, hotel suite, or office across Lagos mainland and island.",
    durationMinutes: 120,
    priceNaira: 45000,
    isFeatured: true,
    benefits: [
      "We provide portable massage bed, fresh linens & aromatic diffusers",
      "Strict background-checked certified therapists",
      "Ideal for busy executives, new mothers, and bridal parties",
      "Zero Lagos traffic stress after your relaxing session"
    ],
    image: SPA_ASSETS.storefront
  }
];

export const SKINCARE_PRODUCTS: SkincareProduct[] = [
  {
    id: "magkay-whitening-cream-lotion",
    name: "MagKay Natural Skin Care Whitening Cream & Gluta Lotion Set",
    category: "Body & Face Care",
    tagline: "Authentic MagKay Natural Skin Care Whitening Cream (100g) & Gluta Body Lotion",
    description: "Original MagKay Natural Skin Care formula as featured in our salon. Contains our signature 100g Whitening Cream jar and Gluta Whitening Body Lotion for active brightening, hyperpigmentation fading, and smooth golden glow.",
    priceNaira: 18500,
    size: "100g Jar + 350ml Lotion",
    skinType: "All Skin Types / Hyperpigmented Skin",
    keyIngredients: ["Natural Glutathione", "Licorice Extract", "Alpha Arbutin", "Singapore Beauty White Formulation"],
    benefits: [
      "Authentic MagKay Natural Skin Care salon formulation",
      "Clears dark spots, acne scars, and uneven complexion",
      "Deep 48-hour moisture with zero greasy residue",
      "Original packaging with verification guarantee"
    ],
    image: SPA_ASSETS.products,
    inStock: true
  },
  {
    id: "snow-white-cream",
    name: "Snow White Radiance Face & Neck Cream",
    category: "Face Care",
    tagline: "Concentrated night corrective cream for spotless glass skin",
    description: "Our best-selling nighttime face cream. Formulated with glutathione, niacinamide, and kojic acid dipalmitate to clarify sun spots, acne scars, and dullness while you sleep.",
    priceNaira: 15000,
    size: "100g",
    skinType: "Normal, Oily, Hyperpigmented Skin",
    keyIngredients: ["Glutathione", "Niacinamide 5%", "Kojic Dipalmitate", "Hyaluronic Acid"],
    benefits: [
      "Accelerates post-acne mark clearing",
      "Fades hyperpigmentation and sun damage",
      "Tightens pores and smooths fine texture",
      "Safe and hydroquinone-free formulation"
    ],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop",
    inStock: true
  },
  {
    id: "glow-face-cleanser",
    name: "Botanical Clarifying & Glow Face Cleanser",
    category: "Cleansers",
    tagline: "pH-balanced foaming wash with tea tree, papaya enzyme & aloe",
    description: "Gentle yet powerful daily cleanser that lifts impurities, makeup residue, and excess oil without stripping the natural skin barrier. Leaves skin fresh, calm, and illuminated.",
    priceNaira: 8500,
    size: "200ml",
    skinType: "All Skin Types / Acne-Prone",
    keyIngredients: ["Papaya Extract", "Tea Tree Leaf Oil", "Organic Aloe Vera", "Vitamin C"],
    benefits: [
      "Dissolves waterproof makeup and pollution",
      "Prevents daily clogged pores and blackheads",
      "Maintains optimal 5.5 pH barrier",
      "Calms redness and irritation"
    ],
    image: SPA_ASSETS.facialFoam,
    inStock: true
  },
  {
    id: "knuckle-clearing-cream",
    name: "Hand & Toe Dark Knuckle Corrective Cream",
    category: "Specialty Care",
    tagline: "Intensive repair cream for stubborn knuckles, knees & elbows",
    description: "Scientifically balanced corrective balm specifically crafted to erase resistant hyperpigmentation around hand knuckles, toes, ankles, and elbows with nourishing essential fatty acids.",
    priceNaira: 12000,
    size: "80g",
    skinType: "Targeted Joint Areas",
    keyIngredients: ["Salicylic Acid 2%", "Lactic Acid", "Mulberry Extract", "Vitamin E"],
    benefits: [
      "Penetrates tough calloused joint skin",
      "Even hands and feet tone naturally",
      "Quick visible results within 14–21 days",
      "Zero peeling or redness irritation"
    ],
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop",
    inStock: true
  },
  {
    id: "botanical-glow-oil",
    name: "24K Golden Botanical Body Glow Oil",
    category: "Body Oils",
    tagline: "Illuminating dry body oil with shimmering gold mica & jojoba",
    description: "Gives your skin an ethereal sun-kissed sheen. Infused with pure cold-pressed jojoba, rosehip seed oil, and subtle light-reflecting minerals for red-carpet body radiance.",
    priceNaira: 14000,
    size: "150ml",
    skinType: "All Skin Types",
    keyIngredients: ["Pure Jojoba Oil", "Rosehip Seed Extract", "Gold Mica Crystals", "Vitamin C Oil"],
    benefits: [
      "Instant luminous dewy finish",
      "Hydrates without sticky residue",
      "Enhances tan and skin undertones",
      "Perfect for photoshoots and night outings"
    ],
    image: SPA_ASSETS.skincareBottles,
    inStock: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "MagKay Spa Building & Reception (KM 5 LASU-Isheri Rd)",
    category: "spa",
    image: SPA_ASSETS.storefront,
    caption: "Our official 2-story salon & wellness spa sanctuary located beside Ipaye Bus Stop, Lagos.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g2",
    title: "24K Gold Therapy & Hydra Glow Facial",
    category: "skincare",
    image: SPA_ASSETS.goldFacial,
    caption: "Transforming tired skin with 24K pure gold mask infusion and red-light skin rejuvenation.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g-skincare-session",
    title: "Botanical Skincare & Deep Facial Therapy Session",
    category: "skincare",
    image: SPA_ASSETS.skincare,
    caption: "Customized clinical facial, pore extractions, and herbal hydration therapy at MagKay Spa & Salon.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g-haircut",
    title: "Executive Precision Haircut & Beard Sculpting",
    category: "hair",
    image: SPA_ASSETS.haircut,
    caption: "Signature fade, crisp razor edge-up, and beard grooming at MagKay Barbershop & Salon.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g3",
    title: "African Knotless Braids & Salon Styling",
    category: "hair",
    image: SPA_ASSETS.hairstyle,
    caption: "Seamless, tension-free knotless protective braids done in our modern styling chairs.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g4",
    title: "Botanical Foaming Facial Cleansing Therapy",
    category: "skincare",
    image: SPA_ASSETS.facialFoam,
    caption: "Gentle bubble foam cleansing, steam treatment & comedone extractions under surgical LED lights.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g5",
    title: "MagKay Natural Skin Care Whitening Cream & Gluta Lotions",
    category: "skincare",
    image: SPA_ASSETS.products,
    caption: "Original MagKay Natural Skin Care Whitening Cream (100g) & Gluta Whitening Body Lotions.",
    instagramTag: "@magkayspa01"
  },
  {
    id: "g6",
    title: "Luxury Encapsulated Nail Art & Gel Extensions",
    category: "nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
    caption: "Custom 3D glitter & ombre acrylic nails sculpted by our senior nail technician.",
    instagramTag: "@magkayspa01"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Blessing Adeleke",
    role: "LASU Alumna & Content Creator",
    location: "Iyana Iba / Ojo, Lagos",
    service: "24K Gold Facial & Gel Nails",
    rating: 5,
    comment: "MagKay Spa is hands down the best beauty sanctuary along LASU-Isheri road! Their 24K Gold facial gave me an unreal glass skin glow before my convocation photoshoot. The staff are so warm and professional.",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "t2",
    name: "Emeka Okoli",
    role: "Business Executive",
    location: "Igando / LASU Express, Lagos",
    service: "Deep Tissue Massage & Facial Rejuvenation",
    rating: 5,
    comment: "Driving in Lagos traffic takes a heavy toll on my back. I booked their 75-minute deep tissue massage followed by an organic skincare facial. The therapist knew exactly where every knot was, and my skin felt completely refreshed. Worth every Naira!",
    date: "1 month ago",
    verified: true
  },
  {
    id: "t3",
    name: "Hauwa Ibrahim",
    role: "Bride & HR Manager",
    location: "Festac Town (Home Service VIP)",
    service: "VIP Home Spa & Bridal Glam",
    rating: 5,
    comment: "I booked their home service for my bridal shower. MagKay team arrived with portable spa beds, diffusers, and fresh towels. Booking via WhatsApp was smooth and fast. 10/10 recommendation!",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: "t4",
    name: "Toyin Balogun",
    role: "Fashion Entrepreneur",
    location: "Alaba / LASU-Isheri Road",
    service: "Egyptian Body Cream & Knuckle Treatment",
    rating: 5,
    comment: "Their skincare products are genuine and clean! The Egyptian Luxe Body Milk cleared my sun tan and uneven tone completely. Now all my friends shop at MagKay.",
    date: "2 months ago",
    verified: true
  }
];

export const ROUTE_DIRECTIONS = [
  {
    from: "From LASU Main Gate (Ojo)",
    instruction: "Board a bus or take a ride towards Igando/Isheri along LASU-Isheri Road. Drop at Ipaye Bus Stop (approx. 5-7 minutes drive). MagKay Spa is directly at KM 5 by the bus stop.",
    estimatedTime: "5 - 7 mins"
  },
  {
    from: "From Iyana Iba / Badagry Express",
    instruction: "From Iyana Iba roundabout, head straight up the LASU-Isheri Expressway. Pass LASU first gate and proceed to Ipaye Bus Stop.",
    estimatedTime: "8 - 10 mins"
  },
  {
    from: "From Igando / Isheri / Egbeda",
    instruction: "Take the LASU-Isheri Road heading towards LASU/Iyana Iba. Drop at Ipaye Bus Stop right opposite the pedestrian crossing.",
    estimatedTime: "10 - 15 mins"
  },
  {
    from: "From Festac / Mile 2",
    instruction: "Connect via Badagry Expressway to Iyana Iba, then turn onto LASU-Isheri Expressway heading to Ipaye Bus Stop.",
    estimatedTime: "20 - 25 mins"
  }
];

export const FAQS = [
  {
    question: "How do I book an appointment at MagKay Spa?",
    answer: "You can book directly using our website appointment form, or click any of the WhatsApp booking buttons to instantly chat with our booking desk on 08091537732 or 08135923223. We will confirm your preferred specialist and time slot in minutes."
  },
  {
    question: "Do you offer Home / Mobile VIP services?",
    answer: "Yes! We offer full VIP on-location services for residences, hotels, and events across Lagos (Ojo, Festac, Ikeja, Lekki, Igando, and beyond). Our team brings portable massage tables, sterilized tools, and spa essentials."
  },
  {
    question: "What are your exact opening hours?",
    answer: "We are open Monday – Wednesday: 8:00 AM – 9:00 PM; Thursday: 10:00 AM – 9:00 PM; Friday – Saturday: 8:00 AM – 9:00 PM; Sunday: 12:00 PM – 9:00 PM."
  },
  {
    question: "Are your skincare products organic and safe?",
    answer: "Yes, all MagKay Skincare formulations (Egyptian Milk, Snow White Cream, Face Cleansers, Knuckle Balm) are crafted with skin-loving botanical actives, vitamins, and natural extracts without harsh chemicals or hydroquinone."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept POS Card payments, direct Nigerian Bank Transfers, and Cash at our KM 5 LASU-Isheri center."
  },
  {
    question: "Is MagKay Spa officially registered in Nigeria?",
    answer: "Yes, MagKay Spa is a registered business with the Corporate Affairs Commission under Sole Proprietorship registration number BN-3380634."
  }
];

/**
 * Helper to check if MagKay Spa is currently open based on Lagos time (UTC+1)
 */
export function getLagosOpeningStatus(): { isOpen: boolean; statusText: string; nextOpeningText: string; todaySchedule: string } {
  // Lagos is UTC+1
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const lagosTime = new Date(utc + (3600000 * 1)); // UTC+1
  
  const dayIndex = lagosTime.getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const currentHour = lagosTime.getHours();
  const currentMinute = lagosTime.getMinutes();
  const currentTimeDec = currentHour + (currentMinute / 60);

  // Map to our operating hours
  // 0: Sun (12pm - 9pm, 12 - 21)
  // 1: Mon (8am - 9pm, 8 - 21)
  // 2: Tue (8am - 9pm, 8 - 21)
  // 3: Wed (8am - 9pm, 8 - 21)
  // 4: Thu (10am - 9pm, 10 - 21)
  // 5: Fri (8am - 9pm, 8 - 21)
  // 6: Sat (8am - 9pm, 8 - 21)
  const scheduleMap = [
    { day: "Sunday", open: 12, close: 21, label: "12:00 PM – 9:00 PM" },
    { day: "Monday", open: 8, close: 21, label: "8:00 AM – 9:00 PM" },
    { day: "Tuesday", open: 8, close: 21, label: "8:00 AM – 9:00 PM" },
    { day: "Wednesday", open: 8, close: 21, label: "8:00 AM – 9:00 PM" },
    { day: "Thursday", open: 10, close: 21, label: "10:00 AM – 9:00 PM" },
    { day: "Friday", open: 8, close: 21, label: "8:00 AM – 9:00 PM" },
    { day: "Saturday", open: 8, close: 21, label: "8:00 AM – 9:00 PM" },
  ];

  const today = scheduleMap[dayIndex];
  const isOpen = currentTimeDec >= today.open && currentTimeDec < today.close;

  let statusText = isOpen ? "Open Now" : "Currently Closed";
  let nextOpeningText = "";

  if (isOpen) {
    statusText = `Open Now • Closes at 9:00 PM`;
  } else {
    if (currentTimeDec < today.open) {
      statusText = `Closed • Opens today at ${today.open === 12 ? '12:00 PM' : today.open === 10 ? '10:00 AM' : '8:00 AM'}`;
    } else {
      const tomorrowIndex = (dayIndex + 1) % 7;
      const tomorrow = scheduleMap[tomorrowIndex];
      statusText = `Closed • Opens ${tomorrow.day} at ${tomorrow.open === 12 ? '12:00 PM' : tomorrow.open === 10 ? '10:00 AM' : '8:00 AM'}`;
    }
  }

  return {
    isOpen,
    statusText,
    nextOpeningText,
    todaySchedule: `${today.day}: ${today.label}`
  };
}
