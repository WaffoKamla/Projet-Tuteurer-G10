import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { login } from '../../../api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    try {
      console.log('Tentative de connexion avec:', { email, password });
      const data = await login(email, password);
      Alert.alert('Succès', 'Connexion réussie.');
      console.log('Connexion réussie:', data);
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert('Erreur', error.message || 'Erreur lors de la connexion.');
      console.error('Erreur de connexion:', error.message || error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#CCCCCC"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Inscrivez-vous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 100,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#004d40',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
    color: '#333333',
  },
  button: {
    backgroundColor: '#004d40',
    borderRadius: 8,
    paddingVertical: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
