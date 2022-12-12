import {Platform, UIManager} from 'react-native';
import React from 'react'


import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from "./components/App";
registerRootComponent(App);

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}