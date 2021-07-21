import React from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "главная" }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{ title: "статья" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
