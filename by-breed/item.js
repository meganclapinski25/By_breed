import React from 'react'
import { View, Text,  StyleSheet } from 'react-native'

function Item({ title }) {
  return (
    <View style = {styles.row}>
      <Text style = {styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18, // large enough to read
    color: "#111",
  },
});
export default Item