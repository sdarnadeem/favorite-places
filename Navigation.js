import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigatior } from "@react-navigation/native-stack";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";

const Stack = createNativeStackNavigatior();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllPlaces" component={AllPlaces} />
        <Stack.Screen name="AddPlace" component={AddPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
