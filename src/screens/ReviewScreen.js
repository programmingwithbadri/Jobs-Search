import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View, ScrollView, StyleSheet, Linking } from 'react-native'
import { Button, Card } from 'react-native-elements';

const renderLikedJobs = (likedJobs) => {
    return likedJobs.map(job => {
        return (
            <Card key={job.id}>
                <View style={{ height: 200 }}>
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
    const likedJobs = useSelector(state => state.likedJobs)
    console.log(likedJobs)
    return (
        <ScrollView>
            {renderLikedJobs(likedJobs)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
})

export default ReviewScreen
