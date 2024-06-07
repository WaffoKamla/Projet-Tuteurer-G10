import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          placeholderTextColor="#CCCCCC"
        />
        <TextInput
          style={styles.input}
          placeholder="Prénom"
          placeholderTextColor="#CCCCCC"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#CCCCCC"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#CCCCCC"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connexion</Text>
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

export default RegisterScreen;