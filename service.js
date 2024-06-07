import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Données des services
const services = [
  {
    id: 1,
    name: 'Emballage',
    image: require('./assets/1.jpg'),
  },
  {
    id: 2,
    name: 'Chargement',
    image: require('./assets/2.jpg'),
  },
  {
    id: 3,
    name: 'Transport',
    image: require('./assets/3.jpg'),
  },
  {
    id: 4,
    name: 'Déchargement',
    image: require('./assets/4.jpg'),
  },
];

const ServicePage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.serviceList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.serviceItem}>
            <Image source={item.image} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{item.name}</Text>
            <Text style={styles.serviceDescription}>Découvrez notre service d'emballage professionnel pour un déménagement en toute tranquillité.</Text>
            <View style={styles.serviceActions}>
              <TouchableOpacity style={styles.serviceButton}>
                <Text style={styles.serviceButtonText}>En savoir plus</Text>
              </TouchableOpacity>
              
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Service':
                iconName = 'home';
                break;
              case 'Services':
                iconName = 'list';
                break;
              case 'Contact':
                iconName = 'envelope';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#006400',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Accueil" component={ServicePage} />
        <Tab.Screen name="Services" component={ServicePage} />
        <Tab.Screen name="Contact" component={ServicePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  serviceList: {
    padding: 10,
    margin: 15,
  },
  serviceItem: {
    backgroundColor: '#006400',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  serviceImage: {
    width: 80,
    height: 80,
  },
  serviceName: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 16,
  },
  serviceDescription: {
    color: '#fff',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
  serviceActions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  serviceButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  serviceButtonText: {
    color: '#006400',
    fontWeight: 'bold',
  },
});

export default App;