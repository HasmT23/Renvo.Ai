import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const handleStartAnalysis = () => {
    // This button should currently do nothing as per Sprint 1 requirements
    // The alert will be removed in prompt 5
    console.log('Start AI Analysis clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome to Renvo</Text>
          <Text style={styles.subtitle}>Your AI-powered car consultant</Text>
        </View>

        <Card style={styles.mainCard}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Ready to List Your Vehicle?</Text>
              <Text style={styles.cardDescription}>
                Get AI-powered insights to optimize your car listing and maximize your selling potential.
              </Text>
            </View>

            <View style={styles.features}>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>🤖</Text>
                <Text style={styles.featureText}>AI Analysis</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>📈</Text>
                <Text style={styles.featureText}>Price Optimization</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>📝</Text>
                <Text style={styles.featureText}>Listing Enhancement</Text>
              </View>
            </View>

            <Button
              mode="contained"
              onPress={handleStartAnalysis}
              style={styles.primaryButton}
              labelStyle={styles.buttonText}
            >
              Start AI Analysis
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    marginBottom: 32,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  mainCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
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
    padding: 24,
  },
  cardHeader: {
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen; 