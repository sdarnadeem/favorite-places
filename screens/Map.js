import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/ui/IconButton";

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  useLayoutEffect(() => {
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
  }, [navigation]);
  const region = {
    latitude: 34.4018279,
    longitude: 74.3589306,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  }

  function savePickedLocationHandler() {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location by tapping on the map first"
      );
      return;
    }
    navigation.navigate("AddPlace", { selectedLocation: selectedLocation });
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
