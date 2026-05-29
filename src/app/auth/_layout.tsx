import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';


export default function AuthLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
  );
}
