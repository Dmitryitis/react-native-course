import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import CounterMobxScreen from "../screens/week9c/CounterMobxScreen";
import React from "react";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Домашняя'}}/>

      <Stack.Screen name="CounterMobxScreen" component={CounterMobxScreen} />
  </Stack.Navigator>
  </NavigationContainer>
}

export default AppNavigation