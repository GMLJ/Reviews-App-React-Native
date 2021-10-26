import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>
        {JSON.stringify(item.title)}
        {`
      `}
      </Text>

      <Text>
        {JSON.stringify(item.body)}{" "}
        {`
      `}
      </Text>

      <Text>{JSON.stringify(item.rating)}</Text>
    </View>
  );
}
