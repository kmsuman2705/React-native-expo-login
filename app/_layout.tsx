import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
      <Stack.Screen name="menu" />
      <Stack.Screen name="college" />
      <Stack.Screen name="student" />
      <Stack.Screen name="profile" />
    </Stack>
  )
}

export default RootLayout
