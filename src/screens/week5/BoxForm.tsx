import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import Box from "src/components/week5/Box";
import FormBox from "src/components/week5/FormBox";

interface BoxProps {
  width: number,
  height: number,
  color: string
}

interface FormData {
  size: number,
  color: string
}

const BoxForm = () => {
  const [boxes, setBoxes] = useState<BoxProps[]>([])

  const handleAdd = (data: FormData) => {
    const newItem:BoxProps = {
      width: data.size,
      height: data.size,
      color:data.color
    }

    setBoxes([...boxes,newItem])
  }

  const handleClear = () => {
    setBoxes([])
  }

  return <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 0.7}}>
      <FlatList data={boxes} renderItem={({item}) => <Box box={item} />} />
    </View>
    <FormBox handleAdd={handleAdd} handleClear={handleClear} />
  </SafeAreaView>
}

export default BoxForm