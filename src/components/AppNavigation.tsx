import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "src/pages/Home";
import Post from "src/pages/Post";
import React from 'react'

export type RootStackParamList = {
  Home: undefined;
  Post: {postId: number};
};

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator<RootStackParamList>();

  return  <AppStack.Navigator>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Post" component={Post} />
  </AppStack.Navigator>
}

export default AppNavigation