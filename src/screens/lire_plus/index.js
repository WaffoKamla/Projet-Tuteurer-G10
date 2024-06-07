import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const PackagingServicePage = () => {
  return (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />
      </View>

    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/b4.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Emballage professionnel</Text>
        <Text style={styles.description}>
          Notre service d'emballage vous offre une tranquillité d'esprit lors de votre déménagement. Nos équipes d'experts emballent avec soin tous vos biens, du plus fragile au plus encombrant, en utilisant les meilleurs matériaux pour assurer leur protection.
        </Text>
        <View style={styles.featureContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Emballage sur-mesure</Text>
            <Text style={styles.featureDescription}>
              Nos équipes évaluent avec attention chaque élément à emballer et choisissent les matériaux appropriés pour une protection optimale.
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Matériaux de haute qualité</Text>
            <Text style={styles.featureDescription}>
              Nous utilisons uniquement des matériaux de qualité supérieure pour garantir la sécurité de vos biens pendant le transport.
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Service rapide et efficace</Text>
            <Text style={styles.featureDescription}>
              Nos équipes formées travaillent avec rapidité et efficacité pour emballer tous vos biens en un temps record.
            </Text>
          </View>
        </View>
        
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Emballage professionnel</Text>
        <Text style={styles.description}>
          Notre service d'emballage vous offre une tranquillité d'esprit lors de votre déménagement. Nos équipes d'experts emballent avec soin tous vos biens, du plus fragile au plus encombrant, en utilisant les meilleurs matériaux pour assurer leur protection.
        </Text>
        <View style={styles.featureContainer}>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Emballage sur-mesure</Text>
            <Text style={styles.featureDescription}>
              Nos équipes évaluent avec attention chaque élément à emballer et choisissent les matériaux appropriés pour une protection optimale.
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Matériaux de haute qualité</Text>
            <Text style={styles.featureDescription}>
              Nous utilisons uniquement des matériaux de qualité supérieure pour garantir la sécurité de vos biens pendant le transport.
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Service rapide et efficace</Text>
            <Text style={styles.featureDescription}>
              Nos équipes formées travaillent avec rapidité et efficacité pour emballer tous vos biens en un temps record.
            </Text>
          </View>
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
  imageContainer: {
    height: 250,
    overflow: 'hidden',
  },
  image: {
    width: '95%',
    height: '100%',
    resizeMode: 'cover',
    marginVertical: 10,
    marginHorizontal:10,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 200,
    height: 100,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  featureContainer: {
    marginTop: 20,
    color: '#007AFF',
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007AFF',
  },
  featureDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default PackagingServicePage;