import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from "src/screens/Home";
import React from 'react'
import Counter from "src/screens/Counter";
import Calculator from "src/screens/Calculator";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Домашняя'}}/>
    <Stack.Screen name="Counter" component={Counter} options={{title: 'Counter'}} />
    <Stack.Screen name="Calculator" component={Calculator} options={{title: 'Калькулятор'}} />
  </Stack.Navigator>
  </NavigationContainer>
}

export default AppNavigation