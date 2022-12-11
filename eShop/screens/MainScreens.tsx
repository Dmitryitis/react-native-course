import React, { FC } from "react";
import { View } from "react-native";
import ProductList from "../components/ProductList";

const MainScreens: FC = () => {
  return <View style={{backgroundColor: '#ffffff', flex: 1}}>
    <ProductList />
  </View>
}

export default MainScreens