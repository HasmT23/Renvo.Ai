import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Card, List, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';

const ProfileScreen = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Logout Error:', error);
      Alert.alert('Error', 'Failed to log out. Please try again.');
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      'Log Out',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', style: 'destructive', onPress: handleLogout },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Avatar.Text size={80} label="U" style={styles.avatar} />
          <Text style={styles.name}>Test User</Text>
          <Text style={styles.email}>test@renvo.ai</Text>
        </View>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.sectionTitle}>Account</Text>
            <List.Item
              title="Edit Profile"
              description="Update your personal information"
              left={(props) => <List.Icon {...props} icon="account-edit" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Edit Profile pressed')}
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
              title="Payment Methods"
              description="Manage your payment options"
              left={(props) => <List.Icon {...props} icon="credit-card" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Payment Methods pressed')}
              style={styles.listItem}
            />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.sectionTitle}>Support</Text>
            <List.Item
              title="Help Center"
              description="Get answers to common questions"
              left={(props) => <List.Icon {...props} icon="help-circle" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Help Center pressed')}
              style={styles.listItem}
            />
            <List.Item
              title="Contact Support"
              description="Reach out to our support team"
              left={(props) => <List.Icon {...props} icon="message" />}
              right={(props) => <List.Icon {...props} icon="chevron-right" />}
              onPress={() => console.log('Contact Support pressed')}
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
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatar: {
    backgroundColor: '#2563eb',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  email: {
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
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  listItem: {
    paddingHorizontal: 0,
  },
  logoutCard: {
    marginTop: 'auto',
  },
  logoutButton: {
    backgroundColor: '#dc2626',
    borderRadius: 12,
    paddingVertical: 4,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen; 