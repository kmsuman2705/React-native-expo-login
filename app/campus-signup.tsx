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
import { register } from '../app/api'; // Import the register function from api.js

const Studentsignup = () => {
  const router = useRouter();

  const [collegeName, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Email validation regex
  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Phone number validation (just checks if it's at least 10 digits)
  const isValidPhone = (phone: string) => {
    return phone.length >= 10;
  };

  const handleSignup = async () => {
    if (!collegeName || !email || !contactNumber || !password || !confirmPassword) {
      alert('Please fill all fields.');
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
    } else if (!isValidPhone(contactNumber)) {
      alert('Please enter a valid contact number.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match.');
    } else if (!agreeToTerms) {
      alert('You must agree to the Terms of Service and Privacy Policy.');
    } else {
      try {
        // Prepare data for API call
        const data = { collegeName, email, contactNumber, password };

        // Call the register API
        const response = await register(data);

        if (response.success) {
          alert(response.message);
          router.push('/CampusLogin'); // Redirect to login page on success
        } else {
          alert('Registration failed. Please try again.');
        }
      } catch (error: any) {
        alert(error.message || 'An error occurred during registration.');
      }
    }
  };

  const handleLogin = () => {
    router.push('/CampusLogin'); // Redirect to login page
  };



  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: 'https://your-image-url.com/signup-banner.png' }} // Replace with your image URL
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.subtitle}>
        Unlock your career opportunities by signing up now!
      </Text>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Enter Your College Name"
        placeholderTextColor="#888"
        value={collegeName}
        onChangeText={(text) => setCollegeName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your College Email Address"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a contact number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Agreement Section */}
      <View style={styles.row}>
        <Checkbox
          value={agreeToTerms}
          onValueChange={setAgreeToTerms}
          style={styles.checkbox}
        />
        <Text style={styles.agreementText}>
          By signing up, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>SIGNUP</Text>
      </TouchableOpacity>

      {/* Or Signup With */}
      <Text style={styles.orText}>──────────── Or SignUp With ────────────</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text> {/* Replace with Google Icon */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>in</Text> {/* Replace with LinkedIn Icon */}
        </TouchableOpacity>
      </View>

      {/* Already Have an Account? */}
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={handleLogin}>
          Login here.
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
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  checkbox: {
    marginRight: 8,
  },
  agreementText: {
    fontSize: 12,
    color: '#444',
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  signupButton: {
    backgroundColor: '#007BFF',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  signupButtonText: {
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
  loginText: {
    fontSize: 12,
    color: '#888',
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: '600',
  },
});

export default Studentsignup;
