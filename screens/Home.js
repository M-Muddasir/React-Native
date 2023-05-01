import React,{useState, useEffect,useCallback} from 'react';
import { FlatList, StyleSheet, TouchableOpacity,Text } from 'react-native';
import PalettePreview from '../Components/PalettePreview';

const Home = ({ navigation,route }) => {
  const newColorPalette=route.params?.newColorPalette;
  const [colorPalettes,setColorPalettes]=useState([]);
  const [isRefreshing,setIsRefreshing]=useState(false);


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

  useEffect(()=>{
    if(newColorPalette){
      setColorPalettes(palettes =>[newColorPalette,...palettes]);
    }
  },[newColorPalette])
  const handleRefresh = useCallback (()=>{
    setIsRefreshing(true);
    fetchColorsPalettes();
    setIsRefreshing(false);
  })

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
          refreshing = {isRefreshing}
          onRefresh={handleRefresh}
          ListHeaderComponent={
            <TouchableOpacity onPress = {()=>{
              navigation.navigate('AddNewColorPalette');
            }}>
              <Text style={styles.buttonTxt}>Add a color scheme</Text>
            </TouchableOpacity>
          }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonTxt:{
    fontSize:18,
    fontWeight:'bold',
    color:'teal',
    marginBottom:10
  }
});

export default Home;