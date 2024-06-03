import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Bienvenue sur notre site de déménagement</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Image source={require('../assets/google.png') } style={styles.logo} />
          <Text style={styles.buttonText}>Se connecter avec Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Image source={require('../assets/facebook.png') } style={styles.logo} />
          <Text style={styles.buttonText}>Se connecter avec Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Pas encore de compte ?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={[styles.registerText, styles.registerLink]}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 12,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  twitterButton: {
    backgroundColor: '#1DA1F2',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  registerContainer: {
    flexDirection: 'row',
  },
  registerText: {
    color: '#666',
  },
  registerLink: {
    color: '#0077B6',
    marginLeft: 4,
  },
});

export default LoginPage;