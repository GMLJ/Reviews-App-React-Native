import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of the Wild",
      rating: 5,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam consectetur neque explicabo dolore dolorum, ad harum sint quis quae esse! Aliquam doloremque saepe, quia quis assumenda facere rerum qui maxime at minus suscipit illo, quasi dignissimos autem maiores corrupti expedita eius cum. Officia non voluptatum ex obcaecati.",
      key: "1",
    },
    {
      title: "Metal Gear Solid",
      rating: 4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam consectetur neque explicabo dolore dolorum, ad harum sint quis quae esse! Aliquam doloremque saepe, quia quis assumenda facere rerum qui maxime at minus suscipit illo, quasi dignissimos autem maiores corrupti expedita eius cum. Officia non voluptatum ex obcaecati.",
      key: "2",
    },
    {
      title: "Final Fantasy",
      rating: 3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam consectetur neque explicabo dolore dolorum, ad harum sint quis quae esse! Aliquam doloremque saepe, quia quis assumenda facere rerum qui maxime at minus suscipit illo, quasi dignissimos autem maiores corrupti expedita eius cum. Officia non voluptatum ex obcaecati.",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("review", { item: item })}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
