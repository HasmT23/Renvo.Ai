import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const InsightsScreen = () => {
  const mockInsights = [
    {
      title: 'Market Trends',
      value: '📈 +12% this month',
      description: 'Luxury vehicles seeing increased demand'
    },
    {
      title: 'Your Portfolio',
      value: '$0',
      description: 'Start listing vehicles to see insights'
    },
    {
      title: 'Optimal Listing Time',
      value: '⏰ Sunday evenings',
      description: 'Peak bidding activity occurs on weekends'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Market Insights</Text>
          <Text style={styles.subtitle}>AI-powered market intelligence</Text>
        </View>

        {mockInsights.map((insight, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardTitle}>{insight.title}</Text>
              <Text style={styles.value}>{insight.value}</Text>
              <Text style={styles.description}>{insight.description}</Text>
            </Card.Content>
          </Card>
        ))}
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
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});

export default InsightsScreen; 