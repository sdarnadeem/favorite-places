import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => {
        <PlaceItem place={item} />;
      }}
    >
      <Text>PlacesList</Text>
    </FlatList>
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
