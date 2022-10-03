import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import PlacesList from "../components/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
    }
  }, [isFocused, route]);

  return <PlacesList />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
