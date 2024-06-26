<<<<<<< HEAD:FrontEnd/src/screens/login/index.js
import React, {useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { login } from '../../../api';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [mdp, setPassword] = useState('');  

  const handleLogin = async () => {
    try {
        console.log('Tentative de connexion avec', { email, mdp });
        const data = await login(email, mdp);
        console.log('Réponse de connexion:', data);
        if (data.message === 'Connexion réussie.') {
            await AsyncStorage.setItem('user', JSON.stringify(data.user));
            Alert.alert('Succès', data.message);
            navigation.navigate('Profils');
        } else {
            Alert.alert('Erreur', data.message);
        }
    } catch (error) {
        console.error('Échec de la connexion:', error);
        Alert.alert('Erreur', 'Échec de la connexion');
    }
};
=======
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

>>>>>>> 47cfcbd36c60d86ba466d097b4c61b1700db1107:src/screens/login/index.js
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#CCCCCC"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={mdp}
          onChangeText={setPassword}
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
