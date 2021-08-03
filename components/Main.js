import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { gStyle } from "../styles/style";

export default function Main({ navigation }) {
  // const loadScene = () => {
  //   navigation.navigate("FullInfo");
  // };

  const [news, setNews] = useState([
    {
      name: "Google?",
      anons: "Gooogle!!!!",
      full: "Google is cool",
      key: "1",
      img: "https://clck.ru/WbtX2",
    },
    {
      name: "Apple",
      anons: "Apple!!!!",
      full: "Apple is very-very cool",
      key: "2",
      img: "https://clck.ru/WbtX2",
    },
    {
      name: "Microsoft",
      anons: "Microsoft!!!!",
      full: "Microsoft is not cool",
      key: "3",
      img: "https://clck.ru/WbtX2",
    },
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.sTitle}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FullInfo", item);
            }}
          >
            <Text style={gStyle.title}>{item.name}</Text>
            <Image
              source={{
                width: "100%",
                height: 200,
                uri: item.img,
              }}
            />
            <Text style={gStyle.text}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
