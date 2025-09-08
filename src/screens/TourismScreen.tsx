import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Linking,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TourismSpot } from '../types';
import { generateDynamicTourismData } from '../data/tourismData';

export default function TourismScreen() {
  const [spots, setSpots] = useState<TourismSpot[]>([]);
  const [filteredSpots, setFilteredSpots] = useState<TourismSpot[]>([]);
  const [selectedSpot, setSelectedSpot] = useState<TourismSpot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTourismData();
  }, []);

  const loadTourismData = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const enhancedData = generateDynamicTourismData('Ernakulam');
      setSpots(enhancedData);
      setFilteredSpots(enhancedData);
      setLoading(false);
    }, 1000);
  };

  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      'beach': '🏖️',
      'hill-station': '⛰️',
      'backwater': '🚤',
      'heritage': '🏛️',
      'wildlife': '🐅'
    };
    return icons[category] || '📍';
  };

  const openMaps = (spot: TourismSpot) => {
    if (spot.coordinates) {
      const url = `https://www.google.com/maps/search/?api=1&query=${spot.coordinates.lat},${spot.coordinates.lon}`;
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'Could not open maps');
      });
    } else {
      Alert.alert('Location not available', 'Map coordinates not found for this location');
    }
  };

  const renderSpotCard = ({ item }: { item: TourismSpot }) => (
    <TouchableOpacity
      style={styles.spotCard}
      onPress={() => setSelectedSpot(item)}
    >
      <Image source={{ uri: item.image }} style={styles.spotImage} />
      <View style={styles.spotInfo}>
        <View style={styles.spotHeader}>
          <Text style={styles.categoryIcon}>{getCategoryIcon(item.category)}</Text>
          <Text style={styles.spotName}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        
        <Text style={styles.district}>{item.district} District</Text>
        <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
        
        <View style={styles.spotFooter}>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={14} color="#666" />
            <Text style={styles.infoText}>{item.distance || 0} km away</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={14} color="#666" />
            <Text style={styles.infoText}>{item.bestTime || 'Year-round'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderDetailModal = () => (
    <Modal
      visible={!!selectedSpot}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      {selectedSpot && (
        <ScrollView style={styles.modalContainer}>
          <Image source={{ uri: selectedSpot.image }} style={styles.modalImage} />
          
          <TouchableOpacity
            style={styles.closeModal}
            onPress={() => setSelectedSpot(null)}
          >
            <Ionicons name="close-circle" size={32} color="white" />
          </TouchableOpacity>

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedSpot.name}</Text>
              <View style={styles.modalRating}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.modalRatingText}>{selectedSpot.rating}/5</Text>
              </View>
            </View>

            <Text style={styles.modalDistrict}>{selectedSpot.district} District</Text>
            <Text style={styles.modalDescription}>{selectedSpot.description}</Text>

            {/* Key Information */}
            <View style={styles.infoSection}>
              <Text style={styles.sectionTitle}>📝 Key Information</Text>
              <View style={styles.infoGrid}>
                <View style={styles.infoCard}>
                  <Text style={styles.infoLabel}>Best Time</Text>
                  <Text style={styles.infoValue}>{selectedSpot.bestTime || 'Year-round'}</Text>
                </View>
                <View style={styles.infoCard}>
                  <Text style={styles.infoLabel}>Entry Fee</Text>
                  <Text style={styles.infoValue}>{selectedSpot.entryFee || 'Free'}</Text>
                </View>
                <View style={styles.infoCard}>
                  <Text style={styles.infoLabel}>Timings</Text>
                  <Text style={styles.infoValue}>{selectedSpot.timings || '24 hours'}</Text>
                </View>
                <View style={styles.infoCard}>
                  <Text style={styles.infoLabel}>Distance</Text>
                  <Text style={styles.infoValue}>{selectedSpot.distance || 0} km</Text>
                </View>
              </View>
            </View>

            {/* Activities - Safe rendering */}
            {selectedSpot.activities && selectedSpot.activities.length > 0 && (
              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>🎯 Activities</Text>
                <View style={styles.activitiesContainer}>
                  {selectedSpot.activities.map((activity, index) => (
                    <View key={index} style={styles.activityTag}>
                      <Text style={styles.activityText}>{activity}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {/* Nearby Attractions - Safe rendering */}
            {selectedSpot.nearbyAttractions && selectedSpot.nearbyAttractions.length > 0 && (
              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>🗺️ Nearby Attractions</Text>
                {selectedSpot.nearbyAttractions.map((attraction, index) => (
                  <Text key={index} style={styles.nearbyItem}>• {attraction}</Text>
                ))}
              </View>
            )}

            {/* Local Tips - Safe rendering */}
            {selectedSpot.localTips && (
              <View style={styles.infoSection}>
                <Text style={styles.sectionTitle}>💡 Local Tips</Text>
                <Text style={styles.tipsText}>{selectedSpot.localTips}</Text>
              </View>
            )}

            {/* Action Buttons */}
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => openMaps(selectedSpot)}
              >
                <Ionicons name="map" size={20} color="white" />
                <Text style={styles.actionButtonText}>Open Maps</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.secondaryButton]}
                onPress={() => Alert.alert('Saved!', `${selectedSpot.name} added to favorites`)}
              >
                <Ionicons name="heart-outline" size={20} color="#2E8B57" />
                <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </Modal>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🌴 Discover Kerala</Text>
        <Text style={styles.headerSubtitle}>{filteredSpots.length} amazing destinations</Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>🔍 Discovering amazing places...</Text>
        </View>
      ) : (
        <FlatList
          data={filteredSpots}
          renderItem={renderSpotCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}

      {renderDetailModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2E8B57',
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e8f5e8',
  },
  list: {
    padding: 15,
    gap: 15,
  },
  spotCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  spotImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  spotInfo: {
    padding: 15,
  },
  spotHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  categoryIcon: {
    fontSize: 20,
  },
  spotName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  rating: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  district: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '500',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  spotFooter: {
    flexDirection: 'row',
    gap: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },

  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  modalImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  closeModal: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1,
  },
  modalContent: {
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  modalTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  modalRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  modalRatingText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  modalDistrict: {
    fontSize: 16,
    color: '#2E8B57',
    fontWeight: '500',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 25,
  },
  infoSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  infoCard: {
    flexBasis: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  activityTag: {
    backgroundColor: '#e8f5e8',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  activityText: {
    fontSize: 14,
    color: '#2E8B57',
    fontWeight: '500',
  },
  nearbyItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  tipsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E8B57',
    borderRadius: 10,
    padding: 15,
    gap: 8,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#2E8B57',
  },
  secondaryButtonText: {
    color: '#2E8B57',
  },
});
