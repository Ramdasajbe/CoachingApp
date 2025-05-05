import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomBottomTabs from '../../components/CustomBottomTabs';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My Blog</Text>
        <Text>This is my first blog post!</Text>
      </View>
      <CustomBottomTabs />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
