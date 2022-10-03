import { StyleSheet } from "react-native";
import React from "react";
import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../utils/database";

const AddPlace = ({ navigation }) => {
  async function createPlaceHandler(place) {
    insertPlace(place);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
