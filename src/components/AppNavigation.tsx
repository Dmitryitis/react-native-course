import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "src/pages/Home";
import Post from "src/pages/Post";
import SafeAreaView from "react-native-safe-area-view";
import React from 'react'

export type RootStackParamList = {
  home: undefined;
  post: {postId: number};
};

const AppNavigation = () => {
  const AppStack = createNativeStackNavigator<RootStackParamList>();

  return <SafeAreaView>
    <AppStack.Navigator initialRouteName="home" screenOptions={() => ({
      headerShown: false,
    })}>
      <AppStack.Screen name="home" component={Home} />
      <AppStack.Screen name="post" component={Post} />
    </AppStack.Navigator>
  </SafeAreaView>
}

export default AppNavigation