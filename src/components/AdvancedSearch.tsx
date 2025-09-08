import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchFilters {
  category: string[];
  rating: number;
  distance: number;
  bestTime: string[];
}

interface Props {
  onSearch: (query: string, filters: SearchFilters) => void;
  onClose: () => void;
  visible: boolean;
}

export default function AdvancedSearch({ onSearch, onClose, visible }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    category: [],
    rating: 0,
    distance: 500,
    bestTime: []
  });

  const categories = [
    { id: 'beach', name: 'Beaches', icon: '🏖️' },
    { id: 'hill-station', name: 'Hill Stations', icon: '⛰️' },
    { id: 'backwater', name: 'Backwaters', icon: '🚤' },
    { id: 'heritage', name: 'Heritage', icon: '🏛️' },
    { id: 'wildlife', name: 'Wildlife', icon: '🐅' }
  ];

  const seasons = [
    { id: 'Oct-Mar', name: 'Winter Season (Oct-Mar)', icon: '❄️' },
    { id: 'Apr-Jun', name: 'Summer Season (Apr-Jun)', icon: '☀️' },
    { id: 'Jun-Sep', name: 'Monsoon Season (Jun-Sep)', icon: '🌧️' }
  ];

  const toggleCategory = (categoryId: string) => {
    setFilters(prev => ({
      ...prev,
      category: prev.category.includes(categoryId)
        ? prev.category.filter(c => c !== categoryId)
        : [...prev.category, categoryId]
    }));
  };

  const toggleSeason = (seasonId: string) => {
    setFilters(prev => ({
      ...prev,
      bestTime: prev.bestTime.includes(seasonId)
        ? prev.bestTime.filter(s => s !== seasonId)
        : [...prev.bestTime, seasonId]
    }));
  };

  const handleSearch = () => {
    onSearch(searchQuery, filters);
    onClose();
  };

  const clearFilters = () => {
    setSearchQuery('');
    setFilters({
      category: [],
      rating: 0,
      distance: 500,
      bestTime: []
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#2E8B57" />
          </TouchableOpacity>
          <Text style={styles.title}>Advanced Search</Text>
          <TouchableOpacity onPress={clearFilters} style={styles.clearButton}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.content}>
          {/* Search Input */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔍 Search Location</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter location, activity, or landmark..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999"
            />
          </View>

          {/* Category Filters */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📍 Categories</Text>
            <View style={styles.categoryGrid}>
              {categories.map(category => (
                <TouchableOpacity
                  key={category.id}
                  style={[
                    styles.categoryButton,
                    filters.category.includes(category.id) && styles.categoryButtonSelected
                  ]}
                  onPress={() => toggleCategory(category.id)}
                >
                  <Text style={styles.categoryIcon}>{category.icon}</Text>
                  <Text style={[
                    styles.categoryText,
                    filters.category.includes(category.id) && styles.categoryTextSelected
                  ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Rating Filter */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>⭐ Minimum Rating</Text>
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(rating => (
                <TouchableOpacity
                  key={rating}
                  style={[
                    styles.ratingButton,
                    filters.rating >= rating && styles.ratingButtonSelected
                  ]}
                  onPress={() => setFilters(prev => ({ ...prev, rating }))}
                >
                  <Ionicons 
                    name={filters.rating >= rating ? "star" : "star-outline"} 
                    size={24} 
                    color={filters.rating >= rating ? "#FFD700" : "#ccc"} 
                  />
                </TouchableOpacity>
              ))}
              <Text style={styles.ratingText}>
                {filters.rating > 0 ? `${filters.rating}+ stars` : 'Any rating'}
              </Text>
            </View>
          </View>

          {/* Distance Filter */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📏 Maximum Distance</Text>
            <View style={styles.distanceContainer}>
              <Text style={styles.distanceText}>{filters.distance} km</Text>
              <View style={styles.distanceButtons}>
                {[50, 100, 200, 500].map(distance => (
                  <TouchableOpacity
                    key={distance}
                    style={[
                      styles.distanceButton,
                      filters.distance === distance && styles.distanceButtonSelected
                    ]}
                    onPress={() => setFilters(prev => ({ ...prev, distance }))}
                  >
                    <Text style={[
                      styles.distanceButtonText,
                      filters.distance === distance && styles.distanceButtonTextSelected
                    ]}>
                      {distance}km
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          {/* Season Filter */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🌤️ Best Time to Visit</Text>
            <View style={styles.seasonContainer}>
              {seasons.map(season => (
                <TouchableOpacity
                  key={season.id}
                  style={[
                    styles.seasonButton,
                    filters.bestTime.includes(season.id) && styles.seasonButtonSelected
                  ]}
                  onPress={() => toggleSeason(season.id)}
                >
                  <Text style={styles.seasonIcon}>{season.icon}</Text>
                  <Text style={[
                    styles.seasonText,
                    filters.bestTime.includes(season.id) && styles.seasonTextSelected
                  ]}>
                    {season.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search" size={20} color="white" />
          <Text style={styles.searchButtonText}>Search Destinations</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  closeButton: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  clearButton: {
    padding: 5,
  },
  clearText: {
    color: '#2E8B57',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryButton: {
    flexBasis: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  categoryButtonSelected: {
    borderColor: '#2E8B57',
    backgroundColor: '#e8f5e8',
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  categoryTextSelected: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  ratingButton: {
    padding: 5,
  },
  ratingButtonSelected: {
    backgroundColor: '#fff3cd',
    borderRadius: 5,
  },
  ratingText: {
    marginLeft: 15,
    fontSize: 14,
    color: '#666',
  },
  distanceContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  distanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E8B57',
    textAlign: 'center',
    marginBottom: 15,
  },
  distanceButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  distanceButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  distanceButtonSelected: {
    backgroundColor: '#2E8B57',
  },
  distanceButtonText: {
    fontSize: 12,
    color: '#666',
  },
  distanceButtonTextSelected: {
    color: 'white',
  },
  seasonContainer: {
    gap: 10,
  },
  seasonButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  seasonButtonSelected: {
    borderColor: '#2E8B57',
    backgroundColor: '#e8f5e8',
  },
  seasonIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  seasonText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  seasonTextSelected: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E8B57',
    margin: 20,
    padding: 18,
    borderRadius: 12,
    gap: 10,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
