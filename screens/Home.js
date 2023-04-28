import React,{useState, useEffect,useCallback} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../Components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes,setColorPalettes]=useState([]);


  const fetchColorsPalettes = useCallback(async()=>{
    const result= await fetch(`https://color-palette-api.kadikraman.vercel.app/palettes`);
    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  },[]);

  useEffect(()=>{
    fetchColorsPalettes();
  },[])
  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;