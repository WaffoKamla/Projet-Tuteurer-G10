import React , { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import Tiktokinterface from '../screens/splashscreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/home';
import BottomTabs from '../../src/navigation/BottomTab';
import LoginScreen from '../../src/screens/login';
import RegisterScreen from '../../src/screens/signup';
 
const Stack = createNativeStackNavigator();

const Routes = () => {

    const [splashScreenVisible, setSplashScreenVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setSplashScreenVisible(false);
      }, 5000); // Show splash screen for 3 seconds
  
      return () => clearTimeout(timer);
    }, []);
  

  return ( 
    <>
      <StatusBar />
      <NavigationContainer>
        {splashScreenVisible ? (
          <Tiktokinterface navigation={null} />
        ) : (
  
     <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
      )}
  </NavigationContainer>
  </>
  );
};

export default Routes;