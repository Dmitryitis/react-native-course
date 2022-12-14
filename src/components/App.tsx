import AppNavigation from "src/components/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-view";
import React from 'react'

function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <AppNavigation />
      <StatusBar animated={true} />
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;