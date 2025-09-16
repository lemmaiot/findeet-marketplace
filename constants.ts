
import {
  FoodIcon,
  ServicesIcon,
  HousingIcon,
  ShoppingIcon,
  JobsIcon,
  EventsIcon,
  AllInOneIcon,
  LocalFocusIcon,
  UserFriendlyIcon,
  TrustedPlatformIcon
} from './components/IconComponents';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Categories', href: '#' },
  { name: 'Contact us', href: '/contact' },
];

export const categories = [
  {
    name: 'Food',
    description: 'Order from local restaurants.',
    icon: FoodIcon,
    color: 'bg-red-100',
    textColor: 'text-red-600',
  },
  {
    name: 'Services',
    description: 'Find local professionals.',
    icon: ServicesIcon,
    color: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    name: 'Housing',
    description: 'Apartments and houses.',
    icon: HousingIcon,
    color: 'bg-green-100',
    textColor: 'text-green-600',
  },
  {
    name: 'Shopping',
    description: 'Browse local stores.',
    icon: ShoppingIcon,
    color: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
  {
    name: 'Jobs',
    description: 'Find your next opportunity.',
    icon: JobsIcon,
    color: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
  {
    name: 'Events',
    description: 'Discover local happenings.',
    icon: EventsIcon,
    color: 'bg-pink-100',
    textColor: 'text-pink-600',
  },
];

export const features = [
  {
    name: 'All-in-One Platform',
    description: 'One app for food, services, housing, and more. No need to switch between different apps.',
    icon: AllInOneIcon,
  },
  {
    name: 'Local Focus',
    description: 'We connect you with the best goods and services right here in Ilorin.',
    icon: LocalFocusIcon,
  },
  {
    name: 'User-Friendly',
    description: 'An intuitive interface that makes finding what you need quick and easy.',
    icon: UserFriendlyIcon,
  },
  {
    name: 'Trusted & Verified',
    description: 'We vet our vendors and service providers to ensure you get the best quality and reliability.',
    icon: TrustedPlatformIcon,
  },
];

export const testimonials = [
  {
    quote: 'Shopping on Findeet has saved me so much time. I can get my groceries and essentials without stressing about the market, and every vendor I’ve used has been reliable.',
    name: 'Fortune Emeka',
    role: 'User',
    avatar: 'https://i.pravatar.cc/150?img=68',
    rating: 5,
  },
  {
    quote: 'Since I joined Findeet, more people in Ilorin have been able to find my plumbing services. It’s easy to use, and it has really helped me grow my business.',
    name: 'Olamide Ojo',
    role: 'Vendor',
    avatar: 'https://i.pravatar.cc/150?img=49',
    rating: 5,
  },
  {
    quote: 'Moving to Ilorin felt overwhelming but Findeet made settling in easier. I found trusted furniture and household items.',
    name: 'Olamide Adebayo',
    role: 'Vendor',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
  },
];

export const teamMembers = [
  {
    name: 'Mustapha N.A',
    role: 'Founder & CEO',
    avatar: 'https://neka.ng/findeet/ceo.png',
  },
  {
    name: 'Nekabari T.',
    role: 'Co-founder/CTO',
    avatar: 'https://neka.ng/findeet/cto.png',
  },
  {
    name: 'Fatima Abdul',
    role: 'Lead Marketer',
    avatar: 'https://neka.ng/findeet/marketer.png',
  },
  {
    name: 'Samuel Ade',
    role: 'Product Designer',
    avatar: 'https://neka.ng/findeet/designer.png',
  },
];

export const businessCategories = [
  'Fashion',
  'Gadgets',
  'Food / Restaurant',
  'Houses / Hotels',
  'Skilled professions',
];