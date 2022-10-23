import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const TextInputComponent = () => {
  const [name, setName] = useState('');

  const [text, setText] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <View style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 16,
    }}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <TextInput style={{ padding: 8, backgroundColor: '#f5f5f5', borderColor: "#000", borderWidth: 1 }} onChangeText={text => setName(text)} />
      <View style={{ margin: 10 }} />
      <View style={{ alignContent: 'center', justifyContent: 'center'}}>
        <TextInput secureTextEntry={secureTextEntry} style={{ padding: 8, backgroundColor: '#f5f5f5', borderColor: "#000", borderWidth: 1 }} onChangeText={text => setText(text)} />
        <Button
          title={secureTextEntry ? 'Показать' : 'Скрыть'}
          onPress={()=>setSecureTextEntry(!secureTextEntry)}
        />
      </View>
    </View>
  );
}

export default TextInputComponent