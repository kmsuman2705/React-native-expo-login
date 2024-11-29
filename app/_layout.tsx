import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" /> {/* Set Welcome Page as initial screen */}
      <Stack.Screen name="college" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
      <Stack.Screen name="profile" />
      {/* Add the new routes for company and student login */}
      <Stack.Screen name="company" />
      <Stack.Screen name="student" />
    </Stack>
  );
}

export default RootLayout;
