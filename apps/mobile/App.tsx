import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { initializeApp } from 'firebase/app';
import { colors, typography, spacing } from './styles';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Firebase configuration (will be moved to separate config file)
const firebaseConfig = {
  // Add your Firebase config here
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isReady) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <View style={styles.splashContent}>
          <Text style={styles.logo}>Renvo</Text>
          <Text style={styles.subtitle}>AI Car Consultant</Text>
          <ActivityIndicator size="large" color={colors.primary[500]} style={styles.loader} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>Renvo</Text>
        <Text style={styles.subtitle}>AI Car Consultant</Text>
        <Text style={styles.description}>
          Optimize your vehicle listings for car auctions with AI-powered insights
        </Text>
        <Text style={styles.status}>Sprint 1 - Foundation Setup Complete</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  splashContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  logo: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.bold,
    color: colors.gray[800],
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
    color: colors.gray[500],
    marginBottom: spacing.xl,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.sizes.base,
    color: colors.gray[500],
    textAlign: 'center',
    lineHeight: typography.lineHeights.normal,
    marginBottom: spacing['4xl'],
  },
  status: {
    fontSize: typography.sizes.sm,
    color: colors.gray[400],
    fontStyle: 'italic',
    textAlign: 'center',
  },
  loader: {
    marginTop: spacing['4xl'],
  },
});