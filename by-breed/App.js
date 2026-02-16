import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";


import { cats } from "./breed.js";
import Item from "./item.js";

export default function App() {
  return (
          <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Breeds</Text>
        </View>
        {cats.map((animal) => (
          <Item key={animal.breed} animal={animal} />
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 10,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
