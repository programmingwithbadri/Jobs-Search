import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ReviewScreen from '../screens/ReviewScreen'
import SettingsScreen from '../screens/SettingsScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import DeckScreen from '../screens/DeckScreen'
import AuthScreen from '../screens/AuthScreen'
import MapScreen from '../screens/MapScreen'

const ReviewStack = createStackNavigator();
const InitialTab = createBottomTabNavigator();
const MainTab = createBottomTabNavigator();

const InitialTabScreen = () => (
    <InitialTab.Navigator>
        <InitialTab.Screen name="Welcome" component={WelcomeScreen} />
        <InitialTab.Screen name="Auth" component={AuthScreen} />
        <InitialTab.Screen name="Home" component={MainTabScreen} />
    </InitialTab.Navigator>
);

const MainTabScreen = () => (
    <MainTab.Navigator>
        <MainTab.Screen name="Map" component={MapScreen} />
        <MainTab.Screen name="Deck" component={DeckScreen} />
        <MainTab.Screen name="Reviews" component={ReviewStackScreen} />
    </MainTab.Navigator>
);

const ReviewStackScreen = () => (
    <ReviewStack.Navigator>
        <ReviewStack.Screen name="Review" component={ReviewScreen} />
        <ReviewStack.Screen name="Settings" component={SettingsScreen} />
    </ReviewStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <InitialTabScreen />
    </NavigationContainer>
);