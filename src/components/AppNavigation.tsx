import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "src/screens/Home";
import React from "react";
import Counter from "src/screens/Counter";
import Calculator from "src/screens/Calculator";
import Articles from "src/screens/flexLayouts/Articles";
import HomeLayout from "../screens/flexLayouts/HomeLayout";
import Users from "../screens/flexLayouts/Users";
import User from "../screens/flexLayouts/User";
import UsersAvatar from "../screens/flexLayouts/UsersAvatar";
import UserCall from "../screens/flexLayouts/UserCall";
import Success from "../screens/flexLayouts/Success";
import ArticleItem from "../screens/flexLayouts/ArticleItem";
import HomeScreen from "../screens/week6/HomeScreen";
import UserListScreen from "../screens/week6/UserListScreen";
import UserProfileScreen from "../screens/week6/userProfileScreen";
import AboutScreen from "../screens/week6/AboutScreen";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{title: 'Домашняя'}}/>
    <Stack.Screen name="Counter" component={Counter} options={{title: 'Counter'}} />
    <Stack.Screen name="Calculator" component={Calculator} options={{title: 'Калькулятор'}} />
      <Stack.Group>
        <Stack.Screen name="HomeLayout" component={HomeLayout} />
        <Stack.Screen name="Articles" component={Articles} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="UsersAvatar" component={UsersAvatar} />
        <Stack.Screen name="UserCall" component={UserCall} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="ArticleItem" component={ArticleItem} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="HomeNavigation" component={HomeScreen} />
        <Stack.Screen name="UserListNavigation" component={UserListScreen} />
        <Stack.Screen name="UserProfileNavigation" component={UserProfileScreen} />
        <Stack.Screen name="AboutNavigation" component={AboutScreen} />
      </Stack.Group>
  </Stack.Navigator>
  </NavigationContainer>
}

export default AppNavigation