
import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  Dna, 
  UserRound, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import { Service, GalleryItem } from './types';

export const COLORS = {
  primary: '#228B22',
  secondary: '#FFFFFF',
  accent: '#F3F4F6',
  darkGreen: '#145214'
};

export const SERVICES: Service[] = [
  {
    id: 'cleaning',
    nameEn: 'Teeth Cleaning',
    nameAr: 'تنظيف الأسنان',
    description: 'Professional cleaning and scaling for a healthier smile and fresher breath.',
    icon: 'sparkles'
  },
  {
    id: 'fillings',
    nameEn: 'Fillings',
    nameAr: 'حشو الأسنان',
    description: 'High-quality restorations for cavities using tooth-colored materials.',
    icon: 'stethoscope'
  },
  {
    id: 'ortho',
    nameEn: 'Orthodontics',
    nameAr: 'تقويم الأسنان',
    description: 'Expert alignment and braces to correct bites and straighten your smile.',
    icon: 'user-round'
  },
  {
    id: 'implants',
    nameEn: 'Dental Implants',
    nameAr: 'زراعة الأسنان',
    description: 'Permanent, durable tooth replacements that look and feel natural.',
    icon: 'shield-check'
  },
  {
    id: 'whitening',
    nameEn: 'Teeth Whitening',
    nameAr: 'تبييض الأسنان',
    description: 'Safe and effective professional whitening for a brighter, radiant smile.',
    icon: 'sparkles'
  },
  {
    id: 'emergency',
    nameEn: 'Emergency Care',
    nameAr: 'عناية طارئة',
    description: '24/7 urgent dental services for pain relief and dental trauma.',
    icon: 'clock'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Reception Area', category: 'Clinic', imageUrl: 'https://picsum.photos/seed/clinic1/800/600' },
  { id: '2', title: 'Treatment Room', category: 'Clinic', imageUrl: 'https://picsum.photos/seed/clinic2/800/600' },
  { id: '3', title: 'Digital X-Ray', category: 'Equipment', imageUrl: 'https://picsum.photos/seed/equip1/800/600' },
  { id: '4', title: 'Laser Whitening', category: 'Equipment', imageUrl: 'https://picsum.photos/seed/equip2/800/600' },
  { id: '5', title: 'Smile Transformation', category: 'Case', imageUrl: 'https://picsum.photos/seed/case1/800/600' },
  { id: '6', title: 'Our Team', category: 'Team', imageUrl: 'https://picsum.photos/seed/team1/800/600' },
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  'sparkles': <Sparkles className="w-6 h-6" />,
  'stethoscope': <Stethoscope className="w-6 h-6" />,
  'user-round': <UserRound className="w-6 h-6" />,
  'shield-check': <ShieldCheck className="w-6 h-6" />,
  'clock': <Clock className="w-6 h-6" />,
  'dna': <Dna className="w-6 h-6" />
};

export const CONTACT_INFO = {
  phone: '+1 (555) 000-0000',
  whatsapp: '+15550000000',
  email: 'info@emeralddental.com',
  address: '123 Medical Plaza, Emerald City, EC 54321',
  hours: [
    { day: 'Mon - Fri', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed (Emergency Only)' }
  ]
};
