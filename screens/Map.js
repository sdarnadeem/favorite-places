import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const region = {
    latitude: 34.4018279,
    longitude: 74.3589306,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
