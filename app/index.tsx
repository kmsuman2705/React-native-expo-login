import { View, Text } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Index = () => {
  const router = useRouter()

  const onContinue = () => {
    router.push("/login")  // Using push instead of navigate
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title="Continue" onPress={onContinue} />
    </View>
  )
}

export default Index
