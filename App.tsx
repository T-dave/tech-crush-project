import { NavigationContainer } from '@react-navigation/native';
import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import LoginScreen from './app/login';
import OnboardingScreen from './app/onboarding';
import SignupScreen from './app/signup';
import SplashScreen from './app/splash';
// ... other screens

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          ...require('@expo/vector-icons/FontAwesome').default,
        });
        setFontsLoaded(true);
      } catch (error) {
        console.warn('Font loading error:', error);
        setFontsLoaded(true);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4A7FFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        {/* Splash Screen - Shows first */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen}
          options={{ animationEnabled: false }}
        />
        
        {/* Onboarding Screen */}
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen}
        />
        
        {/* Auth Screens */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}