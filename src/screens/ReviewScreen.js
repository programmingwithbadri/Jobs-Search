import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View, ScrollView, StyleSheet, Linking, Platform } from 'react-native'
import { Button, Card } from 'react-native-elements';
import MapView from 'react-native-maps'

const renderLikedJobs = (likedJobs) => {
    return likedJobs.map(job => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            longitudeDelta: 0.02,
            latitudeDelta: 0.045
        };
        return (
            <Card key={job.id}>
                <Card.Title>{job.title}</Card.Title>
                <View style={{ height: 200 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android'}
                        initialRegion={initialRegion}
                    />
                    <Card.Divider />
                    <View style={styles.detailWrapper}>
                        <Text style={{ fontStyle: 'italic' }}>{job.company}</Text>
                        <Text>{job.posted}</Text>
                    </View>
                    <Button
                        title="Apply Now!"
                        buttonStyle={{ color: '#03A9F4' }}
                        onPress={() => Linking.openURL(job.apply)}
                    />
                </View>
            </Card>
        )
    })
}

const ReviewScreen = () => {
    const { likedJobs } = useSelector(state => state.likedJobs);
    return (
        likedJobs
            ? <ScrollView>
                {renderLikedJobs(likedJobs)}
            </ScrollView>
            : <Card>
                <Card.Title>No Jobs to Review</Card.Title>
            </Card>
    )
}

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
    }
})

export default ReviewScreen
