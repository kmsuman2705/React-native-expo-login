import { View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const SignUp = () => {
  const router = useRouter()

  const onRegister = () => {
    router.push("/login")  // Redirecting to login page after registration
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title="Register" onPress={onRegister} />
    </View>
  )
}

export default SignUp
