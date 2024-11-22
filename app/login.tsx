import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // For gradient background
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const [id, setId] = useState(''); // State for ID (email/username)
  const [password, setPassword] = useState(''); // State for Password

  const handleLogin = () => {
    if (id && password) {
      router.push("/profile"); // Redirect to Profile Page
    } else {
      Alert.alert("Error", "Please enter both ID and Password.");
    }
  };

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradient colors
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}
    >
      <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 20 }}>
        Welcome Back!
      </Text>
      <TextInput
        style={{
          width: '100%',
          padding: 15,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#fff',
        }}
        placeholder="Enter ID"
        placeholderTextColor="#ddd"
        value={id}
        onChangeText={(text) => setId(text)}
      />
      <TextInput
        style={{
          width: '100%',
          padding: 15,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#fff',
        }}
        placeholder="Enter Password"
        placeholderTextColor="#ddd"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={{
          width: '100%',
          padding: 15,
          borderRadius: 8,
          backgroundColor: '#4c68ff',
          alignItems: 'center',
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Login;