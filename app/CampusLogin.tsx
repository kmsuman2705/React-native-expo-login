import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Checkbox } from 'expo-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from './api'; // Ensure this is properly implemented in the api.js file

const CampusLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
  
    // Basic email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
  
    setLoading(true);
  
    try {
      // Call the login API
      const response = await login({ email, password });
  
      console.log('Login response:', response); // Log the full response to debug
  
      // Check if the response contains a token (indicating successful login)
      if (response.token) {
        console.log("Login successful!");
        Alert.alert('Success', 'Login successful!');
  
        if (rememberMe) {
          // Implement the functionality to persist the login information if needed
          console.log('Remember me selected, saving user info...');
        }
  
        // Store the token locally (for example, in AsyncStorage or your preferred method)
        // For now, you can log it or store it for further use
        console.log('JWT Token:', response.token);
  
        // Navigate to the campus dashboard
        router.push('/campus-dashboard');
      } else {
        console.log('Login failed: No token returned');
        Alert.alert('Login Failed', response.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error('Login error:', error); // Log detailed error info for debugging
      Alert.alert('Error', 'An error occurred during login. Please try again later.');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  
  const handleSignUp = () => {
    router.push('/campus-signup');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://your-image-url.com/handshake.png' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.title}>Connecting Campuses with Talent.</Text>
      <Text style={styles.subtitle}>Welcome, Campus Partner!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
          <Icon name={passwordVisible ? 'eye-slash' : 'eye'} size={20} color="#444" />
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>LOGIN</Text>
        )}
      </TouchableOpacity>

      <Text style={styles.orText}>──────────── Or Login With ────────────</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={20} color="#444" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="linkedin" size={20} color="#444" />
        </TouchableOpacity>
      </View>

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
    color: 'black',
  },
  passwordContainer: {
    width: '100%',
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    right: 15,
    top: 15,
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

export default CampusLogin;
