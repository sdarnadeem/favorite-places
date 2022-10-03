import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceForm from "../components/places/PlaceForm";

const AddPlace = ({ navigation }) => {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm />;
};

export default AddPlace;

const styles = StyleSheet.create({});
