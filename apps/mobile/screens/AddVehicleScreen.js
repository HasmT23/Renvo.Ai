import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddVehicleScreen = () => {
  const handleAddVehicle = () => {
    console.log('Add Vehicle functionality coming in Sprint 2');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Add Your Vehicle</Text>
        <Text style={styles.subtitle}>List your car and get AI-powered insights</Text>
        
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardTitle}>📸 Photo Upload</Text>
            <Text style={styles.cardDescription}>
              Upload up to 55 high-resolution photos of your vehicle
            </Text>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardTitle}>🤖 AI Analysis</Text>
            <Text style={styles.cardDescription}>
              Get instant pricing recommendations and listing optimization
            </Text>
          </Card.Content>
        </Card>

        <Button 
          mode="contained" 
          onPress={handleAddVehicle}
          style={styles.button}
          labelStyle={styles.buttonText}
        >
          Start Listing Process
        </Button>
      </View>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
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
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    marginTop: 24,
    paddingVertical: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddVehicleScreen; 