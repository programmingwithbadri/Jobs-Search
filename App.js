import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './src/screens/WelcomeScreen'
import AuthScreen from './src/screens/AuthScreen'

const MainNavigator = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="Welcome" component={WelcomeScreen} />
        <MainNavigator.Screen name="Auth" component={AuthScreen} />
      </MainNavigator.Navigator>
    </NavigationContainer >
  );
}
