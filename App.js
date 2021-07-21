import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import MainStack from "./Navigation";

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("/Users/vit/Documents/RN laearn/SecondTest/NewsProject/fonts/Montserrat-Bold.ttf"),
    "mt-light": require("/Users/vit/Documents/RN laearn/SecondTest/NewsProject/fonts/Montserrat-Bold.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return <MainStack />;
  }
  return (
    <AppLoading
      startAsync={fonts}
      onFinish={() => setFont(true)}
      onError={console.warn}
    />
  );
}
const styles = StyleSheet.create({});
