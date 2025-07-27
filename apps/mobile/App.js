import React, { useState, useEffect } from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { onAuthStateChanged } from 'firebase/auth';

// Firebase config
import { auth } from './firebase.config';

// Screens
import SplashScreen from './screens/SplashScreen';
import AuthGatewayScreen from './screens/AuthGatewayScreen';
import MainTabNavigator from './navigation/MainTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{ 
            headerShown: false,
            cardStyle: { backgroundColor: '#ffffff' }
          }}
        >
          {user ? (
            <Stack.Screen name="Main" component={MainTabNavigator} />
          ) : (
            <Stack.Screen name="AuthGateway" component={AuthGatewayScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// Register the main component
registerRootComponent(App); 