import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native';
import MapView from 'react-native-maps'

const MapScreen = () => {
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

    return (
        mapLoaded
            ? <View style={{ flex: 1 }}>
                <MapView region={region} style={{ flex: 1 }} />
            </View>
            : <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
    )
}

export default MapScreen
