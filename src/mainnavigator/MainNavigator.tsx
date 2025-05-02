import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'; // Import as a component, not a type
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

// Define the types for the navigation stack
export type RootStackParamList = {
  Home: undefined; // Home screen has no params
  Detail: undefined; // Detail screen has no params
};

// Create the stack navigator with typed parameters
const Stack = createNativeStackNavigator<RootStackParamList>();

// The navigator component which encapsulates the entire navigation logic
const MainNavigator = () => {
  return (
    <NavigationContainer> {/* Correctly using it as a component */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
