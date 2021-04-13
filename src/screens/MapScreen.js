import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps'
import { fetchJobs } from '../actions';
import { Button } from 'react-native-elements';

const MapScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        setMapLoaded(true)
    });

    const [region, setRegion] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    });

    const [mapLoaded, setMapLoaded] = useState(false);

    const onRegionChangeComplete = useCallback((region) => {
        setRegion(region);
    });

    const onButtonPress = useCallback(() => {
        dispatch(fetchJobs(region));
    })

    return (
        mapLoaded
            ? <View style={{ flex: 1 }}>
                <MapView
                    region={region}
                    style={{ flex: 1 }}
                    onRegionChangeComplete={onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Search this Area"
                        icon={{ name: 'search' }}
                        onPress={onButtonPress}
                    />
                </View>
            </View>
            : <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
})

export default MapScreen
