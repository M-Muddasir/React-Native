import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ColorBox = ({ colorName, hexCode }) => {
  const colorStyle = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <SafeAreaView style={{marginVertical:-13}}>
      <View style={colorStyle}>
        <Text style={[styles.textDexoration, textColor]}>
          {colorName}: {hexCode}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textDexoration: {
    textAlign: "center",
    paddingVertical: 5,
    marginVertical: 5,
    fontWeight: "bold",
    color: "white",
  },
});

export default ColorBox;
