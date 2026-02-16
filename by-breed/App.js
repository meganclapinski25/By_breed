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
});
