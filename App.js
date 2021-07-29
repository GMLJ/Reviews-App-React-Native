import "react-native-gesture-handler";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="review details" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ReactNavigation:
// 1 - npm install @react-navigation/native
// 2 - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// => to install dependencies into expo project
// 3 - npm install @react-navigation/stack
