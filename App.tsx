import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from './constants/theme';

// Auth Screens
import LoginScreen from './app/login';
import OnboardingScreen from './app/onboarding';
import SignupScreen from './app/signup';
import SplashScreen from './app/splash';

// Job Screens
import ApplicationScreen from './app/ApplicationScreen';
import BrowseJobsScreen from './app/BrowseJobsScreen';
import ConfirmDetailsScreen from './app/ConfirmDetailsScreen';
import FilterBrowsingScreen from './app/FilterBrowsingScreen';
import HomeScreen from './app/HomeScreen';
import SavedJobsScreen from './app/savedJobs';
import SearchScreen from './app/SearchScreen';
import UploadResumeScreen from './app/UploadResumeScreen';



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
        <ActivityIndicator size="large" color={Colors.primary} />
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
        {/* ===== ONBOARDING FLOW ===== */}
        
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
        
        {/* ===== AUTH FLOW ===== */}
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* ===== MAIN APP FLOW ===== */}
        
        {/* Home Screen & Navigation */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="FilterBrowsing" component={FilterBrowsingScreen} />
        <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
        <Stack.Screen name="BrowseJobs" component={BrowseJobsScreen} />

        {/* ===== JOB APPLICATION FLOW ===== */}
        
        {/* Job Details & Application */}
        <Stack.Screen name="ConfirmDetails" component={ConfirmDetailsScreen} />
        <Stack.Screen name="UploadResume" component={UploadResumeScreen} />
        <Stack.Screen name="Application" component={ApplicationScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}