import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const CampusHome = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Profile Overview */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <Image
              source={{ uri: 'https://your-image-url.com/profile.png' }} // Replace with profile image URL
              style={styles.profileImage}
            />
            <Text style={styles.profileText}>College's Profile</Text>
            <Text style={styles.subText}>Updated 90d ago</Text>
            <TouchableOpacity>
              <Text style={styles.linkText}>View Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.appliedCard}>
            <Text style={styles.number}>25</Text>
            <Text style={styles.profileText}>Company's Applied</Text>
            <Text style={styles.subText}>Last 6d ago</Text>
          </View>
        </View>

        {/* Job Listings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Companies Posted Jobs</Text>
          {/* Add Job Cards */}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileSection: { flexDirection: 'row', padding: 15 },
  profileCard: { flex: 1, padding: 15, backgroundColor: '#f5f5f5', borderRadius: 10 },
  appliedCard: { flex: 1, padding: 15, backgroundColor: '#f5f5f5', borderRadius: 10 },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  profileText: { fontSize: 14, fontWeight: 'bold' },
  subText: { fontSize: 12, color: '#888' },
  section: { padding: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default CampusHome;
