import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const COLORS = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const RAINBOW = [
  { colorName: "Red", hexCode: "#FF0000" },
  { colorName: "Orange", hexCode: "#FF7F00" },
  { colorName: "Yellow", hexCode: "#FFFF00" },
  { colorName: "Green", hexCode: "#00FF00" },
  { colorName: "Violet", hexCode: "#8B00FF" },
];

const FRONTEND_MASTERS = [
  { colorName: "Red", hexCode: "#c02d28" },
  { colorName: "Black", hexCode: "#3e3e3e" },
  { colorName: "Grey", hexCode: "#8a8a8a" },
  { colorName: "White", hexCode: "#ffffff" },
  { colorName: "Orange", hexCode: "#e66225" },
];


const Home = ({ navigation }) => {
  const firstFiveColors = COLORS.slice(0, 5);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Solarized</Text>
      <ScrollView horizontal>
        {firstFiveColors.map((item) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColorPalette", {
                paletteName: "Solarized",
                colors: COLORS,
              });
            }}
          >
            <View
              key={item.hexCode}
              style={[styles.square, { backgroundColor: item.hexCode }]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={[styles.title, { marginTop: -400 }]}>Frontend Masters</Text>
      <ScrollView horizontal>
        {FRONTEND_MASTERS.map((item) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColorPalette", {
                paletteName: "Frontend Master",
                colors: FRONTEND_MASTERS,
              });
            }}
          >
            <View
              key={item.hexCode}
              style={[styles.square, { backgroundColor: item.hexCode }]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={[styles.title, { marginTop: -400 }]}>Rainbow</Text>
      <ScrollView horizontal>
        {RAINBOW.map((item) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColorPalette", {
                paletteName: "Rainbow",
                colors: RAINBOW,
              });
            }}
          >
            <View
              key={item.hexCode}
              style={[styles.square, { backgroundColor: item.hexCode }]}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    margin: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default Home;
