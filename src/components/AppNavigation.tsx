import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from "src/screens/Home";
import React from 'react'
import Counter from "src/screens/Counter";
import Calculator from "src/screens/Calculator";
import Articles from "src/screens/flexLayouts/Articles";
import Components from "src/screens/week5/Components";
import ButtonComponent from "src/screens/week5/ButtonComponent";
import TextInput from "src/screens/week5/TextInput";
import TextInputForm from "src/screens/week5/TextInputForm";
import BoxForm from "src/screens/week5/BoxForm";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Домашняя'}}/>
    <Stack.Screen name="Counter" component={Counter} options={{title: 'Counter'}} />
    <Stack.Screen name="Calculator" component={Calculator} options={{title: 'Калькулятор'}} />
    <Stack.Group>
        <Stack.Screen name="Articles" component={Articles} />
    </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Components" component={Components} />
        <Stack.Screen name="ButtonComponent" component={ButtonComponent} />
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="TextInputForm" component={TextInputForm} />
        <Stack.Screen name="BoxForm" component={BoxForm} />
      </Stack.Group>
  </Stack.Navigator>
  </NavigationContainer>
}

export default AppNavigation