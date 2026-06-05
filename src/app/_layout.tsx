import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        
        {/* ===== ONBOARDING FLOW ===== */}
        
        <Stack.Screen 
          name="splash" 
          options={{ headerShown: false, animationEnabled: false }}
        />
        
        <Stack.Screen 
          name="onboard" 
          options={{ headerShown: false }}
        />
        
        {/* ===== AUTH FLOW ===== */}
        
        <Stack.Screen 
          name="auth" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="login" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="signup" 
          options={{ headerShown: false }}
        />
        
        {/* ===== MAIN APP FLOW ===== */}
        
        <Stack.Screen 
          name="index" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="home" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="search" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="filterBrowsing" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="savedJobs" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="browseJobs" 
          options={{ headerShown: false }}
        />
        
        {/* ===== JOB APPLICATION FLOW ===== */}
        
        <Stack.Screen 
          name="confirmDetails" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="uploadResume" 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
          name="application" 
          options={{ headerShown: false }}
        />
        
        {/* ===== END OF SCREENS ===== */}
      </Stack>
    </ThemeProvider>
  );
}