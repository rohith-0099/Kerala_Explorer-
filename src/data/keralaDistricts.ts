import { KeralaDistrict, TourismSpot } from '../types';

export const KERALA_DISTRICTS: KeralaDistrict[] = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
  'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad',
  'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'
];

export const TOURISM_SPOTS: TourismSpot[] = [
  {
    id: '1',
    name: 'Kovalam Beach',
    district: 'Thiruvananthapuram',
    category: 'beach',
    description: 'Famous beach resort with lighthouse and golden sand',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400',
    rating: 4.5
  },
  {
    id: '2',
    name: 'Munnar Hill Station',
    district: 'Idukki',
    category: 'hill-station',
    description: 'Tea plantations and cool mountain air',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Alleppey Backwaters',
    district: 'Alappuzha',
    category: 'backwater',
    description: 'Serene backwater cruise through coconut groves',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Fort Kochi',
    district: 'Ernakulam',
    category: 'heritage',
    description: 'Historic area with colonial architecture',
    image: 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=400',
    rating: 4.6
  }
];
