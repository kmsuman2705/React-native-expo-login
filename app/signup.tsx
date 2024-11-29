import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { register } from './api'; // Importing register function from api.js

const Signup = () => {
  const router = useRouter();

  const [collegeName, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignup = async () => {
    if (collegeName && email && contactNumber && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else if (!agreeToTerms) {
        alert('You must agree to the Terms of Service and Privacy Policy.');
      } else {
        // Call the register function from api.js
        const response = await register({ collegeName, email, contactNumber, password });

        if (response.success) {
          router.push('/campus-dashboard'); // Redirect to campus dashboard on success
        } else {
          alert(response.message || 'Signup failed. Please try again.');
        }
      }
    } else {
      alert('Please fill all fields.');
    }
  };

  const handleLogin = () => {
    router.push('/CampusLogin');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://your-image-url.com/signup-banner.png' }} style={styles.image} />
      <Text style={styles.title}>Campus Representative Signup</Text>
      <Text style={styles.subtitle}>Connect your institution with a world of opportunities.</Text>
      <TextInput style={styles.input} placeholder="Enter Your College Name" value={collegeName} onChangeText={setCollegeName} />
      <TextInput style={styles.input} placeholder="Your College Email Address" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Enter a contact number" keyboardType="phone-pad" value={contactNumber} onChangeText={setContactNumber} />
      <TextInput style={styles.input} placeholder="Your Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

      <View style={styles.row}>
        <CheckBox value={agreeToTerms} onValueChange={setAgreeToTerms} style={styles.checkbox} />
        <Text style={styles.agreementText}>
          By signing up, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>SIGNUP</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>──────────── Or SignUp With ────────────</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink} onPress={handleLogin}>Login here.</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', padding: 20 },
  image: { width: 200, height: 150, resizeMode: 'contain', marginVertical: 20 },
  title: { fontSize: 16, fontWeight: '600', color: '#444', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#888', marginBottom: 20, textAlign: 'center' },
  input: { width: '100%', height: 50, backgroundColor: '#f5f5f5', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, borderColor: '#ddd', borderWidth: 1 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, width: '100%' },
  checkbox: { marginRight: 8 },
  agreementText: { fontSize: 12, color: '#444' },
  linkText: { color: '#007BFF', textDecorationLine: 'underline' },
  signupButton: { backgroundColor: '#007BFF', width: '100%', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  signupButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  orText: { fontSize: 12, color: '#888', marginVertical: 10 },
  socialRow: { flexDirection: 'row', justifyContent: 'center', width: '100%', marginBottom: 20 },
  socialButton: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#f5f5f5', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10, borderWidth: 1, borderColor: '#ddd' },
  socialText: { fontSize: 18, fontWeight: '600', color: '#444' },
  loginText: { fontSize: 12, color: '#888' },
  loginLink: { color: '#007BFF', fontWeight: '600' },
});

export default Signup;
