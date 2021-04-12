import React, { useState, useEffect } from 'react'
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slides from '../components/Slides'

const SLIDE_DATA = [
    {
        text: 'Welcome to Job Search App'
    },
    {
        text: 'Use this to get job'
    },
    {
        text: 'Set your location, then swipe away'
    }
];

const WelcomeScreen = ({ navigation }) => {
    const [isTokenExists, setToken] = useState(null)

    useEffect(() => {
        async function getFacebookToken() {
            const facebookToken = await AsyncStorage.getItem('facebook_token');
            if (facebookToken) {
                navigation.navigate('Home');
            } else {
                setToken(false);
            }
        }

        getFacebookToken();
    }, [])

    return (
        isTokenExists
            ? <AppLoading />
            : <Slides
                data={SLIDE_DATA}
                onComplete={() => {
                    navigation.navigate('Auth')
                }}
            />
    )
}

export default WelcomeScreen
