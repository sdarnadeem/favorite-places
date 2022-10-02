import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const region = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({});
