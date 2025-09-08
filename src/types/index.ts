// Weather data structure (keep existing)
export interface WeatherData {
  district: string;
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
}

// Fixed Tourism spot structure with proper optional fields
export interface TourismSpot {
  id: string;
  name: string;
  district: string;
  category: 'beach' | 'hill-station' | 'wildlife' | 'heritage' | 'backwater';
  description: string;
  image: string;
  rating: number;
  // Optional fields with safe defaults
  distance?: number;
  coordinates?: { lat: number; lon: number };
  bestTime?: string;
  activities?: string[];
  entryFee?: string;
  timings?: string;
  nearbyAttractions?: string[];
  localTips?: string;
  // Additional optional fields for enhanced features
  crowdLevel?: 'Low' | 'Medium' | 'High';
  weatherSuitability?: 'Excellent' | 'Good' | 'Fair';
  isRecommended?: boolean;
}

// Kerala districts (keep existing)
export type KeralaDistrict = 
  | 'Thiruvananthapuram' | 'Kollam' | 'Pathanamthitta' | 'Alappuzha'
  | 'Kottayam' | 'Idukki' | 'Ernakulam' | 'Thrissur' | 'Palakkad'
  | 'Malappuram' | 'Kozhikode' | 'Wayanad' | 'Kannur' | 'Kasaragod';
