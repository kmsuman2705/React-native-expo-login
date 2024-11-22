import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image
        source={{ uri: 'https://example.com/logo.png' }} // Replace with your logo URL or local image
        style={styles.logo}
      />

      {/* App Tagline */}
      <Text style={styles.tagline}>Empowering Talent, Connecting Opportunities.</Text>

      {/* Buttons */}
      <MyButton title="Campus" onPress={() => router.push('/college')} />
      <MyButton title="Company" onPress={() => router.push('/company')} />
      <MyButton title="Student" onPress={() => router.push('/student')} />
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
    
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
})

export default Welcome
