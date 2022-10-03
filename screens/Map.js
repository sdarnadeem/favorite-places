import { Alert, StyleSheet } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";

const Map = ({ navigation, route }) => {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.lat : 34.4018279,
    longitude: initialLocation ? initialLocation.lng : 74.3589306,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      );
      return;
    }

    navigation.navigate("AddPlace", {
      selectedLocation: selectedLocation,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) return;
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <IconButton
            icon="save"
            color={tintColor}
            size={24}
            onPress={savePickedLocationHandler}
          />
        );
      },
    });
  }, [navigation, savePickedLocationHandler, initialLocation]);

  function selectLocationHandler(event) {
    if (initialLocation) return;
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  return (
    <MapView
      onPress={selectLocationHandler}
      style={styles.map}
      initialRegion={region}
    >
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
