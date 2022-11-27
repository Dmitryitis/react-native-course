import React, { useState } from "react";
import { FC } from "react";
import { Alert, View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { User } from "../../components/flexLayouts/types";
import { AxiosResponse } from "axios";
import Api from "../../api";
import Loading from "../../components/flexLayouts/Loading";


const UsersAvatar: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [items, setItems] = React.useState<User[] | []>([]);

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      const {data}: AxiosResponse<User[]>  = await Api.getAllUsers()
      setItems(data)
    } catch (e) {
      Alert.alert('Ошибка', 'Не удалось получить пользователей')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) return <Loading />

  return <View style={{flex: 1, flexDirection:'row', flexWrap: 'wrap', backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
    {items.map((item) =>  <ArticlesItemImage key={item.id} source={{uri: item.avatar}}/>)}
  </View>
}
const ArticlesItemImage = styled.Image`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 4px;
  margin-bottom: 4px;
  
`

export default UsersAvatar