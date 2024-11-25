import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useRouter } from 'expo-router';

const StudentHome = () => {
  const router = useRouter();

  const jobsBasedOnProfile = [
    { id: '1', title: 'Software Developer', company: 'TalentConnect', location: 'Remote', time: '1h ago' },
    { id: '2', title: 'Software Developer', company: 'TalentConnect', location: 'Remote', time: '1h ago' },
  ];

  const jobsBasedOnPreferences = [
    { id: '1', title: 'Software Developer', company: 'TalentConnect', location: 'Remote', time: '1h ago' },
    { id: '2', title: 'Software Developer', company: 'TalentConnect', location: 'Remote', time: '1h ago' },
  ];

  const renderJobCard = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>Student's Profile</Text>
          <Text style={styles.profileSubtitle}>Updated 90d ago</Text>
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Text style={styles.viewProfile}>View Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.appliedJobsCard}>
          <Text style={styles.profileTitle}>25</Text>
          <Text style={styles.profileSubtitle}>Job's Applied</Text>
          <TouchableOpacity>
            <Text style={styles.viewProfile}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Jobs Based On Profile */}
      <View style={styles.jobsSection}>
        <View style={styles.jobsHeader}>
          <Text style={styles.sectionTitle}>Jobs Based On Your Profile</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={jobsBasedOnProfile}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Jobs Based On Preferences */}
      <View style={styles.jobsSection}>
        <View style={styles.jobsHeader}>
          <Text style={styles.sectionTitle}>Jobs Based On Your Preferences</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={jobsBasedOnPreferences}
          renderItem={renderJobCard}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/apply')}>
          <Text style={styles.navIcon}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/student-home')}>
          <Text style={styles.navIcon}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Text style={styles.navIcon}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileCard: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  appliedJobsCard: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileSubtitle: {
    color: '#888',
    marginBottom: 10,
  },
  viewProfile: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  jobsSection: {
    marginBottom: 20,
  },
  jobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  jobCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  company: {
    color: '#888',
    marginBottom: 5,
  },
  location: {
    color: '#007bff',
    marginBottom: 5,
  },
  time: {
    color: '#555',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navIcon: {
    fontSize: 16,
    color: '#007bff',
  },
});

export default StudentHome;
