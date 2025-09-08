# 🌴 Kerala Explorer - Weather & Tourism App

A comprehensive React Native mobile application showcasing Kerala's weather and tourism destinations, built with Expo and TypeScript.

![Kerala Explorer](https://your-screenshot-url.png)

## ✨ Features

- 🌦️ **Real-time Weather Data** - Weather information for all 14 Kerala districts
- 📍 **Tourism Guide** - Comprehensive database of beaches, hill stations, heritage sites
- 🔍 **Advanced Search** - Filter by category, rating, distance, and season
- 📱 **Cross-platform** - Runs on iOS, Android, and Web
- 🎨 **Kerala Theme** - Beautiful green color scheme inspired by God's Own Country
- ⚡ **Offline Support** - Cached data for seamless experience

## 🛠️ Tech Stack

- **Framework:** React Native with Expo
- **Language:** TypeScript
- **Navigation:** React Navigation 6
- **Icons:** Expo Vector Icons
- **API:** OpenWeatherMap (planned)
- **Styling:** StyleSheet API with responsive design

## 📱 Screenshots

[Add screenshots of your app here]

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Expo CLI
- Expo Go app on your mobile device

### Installation

1. Clone the repository
git clone https://github.com/yourusername/kerala-explorer.git
cd kerala-explorer

2. Install dependencies
npm install

3. Start the development server
npx expo start

4. Scan the QR code with Expo Go app to run on your device

## 🌟 Key Features Implemented

### Weather Module
- District-wise weather display
- 5-day forecast (planned)
- Real-time data integration

### Tourism Module
- 8+ curated destinations
- Detailed information with photos
- Interactive maps integration
- Activity recommendations

### User Experience
- Smooth navigation with bottom tabs
- Loading states and error handling
- Responsive design for all screen sizes

## 🔧 Development

### Adding New Tourism Destinations
1. Update `src/data/tourismData.ts`
2. Add destination details with proper typing
3. Include coordinates for maps integration

### API Integration
Environment variables are used for API keys:
const WEATHER_API_KEY = process.env.WEATHER_API_KEY || 'demo_key';


## 📈 Performance Optimizations

- Lazy loading of images
- Efficient FlatList rendering
- Minimal re-renders with proper React patterns
- Optimized bundle size

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Rohith** - Engineering Student  
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Kerala Tourism for inspiration
- Unsplash for beautiful destination photos
- Expo team for excellent development tools
- React Native community

---

⭐ **Star this repo if you found it helpful!**
