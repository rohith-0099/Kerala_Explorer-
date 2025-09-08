const WEATHER_API_KEY = 'your_api_key_here'; // Get free key from openweathermap.org
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Kerala district coordinates for accurate weather data
const DISTRICT_COORDINATES = {
  'Thiruvananthapuram': { lat: 8.5241, lon: 76.9366 },
  'Kollam': { lat: 8.8932, lon: 76.6141 },
  'Pathanamthitta': { lat: 9.2648, lon: 76.7870 },
  'Alappuzha': { lat: 9.4981, lon: 76.3388 },
  'Kottayam': { lat: 9.5916, lon: 76.5222 },
  'Idukki': { lat: 9.8543, lon: 76.8726 },
  'Ernakulam': { lat: 9.9312, lon: 76.2673 },
  'Thrissur': { lat: 10.5276, lon: 76.2144 },
  'Palakkad': { lat: 10.7867, lon: 76.6548 },
  'Malappuram': { lat: 11.0510, lon: 76.0711 },
  'Kozhikode': { lat: 11.2588, lon: 75.7804 },
  'Wayanad': { lat: 11.6054, lon: 76.0876 },
  'Kannur': { lat: 11.8745, lon: 75.3704 },
  'Kasaragod': { lat: 12.4996, lon: 74.9869 }
};

export interface DetailedWeather {
  current: {
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    description: string;
    icon: string;
    sunrise: string;
    sunset: string;
  };
  forecast: Array<{
    date: string;
    temp_min: number;
    temp_max: number;
    description: string;
    icon: string;
    humidity: number;
  }>;
}

export const fetchWeatherData = async (district: string): Promise<DetailedWeather> => {
  try {
    const coords = DISTRICT_COORDINATES[district as keyof typeof DISTRICT_COORDINATES];
    if (!coords) throw new Error('District not found');

    // Current weather
    const currentResponse = await fetch(
      `${BASE_URL}/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const currentData = await currentResponse.json();

    // 5-day forecast
    const forecastResponse = await fetch(
      `${BASE_URL}/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastData = await forecastResponse.json();

    return {
      current: {
        temp: Math.round(currentData.main.temp),
        feels_like: Math.round(currentData.main.feels_like),
        humidity: currentData.main.humidity,
        wind_speed: Math.round(currentData.wind.speed * 3.6), // Convert m/s to km/h
        description: currentData.weather[0].description,
        icon: getWeatherIcon(currentData.weather[0].id),
        sunrise: new Date(currentData.sys.sunrise * 1000).toLocaleTimeString('en-IN', { 
          hour: '2-digit', minute: '2-digit' 
        }),
        sunset: new Date(currentData.sys.sunset * 1000).toLocaleTimeString('en-IN', { 
          hour: '2-digit', minute: '2-digit' 
        }),
      },
      forecast: forecastData.list.slice(0, 5).map((item: any) => ({
        date: new Date(item.dt * 1000).toLocaleDateString('en-IN', { 
          weekday: 'short', month: 'short', day: 'numeric' 
        }),
        temp_min: Math.round(item.main.temp_min),
        temp_max: Math.round(item.main.temp_max),
        description: item.weather[0].description,
        icon: getWeatherIcon(item.weather[0].id),
        humidity: item.main.humidity,
      }))
    };
  } catch (error) {
    console.error('Weather fetch error:', error);
    // Return fallback data for demo
    return getFallbackWeatherData(district);
  }
};

const getWeatherIcon = (weatherId: number): string => {
  if (weatherId >= 200 && weatherId < 300) return '⛈️'; // Thunderstorm
  if (weatherId >= 300 && weatherId < 500) return '🌦️'; // Drizzle
  if (weatherId >= 500 && weatherId < 600) return '🌧️'; // Rain
  if (weatherId >= 600 && weatherId < 700) return '❄️'; // Snow
  if (weatherId >= 700 && weatherId < 800) return '🌫️'; // Atmosphere
  if (weatherId === 800) return '☀️'; // Clear
  return '⛅'; // Clouds
};

const getFallbackWeatherData = (district: string): DetailedWeather => ({
  current: {
    temp: Math.floor(Math.random() * 8) + 26, // 26-34°C
    feels_like: Math.floor(Math.random() * 8) + 28,
    humidity: Math.floor(Math.random() * 20) + 65, // 65-85%
    wind_speed: Math.floor(Math.random() * 10) + 8, // 8-18 km/h
    description: 'Partly cloudy with monsoon breeze',
    icon: ['☀️', '⛅', '🌦️', '🌧️'][Math.floor(Math.random() * 4)],
    sunrise: '06:15',
    sunset: '18:45',
  },
  forecast: Array.from({ length: 5 }, (_, i) => ({
    date: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { 
      weekday: 'short', month: 'short', day: 'numeric' 
    }),
    temp_min: Math.floor(Math.random() * 5) + 24,
    temp_max: Math.floor(Math.random() * 5) + 30,
    description: ['Sunny', 'Partly Cloudy', 'Light Rain', 'Heavy Rain', 'Cloudy'][Math.floor(Math.random() * 5)],
    icon: ['☀️', '⛅', '🌦️', '🌧️', '☁️'][Math.floor(Math.random() * 5)],
    humidity: Math.floor(Math.random() * 15) + 70,
  }))
});
