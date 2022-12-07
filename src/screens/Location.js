import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function Location() {
    const [mapRegion, setMapRegion] = useState({
        latitude: 21.046558208845962,
        longitude: 105.78563024309673,
        latitudeDelta: 0.0043,
        longitudeDelta: 0.0034
    });
    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={mapRegion}>
                <Marker coordinate={mapRegion} title='Marker' />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});