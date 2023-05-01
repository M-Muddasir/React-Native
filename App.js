import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ColorPalette from "./screens/ColorPalette";
import { createStackNavigator } from "@react-navigation/stack";
import AddNewColorPalette from './screens/AddNewColorPalette';

const MainStack = createStackNavigator();

const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
         name='AddNewColorPalette'
          component={AddNewColorPalette}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};