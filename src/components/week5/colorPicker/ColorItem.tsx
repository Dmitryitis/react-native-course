import { TouchableOpacity, View } from "react-native";
import { FC } from "react";
import React from "react";

interface Props {
  color: string,
  check: boolean,
  onClick: (value: string) => void
}

const ColorItem:FC<Props> = ({color,check,onClick}) => {
  return <TouchableOpacity style={{marginRight: 6}} onPress={() => onClick(color)}>
    <View style={{width: 60, height: 40,borderRadius: 10,backgroundColor: color, borderColor: check ? '#000' : '#fff', borderWidth: 1}} />
    </TouchableOpacity>
}

export default ColorItem