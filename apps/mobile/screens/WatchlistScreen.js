import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const WatchlistScreen = () => {
  const mockWatchlist = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150x100/9333ea/ffffff?text=Lamborghini',
      name: '2020 Lamborghini Huracán',
      currentBid: '$245,000',
      timeLeft: '4h 23m',
      status: 'active'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150x100/059669/ffffff?text=McLaren',
      name: '2021 McLaren 720S',
      currentBid: '$289,500',
      timeLeft: 'Ended',
      status: 'ended'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Watchlist</Text>
          <Text style={styles.subtitle}>Track your favorite vehicles</Text>
        </View>

        {mockWatchlist.length > 0 ? (
          mockWatchlist.map((item) => (
            <Card key={item.id} style={styles.card}>
              <View style={styles.cardRow}>
                <Image 
                  source={{ uri: item.image }} 
                  style={styles.carImage}
                  resizeMode="cover"
                />
                <View style={styles.cardContent}>
                  <Text style={styles.carName}>{item.name}</Text>
                  <Text style={styles.currentBid}>{item.currentBid}</Text>
                  <View style={styles.statusContainer}>
                    <Chip 
                      style={[
                        styles.statusChip, 
                        item.status === 'active' ? styles.activeChip : styles.endedChip
                      ]}
                      textStyle={styles.statusText}
                    >
                      {item.timeLeft}
                    </Chip>
                  </View>
                </View>
              </View>
            </Card>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>❤️</Text>
            <Text style={styles.emptyTitle}>No vehicles in watchlist</Text>
            <Text style={styles.emptySubtitle}>
              Browse listings and add vehicles to your watchlist
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardRow: {
    flexDirection: 'row',
    padding: 16,
  },
  carImage: {
    width: 80,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  currentBid: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusChip: {
    height: 28,
  },
  activeChip: {
    backgroundColor: '#dcfce7',
  },
  endedChip: {
    backgroundColor: '#fee2e2',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 80,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default WatchlistScreen; 