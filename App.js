import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

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



const Colors = ({ colorName, hexCode }) => {
  const color = StyleSheet.create({
    backgroundColor: hexCode,
  });
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.food, color]}>
      <Text style={[styles.text, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ padding: 20 }}
        data={COLORS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Colors colorName={item.colorName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
      />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  food: {
    padding: 10,
    marginBottom: 10,
  },
  text: {
    textAlign:'center',
    fontWeight: "bold",
  },
  container: {
    paddingVertical: 50,
  },
  heading:{
    fontWeight: "bold",
    fontSize:19
  }
});

// export default function App() {
//   return (

//     <SafeAreaView>
//       <View style={styles.container}>
//         <Text style={styles.heading}>
//           Here are some boxes of different colors
//         </Text>
//         <ColorBox colorName={"Cyan"} colorH={"#2aa198"} />
//         <ColorBox colorName={"Blue"} colorH={"#268bd2"} />
//         <ColorBox colorName={"Magenta"} colorH={"#d33682"} />
//         <ColorBox colorName={"Orange"} colorH={"#cb4b16"} />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 10,
//     marginVertical: 50,
//   },
//   heading: {
//     fontWeight: "bold",
//     fontSize: 19,
//   }
// });
