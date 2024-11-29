import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox } from 'expo-checkbox'; // Import Expo CheckBox

const StudentLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      // Proceed to the student dashboard (or next screen)
      router.push('/student-dashboard');
    } else {
      alert('Please enter both email and password.');
    }
  };

  const handleSignUp = () => {
    router.push('/Studentsignup');
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: 'https://your-image-url.com/handshake.png' }} // Replace with your image URL
        style={styles.image}
      />

      {/* Welcome Message */}
      <Text style={styles.title}>Your Gateway to Opportunities!</Text>
      <Text style={styles.subtitle}>Welcome, Future Talent!</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Remember Me & Forgot Password */}
      <View style={styles.row}>
        <View style={styles.rowLeft}>
          <Checkbox
            value={rememberMe}
            onValueChange={setRememberMe}
            style={styles.checkbox}
          />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Or Login With */}
      <Text style={styles.orText}>──────────── Or Login With ────────────</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text> {/* Replace with icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>in</Text> {/* Replace with icon */}
        </TouchableOpacity>
      </View>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>
        Don’t have an account?{' '}
        <Text style={styles.signupLink} onPress={handleSignUp}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#90CAF8',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: 'black',
    borderWidth: 1,
    color:'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  rememberText: {
    fontSize: 12,
    color: '#444',
  },
  forgotText: {
    fontSize: 12,
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    fontSize: 12,
    color: '#888',
    marginVertical: 10,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  socialText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  signupText: {
    fontSize: 12,
    color: '#888',
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
});

export default StudentLogin;
