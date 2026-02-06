import React from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";


import { cats } from "./breed.js";
import Item from "./item.js";

export default function App() {
  return (
    <FlatList
    data={cats}
    renderItem={({ item, index }) => {
      return <Item title={`${index} ${item.breed}`} />;
    }}
    keyExtractor={(item) => item.breed}
  />

    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingVertical: 10 },
});
