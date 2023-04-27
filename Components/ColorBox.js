import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ColorBox = ({ colorName, colorH }) => {
  const colorStyle = {
    backgroundColor: colorH,
  };
  return (
    <View>
      <Text style={[styles.textDexoration, colorStyle]}>
        {colorName}: {colorH}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textDexoration: {
    textAlign: "center",
    paddingVertical: 10,
    marginVertical: 5,
    fontWeight: "bold",
    color: "white",
  },
});

export default ColorBox;
