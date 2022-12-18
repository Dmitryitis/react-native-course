import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import CounterMobxScreen from "../screens/week9c/CounterMobxScreen";
import React from "react";
import TodoMobxScreen from "../screens/week9b/TodoMobxScreen";
import CitiesScreen from "../screens/weather/CitiesScreen";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Домашняя'}}/>

      <Stack.Screen name="CounterMobxScreen" component={CounterMobxScreen} />
      <Stack.Screen name="TodoMobxScreen" component={TodoMobxScreen} />
      <Stack.Screen name="CitiesScreen" options={{title: 'Weather'}} component={CitiesScreen} />
  </Stack.Navigator>
  </NavigationContainer>
}

export default AppNavigation