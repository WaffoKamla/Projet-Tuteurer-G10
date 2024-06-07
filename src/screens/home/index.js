import React from 'react';
import { StyleSheet, View, Text, Image,ScrollView, TouchableOpacity, Linking } from 'react-native';

const HomeScreen = () => {
  return (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>

    <ScrollView style={styles.container}>
      {/* Brève description de l'application */}
      <View style={styles.header}>
        <Text style={[styles.headerText , styles.boldText, styles.largeText] }>Simplifiez votre prochain déménagement</Text>
        <Text style={styles.headerText}>Notre application intuitive vous guide à chaque étape du processus.</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/b4.jpg')}
          style={styles.image}
        />
      </View>

      {/* Boutons d'action */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Faire un devis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Réserver un equipement  </Text>
        </TouchableOpacity>
      </View>

      

      {/* Zones d'intervention */}
      <View style={styles.locationContainer}>
        <Text style={styles.sectionTitle}>Zones d'intervention</Text>
        <Text style={styles.locationText}>Nous sommes présents dans les villes de Paris, Lyon, Marseille et Bordeaux.</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/b3.jpg')}
          style={styles.image}
        />
      </View>

      {/* Témoignages */}
      <View style={styles.testimonialsContainer}>
        <Text style={styles.sectionTitle}>Ce que disent nos clients</Text>
        <View style={styles.testimonial}>
        <Image source={require('../../../assets/girl1.png')} style={styles.images} />
          <Text style={styles.testimonialText}>"Leur application m'a vraiment facilité les choses pour mon déménagement!"</Text>
          <Text style={styles.testimonialAuthor}>- Sarah, Paris</Text>
          
        </View>
        {/* Ajouter d'autres témoignages ici */}
      </View>

      {/* Informations pratiques */}
      <View style={styles.contactContainer}>
        <Text style={styles.sectionTitle}>Nous contacter</Text>
        <Text style={styles.contactInfo}>Téléphone : 01 23 45 67 89</Text>
        <Text style={styles.contactInfo}>Email : contact@demenagement-app.com</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/demenagement-app')}>
            <Image source={require('../../../assets/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/demenagement-app')}>
            <Image source={require('../../../assets/whatsapp.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/demenagement-app')}>
            <Image source={require('../../../assets/instagram.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/demenagement-app')}>
            <Image source={require('../../../assets/twitter.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          {/* Ajouter d'autres liens sociaux ici */}
        </View>
      </View>

      {/* Boutons de téléchargement */}
      <View style={styles.downloadContainer}>
        <Text style={styles.sectionTitle}>Téléchargez notre application</Text>
        <View style={styles.downloadButtons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://apps.apple.com/app/demenagement-app')}>
            <Image source={require('../../../assets/app-store.png')} style={styles.advantage} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.demenagement-app')}>
            <Image source={require('../../../assets/playstore.png')} style={styles.advantage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Avantages de l'application */}
      <View style={styles.advantagesContainer}>
        <Text style={styles.sectionTitle}>Pourquoi choisir notre application ?</Text>
        <View style={styles.advantageItem}>
          <Image source={require('../../../assets/chronometer.png')} style={styles.advantageIcon} />
          <Text style={styles.advantageTitle}>Gagnez du temps</Text>
          
        </View>
        <View style={styles.advantageItem}>
          <Image source={require('../../../assets/securit.png')} style={styles.advantageIcon} />
          <Text style={styles.advantageTitle}>Sécurisé</Text>
          
        </View>
        <View style={styles.advantageItem}>
          <Image source={require('../../../assets/ear.png')} style={styles.advantageIcon} />
          <Text style={styles.advantageTitle}>A l'ecoute</Text>
          
        </View>
        <View style={styles.advantageItem}>
          <Image source={require('../../../assets/fast-delivery.png')} style={styles.advantageIcon} />
          <Text style={styles.advantageTitle}>Rapide</Text>
          
        </View>
        {/* Ajouter d'autres avantages ici */}
      </View>

      {/* Appel à l'action final */}
      <View style={styles.callToActionContainer}>
        <TouchableOpacity style={styles.callToActionButton}>
          <Text style={styles.callToActionText}>Obtenir un devis</Text>
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
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  boldText: {
    fontWeight: 'bold',
    },
    largeText: {
    fontSize: 24,
    },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    },
    headerText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    },
  images: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  imageContainer: {
    height: 250,
    overflow: 'hidden',
  },
  image: {
    width: '95%',
    height: '95%',
    borderRadius:10,
    resizeMode: 'cover',
    marginVertical: 10,
    marginHorizontal:10,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  scrollView: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  descriptionContainer: {
    marginVertical: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  button: {
    backgroundColor: '#004d40',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicesContainer: {
    marginVertical: 24,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
  },
  locationContainer: {
    marginVertical: 24,
  },
  locationText: {
    fontSize: 16,
    color: '#666',
  },
  testimonialsContainer: {
    marginVertical: 24,
  },
  testimonial: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
  },
  testimonialText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  testimonialAuthor: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  contactContainer: {
    marginVertical: 24,
  },
  contactInfo: {
    fontSize: 16,
    color: '#666',
    marginVertical: 6,
  },
  socialLinks: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  socialIcon: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  downloadContainer: {
    marginVertical: 24,
  },
  downloadButtons: {
    flexDirection: 'row',
    
    marginTop: 12,
  },
  downloadButton: {
    width: 160,
    height: 54,
    marginHorizontal: 12,
  },
  advantagesContainer: {
    marginVertical: 24,
  },
  advantageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  advantageIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  advantage: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  advantageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  advantageDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  callToActionContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  callToActionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  callToActionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;