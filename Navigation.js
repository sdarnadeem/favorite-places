import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "./components/ui/IconButton";
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
          options={({ navigation }) => ({
            title: "Your Favorite Places",
            headerRight: ({ tintColor }) => {
              return (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              );
            },
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{ title: "Add a New Place" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
