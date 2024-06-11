import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ServicePage = ({navigation}) => {
  return (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>

    <ScrollView style={styles.container}>
      
      <View style={styles.contentContainer}>
        <View style={styles.serviceContainer}>
          <View style={styles.serviceContent}>
            <Image source={require('../../../assets/1.jpg')} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Déménagement</Text>
              <Text style={styles.serviceDescription}>Nous vous aidons à organiser votre déménagement du début à la fin.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton} onPress={() => navigation.navigate('PackagingServicePage')}>
            <Text style={styles.readMoreText}>Lire plus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.serviceContent}>
            <Image source={require('../../../assets/2.jpg')} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Stockage</Text>
              <Text style={styles.serviceDescription}>Nous proposons des solutions de stockage sûres et accessible.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Lire plus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.serviceContent}>
            <Image source={require('../../../assets/3.jpg')} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Emballage</Text>
              <Text style={styles.serviceDescription}>Nos équipes d'experts vous aident à emballer vos affaires en toute sécurité.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Lire plus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.serviceContent}>
            <Image source={require('../../../assets/4.jpg')} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Nettoyage</Text>
              <Text style={styles.serviceDescription}>Nous nous occupons du nettoyage de votre ancien et de votre nouveau logement.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Lire plus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.serviceContent}>
            <Image source={require('../../../assets/4.jpg')} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Nettoyage</Text>
              <Text style={styles.serviceDescription}>Nous nous occupons du nettoyage de votre ancien et de votre nouveau logement.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Lire plus</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.serviceContainer}>
          <View style={styles.serviceContent}>
            <Image source={require('../../../assets/4.jpg')} style={styles.serviceImage} />
            <View style={styles.serviceTextContainer}>
              <Text style={styles.serviceTitle}>Nettoyage</Text>
              <Text style={styles.serviceDescription}>Nous nous occupons du nettoyage de votre ancien et de votre nouveau logement.</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Lire plus</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  serviceContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceImage: {
    width: 100,
    height: 100,
    borderRadius:5,
    
  },
  serviceTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  serviceDescription: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
  },
  readMoreButton: {
    marginTop: 16,
    backgroundColor: '#004d40',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems:'center',
    justifyContent:'center',
  },
  readMoreText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    width:'200',
    
  },
});

export default ServicePage;