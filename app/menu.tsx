import { View } from 'react-native'
import React from 'react'
import MyButton from '@/app-example/components/MyButton'
import { useRouter } from 'expo-router'

const Menu = () => {
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MyButton title="College" onPress={() => router.push("/college")} />
      <MyButton title="Student" onPress={() => router.push("/student")} />
      <MyButton title="Profile" onPress={() => router.push("/profile")} />
    </View>
  )
}

export default Menu
