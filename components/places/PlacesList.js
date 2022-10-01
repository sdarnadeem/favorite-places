import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  if (!places || !places.length === 0) {
    return (
      <View styles={styles.fallbackContainer}>
        <Text styles={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => {
        <PlaceItem place={item} onSelect={() => {}} />;
      }}
    ></FlatList>
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
