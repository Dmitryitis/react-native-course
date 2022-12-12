import React, { FC, useState } from "react";
import uuid from "react-native-uuid";
import { Button, FlatList, ScrollView, TextInput, View } from "react-native";
import { observer } from "mobx-react-lite";
import TodoStore from "../../store/TodoStore";
import TodoItem from "../../components/week9b/TodoItem";
import { Task } from "../../components/week9b/types";

const TodoMobxScreen: FC = observer(() => {
  const [text, setText] = useState<string>('')

  const handleAdd = () => {
    TodoStore.addTask({id: `${uuid.v4()}`, text: text, isDone: false})
  }

  return <View style={{flex: 1, backgroundColor: '#fff'}}>
    <ScrollView style={{flex: 2/3, paddingRight: 10, paddingLeft: 10}}>
      {TodoStore.todos.map((item: Task) => <TodoItem task={item} key={item.id} />)}
    </ScrollView>
    <View style={{flex: 1/3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <TextInput style={{ width: 260,
        padding: 8,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,}} placeholder="Create todo" onChangeText={value => setText(value)} defaultValue={text} />
      <Button title="Add Todo" onPress={handleAdd} />
    </View>
  </View>
})

export default TodoMobxScreen