import React from "react";
import { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { TrashIcon as TrashIconOutline } from "react-native-heroicons/outline";
// @ts-ignore
import styled from "styled-components/native";
import { Task } from "./types";
import TodoStore from "../../store/TodoStore";
import { observer } from "mobx-react-lite";

interface Props {
  task: Task
}

const TodoItem: FC<Props> = observer(({task}) => {

  return <TodoView style={{borderColor:  task.isDone ? '#de0b6e' : 'rgba(30,30,30,.4)'}} onPress={() => TodoStore.completeTask(task.id)}>
    <Text style={{fontSize: 16, color: task.isDone ? '#de0b6e' : 'rgba(30,30,30,.4)' }}>{task.text}</Text>
    <Pressable style={{flexShrink: 0}} onPress={() => TodoStore.removeTask(task.id)}>
      <TrashIconOutline size={24} color={'rgba(30,30,30,.4)'} />
    </Pressable>
  </TodoView>
})

const TodoView = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  display: flex;
  padding: 16px 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  background: white;
  margin: 10px 0px;
`

export default TodoItem