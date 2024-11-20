import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

const Login = () => {
  const router = useRouter()
  const [id, setId] = useState('')  // State for ID (email/username)
  const [password, setPassword] = useState('')  // State for Password

  const handleLogin = () => {
    // For now, assume the login is successful if the fields are not empty
    if (id && password) {
      // Redirect to Profile Page
      router.push("/profile")
    } else {
      // Show an error if either field is empty
      Alert.alert("Error", "Please enter both ID and Password.")
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <TextInput
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
        }}
        placeholder="Enter ID"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        style={{
          width: '100%',
          padding: 10,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
        }}
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

export default Login
