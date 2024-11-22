import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Company = () => {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login') // Navigate to login page
  }

  const handleSignup = () => {
    router.push('/signup') // Navigate to signup page
  }

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.title}>Welcome to the Company Portal</Text>
      <Text style={styles.subtitle}>
        If you are a company representative, you can log in or sign up to start.
      </Text>

      {/* Buttons for Login and Signup */}
      <MyButton title="Login" onPress={handleLogin} />
      <MyButton title="Sign Up" onPress={handleSignup} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    gap:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
})

export default Company
