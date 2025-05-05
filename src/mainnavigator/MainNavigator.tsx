import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'; // Import as a component, not a type

import LoginScreen from '../authentication/LoginScreen';
import Profile from '../screens/My Profile/MyProfile';
import Blog from '../screens/Blogs/Blogs';
import Courses from '../screens/My Courses/Courses';
import HomeScreen from '../screens/Home/HomeScreen';



// Define the types for the navigation stack
export type RootStackParamList = {
  Home: undefined; // Home screen has no params
  Detail: undefined; // Detail screen has no params
  Login:undefined,
  Profile:undefined,
  Blogs:undefined,
  Courses:undefined,
  
};

// Create the stack navigator with typed parameters
const Stack = createNativeStackNavigator<RootStackParamList>();

// The navigator component which encapsulates the entire navigation logic
const MainNavigator = () => {
  return (
    <NavigationContainer> {/* Correctly using it as a component */}
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Blogs" component={Blog}  />
        <Stack.Screen name="Courses" component={Courses}  />
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
