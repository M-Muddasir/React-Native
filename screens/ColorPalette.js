import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import ColorBox from "../Components/ColorBox";

const ColorPalette = ({ route, navigation }) => {
  
  const { paletteName, colors } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: paletteName });
  }, [paletteName, navigation]);


  return (
    <FlatList
      style={{ paddingHorizontal:10,  backgroundColor: "white" }}
      data={colors}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 19,
  },
});
export default ColorPalette;
