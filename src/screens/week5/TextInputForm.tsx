import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


const TextInputForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(false)
  const [error, setError] = useState(false)

  const successData = {
    username: 'admin',
    password: 'admin'
  }

  const onSubmit = () => {
    if (password === successData.password && username === successData.username) {
      setValid(true)
    } else {
      setError(true)
    }
  }

  if(valid) return <View style={{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  }}>
    <Text style={{textAlign: 'center', fontSize: 20}}>Welcome!</Text>
  </View>

  return (
    <View style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      padding: 16,
    }}>
      <TextInput placeholder="Логин" style={{ padding: 8, backgroundColor: '#f5f5f5', borderColor: "#000", borderWidth: 1, borderRadius: 10 }} onChangeText={text => setUsername(text)} />
      <View style={{ margin: 10 }} />
      <TextInput placeholder='Пароль' secureTextEntry={true} style={{ padding: 8, backgroundColor: '#f5f5f5', borderColor: "#000", borderWidth: 1,  borderRadius: 10 }} onChangeText={text => setPassword(text)} />
      {
        error ?  <View  style={{padding: 10,marginTop: 10, backgroundColor: '#f64a4a'}}>
          <Text style={{color: '#fff'}}>Ошибка! Неверно введены данные.</Text>
        </View> : null
      }
      <View style={{ marginBottom: 10 }} />
      <Button
        title='Войти'
        onPress={onSubmit}
      />
    </View>
  );
}

export default TextInputForm