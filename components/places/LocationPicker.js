import { Alert, Image, StyleSheet, View } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import OutlinedButton from "../ui/OutlinedButton";
import Colors from "../../constants/colors";
import { useEffect, useState } from "react";
import getMapPreview from "../../utils/getMapPreview";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import Button from "../ui/Button";

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant location permission to use this app."
      );
      return false;
    }
    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = route.params && {
        lat: route.params.selectedLocation.lat,
        lng: route.params.selectedLocation.lng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  return (
    <View>
      <View style={styles.mapPreview}>
        {pickedLocation && (
          <Image
            style={styles.image}
            source={{
              uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
          />
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 4,
  },
});
