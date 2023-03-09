import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Info from "./assets/Info";
import Home from "./assets/Home";
import RandomInfo from "./assets/RandomInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Info} />
        <Stack.Screen name="RandomInfo" component={RandomInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
