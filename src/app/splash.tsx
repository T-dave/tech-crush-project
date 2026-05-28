import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Animated,
    Easing,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import { splashStyles } from '../styles/splashStyles';

const SplashScreen: React.FC = () => {
  const [dotAnimation] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

  useEffect(() => {
    // Animate loading dots
    dotAnimation.forEach((dot, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 200),
          Animated.timing(dot, {
            toValue: 1,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 600,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
        ])
      ).start();
    });

    // Navigate to Onboarding after 3 seconds
    const timer = setTimeout(() => {
      router.replace('/onboarding'); // use your actual file-based route path
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={splashStyles.container}>
      <View style={splashStyles.contentContainer}>
        <View style={splashStyles.logoContainer}>
          <Text style={splashStyles.logo}>🚀</Text>
        </View>
        <Text style={splashStyles.title}>LaunchPad</Text>
        <Text style={splashStyles.subtitle}>
          Your first step{'\n'}into tech. Verified.
        </Text>
        <View style={splashStyles.loaderContainer}>
          {dotAnimation.map((dot, index) => (
            <Animated.View
              key={index}
              style={[
                splashStyles.loaderDot,
                {
                  opacity: dot.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.4, 1],
                  }),
                },
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;