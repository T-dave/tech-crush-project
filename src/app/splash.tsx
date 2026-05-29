import { router } from 'expo-router';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,?
  View,
} from 'react-native';
import { splashStyles } from '../styles/splashStyles';

const SplashScreen: React.FC = () => {
  useEffect(() => {
    // Navigate to Onboarding after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/(auth)/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={splashStyles.container}>
      <View style={splashStyles.contentContainer}>
        {/* Logo Container with Image */}
        <View style={splashStyles.logoContainer}>
          <Image
            source={require('../assets/ion_rocket-sharp.png')}
            style={splashStyles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={splashStyles.title}>LaunchPad</Text>

        {/* Subtitle */}
        <Text style={splashStyles.subtitle}>
          Your first step{'\n'}into tech. Verified.
        </Text>

        {/* Working Loading Spinner */}
        <View style={splashStyles.loaderContainer}>
          <ActivityIndicator 
            size="large" 
            color="rgba(255, 255, 255, 0.9)"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;