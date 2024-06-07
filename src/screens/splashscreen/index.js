import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

const SplashScreen = () => {
  const logoAnimation = new Animated.Value(0);
  const messageAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(messageAnimation, {
        toValue: 1,
        duration: 1500,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoAnimation,
            transform: [
              {
                scale: logoAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          },
        ]}
      >
        <Image source={require('../../../assets/logo2.png')} style={styles.logo} />
      </Animated.View>
      <Animated.Text
        style={[
          styles.message,
          {
            opacity: messageAnimation,
            transform: [
              {
                translateY: messageAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        Bienvenue sur "Verhuizen"!
      </Animated.Text>
      <Animated.Text
        style={[
          styles.message,
          {
            opacity: messageAnimation,
            transform: [
              {
                translateY: messageAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0],
                }),
              },
            ],
          },
        ]}
      >
        Votre application de déménagement 😊
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 350,
    height: 350,
  },
  message: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 10,
  },
});

export default SplashScreen;