import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  // const loadScene = () => {
  //   navigation.navigate("FullInfo");
  // };

  const [news, setNews] = useState([
    { name: "Google", anons: "Gooogle!!!!", full: "Google is cool" },
    { name: "Apple", anons: "Apple!!!!", full: "Apple is very-very cool" },
    {
      name: "Microsoft",
      anons: "Microsoft!!!!",
      full: "Microsoft is not cool",
    },
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FullInfo", item);
            }}
          >
            <Text>{item.name}</Text>
            <Text>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
