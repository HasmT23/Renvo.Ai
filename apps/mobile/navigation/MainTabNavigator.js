import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AddVehicleScreen from '../screens/AddVehicleScreen';
import InsightsScreen from '../screens/InsightsScreen';
import WatchlistScreen from '../screens/WatchlistScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          paddingTop: 8,
          paddingBottom: 8,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen 
        name="Listings" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Listings',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size - 2 }}>🚗</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="AddVehicle" 
        component={AddVehicleScreen}
        options={{
          tabBarLabel: 'Add Vehicle',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size - 2 }}>➕</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Insights" 
        component={InsightsScreen}
        options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size - 2 }}>📊</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Watchlist" 
        component={WatchlistScreen}
        options={{
          tabBarLabel: 'Watchlist',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size - 2 }}>❤️</Text>
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size - 2 }}>👤</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator; 