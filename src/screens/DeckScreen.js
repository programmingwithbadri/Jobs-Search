import React from 'react';
import { useSelector } from 'react-redux'
import { Text, View, StyleSheet, Platform } from 'react-native'
import Swipe from '../components/Swipe';
import MapView from 'react-native-maps'
import { Button, Card } from 'react-native-elements';

const renderCard = (job) => {
    const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        longitudeDelta: 0.02,
        latitudeDelta: 0.045
    };

    return (
        <Card>
            <Card.Title>{job.title}</Card.Title>
            <View style={{ height: 300 }}>
                <MapView
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    cacheEnabled={Platform.OS === 'android' ? true : false}
                    initialRegion={initialRegion}
                >
                </MapView>
            </View>
            <Card.Divider />
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

const renderNoMoreCards = (cb) => {
    return (
        <Card>
            <Card.Title>No more jobs</Card.Title>
            <Button
                title="Back To Map"
                large
                icon={{ name: 'my-location' }}
                backgroundColor="#03A9F4"
                onPress={cb}
            />
        </Card>
    );
}

const DeckScreen = ({ navigation }) => {
    const { jobs: { results } } = useSelector(state => state.jobs);
    return (
        <View style={{ marginTop: 10 }}>
            <Swipe
                data={results}
                renderCard={renderCard}
                renderNoMoreCards={() => renderNoMoreCards(() => {
                    navigation.navigate('Maps')
                })}
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
