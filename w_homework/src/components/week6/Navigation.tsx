import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/week6/HomeScreen";
import UserListScreen from "../../screens/week6/UserListScreen";
import UserProfileScreen from "../../screens/week6/userProfileScreen";
import AboutScreen from "../../screens/week6/AboutScreen";
import React from "react";

const Navigation: FC = () => {
  const Stack = createNativeStackNavigator();

  return <Stack.Group>
    <Stack.Screen name="HomeNavigation" component={HomeScreen} />
    <Stack.Screen name="UserListNavigation" component={UserListScreen} />
    <Stack.Screen name="UserProfileNavigation" component={UserProfileScreen} />
    <Stack.Screen name="AboutNavigation" component={AboutScreen} />
  </Stack.Group>
}

export default Navigation