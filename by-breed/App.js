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
        keyExtractor={}






    </View>



    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { paddingVertical: 10 },
});
