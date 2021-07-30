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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#444",
          headerStyle: {
            backgroundColor: "#eee",
            height: 60,
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "GameZone",
            // headerStyle: { backgroundColor: "red" },
          }}
        />
        <Stack.Screen
          name="review"
          component={ReviewDetails}
          options={{
            title: "Reviews",
            // headerStyle: { backgroundColor: "#eee" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ReactNavigation:
// 1 - npm install @react-navigation/native
// 2 - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// => to install dependencies into expo project
// 3 - npm install @react-navigation/stack
