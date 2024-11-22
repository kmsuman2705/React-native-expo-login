import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" /> {/* Set Welcome Page as initial screen */}
      <Stack.Screen name="college" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
      <Stack.Screen name="profile" />
    </Stack>
  )
}

export default RootLayout
