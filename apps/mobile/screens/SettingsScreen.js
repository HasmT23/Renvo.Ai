import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Card, Button, List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

const SettingsScreen = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // User will be automatically redirected to AuthGateway by the auth state listener in App.js
    } catch (error) {
      console.log('Logout Error:', error);
      // Only show error if there's an actual problem, not for user cancellations
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Log Out',
          style: 'destructive',
          onPress: handleLogout,
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        
        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.sectionTitle}>Account</Text>
            
            <List.Item
              title="Profile"
              description="Manage your profile information"
              left={(props) => <List.Icon {...props} icon="account" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Profile pressed')}
              style={styles.listItem}
            />
            
            <List.Item
              title="Notifications"
              description="Configure your notification preferences"
              left={(props) => <List.Icon {...props} icon="bell" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Notifications pressed')}
              style={styles.listItem}
            />
            
            <List.Item
              title="Privacy"
              description="Manage your privacy settings"
              left={(props) => <List.Icon {...props} icon="shield-account" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Privacy pressed')}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        <Card style={[styles.card, styles.logoutCard]}>
          <Card.Content style={styles.cardContent}>
            <Button
              mode="contained"
              onPress={confirmLogout}
              style={styles.logoutButton}
              labelStyle={styles.logoutButtonText}
              icon="logout"
            >
              Log Out
            </Button>
          </Card.Content>
        </Card>
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
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 24,
  },
  card: {
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
    marginBottom: 16,
  },
  logoutCard: {
    marginTop: 16,
  },
  cardContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  listItem: {
    paddingHorizontal: 0,
    marginBottom: 8,
  },
  logoutButton: {
    backgroundColor: '#dc2626',
    paddingVertical: 8,
    borderRadius: 12,
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SettingsScreen; 