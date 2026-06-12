import { Stack } from 'expo-router';

export default function ListingLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="sent" options={{ headerShown: false }} />
    </Stack>
  );
}
