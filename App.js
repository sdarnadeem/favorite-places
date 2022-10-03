import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Colors from "./constants/colors";
import Navigation from "./Navigation";
import { init } from "./utils/database";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  useEffect(() => {
    async function db() {
      try {
        await init();
        setDbInitialized(true);
      } catch (e) {}
    }
    db();
  }, []);

  if (!dbInitialized) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{ fontWeight: "bold", fontSize: 20, color: Colors.accent500 }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
