import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const WelcomePage = ({ navigation }) => {
  return (
    <ImageBackground source={require('./assets/hero2.jpg')} style={styles.container}>
      <View style={[styles.content, styles.contentBottom]}>
        <Text style={styles.title}>Prêt pour un déménagement en toute tranquillité ?</Text>
        <Text style={styles.subtitle}>Laissez-nous vous guider à travers le processus, de A à Z.</Text>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => navigation.navigate('Services')}
        >
          <Text style={[styles.buttonText, styles.primaryButtonText]}>C'est parti !</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  contentBottom: {
    marginBottom: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0077B6',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  primaryButton: {
    backgroundColor: '#0077B6',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryButtonText: {
    color: '#fff',
  },
});

export default WelcomePage;