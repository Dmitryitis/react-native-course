import React, { FC, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ColorItem from "./colorPicker/ColorItem";

interface Color {
  value: string,
  check: boolean,
}

interface FormData {
  size: number,
  color: string
}

interface Props {
  handleAdd: (formData:FormData) => void,
  handleClear: () => void,
}

const FormBox: FC<Props> = ({handleAdd,handleClear}) => {
  const allColors: Color[] = [
    {
      value: '#f39957',
      check: true
    },
    {
      value: '#75ddf5',
      check: false
    },
    {
      value: '#8aef74',
      check: false
    }
  ]

  const [size, setSize] = useState('10')
  const [color, setColor] = useState<string>(allColors[0].value)
  const [colors, setColors] = useState<Color[]>(allColors)

  const handleColor = (value: string) => {
    setColor(value)
    const newColors = colors.map(item => {
      if (item.value === value) return {...item, check: true}

      return {...item, check: false}
    })

    setColors(newColors)
  }

  return <View style={{padding: 10, flex: 1, justifyContent: 'flex-end', position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: '#fff', height: 170}}>
    <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
      <Text style={{marginRight: 15, color: '#000', fontSize: 20}}>Размер</Text>
      <TextInput maxLength={3} style={{width: 40, height: 40, fontSize: 18,textAlign: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#000'}} keyboardType="numeric" onChangeText={setSize} value={size} />
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{marginRight: 5, color: '#000', fontSize: 18}}>Цвет</Text>
      <View style={{flexDirection: 'row',flex: 1}}>
        {colors && colors.map((item,index) => <ColorItem color={item.value} check={item.check} key={index} onClick={handleColor} /> )}
      </View>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
      <Button title={'Добавить'} onPress={() => handleAdd({size: parseInt(size,10),color})} />
      <View style={{margin: 6}} />
      <Button title={'Очистить'} onPress={handleClear} />
    </View>
  </View>
}

export default FormBox