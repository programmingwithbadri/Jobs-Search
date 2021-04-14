import React from 'react';
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet } from 'react-native'
import Swipe from '../components/Swipe';
import MapView from 'react-native-maps'
import { Button, Card } from 'react-native-elements';

const renderCard = (job) => {
    return (
        <Card title={job.title}>
            <View style={styles.detailWrapper}>
                <Text>{job.company}</Text>
                <Text>{job.posted}</Text>
            </View>
            <Text>
                {job.description}
            </Text>
        </Card>
    )
}

const renderNoMoreCards = () => {

}

const DeckScreen = () => {
    const { jobs: { results } } = useSelector(state => state.jobs);
    return (
        <View>
            <Swipe
                data={results}
                renderCard={renderCard}
                renderNoMoreCards={renderNoMoreCards}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
})

export default DeckScreen
