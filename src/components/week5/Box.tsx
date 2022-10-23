import React, { FC } from "react";
import { View } from "react-native";

interface Box {
  width: number,
  height: number,
  color: string
}

interface Props {
  box: Box
}

const Box:FC<Props> = ({box}) => {
  return <View style={{ width:box.width, height: box.height, backgroundColor: box.color, marginBottom: 10}} />
}

export default Box