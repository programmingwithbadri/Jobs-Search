import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { facebookLogin } from '../actions';

const AuthScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(facebookLogin())
    }, [dispatch])

    return (
        <View />
    )
}

export default AuthScreen;
