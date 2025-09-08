import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { KeralaDistrict, WeatherData } from '../types';
import { KERALA_DISTRICTS } from '../data/keralaDistricts';

export default function HomeScreen() {
  const [selectedDistrict, setSelectedDistrict] = useState<KeralaDistrict>('Ernakulam');
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    loadWeatherData();
  }, [selectedDistrict]);

  const loadWeatherData = async () => {
    // Dummy weather data for now - we'll add real API later
    const dummyWeather: WeatherData = {
      district: selectedDistrict,
      temperature: Math.floor(Math.random() * 10) + 25, // Random temp 25-35°C
      description: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
      humidity: Math.floor(Math.random() * 30) + 60, // 60-90%
      windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 km/h
      icon: ['☀️', '⛅', '☁️', '🌧️'][Math.floor(Math.random() * 4)]
    };
    
    setCurrentWeather(dummyWeather);
  };

  const handleDistrictChange = (district: KeralaDistrict) => {
    setSelectedDistrict(district);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>🌴 Kerala Explorer</Text>
        <Text style={styles.subtitle}>Weather & Tourism Guide</Text>
      </View>

      {/* District Selector */}
      <View style={styles.districtSection}>
        <Text style={styles.sectionTitle}>Select District:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {KERALA_DISTRICTS.map((district) => (
            <TouchableOpacity
              key={district}
              style={[
                styles.districtButton,
                selectedDistrict === district && styles.selectedDistrict
              ]}
              onPress={() => handleDistrictChange(district)}
            >
              <Text 
                style={[
                  styles.districtButtonText,
                  selectedDistrict === district && styles.selectedDistrictText
                ]}
              >
                {district}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Weather Card */}
      {currentWeather && (
        <View style={styles.weatherCard}>
          <Text style={styles.weatherDistrict}>{currentWeather.district}</Text>
          <View style={styles.weatherMain}>
            <Text style={styles.weatherIcon}>{currentWeather.icon}</Text>
            <Text style={styles.temperature}>{currentWeather.temperature}°C</Text>
          </View>
          <Text style={styles.weatherDescription}>{currentWeather.description}</Text>
          
          <View style={styles.weatherDetails}>
            <View style={styles.weatherDetailItem}>
              <Text style={styles.detailLabel}>Humidity</Text>
              <Text style={styles.detailValue}>{currentWeather.humidity}%</Text>
            </View>
            <View style={styles.weatherDetailItem}>
              <Text style={styles.detailLabel}>Wind Speed</Text>
              <Text style={styles.detailValue}>{currentWeather.windSpeed} km/h</Text>
            </View>
          </View>
        </View>
      )}

      {/* Quick Actions */}
      <View style={styles.actionsSection}>
        <Text style={styles.sectionTitle}>Explore Kerala</Text>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => Alert.alert('Tourism', `Explore ${selectedDistrict} attractions!`)}
        >
          <Text style={styles.actionButtonText}>🏖️ Tourism Spots in {selectedDistrict}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => Alert.alert('Monsoon', 'Monsoon updates coming soon!')}
        >
          <Text style={styles.actionButtonText}>🌧️ Monsoon Updates</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  welcomeSection: {
    backgroundColor: '#2E8B57',
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#e8f5e8',
  },
  districtSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2E8B57',
  },
  districtButton: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#2E8B57',
  },
  selectedDistrict: {
    backgroundColor: '#2E8B57',
  },
  districtButtonText: {
    fontSize: 14,
    color: '#2E8B57',
  },
  selectedDistrictText: {
    color: 'white',
  },
  weatherCard: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  weatherDistrict: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2E8B57',
    marginBottom: 15,
  },
  weatherMain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  weatherIcon: {
    fontSize: 50,
    marginRight: 20,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  weatherDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherDetailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  actionsSection: {
    padding: 20,
  },
  actionButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#2E8B57',
    textAlign: 'center',
  },
});
