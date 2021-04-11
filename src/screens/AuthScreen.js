import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text, View } from 'react-native'
import { facebookLogin } from '../actions';

const AuthScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(facebookLogin())
    }, [dispatch])
    return (
        <View>
            <Text> Auth Screen boilerplate </Text>
        </View>
    )
}

export default AuthScreen;
