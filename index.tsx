import {Platform, UIManager} from 'react-native';
import React from 'react'
import App from 'src/components/App';

import registerRootComponent from 'expo/build/launch/registerRootComponent';
registerRootComponent(App);

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}