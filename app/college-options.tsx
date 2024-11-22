import { View } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const CollegeOptions = () => {
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title="Login" onPress={() => router.push("/login")} />
      <MyButton title="Signup" onPress={() => router.push("/signup")} />
    </View>
  )
}

export default CollegeOptions
