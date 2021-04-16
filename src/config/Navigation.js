import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './navigationRef'
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
    <InitialTab.Navigator screenOptions={{ tabBarVisible: false }}>
        <InitialTab.Screen name="Welcome" component={WelcomeScreen} />
        <InitialTab.Screen name="Auth" component={AuthScreen} />
        <InitialTab.Screen name="Home" component={MainTabScreen} />
    </InitialTab.Navigator>
);

const MainTabScreen = () => (
    <MainTab.Navigator tabBarOptions={{ showIcon: true }}>
        <MainTab.Screen
            name="Map"
            component={MapScreen}
            options={{
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="my-location" size={24} color={tintColor} />
                ),
            }}
        />
        <MainTab.Screen

            name="Deck"
            component={DeckScreen}
            options={{
                title: "Jobs",
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="description" size={24} color={tintColor} />
                ),
            }}
        />
        <MainTab.Screen
            name="Reviews"
            component={ReviewStackScreen}
            options={{
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="favorite" size={24} color={tintColor} />
                ),
            }}
        />
    </MainTab.Navigator>
);

const ReviewStackScreen = () => (
    <ReviewStack.Navigator>
        <ReviewStack.Screen
            name="Review"
            component={ReviewScreen}
            options={({ navigation }) => {
                return {
                    headerTitle: 'My Reviews',
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('Settings')}
                            title="Settings"
                        />
                    ),
                };
            }}
        />
        <ReviewStack.Screen name="Settings" component={SettingsScreen} />
    </ReviewStack.Navigator>
);

export default () => (
    <NavigationContainer ref={navigationRef}>
        <InitialTabScreen />
    </NavigationContainer>
);