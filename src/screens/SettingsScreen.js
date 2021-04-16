import React from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { clearLikedJobs } from '../actions'

const SettingsScreen = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <Button
                title="Reset Liked Jobs"
                icon={{ name: 'delete-forever' }}
                onPress={() => dispatch(clearLikedJobs())}
            />
        </View>
    )
}

export default SettingsScreen
