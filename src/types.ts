export type ServiceCategory = 'all' | 'skincare' | 'massage' | 'nails' | 'hair' | 'home';

export interface SpaService {
  id: string;
  name: string;
  category: 'skincare' | 'massage' | 'nails' | 'hair' | 'home';
  categoryLabel: string;
  tagline: string;
  description: string;
  durationMinutes: number;
  priceNaira: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  benefits: string[];
  image: string;
}

export interface SkincareProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  priceNaira: number;
  size: string;
  skinType: string;
  keyIngredients: string[];
  benefits: string[];
  image: string;
  inStock: boolean;
  usageInstructions?: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  serviceType: 'in-spa' | 'home-service';
  homeAddress?: string;
  selectedServices: string[]; // service IDs
  appointmentDate: string;
  appointmentTime: string;
  preferredPhone?: string;
  additionalNotes?: string;
  formspreeEndpoint?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hair' | 'nails' | 'skincare' | 'spa' | 'barbershop';
  image: string;
  caption: string;
  instagramTag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface OperatingHoursDay {
  day: string;
  openTime: string;
  closeTime: string;
  openHour24: number;
  closeHour24: number;
  isSpecial?: boolean;
}
