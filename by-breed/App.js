import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { cats } from "./breed.js";
import Item from "./item.js";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
      >
        {cats.map((animal) => (
          <Item key={animal.breed} animal={animal} />
        ))}
      </ScrollView>






    </View>



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
  },
  scroll: {
    flex: 1,
    width: "100%",
    minHeight: 0, // lets ScrollView constrain height and scroll
  },
  scrollContent: {
    paddingVertical: 10,
  },
});
