import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen'
import AuthScreen from './src/screens/AuthScreen'
import MapScreen from './src/screens/MapScreen'
import ReviewScreen from './src/screens/ReviewScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import DeckScreen from './src/screens/DeckScreen'

const InitialNavigator = createBottomTabNavigator();

const MainNavigator = createBottomTabNavigator();

const ReviewNavigator = createStackNavigator();

const Review = () => {
  return (
    <ReviewNavigator.Navigator>
      <ReviewNavigator.Screen name="Review" component={ReviewScreen} />
      <ReviewNavigator.Screen name="Settings" component={SettingsScreen} />
    </ReviewNavigator.Navigator>
  )
}

const HomeNavigator = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name="Map" component={MapScreen} />
      <MainNavigator.Screen name="Deck" component={DeckScreen} />
      <MainNavigator.Screen name="Reviews" component={Review} />
    </MainNavigator.Navigator>
  )
}
export default App = () => {
  return (
    <NavigationContainer>
      <InitialNavigator.Navigator>
        <InitialNavigator.Screen name="Welcome" component={WelcomeScreen} />
        <InitialNavigator.Screen name="Auth" component={AuthScreen} />
        <InitialNavigator.Screen name="Home" component={HomeNavigator} />
      </InitialNavigator.Navigator>
    </NavigationContainer >
  );
}
