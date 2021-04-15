import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'

const ReviewScreen = () => {
    const likedJobs = useSelector(state => state.likedJobs)
    console.log(likedJobs)
    return (
        <View>
            <Text>Review Screen boilerplate </Text>
        </View>
    )
}

export default ReviewScreen
