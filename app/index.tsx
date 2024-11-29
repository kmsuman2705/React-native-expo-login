import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter()

  // Handlers for each button
  const goToCampus = () => {
    router.push("/CampusLogin")
  }

  const goToCompany = () => {
    router.push("/CompanyLogin")
  }

  const goToStudent = () => {
    router.push("/StudentLogin")
  }

  return (
    <View style={styles.container}>
      {/* App Logo */}
      <Image 
        source={require('@/assets/images/logo.jpg')} // Replace with your logo's path
        style={styles.logo}
      />

      {/* Welcome Message */}
      <Text style={styles.title}>WELCOME TO</Text>
      <Text style={styles.subtitle}>TalentConnect</Text>
      <Text style={styles.tagline}>
        Empowering Talent, Connecting Opportunities.
      </Text>

      {/* Buttons for Campus, Company, and Student */}
      <View style={styles.buttonContainer}>
        <MyButton title="Campus" onPress={goToCampus} />
        <MyButton title="Company" onPress={goToCompany} />
        <MyButton title="Student" onPress={goToStudent} />
      </View>
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
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF6F00',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15, // Space between buttons
  },
})

export default Index
