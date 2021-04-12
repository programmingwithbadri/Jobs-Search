import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Facebook from 'expo-facebook';
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../types';
import { navigate } from '../config/navigationRef';

export const facebookLogin = () => async (dispatch) => {
    let token = await AsyncStorage.getItem('facebook_token');
    if (!token) {
        doFacebookLogin(dispatch);
    }
    else {
        dispatch({
            type: FACEBOOK_LOGIN_SUCCESS,
            payload: token
        })

        navigate("Home");
    }
}

const doFacebookLogin = async (dispatch) => {
    try {
        await Facebook.initializeAsync({
            appId: "274286267530268",
            appName: "Jobs-search"
        })
        const {
            type,
            token
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
        });

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            await AsyncStorage.setItem('facebook_token', token);
            dispatch({
                type: FACEBOOK_LOGIN_SUCCESS,
                payload: token
            });

            navigate("Home");
        } else {
            // type === 'cancel'
            dispatch({
                type: FACEBOOK_LOGIN_FAIL
            })
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}