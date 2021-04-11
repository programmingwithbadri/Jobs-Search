import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View } from 'react-native'
import { facebookLogin } from '../actions';

const AuthScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)
    useEffect(() => {
        if (token) {
            navigation.navigate('Home')
        } else {
            dispatch(facebookLogin())
        }
    }, [dispatch, token])

    return (
        <View />
    )
}

export default AuthScreen;
