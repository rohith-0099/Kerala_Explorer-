import { KeralaDistrict, TourismSpot } from '../types';

export const KERALA_DISTRICTS: KeralaDistrict[] = [
  'Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha',
  'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad',
  'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'
];

export const COMPREHENSIVE_TOURISM_DATA: TourismSpot[] = [
  {
    id: 'kovalam-beach',
    name: 'Kovalam Beach',
    district: 'Thiruvananthapuram',
    category: 'beach',
    description: 'Three adjacent crescent beaches with lighthouse, water sports, and Ayurvedic treatments. Famous for golden sand and clear waters.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500',
    rating: 4.5,
    distance: 15,
    coordinates: { lat: 8.4004, lon: 76.9784 },
    bestTime: 'Oct-Mar',
    activities: ['Swimming', 'Surfing', 'Ayurveda', 'Photography'],
    entryFee: 'Free',
    timings: '24 hours',
    nearbyAttractions: ['Vizhinjam', 'Poovar Island'],
    localTips: 'Best sunset views from Lighthouse Beach. Try local seafood at beach shacks.'
  },
  {
    id: 'varkala-beach',
    name: 'Varkala Beach',
    district: 'Thiruvananthapuram',
    category: 'beach',
    description: 'Stunning cliff-top beach with natural springs, temples, and hippie culture. Known for dramatic red cliffs.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    rating: 4.7,
    distance: 42,
    coordinates: { lat: 8.7379, lon: 76.7164 },
    bestTime: 'Nov-Mar',
    activities: ['Swimming', 'Cliff Walking', 'Temple Visit', 'Yoga'],
    entryFee: 'Free',
    timings: '24 hours',
    nearbyAttractions: ['Janardanaswamy Temple', 'Sivagiri Mutt'],
    localTips: 'Visit during sunset for magical views. Try cliff-top restaurants for panoramic dining.'
  },
  {
    id: 'munnar',
    name: 'Munnar Hill Station',
    district: 'Idukki',
    category: 'hill-station',
    description: 'Pristine hill station with endless tea plantations, mist-covered mountains, and cool climate.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    rating: 4.8,
    distance: 130,
    coordinates: { lat: 10.0889, lon: 77.0595 },
    bestTime: 'Sep-Mar',
    activities: ['Tea Plantation Tours', 'Trekking', 'Photography', 'Camping'],
    entryFee: '₹50-200',
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: ['Eravikulam National Park', 'Mattupetty Dam', 'Echo Point'],
    localTips: 'Book accommodations early. Carry warm clothes. Visit tea factories for fresh tea tasting.'
  },
  {
    id: 'alleppey-backwaters',
    name: 'Alleppey Backwaters',
    district: 'Alappuzha',
    category: 'backwater',
    description: 'Venice of the East with network of canals, lagoons, and lakes. Famous houseboat cruises.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    rating: 4.7,
    distance: 53,
    coordinates: { lat: 9.4981, lon: 76.3388 },
    bestTime: 'Nov-Feb',
    activities: ['Houseboat Cruise', 'Village Tours', 'Bird Watching', 'Fishing'],
    entryFee: '₹8000-15000/day',
    timings: 'Flexible',
    nearbyAttractions: ['Kumarakom', 'Vembanad Lake', 'Pathiramanal Island'],
    localTips: 'Book houseboats from authorized operators. Try traditional Kerala meals onboard.'
  },
  {
    id: 'fort-kochi',
    name: 'Fort Kochi Heritage Area',
    district: 'Ernakulam',
    category: 'heritage',
    description: 'Historic port city with colonial architecture, Chinese fishing nets, and multicultural heritage.',
    image: 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=500',
    rating: 4.6,
    distance: 0,
    coordinates: { lat: 9.9312, lon: 76.2673 },
    bestTime: 'Oct-Mar',
    activities: ['Heritage Walks', 'Art Galleries', 'Spice Trading', 'Cultural Shows'],
    entryFee: '₹25-100',
    timings: '9:00 AM - 5:00 PM',
    nearbyAttractions: ['Mattancherry Palace', 'Jewish Synagogue', 'St. Francis Church'],
    localTips: 'Walk through Jew Town for antiques. Watch Kathakali performances.'
  },
  {
    id: 'periyar-wildlife',
    name: 'Periyar Wildlife Sanctuary',
    district: 'Idukki',
    category: 'wildlife',
    description: 'Tiger reserve with lake boat safaris, spice plantations, and elephant sightings.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?w=500',
    rating: 4.4,
    distance: 190,
    coordinates: { lat: 9.4394, lon: 77.1558 },
    bestTime: 'Oct-Jun',
    activities: ['Boat Safari', 'Nature Walks', 'Spice Plantation Tours', 'Bamboo Rafting'],
    entryFee: '₹300 + ₹200 (Safari)',
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: ['Thekkady', 'Kumily Spice Market', 'Murikkady'],
    localTips: 'Early morning safaris offer best wildlife sightings. Carry binoculars.'
  },
  {
    id: 'wayanad-hills',
    name: 'Wayanad Hills',
    district: 'Wayanad',
    category: 'hill-station',
    description: 'Spice plantations, wildlife sanctuaries, and ancient caves. Rich biodiversity and tribal culture.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
    rating: 4.6,
    distance: 270,
    coordinates: { lat: 11.6854, lon: 76.1320 },
    bestTime: 'Oct-May',
    activities: ['Wildlife Safari', 'Spice Tours', 'Cave Exploration', 'Tribal Village Visits'],
    entryFee: '₹300-500',
    timings: '6:00 AM - 6:00 PM',
    nearbyAttractions: ['Banasura Sagar Dam', 'Edakkal Caves', 'Chembra Peak'],
    localTips: 'Book wildlife safari in advance. Try local spices and honey.'
  },
  {
    id: 'kumarakom-bird',
    name: 'Kumarakom Bird Sanctuary',
    district: 'Kottayam',
    category: 'wildlife',
    description: 'Bird sanctuary on Vembanad Lake with migratory birds, mangrove forests, and boat rides.',
    image: 'https://images.unsplash.com/photo-1517662443271-1c4b9a5c0907?w=500',
    rating: 4.3,
    distance: 60,
    coordinates: { lat: 9.6177, lon: 76.4284 },
    bestTime: 'Nov-Feb',
    activities: ['Bird Watching', 'Boat Rides', 'Photography', 'Nature Walks'],
    entryFee: '₹50',
    timings: '6:00 AM - 5:00 PM',
    nearbyAttractions: ['Vembanad Lake', 'Pathiramanal Island'],
    localTips: 'Best bird watching in early morning. Carry binoculars and camera.'
  }
];

// Generate dynamic data with safe defaults
export const generateDynamicTourismData = (userDistrict: string): TourismSpot[] => {
  return COMPREHENSIVE_TOURISM_DATA.map(spot => ({
    ...spot,
    distance: spot.distance || calculateDistance(userDistrict, spot.district),
    isRecommended: spot.rating > 4.5,
    crowdLevel: getCrowdLevel(),
    weatherSuitability: getWeatherSuitability()
  }));
};

const calculateDistance = (from: string, to: string): number => {
  if (from === to) return 0;
  return Math.floor(Math.random() * 300) + 50; // 50-350 km
};

const getCrowdLevel = (): 'Low' | 'Medium' | 'High' => {
  return ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)] as 'Low' | 'Medium' | 'High';
};

const getWeatherSuitability = (): 'Excellent' | 'Good' | 'Fair' => {
  return ['Excellent', 'Good', 'Fair'][Math.floor(Math.random() * 3)] as 'Excellent' | 'Good' | 'Fair';
};
