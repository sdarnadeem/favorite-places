import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import Navigation from "./Navigation";
import { init } from "./utils/database";

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);
  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch();
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
