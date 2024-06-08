import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { getUserDetails, updateUserDetails, logout } from '../../../api'; // Assurez-vous que ces fonctions sont définies dans votre fichier API

const UserProfile = ({ navigation }) => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();
        setUser(userDetails);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur:', error);
        Alert.alert('Erreur', 'Impossible de récupérer les détails de l\'utilisateur.');
      }
    };
    fetchUserDetails();
  }, []);

  const handleSave = async () => {
    try {
      await updateUserDetails(user);
      Alert.alert('Succès', 'Informations mises à jour avec succès.');
      setIsEditing(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour des détails de l\'utilisateur:', error);
      Alert.alert('Erreur', 'Impossible de mettre à jour les détails de l\'utilisateur.');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Login'); // Assurez-vous que cette route existe
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      Alert.alert('Erreur', 'Impossible de se déconnecter.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../assets/girl1.png')} style={styles.profileImage} />
          <Text style={styles.headerText}>{user.fullName}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations Personnelles</Text>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Nom Complet:</Text>
            <Text style={styles.value}>{user.fullName}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Téléphone:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.phone}
                onChangeText={(text) => setUser({ ...user, phone: text })}
              />
            ) : (
              <Text style={styles.value}>{user.phone}</Text>
            )}
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Adresse:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.address}
                onChangeText={(text) => setUser({ ...user, address: text })}
              />
            ) : (
              <Text style={styles.value}>{user.address}</Text>
            )}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={isEditing ? handleSave : () => setIsEditing(true)}
        >
          <Text style={styles.buttonText}>{isEditing ? 'Enregistrer' : 'Modifier'}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#E91E63' }]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Déconnexion</Text>
        </TouchableOpacity>
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
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#004d40',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserProfile;
