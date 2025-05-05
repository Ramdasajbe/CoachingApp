import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../mainnavigator/MainNavigator';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CustomBottomTabs = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')} style={styles.tabItem}>
        <Image source={require('../assets/BottamTab/home.png')} style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Courses')} style={styles.tabItem}>
        <Image source={require('../assets/BottamTab/book.png')} style={styles.icon} />
        <Text style={styles.label}>My Courses</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Blogs')} style={styles.tabItem}>
        <Image source={require('../assets/BottamTab/blog.png')} style={styles.icon} />
        <Text style={styles.label}>Blogs</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Profile')} style={styles.tabItem}>
        <Image source={require('../assets/BottamTab/profile.png')} style={styles.icon} />
        <Text style={styles.label}>My Profile</Text>
      </Pressable>
    </View>
  );
};

export default CustomBottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    elevation: 10,
    paddingVertical: 10,
    marginBottom:"10%"

  },
  tabItem: { alignItems: 'center' },
  icon: { width: 24, height: 24, resizeMode: 'contain', marginBottom: 4 },
  label: { fontSize: 12, color: '#4B0071' },
});
