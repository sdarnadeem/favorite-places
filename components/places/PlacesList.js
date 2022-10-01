import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const PlacesList = ({ places }) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={() => {}}
    >
      <Text>PlacesList</Text>
    </FlatList>
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
