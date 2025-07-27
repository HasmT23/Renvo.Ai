import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Platform } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as AppleAuthentication from 'expo-apple-authentication';
import { auth } from '../firebase.config';

const AuthGatewayScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Configure Google Sign-In (Disabled for Expo Go compatibility)
    // GoogleSignin.configure({
    //   webClientId: 'your-web-client-id.googleusercontent.com',
    // });

    // Animate card entrance
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleGoogleSignIn = async () => {
    // Google Sign-In is disabled in Expo Go
    alert('Google Sign-In requires a custom development build. Please use Email sign-in for now or build a standalone app.');
    console.log('Google Sign-In: Disabled in Expo Go');
  };

  const handleAppleSignIn = async () => {
    // Apple Sign-In may have issues in Expo Go
    alert('Apple Sign-In requires a custom development build. Please use Email sign-in for now or build a standalone app.');
    console.log('Apple Sign-In: Disabled in Expo Go');
  };

  const handleEmailSignUp = () => {
    // Navigate to email sign up (placeholder for now)
    console.log('Navigate to Email Sign Up');
  };

  const handleEmailLogin = () => {
    // Navigate to email login (placeholder for now)
    console.log('Navigate to Email Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Renvo</Text>
        <Text style={styles.subtitle}>AI-Powered Car Consultant</Text>
      </View>

      <Animated.View 
        style={[
          styles.cardContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.welcomeText}>Welcome to Renvo</Text>
            <Text style={styles.description}>
              Optimize your vehicle listings with AI-powered insights
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                onPress={handleGoogleSignIn}
                style={[styles.button, styles.googleButton]}
                labelStyle={styles.buttonText}
                icon="google"
              >
                Continue with Google
              </Button>

              {Platform.OS === 'ios' && (
                <Button
                  mode="contained"
                  onPress={handleAppleSignIn}
                  style={[styles.button, styles.appleButton]}
                  labelStyle={styles.buttonText}
                  icon="apple"
                >
                  Continue with Apple
                </Button>
              )}

              <Button
                mode="outlined"
                onPress={handleEmailSignUp}
                style={[styles.button, styles.outlinedButton]}
                labelStyle={styles.outlinedButtonText}
              >
                Sign up
              </Button>

              <Button
                mode="text"
                onPress={handleEmailLogin}
                style={styles.textButton}
                labelStyle={styles.textButtonLabel}
              >
                Log in
              </Button>
            </View>
          </Card.Content>
        </Card>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2563eb',
    letterSpacing: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    maxWidth: 400,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContent: {
    padding: 32,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    paddingVertical: 8,
    borderRadius: 12,
  },
  googleButton: {
    backgroundColor: '#4285f4',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  outlinedButton: {
    borderColor: '#d1d5db',
    borderWidth: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  outlinedButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
  textButton: {
    marginTop: 8,
  },
  textButtonLabel: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AuthGatewayScreen; 