import React from 'react';
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet, Platform } from 'react-native'
import Swipe from '../components/Swipe';
import MapView from 'react-native-maps'
import { Button, Card } from 'react-native-elements';

const renderCard = (job) => {
    const initialRegion={
        longitude: job.longitude,
        latitude: job.latitude,
        longitudeDelta: 0.02,
        latitudeDelta: 0.045
    };

    return (
        <Card title={job.title}>
            <View style={{ height: 300 }}>
                <MapView
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    cacheEnabled={Platform.OS==='android' ? true : false}
                    initialRegion={initialRegion}
                >
                </MapView>
            </View>
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
    return (
        <Card title="No more jobs">
        </Card>
    )
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
