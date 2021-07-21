import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { gStyle } from "../styles/style";

export default function FullInfo({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.main}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
