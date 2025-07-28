import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const handleGetStarted = () => {
    console.log('Get Started Now clicked');
  };

  const handleStartAnalysis = () => {
    console.log('Start AI Analysis clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Renvo</Text>
        <Button 
          mode="contained" 
          onPress={handleGetStarted}
          style={styles.getStartedButton}
          labelStyle={styles.getStartedButtonText}
          compact
        >
          Get Started Now
        </Button>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.mainCard}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardTitle}>Ready to List Your Vehicle?</Text>
            <Text style={styles.cardDescription}>
              Get AI-powered insights to optimize your car listing and maximize your selling potential.
            </Text>
            
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
        
        {/* Spacer for bottom navigation */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  getStartedButton: {
    backgroundColor: '#2563eb',
    borderRadius: 20,
  },
  getStartedButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
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
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 24,
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
  bottomSpacer: {
    height: 20,
  },
});

export default HomeScreen; 