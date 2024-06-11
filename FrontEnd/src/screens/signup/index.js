import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { creerUtilisateur } from '../../../api'; // Assurez-vous que ce chemin est correct
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await creerUtilisateur(nom, prenom, email, password);
      if (response.success) {
        await AsyncStorage.setItem('user', JSON.stringify({ nom, prenom, email }));
        Alert.alert('Succès', response.message);
        navigation.navigate('UserProfile', { user: { nom, prenom, email } });
      } else {
        Alert.alert('Erreur', response.message);
      }
    } catch (error) {
      Alert.alert('Erreur', 'Échec de la création de compte');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={nom}
        onChangeText={setNom}
      />
      <TextInput
        style={styles.input}
        placeholder="Prénom"
        value={prenom}
        onChangeText={setPrenom}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#004d40',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RegisterScreen;
