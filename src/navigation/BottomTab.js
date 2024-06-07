import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../src/screens/home";
import UserProfile from "../../src/screens/profil";
import EstimatePage from "../../src/screens/estimate";
import ServicePage from "../../src/screens/service";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: 'orange',
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
        tabBarItemStyle: {
          padding: 8,
        },
        tabBarIconStyle: {
          fontSize: 32,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={28}
              color={focused ? '#004d40' : '#fff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Estimate"
        component={EstimatePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="file-text"
              size={28}
              color={focused ? '#004d40' : '#fff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServicePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="truck"
              size={28}
              color={focused ? '#004d40' : '#fff'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={28}
              color={focused ? '#004d40' : '#fff'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;