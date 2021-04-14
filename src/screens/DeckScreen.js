import React from 'react';
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'

const DeckScreen = () => {
    const { jobs: { results } } = useSelector(state => state.jobs);
    return (
        <View>
            <Text> Deck Screen boilerplate </Text>
        </View>
    )
}

export default DeckScreen
