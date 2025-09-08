import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens (we'll create these next)
import HomeScreen from './src/screens/HomeScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import TourismScreen from './src/screens/TourismScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Weather') {
              iconName = focused ? 'cloud' : 'cloud-outline';
            } else if (route.name === 'Tourism') {
              iconName = focused ? 'camera' : 'camera-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2E8B57', // Kerala green theme
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#2E8B57',
          },
          headerTitleStyle: {
            color: 'white',
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Kerala Explorer' }}
        />
        <Tab.Screen 
          name="Weather" 
          component={WeatherScreen}
          options={{ title: 'Weather' }}
        />
        <Tab.Screen 
          name="Tourism" 
          component={TourismScreen}
          options={{ title: 'Tourism' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}