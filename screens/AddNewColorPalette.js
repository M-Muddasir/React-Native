import React, { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, TextInput, StyleSheet, Alert, Switch } from "react-native";
import { COLORS   } from "../constants";
const AddNewColorPalette = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const handleUpdate = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setSelectedColors((current) => [...current, color]);
      } else {
        setSelectedColors((current) =>
          current.filter((c) => c.colorName !== color.colorName)
        );
      }
    },
    [selectedColors, setSelectedColors]
  );
  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert("Please enter a palette name");
    } else if (selectedColors.length < 3) {
      Alert.alert("Please add atleast 3 colors");
    } else {
      const newColorPalette = { paletteName: name, colors: selectedColors };
      navigation.navigate("Home", { newColorPalette });
    }
  }, [name, selectedColors]);

  return (
    <View style={styles.container}>
      <Text style={styles.labelButton}>Name of the Palette</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="palatte name "
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View>
            <View style={styles.colorRow}>
              <Text>{item.colorName}</Text>
              <Switch
                value={
                  !!selectedColors.find(
                    (color) => color.colorName === item.colorName
                  )
                }
                onValueChange={(selected) => handleUpdate(item, selected)}
              />
            </View>
          </View>
        )}
      ></FlatList>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    marginTop: 50,
  },
  button: {
    height: 40,
    backgroundColor: "teal",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  labelButton: {
    marginBottom: 10,
  },
  colorRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default AddNewColorPalette;
