import React from "react";
import { ScrollView, StyleSheet, FlatList, } from "react-native";


import { cats } from "./breed.js";
import Item from "./item.js";

export default function App() {
  return (

    <View style = {styles.container}>
      <FlatList 
        style = {styles.list}
        contentContainerStyle = {styles.listContent}
        data = {cats}
        renderItem= {({item, index}) => {
          return <Item title = {`${index} ${item.breed}`} />;
        }}
        keyExtractor={(item) => item.breed}

        />






    </View>



    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  list: { flex: 1, width: "100%" },
  listContent: { paddingVertical: 10 },
});
