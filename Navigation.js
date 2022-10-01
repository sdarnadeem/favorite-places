import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={{
            headerRight: ({ tintColor }) => {},
          }}
        />
        <Stack.Screen name="AddPlace" component={AddPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
