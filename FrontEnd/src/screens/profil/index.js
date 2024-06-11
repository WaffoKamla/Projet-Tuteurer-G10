import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';

const UserProfile = () => {
  const [user, setUser] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '555-1234',
    address: '123 Main St, Anytown USA',
  });

  const [moves, setMoves] = useState([
    { date: '2022-01-15', services: ['Packing', 'Transport', 'Unloading'], rating: 4, comment: 'Great service!' },
    { date: '2020-06-01', services: ['Transport', 'Unloading'], rating: 3, comment: 'Could have been better' },
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    { type: 'Visa', number: '1234' },
    { type: 'Mastercard', number: '5678' },
  ]);

  const [preferences, setPreferences] = useState({
    housing: 'Apartment',
    size: '2 Bedroom',
    specialRequirements: ['Fragile items', 'Pet transport'],
    additionalServices: ['Packing', 'Insurance'],
  });

  return (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/girl1.png')} style={styles.profileImage} />
        <Text style={styles.headerText}>Daniola31🤓</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Full Name:</Text>
          <Text style={styles.value}>{user.fullName}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user.phone}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{user.address}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Move History</Text>
        {moves.map((move, index) => (
          <View key={index} style={styles.moveItem}>
            <View style={styles.moveHeader}>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.value}>{move.date}</Text>
            </View>
            <View style={styles.moveDetails}>
              <Text style={styles.label}>Services:</Text>
              <Text style={styles.value}>{move.services.join(', ')}</Text>
              <Text style={styles.label}>Rating:</Text>
              <Text style={styles.value}>{move.rating}/5</Text>
              <Text style={styles.label}>Comment:</Text>
              <Text style={styles.value}>{move.comment}</Text>
            </View>
          </View>
        ))}
      </View>

      

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Housing Type:</Text>
          <Text style={styles.value}>{preferences.housing}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Size:</Text>
          <Text style={styles.value}>{preferences.size}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Special Requirements:</Text>
          <Text style={styles.value}>{preferences.specialRequirements.join(', ')}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Additional Services:</Text>
          <Text style={styles.value}>{preferences.additionalServices.join(', ')}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Management</Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.buttonText}>Update Personal Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#2196F3' }]}>
          <Text style={styles.buttonText}>Update Payment Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#9C27B0' }]}>
          <Text style={styles.buttonText}>View Move History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#E91E63' }]}>
          <Text style={styles.buttonText}>Leave Feedback</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  moveItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  moveHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  moveDetails: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 5,
  },
  paymentItem: {
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 10,
    },
    buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems:'center',
    justifyContent:'center',
    },
    
});
export default UserProfile;

